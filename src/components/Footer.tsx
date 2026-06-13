import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

const cols = [
  {
    title: "Studio",
    links: [
      { label: "Work", href: "/work" },
      { label: "Workspace", href: "/workspace" },
      { label: "Studio", href: "/studio" },
      { label: "Pricing", href: "/pricing" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Product & Web", href: "/services/web-development" },
      { label: "Mobile Apps", href: "/services/mobile-app-development" },
      { label: "AI Agent Workflows", href: "/services/ai-agent-workflows" },
      { label: "Robotics", href: "/services/robotics" },
      { label: "Drone Operations", href: "/services/drone-operations" },
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
    <footer className="relative z-[2] border-t border-border bg-surface-2 text-foreground">
      <div className="px-5 pb-10 pt-[clamp(4rem,11.5vw,10rem)] md:px-[5vw]">
        {/* pre-footer gallery band — statement, contact link, photo row */}
        <div className="mb-[clamp(4rem,8vw,7rem)] text-center">
          <p className="display mx-auto max-w-3xl text-balance text-[clamp(1.9rem,3.2vw,3.2rem)] leading-[1.08]">
            A studio for software, <strong>AI</strong> and autonomous systems.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block font-sans text-sm text-foreground underline underline-offset-4 transition-colors hover:text-accent"
          >
            Start a conversation
          </Link>
          <div className="relative mt-[clamp(3rem,6vw,5rem)] aspect-[3/2] w-full overflow-hidden border border-border sm:aspect-[21/9]">
            <Image
              src="/images/footer-band.jpeg"
              alt="Aerial view through cloud cover — the scale we build for"
              fill
              sizes="100vw"
              priority={false}
              className="img-treat object-cover"
            />
          </div>
        </div>

        <div className="grid gap-12 border-t border-border pt-[clamp(3rem,5vw,4.5rem)] lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <Link href="/" className="flex items-center gap-2.5">
              <span className="grid h-7 w-7 place-items-center bg-foreground text-background">
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
              <span className="display text-[20px]">Orvnix</span>
            </Link>
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-muted">
              Built from the inside, in {site.address.city}.
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
            </div>
          </div>

          {cols.map((col) => (
            <div key={col.title}>
              <h4 className="eyebrow">{col.title}</h4>
              <ul className="mt-6 space-y-3.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="nav-underline text-sm text-muted transition-colors hover:text-foreground"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-sm text-muted-2">
            © {new Date().getFullYear()} Orvnix. All rights reserved. Made in{" "}
            {site.address.city}, {site.address.country}.
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2 font-display text-sm text-muted-2">
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
