import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  // 기존 라우트는 건드리지 않음 - locale prefix가 붙은 경로만 처리
  matcher: [
    "/(ko|en)/:path*",
  ],
};
