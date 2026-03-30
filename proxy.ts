import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";
import { type NextRequest, NextResponse } from "next/server";

const intlMiddleware = createMiddleware(routing);

export default function proxy(request: NextRequest) {
  const response = intlMiddleware(request) ?? NextResponse.next();
  response.headers.set("x-pathname", request.nextUrl.pathname);
  return response;
}

export const config = {
  // 기존 라우트는 건드리지 않음 - locale prefix가 붙은 경로만 처리
  matcher: [
    "/(ko|en)/:path*",
  ],
};
