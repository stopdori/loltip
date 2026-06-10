import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";
import { type NextRequest, NextResponse } from "next/server";

const intlMiddleware = createMiddleware(routing);

export default function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname.startsWith("/champ-embed")) {
    return NextResponse.next();
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
