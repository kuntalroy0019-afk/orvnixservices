import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const destinations = [
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "Workspace", href: "/workspace" },
  { label: "Studio", href: "/studio" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
];

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="relative z-[2] flex min-h-[80vh] items-center">
        <div className="w-full px-5 pt-[clamp(7rem,12vw,9rem)] pb-24 md:px-[5vw]">
          <p className="eyebrow">
            <span className="text-accent">404</span> · Lost the trail
          </p>
          <h1 className="display mt-6 text-balance text-[clamp(3rem,9vw,7rem)] leading-[0.95]">
            This page isn&apos;t
            <br />
            on the map.
          </h1>
          <p className="mt-7 max-w-md text-lg leading-relaxed text-muted">
            The link may be old or the page may have moved. Here&apos;s the way
            back to everything that is here.
          </p>

          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3">
            {destinations.map((d) => (
              <Link
                key={d.href}
                href={d.href}
                className="arrow-link font-sans text-sm text-foreground"
              >
                {d.label}
                <span className="arrow text-accent">→</span>
                <span className="line" />
              </Link>
            ))}
          </div>

          <div className="mt-12">
            <Link
              href="/"
              className="group inline-flex items-center gap-2 bg-foreground px-7 py-3.5 font-sans text-sm font-medium text-background transition-colors duration-300 hover:bg-accent hover:text-accent-foreground"
            >
              <span className="transition-transform duration-300 group-hover:-translate-x-0.5">
                ←
              </span>
              Back home
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
