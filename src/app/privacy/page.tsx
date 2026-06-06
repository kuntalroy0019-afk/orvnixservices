import type { Metadata } from "next";
import LegalShell from "@/components/LegalShell";
import { site, fullAddress } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy — Orvnix",
  description: "How Orvnix collects, uses, and protects your personal information.",
};

export default function PrivacyPage() {
  return (
    <LegalShell
      title="Privacy Policy"
      intro="This policy explains what information Orvnix collects, why we collect it, and the choices you have. We keep it plain and we keep it honest."
    >
      <h2 id="overview">1. Overview</h2>
      <p>
        Orvnix (&ldquo;Orvnix&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo; or
        &ldquo;our&rdquo;) operates the website at orvnix.com and provides design,
        software, AI, robotics and drone services. We are based in {site.address.city},{" "}
        {site.address.state}, {site.address.country}. This policy applies to the
        information we handle when you visit our site or work with us.
      </p>
      <p>
        We process personal data in line with India&apos;s Digital Personal Data
        Protection Act, 2023, and — where it applies to clients abroad — the EU/UK
        GDPR.
      </p>

      <h2 id="data-we-collect">2. Information we collect</h2>
      <h3>Information you give us</h3>
      <ul>
        <li>Contact details such as your name, email address, phone number and company.</li>
        <li>Anything you tell us in enquiry forms, emails or calls (for example, your project details and budget range).</li>
        <li>Billing and business information needed to deliver a paid engagement.</li>
      </ul>
      <h3>Information we collect automatically</h3>
      <ul>
        <li>Device and browser type, approximate location and pages you view.</li>
        <li>Cookies and similar technologies — see our <a href="/cookies">Cookie Policy</a>.</li>
      </ul>

      <h2 id="how-we-use">3. How we use your information</h2>
      <ul>
        <li>To respond to your enquiries and provide the services you request.</li>
        <li>To manage projects, contracts, invoicing and support.</li>
        <li>To improve our website, services and security.</li>
        <li>To send service updates and, only with your consent, occasional marketing you can opt out of at any time.</li>
        <li>To meet legal, tax and regulatory obligations.</li>
      </ul>

      <h2 id="legal-basis">4. Our legal basis</h2>
      <p>
        We rely on your consent, the performance of a contract with you, our
        legitimate interest in running and improving our business, and compliance
        with our legal obligations — whichever applies to the processing in question.
      </p>

      <h2 id="sharing">5. How we share information</h2>
      <p>
        We do not sell your personal data. We share it only with trusted service
        providers who help us operate — such as hosting, analytics, payment and
        communication tools — and only to the extent they need it. We may also
        disclose information where the law requires it.
      </p>

      <h2 id="retention">6. How long we keep it</h2>
      <p>
        We retain personal data only for as long as needed for the purposes above,
        or as required by law. When it is no longer needed, we securely delete or
        anonymise it.
      </p>

      <h2 id="security">7. Security</h2>
      <p>
        We use appropriate technical and organisational measures — including
        encryption in transit, access controls and regular reviews — to protect your
        data. No method of transmission over the internet is completely secure, but
        we work hard to safeguard your information.
      </p>

      <h2 id="rights">8. Your rights</h2>
      <p>Subject to applicable law, you may:</p>
      <ul>
        <li>Access the personal data we hold about you.</li>
        <li>Ask us to correct or update inaccurate data.</li>
        <li>Ask us to delete your data.</li>
        <li>Withdraw consent or object to certain processing.</li>
        <li>Request a copy of your data in a portable format.</li>
      </ul>
      <p>
        To exercise any of these rights, email us at{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>

      <h2 id="children">9. Children</h2>
      <p>
        Our services are intended for businesses and are not directed at children
        under 18. We do not knowingly collect their personal data.
      </p>

      <h2 id="changes">10. Changes to this policy</h2>
      <p>
        We may update this policy from time to time. When we do, we will revise the
        &ldquo;last updated&rdquo; date above and, for significant changes, take
        reasonable steps to notify you.
      </p>

      <h2 id="contact">11. Contact us</h2>
      <p>
        Questions about this policy or your data? Reach our team at{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a> or write to us at{" "}
        {fullAddress}.
      </p>
    </LegalShell>
  );
}
