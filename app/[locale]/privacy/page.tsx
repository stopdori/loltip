// app/[locale]/privacy/page.tsx

import type { Metadata } from "next";
import SiteHeader from "@/app/components/SiteHeader";
import { CONTACT_EMAIL } from "@/app/data/siteInfo";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: locale === "ko" ? "개인정보처리방침 - LOLTIP" : "Privacy Policy | LOLTIP",
    description: locale === "ko" ? "LOLTIP 개인정보처리방침" : "Privacy Policy for LOLTIP",
    alternates: {
      canonical: `https://loltip.com/${locale}/privacy`,
      languages: {
        ko: "https://loltip.com/ko/privacy",
        en: "https://loltip.com/en/privacy",
        "x-default": "https://loltip.com/ko/privacy",
      },
    },
  };
}

const h2Class = "text-xl font-bold text-slate-100";
const pClass = "text-slate-300 text-sm leading-relaxed";
const linkClass = "text-sky-400 underline break-all";

function EmailLink() {
  return (
    <a href={`mailto:${CONTACT_EMAIL}`} className={linkClass}>
      {CONTACT_EMAIL}
    </a>
  );
}

function OptOutLink() {
  return (
    <a
      href="https://adssettings.google.com"
      target="_blank"
      rel="noopener noreferrer"
      className={linkClass}
    >
      https://adssettings.google.com
    </a>
  );
}

function PrivacyKo() {
  return (
    <>
      <h1 className="text-3xl font-extrabold text-yellow-400">개인정보처리방침</h1>

      <p className={pClass}>
        이 웹사이트(&quot;LOLTIP&quot;)는 이용자의 개인정보를 존중합니다. 본 개인정보처리방침은
        어떤 정보가 수집되며 어떻게 사용되는지 설명합니다.
      </p>

      <section className="space-y-2">
        <h2 className={h2Class}>1. 수집하는 정보</h2>
        <p className={pClass}>
          이 웹사이트는 이용자로부터 개인정보를 직접 수집하지 않습니다. 다만 브라우저 종류, 기기 정보,
          IP 주소, 이용 기록 등 개인을 식별하지 않는 정보가 자동으로 수집될 수 있습니다.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className={h2Class}>2. 정보의 이용 목적</h2>
        <p className={pClass}>수집된 정보는 다음 목적으로 이용됩니다.</p>
        <ul className="list-disc pl-6 text-slate-300 text-sm space-y-1">
          <li>웹사이트 제공 및 유지</li>
          <li>이용자 경험 개선</li>
          <li>광고 게재</li>
        </ul>
      </section>

      <section className="space-y-2">
        <h2 className={h2Class}>3. 쿠키 및 광고</h2>
        <p className={pClass}>
          이 웹사이트는 Google 애드센스를 포함한 제3자 광고 서비스를 이용합니다. 이러한 서비스는 이용자가
          이 웹사이트 및 다른 웹사이트를 방문한 기록을 바탕으로 광고를 보여주기 위해 쿠키 또는 이와 유사한
          기술을 사용할 수 있습니다.
        </p>
        <p className={pClass}>
          Google은 광고 쿠키를 사용하여 이용자의 관심사에 기반한 광고를 게재합니다.
        </p>
        <p className={pClass}>
          이용자는 아래 페이지에서 맞춤 광고를 해제할 수 있습니다.
          <br />
          <OptOutLink />
        </p>
      </section>

      <section className="space-y-2">
        <h2 className={h2Class}>4. 제3자 서비스</h2>
        <p className={pClass}>
          Google을 포함한 제3자 공급업체는 각자의 개인정보처리방침에 따라 정보를 수집하고 이용할 수 있습니다.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className={h2Class}>5. 이용자의 선택</h2>
        <p className={pClass}>
          이용자는 브라우저 설정에서 쿠키를 차단할 수 있습니다. 쿠키를 차단하면 웹사이트의 일부 기능이
          정상적으로 작동하지 않을 수 있습니다.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className={h2Class}>6. 문의</h2>
        <p className={pClass}>
          본 개인정보처리방침에 관한 문의는 아래 이메일 또는 웹사이트의 &quot;문의 / 제보&quot; 기능을 이용해 주세요.
          <br />
          <EmailLink />
        </p>
      </section>
    </>
  );
}

function PrivacyEn() {
  return (
    <>
      <h1 className="text-3xl font-extrabold text-yellow-400">Privacy Policy</h1>

      <p className={pClass}>
        This website (&quot;LOLTIP&quot;) respects your privacy. This Privacy Policy
        explains what information is collected and how it is used.
      </p>

      <section className="space-y-2">
        <h2 className={h2Class}>1. Information We Collect</h2>
        <p className={pClass}>
          This website does not collect personal information directly from users.
          We may collect non-personal information automatically, including browser
          type, device information, IP address, and usage data.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className={h2Class}>2. How We Use Information</h2>
        <p className={pClass}>Collected information is used to:</p>
        <ul className="list-disc pl-6 text-slate-300 text-sm space-y-1">
          <li>Provide and maintain the website</li>
          <li>Improve user experience</li>
          <li>Display advertisements</li>
        </ul>
      </section>

      <section className="space-y-2">
        <h2 className={h2Class}>3. Cookies and Advertising</h2>
        <p className={pClass}>
          This website uses third-party advertising services, including Google
          AdSense. These services may use cookies or similar technologies to show
          advertisements based on users’ visits to this and other websites.
        </p>
        <p className={pClass}>
          Google uses advertising cookies to enable the display of ads to users
          based on their interests.
        </p>
        <p className={pClass}>
          Users may opt out of personalized advertising by visiting:
          <br />
          <OptOutLink />
        </p>
      </section>

      <section className="space-y-2">
        <h2 className={h2Class}>4. Third-Party Services</h2>
        <p className={pClass}>
          Third-party vendors, including Google, may collect and use information
          in accordance with their own privacy policies.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className={h2Class}>5. Your Choices</h2>
        <p className={pClass}>
          You can disable cookies through your browser settings. Please note that
          some features of the website may not function properly if cookies are
          disabled.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className={h2Class}>6. Contact</h2>
        <p className={pClass}>
          If you have any questions about this Privacy Policy, please contact us
          by email or using the feedback feature available on this website.
          <br />
          <EmailLink />
        </p>
      </section>
    </>
  );
}

export default async function PrivacyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return (
    <div className="space-y-6">
      <SiteHeader subtitle={locale === "ko" ? "개인정보처리방침" : "Privacy Policy"} />
      <div className="mx-auto w-full max-w-[960px] px-4 sm:px-6 py-6 space-y-8">
        {locale === "ko" ? <PrivacyKo /> : <PrivacyEn />}
      </div>
    </div>
  );
}
