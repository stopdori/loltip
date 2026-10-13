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
// 챔피언 id 비교는 소문자 기준. 조건에 맞지 않으면 리다이렉트하지 않는다:
// 로케일 없는 /champ/*, /matchup/*는 아래 GONE_PATTERNS로 410, 로케일 있는 주소는 라우트/페이지가 404.
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

  if (!pathname.startsWith("/ko") && !pathname.startsWith("/en")) {
    const url = request.nextUrl.clone();
    url.pathname = "/ko" + pathname;
    return NextResponse.redirect(url, 308);
  }

  const response = intlMiddleware(request) ?? NextResponse.next();
  response.headers.set("x-pathname", pathname);
  return response;
}

export const config = {
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
