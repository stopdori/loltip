// app/privacy/page.tsx

export const metadata = {
  title: "Privacy Policy | LOLTIP",
  description: "Privacy Policy for LOLTIP",
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto w-full max-w-[960px] min-w-[960px] px-6 py-10 space-y-8">
      <h1 className="text-3xl font-extrabold text-yellow-400">
        Privacy Policy
      </h1>

      <p className="text-slate-300 text-sm leading-relaxed">
        This website ("LOLTIP") respects your privacy. This Privacy Policy
        explains what information is collected and how it is used.
      </p>

      <section className="space-y-2">
        <h2 className="text-xl font-bold text-slate-100">
          1. Information We Collect
        </h2>
        <p className="text-slate-300 text-sm leading-relaxed">
          This website does not collect personal information directly from users.
          We may collect non-personal information automatically, including browser
          type, device information, IP address, and usage data.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-bold text-slate-100">
          2. How We Use Information
        </h2>
        <p className="text-slate-300 text-sm leading-relaxed">
          Collected information is used to:
        </p>
        <ul className="list-disc pl-6 text-slate-300 text-sm space-y-1">
          <li>Provide and maintain the website</li>
          <li>Improve user experience</li>
          <li>Display advertisements</li>
        </ul>
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-bold text-slate-100">
          3. Cookies and Advertising
        </h2>
        <p className="text-slate-300 text-sm leading-relaxed">
          This website uses third-party advertising services, including Google
          AdSense. These services may use cookies or similar technologies to show
          advertisements based on users’ visits to this and other websites.
        </p>
        <p className="text-slate-300 text-sm leading-relaxed">
          Google uses advertising cookies to enable the display of ads to users
          based on their interests.
        </p>
        <p className="text-slate-300 text-sm leading-relaxed">
          Users may opt out of personalized advertising by visiting:
          <br />
          <a
            href="https://adssettings.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sky-400 underline"
          >
            https://adssettings.google.com
          </a>
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-bold text-slate-100">
          4. Third-Party Services
        </h2>
        <p className="text-slate-300 text-sm leading-relaxed">
          Third-party vendors, including Google, may collect and use information
          in accordance with their own privacy policies.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-bold text-slate-100">
          5. Your Choices
        </h2>
        <p className="text-slate-300 text-sm leading-relaxed">
          You can disable cookies through your browser settings. Please note that
          some features of the website may not function properly if cookies are
          disabled.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-bold text-slate-100">
          6. Contact
        </h2>
        <p className="text-slate-300 text-sm leading-relaxed">
          If you have any questions about this Privacy Policy, please contact us
          using the feedback feature available on this website.
        </p>
      </section>
    </div>
  );
}
