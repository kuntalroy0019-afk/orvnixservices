"use client";

import { useState } from "react";
import { site } from "@/lib/site";

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
    <section id="contact" className="relative border-t border-border py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-surface px-6 py-14 sm:px-12 sm:py-16">
          <div
            aria-hidden
            className="pointer-events-none absolute right-0 top-0 h-[360px] w-[640px] rounded-full opacity-[0.18] blur-[120px]"
            style={{
              background: "radial-gradient(circle, var(--accent), transparent 70%)",
            }}
          />

          <div className="relative grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="eyebrow">Let&apos;s talk</p>
              <h2 className="display mt-5 text-balance text-4xl sm:text-5xl">
                Tell us what you&apos;re trying to build.
              </h2>
              <p className="mt-5 max-w-md text-lg leading-relaxed text-muted">
                We take on a small number of teams at a time. If the fit is right,
                you&apos;ll hear back from us — usually within a day. No pitch, no
                pressure.
              </p>

              <div className="mt-8 space-y-4">
                <a
                  href={`mailto:${site.email}`}
                  className="group flex items-center gap-3 text-base text-foreground"
                >
                  <span className="grid h-9 w-9 place-items-center rounded-full border border-border text-accent transition-colors group-hover:border-accent/50">
                    ✉
                  </span>
                  <span className="underline-offset-4 group-hover:underline">
                    {site.email}
                  </span>
                </a>
                <div className="flex items-start gap-3 text-base text-muted">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-border text-accent">
                    ⌖
                  </span>
                  <span>
                    {site.address.line1}
                    <br />
                    {site.address.city}, {site.address.state}{" "}
                    {site.address.postcode}, {site.address.country}
                  </span>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-background p-6 sm:p-8">
              {sent ? (
                <div className="flex min-h-[340px] flex-col items-center justify-center text-center">
                  <span className="grid h-14 w-14 place-items-center rounded-full bg-accent text-2xl text-accent-foreground">
                    ✓
                  </span>
                  <h3 className="display mt-5 text-2xl">Check your email app</h3>
                  <p className="mt-2 max-w-xs text-sm text-muted">
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
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
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
                    <label className="mb-1.5 block text-sm text-muted" htmlFor="need">
                      What do you need?
                    </label>
                    <select
                      id="need"
                      name="need"
                      className="w-full rounded-lg border border-border bg-surface px-3.5 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-accent"
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
                    <label className="mb-1.5 block text-sm text-muted" htmlFor="message">
                      A few lines about it
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      placeholder="What you're building and where you'd like help…"
                      className="w-full resize-none rounded-lg border border-border bg-surface px-3.5 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-2 focus:border-accent"
                    />
                  </div>
                  <button
                    type="submit"
                    className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-medium text-accent-foreground transition-transform hover:-translate-y-0.5"
                  >
                    Compose email
                    <span className="transition-transform group-hover:translate-x-0.5">→</span>
                  </button>
                  <p className="text-center text-xs text-muted-2">
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
      <label className="mb-1.5 block text-sm text-muted" htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="w-full rounded-lg border border-border bg-surface px-3.5 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-2 focus:border-accent"
      />
    </div>
  );
}
