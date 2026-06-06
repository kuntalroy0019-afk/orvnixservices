import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";

export default function LegalShell({
  title,
  intro,
  children,
}: {
  title: string;
  intro: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="relative z-[2]">
        <section className="relative overflow-hidden border-b border-border pt-32 pb-12 sm:pt-40 sm:pb-16">
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-0 h-[320px] w-[640px] -translate-x-1/2 rounded-full opacity-[0.12] blur-[120px]"
            style={{ background: "radial-gradient(circle, var(--accent), transparent 70%)" }}
          />
          <div className="relative mx-auto max-w-3xl px-5 sm:px-8">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-foreground"
            >
              ← Back to home
            </Link>
            <h1 className="mt-6 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
              {title}
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-muted">{intro}</p>
            <p className="mt-5 text-sm text-muted-2">
              Last updated: {site.legalUpdated}
            </p>
          </div>
        </section>

        <section className="py-14 sm:py-20">
          <article className="legal mx-auto max-w-3xl px-5 sm:px-8">{children}</article>
        </section>
      </main>
      <Footer />
    </>
  );
}
