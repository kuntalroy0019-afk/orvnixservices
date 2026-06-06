import Link from "next/link";
import { site } from "@/lib/site";

const cols = [
  {
    title: "Studio",
    links: [
      { label: "Work", href: "/#work" },
      { label: "Workspace", href: "/#workspace" },
      { label: "About", href: "/#studio" },
      { label: "Pricing", href: "/#pricing" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Product & Web", href: "/#services" },
      { label: "Mobile Apps", href: "/#services" },
      { label: "AI Agent Workflows", href: "/#services" },
      { label: "Robotics & Drones", href: "/#services" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms & Conditions", href: "/terms" },
      { label: "Cookie Policy", href: "/cookies" },
      { label: "Refund & Cancellation", href: "/refund-policy" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative z-[2] border-t border-border">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <Link href="/" className="flex items-center gap-2.5">
              <span className="grid h-7 w-7 place-items-center rounded-md bg-accent text-accent-foreground">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 2L4 7v10l8 5 8-5V7l-8-5z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinejoin="round"
                  />
                  <path d="M12 7v10M7.5 9.5l9 5M16.5 9.5l-9 5" stroke="currentColor" strokeWidth="2" />
                </svg>
              </span>
              <span className="text-[17px] font-semibold tracking-tight">Orvnix</span>
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted">
              A studio for software, AI and autonomous systems. Built from the
              inside, in {site.address.city}.
            </p>

            <address className="mt-6 not-italic text-sm leading-relaxed text-muted">
              {site.address.line1}
              <br />
              {site.address.city}, {site.address.state} {site.address.postcode}
              <br />
              {site.address.country}
            </address>
            <div className="mt-4 space-y-1 text-sm">
              <a
                href={`mailto:${site.email}`}
                className="block text-accent underline-offset-4 hover:underline"
              >
                {site.email}
              </a>
              <a
                href={`tel:${site.phone.replace(/\s/g, "")}`}
                className="block text-muted transition-colors hover:text-foreground"
              >
                {site.phone}
              </a>
            </div>
          </div>

          {cols.map((col) => (
            <div key={col.title}>
              <h4 className="text-xs font-medium uppercase tracking-[0.18em] text-muted-2">
                {col.title}
              </h4>
              <ul className="mt-5 space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-sm text-muted transition-colors hover:text-foreground"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-sm text-muted-2">
            © {new Date().getFullYear()} Orvnix. All rights reserved. Made in{" "}
            {site.address.city}, {site.address.country}.
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-2">
            <Link href="/privacy" className="transition-colors hover:text-foreground">
              Privacy
            </Link>
            <Link href="/terms" className="transition-colors hover:text-foreground">
              Terms
            </Link>
            <Link href="/cookies" className="transition-colors hover:text-foreground">
              Cookies
            </Link>
            <Link href="/refund-policy" className="transition-colors hover:text-foreground">
              Refunds
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
