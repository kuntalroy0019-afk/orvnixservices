import type { Metadata } from "next";
import LegalShell from "@/components/LegalShell";
import { site, fullAddress } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms & Conditions — Orvnix",
  description: "The terms that govern your use of the Orvnix website and services.",
};

export default function TermsPage() {
  return (
    <LegalShell
      title="Terms & Conditions"
      intro="These terms govern your use of the Orvnix website and the services we provide. By engaging us or using our site, you agree to them."
    >
      <h2 id="agreement">1. Agreement to terms</h2>
      <p>
        These Terms &amp; Conditions form a binding agreement between you and Orvnix
        (&ldquo;Orvnix&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;), based in{" "}
        {site.address.city}, {site.address.state}, {site.address.country}. If you do
        not agree with any part of these terms, please do not use our website or
        services.
      </p>

      <h2 id="services">2. Our services</h2>
      <p>
        Orvnix provides product design, web and mobile development, AI agent
        workflows, robotics and drone services on a subscription or project basis.
        The exact scope, deliverables, timeline and fees for any engagement are set
        out in a separate proposal, order form or statement of work, which forms part
        of these terms.
      </p>

      <h2 id="subscriptions">3. Subscriptions &amp; billing</h2>
      <ul>
        <li>Subscription plans are billed monthly in advance unless agreed otherwise in writing.</li>
        <li>You may pause, upgrade, downgrade or cancel your subscription in line with your plan; changes take effect from the next billing cycle.</li>
        <li>Fees are exclusive of applicable taxes, including GST, which will be added where required.</li>
        <li>Late or failed payments may result in work being paused until the account is brought up to date.</li>
      </ul>
      <p>
        Refunds and cancellations are covered in our{" "}
        <a href="/refund-policy">Refund &amp; Cancellation Policy</a>.
      </p>

      <h2 id="client-responsibilities">4. Your responsibilities</h2>
      <ul>
        <li>Provide timely access to the information, accounts, content and approvals we need to do the work.</li>
        <li>Ensure you own or have the rights to any materials you provide to us.</li>
        <li>Comply with all laws that apply to your use of our deliverables, including aviation and data-protection rules where relevant.</li>
      </ul>

      <h2 id="ip">5. Intellectual property</h2>
      <p>
        On full payment for an engagement, ownership of the final deliverables created
        specifically for you transfers to you. We retain ownership of our pre-existing
        tools, frameworks, libraries and know-how, and grant you a licence to use them
        as part of the deliverables. We may reference the engagement in our portfolio
        unless you ask us in writing not to.
      </p>

      <h2 id="drone-robotics">6. Drone &amp; robotics operations</h2>
      <p>
        Drone flights and robotics deployments are carried out in accordance with
        applicable regulations, including the rules of India&apos;s Directorate
        General of Civil Aviation (DGCA) for unmanned aircraft. You are responsible for
        granting or securing any site access, permissions or approvals needed at your
        location. We may decline or postpone operations where conditions are unsafe or
        permissions are missing.
      </p>

      <h2 id="ai">7. AI services</h2>
      <p>
        AI agents and automated workflows can produce outputs that are inaccurate or
        unexpected. You are responsible for reviewing AI-generated outputs before
        relying on them, and for ensuring their use complies with applicable law. We do
        not guarantee any particular outcome from AI systems.
      </p>

      <h2 id="warranties">8. Warranties &amp; disclaimers</h2>
      <p>
        We provide our services with reasonable skill and care. Beyond that, and to the
        extent permitted by law, our website and services are provided &ldquo;as
        is&rdquo; without further warranties of any kind.
      </p>

      <h2 id="liability">9. Limitation of liability</h2>
      <p>
        To the maximum extent permitted by law, Orvnix is not liable for indirect,
        incidental or consequential losses. Our total liability for any claim arising
        from an engagement is limited to the fees you paid us for that engagement in the
        three months before the claim arose.
      </p>

      <h2 id="confidentiality">10. Confidentiality</h2>
      <p>
        Each party agrees to keep the other&apos;s confidential information private and
        to use it only for the purpose of the engagement. This obligation continues
        after the engagement ends.
      </p>

      <h2 id="termination">11. Termination</h2>
      <p>
        Either party may end an engagement as set out in the relevant plan or order
        form. We may suspend or terminate access immediately if these terms are
        breached. Fees due for work performed up to termination remain payable.
      </p>

      <h2 id="law">12. Governing law</h2>
      <p>
        These terms are governed by the laws of India. The courts of {site.address.city},{" "}
        {site.address.state} have exclusive jurisdiction over any dispute, subject to
        any agreed arbitration.
      </p>

      <h2 id="contact">13. Contact us</h2>
      <p>
        Questions about these terms? Email{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a> or write to us at{" "}
        {fullAddress}.
      </p>
    </LegalShell>
  );
}
