import type { Metadata } from "next";
import LegalShell from "@/components/LegalShell";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Refund & Cancellation Policy — Orvnix",
  description: "How cancellations, pauses, and refunds work for Orvnix engagements.",
};

export default function RefundPage() {
  return (
    <LegalShell
      title="Refund & Cancellation Policy"
      intro="We keep billing simple and fair. This policy explains how pauses, cancellations, and refunds work across our plans."
    >
      <h2 id="subscriptions">1. Subscription plans</h2>
      <ul>
        <li>Subscriptions are billed monthly in advance and renew automatically until cancelled.</li>
        <li>You can cancel at any time; cancellation takes effect at the end of your current paid month.</li>
        <li>You keep full access to the service for the remainder of the month you have paid for.</li>
        <li>We do not charge cancellation fees or require long-term commitments.</li>
      </ul>

      <h2 id="pausing">2. Pausing your plan</h2>
      <p>
        Instead of cancelling, you can pause your subscription between active periods.
        While paused, you are not billed, and you can resume whenever your roadmap
        picks back up. Any active request is wrapped up before a pause begins.
      </p>

      <h2 id="refunds">3. Refunds</h2>
      <ul>
        <li>Because work begins promptly each cycle, monthly subscription fees are generally non-refundable once the billing period has started.</li>
        <li>If we have not started any work in a newly started cycle, you may request a refund for that cycle within 7 days.</li>
        <li>If a payment was clearly made in error or duplicated, we will refund it in full.</li>
      </ul>

      <h2 id="one-off">4. One-off &amp; project work</h2>
      <p>
        Fixed-scope projects are billed against milestones agreed in the proposal.
        Deposits reserve our team&apos;s time and are non-refundable once a project is
        scheduled. If you cancel a project mid-way, you are charged for work completed
        and any non-recoverable costs committed on your behalf.
      </p>

      <h2 id="hardware">5. Hardware, drone &amp; robotics costs</h2>
      <p>
        Where an engagement involves third-party hardware, components, field
        operations or regulatory permissions, those costs are non-refundable once
        ordered or incurred, even if the wider engagement is cancelled.
      </p>

      <h2 id="how-to-request">6. How to request a refund</h2>
      <p>
        Email <a href={`mailto:${site.email}`}>{site.email}</a> with your account
        details and the reason for the request. We aim to respond within 3 business
        days and to process approved refunds to your original payment method within 7
        to 14 business days.
      </p>

      <h2 id="changes">7. Changes to this policy</h2>
      <p>
        We may update this policy from time to time. The terms that apply to your
        engagement are those in force when you were billed.
      </p>

      <h2 id="contact">8. Contact us</h2>
      <p>
        Questions about billing or refunds? We&apos;re happy to help — email{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>
    </LegalShell>
  );
}
