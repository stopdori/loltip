import { permanentRedirect } from "next/navigation";
import { setRequestLocale } from "next-intl/server";

// ko/en만 빌드 때 생성. 점(.) 포함 주소(/wp-login.php 등)는 proxy.ts를 건너뛰고 [locale]로 잡히므로 404가 캐시되지 않게 막는다.
export const dynamicParams = false;

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  permanentRedirect(`/${locale}/champ`);
}
