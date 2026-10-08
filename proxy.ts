import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";
import { type NextRequest, NextResponse } from "next/server";
import { CHAMPIONS } from "./app/data/champions";

const intlMiddleware = createMiddleware(routing);

const CHAMP_IDS = new Set(CHAMPIONS.map((c) => c.id));

// 로케일 없는 구주소(3/31 [locale] 이전 전 주소) → /ko/ 새 주소로 308 1홉 리다이렉트.
// 색인 이력·외부 링크 신호를 새 주소로 넘기기 위함. 쿼리(?me=, ?first=, ?side= 등)는 버린다.
//  - /matchup/{a}-vs-{b}: 둘 다 실제 챔피언 id이고 a≠b면 /ko/matchup/{정렬된 pair}
//  - /champ/{id}: 실제 챔피언 id면 /ko/champ/{id}
//  - /champ?me=X&enemy=Y: 유효한 서로 다른 챔피언이면 /ko/matchup/{정렬된 pair}, 그 외 /champ는 /ko/champ
// 챔피언 id 비교는 소문자 기준. 조건에 맞지 않는 /champ/*, /matchup/*는 아래 GONE_PATTERNS로 410.
function legacyRedirectPath(request: NextRequest): string | null {
  const { pathname, searchParams } = request.nextUrl;
  const toId = (v: string | null) => (v ?? "").toLowerCase();
  const matchupPath = (a: string, b: string) =>
    CHAMP_IDS.has(a) && CHAMP_IDS.has(b) && a !== b
      ? `/ko/matchup/${[a, b].sort().join("-vs-")}`
      : null;

  if (pathname === "/champ") {
    return matchupPath(toId(searchParams.get("me")), toId(searchParams.get("enemy"))) ?? "/ko/champ";
  }

  const champMatch = pathname.match(/^\/champ\/([^/]+)$/);
  if (champMatch) {
    const id = toId(champMatch[1]);
    return CHAMP_IDS.has(id) ? `/ko/champ/${id}` : null;
  }

  const matchupMatch = pathname.match(/^\/matchup\/([^/]+)-vs-([^/]+)$/);
  if (matchupMatch) {
    return matchupPath(toId(matchupMatch[1]), toId(matchupMatch[2]));
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

  const legacyPath = legacyRedirectPath(request);
  if (legacyPath) {
    const url = request.nextUrl.clone();
    url.pathname = legacyPath;
    url.search = "";
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
