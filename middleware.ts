import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 이미 로케일이 있으면 통과
  if (pathname.startsWith("/ko") || pathname.startsWith("/en")) {
    const response = NextResponse.next();
    response.headers.set("x-pathname", pathname);
    return response;
  }

  // 로케일 없는 경로는 /ko로 301 리다이렉트
  const url = request.nextUrl.clone();
  url.pathname = "/ko" + pathname;
  return NextResponse.redirect(url, 308);
}

export const config = {
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
