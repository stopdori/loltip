import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";
import { type NextRequest, NextResponse } from "next/server";

const intlMiddleware = createMiddleware(routing);

// 로케일 없는 구주소: 삭제됨 → 410 Gone
// (/champ?me=&enemy= 같은 쿼리 매칭도 pathname 기준이라 함께 커버됨)
const GONE_PATTERNS = [
  /^\/champ$/,
  /^\/champ\/[^/]+$/,
  /^\/matchup\/[^/]+$/,
];

export default function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname.startsWith("/champ-embed")) {
    return NextResponse.next();
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
