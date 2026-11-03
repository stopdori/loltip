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

// 공개 전까지 라이브에는 이 변수를 넣지 않아 /exam 하위 전체가 404 (app/[locale]/exam/layout.tsx와 같은 기준)
const EXAM_ENABLED = process.env.NEXT_PUBLIC_EXAM_ENABLED === "true";
// dev-preview는 프로덕션 빌드에서 404 (app/[locale]/dev-preview/page.tsx와 같은 기준)
const IS_PRODUCTION = process.env.NODE_ENV === "production";

// /{locale} 아래 실제 라우트(app/[locale], app/(embed)/[locale]). 로케일 뒤 경로 기준.
// ⚠️ 로케일 아래 새 페이지를 추가하면 여기에도 넣을 것 — 빠지면 그 주소는 proxy가 바로 404를 돌려준다.
const LOCALE_ROUTES = [
  /^$/,
  /^\/champ$/,
  /^\/champ\/[^/]+$/,
  /^\/interactions\/[^/]+$/,
  /^\/tags$/,
  /^\/about$/,
  /^\/privacy$/,
  /^\/quiz$/,
  /^\/exam(\/(paper|review|result))?$/,
  /^\/dev-preview$/,
  /^\/champ-embed\/[^/]+$/,
];

// 404가 확실한 로케일 주소면 그 로케일을 돌려준다. Next 렌더링까지 가지 않고 proxy가 바로 가벼운 404를 응답해
// CPU를 아낀다(Cloudflare Workers). 챔피언/상호작용은 첫 요청 때 생성되는 라우트라 404 결과가 캐시에 쌓이지 않게 하는 목적도 있다.
// 정식 주소가 아닌 유효 슬러그(대문자, 역순 등)는 위 redirectTarget이 이미 리다이렉트한다.
function notFoundLocale(pathname: string): "ko" | "en" | null {
  const match = pathname.match(/^\/(ko|en)(\/.*)?$/);
  if (!match) return null;
  const locale = match[1] as "ko" | "en";
  const rest = match[2] ?? "";

  if (!LOCALE_ROUTES.some((route) => route.test(rest))) return locale;

  const interactions = rest.match(/^\/interactions\/([^/]+)$/);
  if (interactions) {
    const parts = interactions[1].split("-");
    const valid = parts.length === 2 && parts[0] !== parts[1] && parts.every((id) => CHAMP_IDS.has(id));
    return valid ? null : locale;
  }

  const champ = rest.match(/^\/champ\/([^/]+)$/);
  if (champ) return CHAMP_IDS.has(champ[1]) ? null : locale;

  // 임베드 페이지는 대문자 id를 스스로 소문자 주소로 리다이렉트하므로 소문자 기준으로 검사
  const embed = rest.match(/^\/champ-embed\/([^/]+)$/);
  if (embed) return CHAMP_IDS.has(embed[1].toLowerCase()) ? null : locale;

  if (!EXAM_ENABLED && rest.startsWith("/exam")) return locale;
  if (IS_PRODUCTION && rest === "/dev-preview") return locale;

  return null;
}

const NOT_FOUND_TEXT = {
  ko: { message: "페이지를 찾을 수 없습니다.", home: "홈으로" },
  en: { message: "This page could not be found.", home: "Go home" },
};

// 광고·GA·Next 스크립트 없는 최소 404 페이지(로케일 lang 유지, 홈 링크 하나)
function notFoundResponse(locale: "ko" | "en") {
  const t = NOT_FOUND_TEXT[locale];
  const html =
    `<!DOCTYPE html><html lang="${locale}"><head><meta charset="utf-8">` +
    `<meta name="viewport" content="width=device-width, initial-scale=1"><meta name="robots" content="noindex">` +
    `<title>404 - LOLTIP</title></head>` +
    `<body style="margin:0;background:#0f172a;color:#e2e8f0;font-family:system-ui,sans-serif">` +
    `<main style="min-height:100vh;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px">` +
    `<h1 style="margin:0;font-size:24px;font-weight:500">404</h1><p style="margin:0">${t.message}</p>` +
    `<a href="/${locale}/champ" style="color:#facc15">${t.home}</a></main></body></html>`;
  return new NextResponse(html, {
    status: 404,
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "private, no-cache, no-store, max-age=0, must-revalidate",
    },
  });
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

  const notFound = notFoundLocale(pathname);
  if (notFound) return notFoundResponse(notFound);

  if (!pathname.startsWith("/ko") && !pathname.startsWith("/en")) {
    const url = request.nextUrl.clone();
    url.pathname = "/ko" + pathname;
    return NextResponse.redirect(url, 308);
  }

  return intlMiddleware(request);
}

export const config = {
  // 첫 패턴은 점(.)이 든 경로(정적 파일)를 건너뛰므로, 잘못된 슬러그 검사 대상 라우트는 따로 지정한다.
  matcher: ["/((?!_next|api|.*\\..*).*)", "/:locale/(champ|interactions|champ-embed)/:slug"],
};
