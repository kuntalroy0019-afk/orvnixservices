import type { Metadata } from "next";
import LegalShell from "@/components/LegalShell";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "How and why Orvnix uses cookies and similar technologies.",
  alternates: { canonical: "/cookies" },
};

export default function CookiesPage() {
  return (
    <LegalShell
      title="Cookie Policy"
      intro="This policy explains how Orvnix uses cookies and similar technologies on our website, and how you can control them."
    >
      <h2 id="what-are-cookies">1. What are cookies?</h2>
      <p>
        Cookies are small text files placed on your device when you visit a website.
        They help the site work, remember your preferences and understand how it is
        used. We also use similar technologies such as pixels and local storage, all
        referred to here as &ldquo;cookies&rdquo;.
      </p>

      <h2 id="types">2. Types of cookies we use</h2>
      <h3>Strictly necessary</h3>
      <p>
        Required for the website to function — for example, security and basic
        navigation. These cannot be switched off in our systems.
      </p>
      <h3>Performance &amp; analytics</h3>
      <p>
        Help us understand which pages are visited and how the site performs, so we
        can improve it. The data is aggregated and does not identify you personally.
      </p>
      <h3>Functional</h3>
      <p>
        Remember choices you make, such as preferences, to give you a smoother
        experience.
      </p>
      <h3>Marketing</h3>
      <p>
        Used only with your consent to measure the effectiveness of our campaigns. We
        do not use cookies to sell your data.
      </p>

      <h2 id="third-party">3. Third-party cookies</h2>
      <p>
        Some cookies are set by trusted third parties we use for analytics and
        hosting. These providers process data under their own privacy policies and
        only on our instructions.
      </p>

      <h2 id="manage">4. Managing cookies</h2>
      <ul>
        <li>Most browsers let you block or delete cookies through their settings.</li>
        <li>You can usually refuse non-essential cookies via our cookie banner where shown.</li>
        <li>Blocking some cookies may affect how parts of the site work.</li>
      </ul>

      <h2 id="updates">5. Updates</h2>
      <p>
        We may update this Cookie Policy as our website and the technologies we use
        change. The &ldquo;last updated&rdquo; date above reflects the latest version.
      </p>

      <h2 id="contact">6. Contact us</h2>
      <p>
        For questions about our use of cookies, email{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a>. See also our{" "}
        <a href="/privacy">Privacy Policy</a>.
      </p>
    </LegalShell>
  );
}
