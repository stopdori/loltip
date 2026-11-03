import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";
import { type NextRequest, NextResponse } from "next/server";
import { CHAMPIONS } from "./app/data/champions";

const intlMiddleware = createMiddleware(routing);

const CHAMP_IDS = new Set(CHAMPIONS.map((c) => c.id));

// 상호작용 페이지 정식 주소: /{locale}/interactions/{a}-{b} (소문자 챔피언 id, 알파벳순).
// 챔피언 id는 전부 [a-z0-9]+라 하이픈 하나로 두 id를 나눈다.
// 옛 주소·비정규 주소는 모두 308로 최종 주소에 1홉으로 보낸다. 쿼리는 버리되 ?highlight=만 살린다
// (판정 문장 강조용 — #highlight= 해시는 브라우저가 리다이렉트 후에도 유지).
//  - /matchup/{a}-vs-{b} (로케일 없음)        → /ko/interactions/{정렬}
//  - /champ?me=X&enemy=Y (유효, 서로 다름)     → /ko/interactions/{정렬}, 그 외 /champ는 /ko/champ
//  - /champ/{id} (로케일 없음, 유효)           → /ko/champ/{id}
//  - /{locale}/matchup/{a}-vs-{b}             → /{locale}/interactions/{정렬}
//  - /{locale}/interactions/{b}-{a}, 대문자     → /{locale}/interactions/{정렬}
//  - /{locale}/champ/{대문자 포함 id}            → /{locale}/champ/{소문자 id}
// 챔피언 id 비교는 소문자 기준. 조건에 맞지 않으면 리다이렉트하지 않는다:
// 로케일 없는 /champ/*, /matchup/*는 아래 GONE_PATTERNS로 410, 로케일 있는 주소는 라우트 또는 invalidSlugLocale이 404.
type RedirectTarget = { path: string; keepHighlight: boolean };

function redirectTarget(request: NextRequest): RedirectTarget | null {
  const { pathname, searchParams } = request.nextUrl;
  const toId = (v: string | null) => (v ?? "").toLowerCase();
  const interactionsPath = (locale: string, a: string, b: string) =>
    CHAMP_IDS.has(a) && CHAMP_IDS.has(b) && a !== b
      ? `/${locale}/interactions/${[a, b].sort().join("-")}`
      : null;
  const toInteractions = (path: string | null): RedirectTarget | null =>
    path ? { path, keepHighlight: true } : null;

  if (pathname === "/champ") {
    return (
      toInteractions(interactionsPath("ko", toId(searchParams.get("me")), toId(searchParams.get("enemy")))) ?? {
        path: "/ko/champ",
        keepHighlight: false,
      }
    );
  }

  const champMatch = pathname.match(/^\/champ\/([^/]+)$/);
  if (champMatch) {
    const id = toId(champMatch[1]);
    return CHAMP_IDS.has(id) ? { path: `/ko/champ/${id}`, keepHighlight: false } : null;
  }

  const legacyMatchup = pathname.match(/^\/matchup\/([^/]+)-vs-([^/]+)$/);
  if (legacyMatchup) {
    return toInteractions(interactionsPath("ko", toId(legacyMatchup[1]), toId(legacyMatchup[2])));
  }

  const localeMatchup = pathname.match(/^\/(ko|en)\/matchup\/([^/]+)-vs-([^/]+)$/);
  if (localeMatchup) {
    return toInteractions(interactionsPath(localeMatchup[1], toId(localeMatchup[2]), toId(localeMatchup[3])));
  }

  const interactions = pathname.match(/^\/(ko|en)\/interactions\/([^/-]+)-([^/-]+)$/);
  if (interactions) {
    const canonical = interactionsPath(interactions[1], toId(interactions[2]), toId(interactions[3]));
    // 이미 정식 주소면 리다이렉트하지 않는다(쿼리가 붙어 있어도 200 + canonical 태그로 처리)
    return canonical && canonical !== pathname ? { path: canonical, keepHighlight: true } : null;
  }

  const localeChamp = pathname.match(/^\/(ko|en)\/champ\/([^/]+)$/);
  if (localeChamp) {
    const id = toId(localeChamp[2]);
    return CHAMP_IDS.has(id) && id !== localeChamp[2]
      ? { path: `/${localeChamp[1]}/champ/${id}`, keepHighlight: false }
      : null;
  }

  return null;
}

// 챔피언/상호작용 슬러그가 실존 조합이 아니면 그 로케일을 돌려준다. 이 두 라우트는 첫 요청 때 생성·캐시될 수
// 있어서, 잘못된 주소가 페이지까지 가면 404 결과가 캐시에 쌓인다. 정식 주소가 아닌 유효 슬러그는 위에서 이미 리다이렉트된다.
function invalidSlugLocale(pathname: string): string | null {
  const interactions = pathname.match(/^\/(ko|en)\/interactions\/([^/]+)$/);
  if (interactions) {
    const parts = interactions[2].split("-");
    const valid = parts.length === 2 && parts[0] !== parts[1] && parts.every((id) => CHAMP_IDS.has(id));
    return valid ? null : interactions[1];
  }

  const champ = pathname.match(/^\/(ko|en)\/champ\/([^/]+)$/);
  if (champ) return CHAMP_IDS.has(champ[2]) ? null : champ[1];

  return null;
}

// 위 리다이렉트 조건에 맞지 않는 로케일 없는 구주소(챔피언 id 아님, a==b 등) → 410 Gone
const GONE_PATTERNS = [
  /^\/champ\/[^/]+$/,
  /^\/matchup\/[^/]+$/,
];

export default function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname.startsWith("/champ-embed")) {
    return NextResponse.next();
  }

  const target = redirectTarget(request);
  if (target) {
    const url = request.nextUrl.clone();
    const highlight = request.nextUrl.searchParams.get("highlight");
    url.pathname = target.path;
    url.search = "";
    if (target.keepHighlight && highlight) url.searchParams.set("highlight", highlight);
    return NextResponse.redirect(url, 308);
  }

  if (GONE_PATTERNS.some((pattern) => pattern.test(pathname))) {
    return new NextResponse(null, { status: 410 });
  }

  const invalidLocale = invalidSlugLocale(pathname);
  if (invalidLocale) {
    // 존재하지 않는 라우트로 rewrite → global-not-found가 404 렌더링 (주소창 URL은 그대로)
    const url = request.nextUrl.clone();
    url.pathname = `/${invalidLocale}/__not-found`;
    url.search = "";
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set("x-next-intl-locale", invalidLocale);
    return NextResponse.rewrite(url, { status: 404, request: { headers: requestHeaders } });
  }

  if (!pathname.startsWith("/ko") && !pathname.startsWith("/en")) {
    const url = request.nextUrl.clone();
    url.pathname = "/ko" + pathname;
    return NextResponse.redirect(url, 308);
  }

  return intlMiddleware(request);
}

export const config = {
  // 첫 패턴은 점(.)이 든 경로(정적 파일)를 건너뛰므로, 잘못된 슬러그 검사 대상 라우트는 따로 지정한다.
  matcher: ["/((?!_next|api|.*\\..*).*)", "/:locale/(champ|interactions)/:slug"],
};
