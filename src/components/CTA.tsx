"use client";

import { useState } from "react";
import { site } from "@/lib/site";
import SectionLabel from "@/components/SectionLabel";
import SplitReveal from "@/components/SplitReveal";
import TronBand from "@/components/TronBand";

export default function CTA() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const company = String(data.get("company") || "");
    const need = String(data.get("need") || "");
    const message = String(data.get("message") || "");

    const subject = `New enquiry from ${name || "the Orvnix site"}`;
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Company: ${company}`,
      `Interested in: ${need}`,
      "",
      message,
    ].join("\n");

    // Opens a pre-filled draft in the visitor's own email app / webmail.
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <section id="contact" className="ink section-pad relative overflow-hidden border-t border-border">
      <TronBand className="pointer-events-none absolute inset-0 h-full w-full" />
      <div className="relative z-10 px-5 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-20">
          <div>
            <SectionLabel index="10" label="Let's talk" meta="CONTACT" />
            <SplitReveal
              as="h2"
              text="Tell us what you're trying to build."
              className="display mt-6 text-balance text-[clamp(2.6rem,5.4vw,4.6rem)]"
            />
            <p className="mt-7 max-w-md text-lg leading-relaxed text-muted">
              We take on a small number of teams at a time. If the fit is right,
              you&apos;ll hear back from us — usually within a day. No pitch, no
              pressure.
            </p>

            <div className="mt-10 space-y-0 border-t border-border">
              <a
                href={`mailto:${site.email}`}
                className="group flex items-center justify-between gap-3 border-b border-border py-5 text-base text-foreground"
              >
                <span className="font-display text-sm text-muted-2">
                  Email
                </span>
                <span className="font-display text-lg underline-offset-4 group-hover:underline">
                  {site.email}
                </span>
              </a>
              <div className="flex items-start justify-between gap-3 border-b border-border py-5 text-base">
                <span className="font-display text-sm text-muted-2">
                  Studio
                </span>
                <span className="text-right text-sm leading-relaxed text-muted">
                  {site.address.line1}
                  <br />
                  {site.address.city}, {site.address.state}{" "}
                  {site.address.postcode}, {site.address.country}
                </span>
              </div>
            </div>
          </div>

          {/* form card — re-scoped back to paper inside the ink section */}
          <div className="paper p-6 sm:p-9">
            {sent ? (
              <div className="flex min-h-[340px] flex-col items-center justify-center text-center">
                <span className="grid h-14 w-14 place-items-center rounded-full bg-accent text-2xl text-accent-foreground">
                  ✓
                </span>
                <h3 className="display mt-6 text-2xl">Check your email app</h3>
                <p className="mt-3 max-w-xs text-sm text-muted">
                  We&apos;ve opened a pre-filled draft to {site.email} in your
                  email app — just hit send and we&apos;ll be in touch.
                </p>
                <a
                  href={`mailto:${site.email}`}
                  className="mt-6 text-sm text-accent underline-offset-4 hover:underline"
                >
                  Nothing opened? Email us directly →
                </a>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Name" name="name" placeholder="Jane Doe" />
                  <Field
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="jane@company.com"
                  />
                </div>
                <Field label="Company" name="company" placeholder="Company Inc." />
                <div>
                  <label
                    className="mb-2 block font-display text-sm text-muted"
                    htmlFor="need"
                  >
                    What do you need?
                  </label>
                  <select
                    id="need"
                    name="need"
                    className="w-full border border-border-strong bg-surface px-3.5 py-3 text-sm text-foreground outline-none transition-colors focus:border-accent"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Pick the closest fit
                    </option>
                    <option>Software · Web / Mobile</option>
                    <option>AI agents & LLM</option>
                    <option>Robotics</option>
                    <option>Drone operations</option>
                    <option>Something across all of it</option>
                  </select>
                </div>
                <div>
                  <label
                    className="mb-2 block font-display text-sm text-muted"
                    htmlFor="message"
                  >
                    A few lines about it
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    placeholder="What you're building and where you'd like help…"
                    className="w-full resize-none border border-border-strong bg-surface px-3.5 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-2 focus:border-accent"
                  />
                </div>
                <button type="submit" className="btn-ink group w-full font-sans">
                  Compose email
                  <span className="transition-transform group-hover:translate-x-0.5">→</span>
                </button>
                <p className="text-center font-sans text-xs text-muted-2">
                  Opens a draft in your own email app, addressed to{" "}
                  <a
                    href={`mailto:${site.email}`}
                    className="text-accent underline-offset-4 hover:underline"
                  >
                    {site.email}
                  </a>
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label
        className="mb-2 block font-display text-sm text-muted"
        htmlFor={name}
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="w-full border border-border-strong bg-surface px-3.5 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-2 focus:border-accent"
      />
    </div>
  );
}
