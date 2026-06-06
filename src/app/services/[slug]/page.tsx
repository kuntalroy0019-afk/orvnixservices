import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { servicesContent, getService } from "@/lib/services-content";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return servicesContent.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  const title = `${service.name} — ${site.address.city} & Worldwide`;
  const description = service.intro[0];
  return {
    title,
    description,
    keywords: service.keywords,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title: `${service.name} — Orvnix`,
      description,
      url: `${site.url}/services/${service.slug}`,
      type: "website",
    },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const related = servicesContent
    .filter((s) => s.slug !== service.slug && s.category === service.category)
    .slice(0, 2);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: service.name,
        serviceType: service.name,
        description: service.intro[0],
        category: service.category,
        url: `${site.url}/services/${service.slug}`,
        provider: { "@id": `${site.url}/#organization` },
        areaServed: site.areaServed,
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: `${service.name} capabilities`,
          itemListElement: service.capabilities.map((c) => ({
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: c },
          })),
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: site.url },
          {
            "@type": "ListItem",
            position: 2,
            name: "Services",
            item: `${site.url}/#services`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: service.name,
            item: `${site.url}/services/${service.slug}`,
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: service.faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <Header />
      <main className="relative z-[2]">
        {/* hero */}
        <section className="relative overflow-hidden border-b border-border pt-32 pb-14 sm:pt-40 sm:pb-20">
          <div
            aria-hidden
            className="pointer-events-none absolute right-0 top-0 h-[360px] w-[640px] rounded-full opacity-[0.16] blur-[120px]"
            style={{ background: "radial-gradient(circle, var(--accent), transparent 70%)" }}
          />
          <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
            {/* breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-muted-2" aria-label="Breadcrumb">
              <Link href="/" className="transition-colors hover:text-foreground">
                Home
              </Link>
              <span>/</span>
              <Link href="/#services" className="transition-colors hover:text-foreground">
                Services
              </Link>
              <span>/</span>
              <span className="text-foreground">{service.name}</span>
            </nav>

            <div className="mt-8 grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <p className="eyebrow">{service.category}</p>
                <h1 className="display mt-5 text-balance text-4xl sm:text-6xl">
                  {service.name}
                </h1>
                <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
                  {service.tagline}
                </p>
                <div className="mt-8">
                  <Link
                    href="/#contact"
                    className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-medium text-accent-foreground transition-transform hover:-translate-y-0.5"
                  >
                    Start a conversation
                    <span className="transition-transform group-hover:translate-x-0.5">→</span>
                  </Link>
                </div>
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border">
                <Image
                  src={service.image}
                  alt={`${service.name} at Orvnix`}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover opacity-90 grayscale transition-all duration-700 hover:grayscale-0"
                />
                <div
                  aria-hidden
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(180deg, transparent 50%, rgba(8,8,10,0.55))",
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* intro + capabilities */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-5 text-lg leading-relaxed text-muted">
              {service.intro.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <div className="rounded-2xl border border-border bg-surface p-7 sm:p-8">
              <p className="eyebrow">What&apos;s included</p>
              <ul className="mt-5 space-y-3">
                {service.capabilities.map((c) => (
                  <li key={c} className="flex items-start gap-3 text-sm">
                    <span className="mt-0.5 text-accent">✓</span>
                    <span className="text-foreground/90">{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* approach */}
        <section className="border-t border-border py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <p className="eyebrow">How we work</p>
            <h2 className="display mt-5 max-w-2xl text-balance text-3xl sm:text-4xl">
              A way of working that holds up.
            </h2>
            <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-3">
              {service.approach.map((a, i) => (
                <div key={a.title} className="bg-surface p-7">
                  <div className="font-mono text-sm text-muted-2">
                    0{i + 1}
                  </div>
                  <h3 className="mt-6 font-display text-xl">{a.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{a.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* faq */}
        <section className="border-t border-border py-16 sm:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="eyebrow">Questions</p>
              <h2 className="display mt-5 text-balance text-3xl sm:text-4xl">
                {service.name}, explained.
              </h2>
            </div>
            <div>
              {service.faqs.map((f) => (
                <div key={f.q} className="border-b border-border py-5">
                  <h3 className="text-base font-medium">{f.q}</h3>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
                    {f.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* related + CTA */}
        <section className="border-t border-border py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="rounded-3xl border border-border bg-surface p-8 sm:p-12">
              <h2 className="display text-balance text-3xl sm:text-4xl">
                Let&apos;s build your {service.name.toLowerCase()}.
              </h2>
              <p className="mt-4 max-w-xl text-muted">
                We take on a small number of teams at a time. Tell us what
                you&apos;re trying to build — we usually reply within a day.
              </p>
              <div className="mt-7 flex flex-wrap items-center gap-4">
                <Link
                  href="/#contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-medium text-accent-foreground transition-transform hover:-translate-y-0.5"
                >
                  Book a call
                  <span className="transition-transform group-hover:translate-x-0.5">→</span>
                </Link>
                <a
                  href={`mailto:${site.email}`}
                  className="text-sm text-muted underline-offset-4 hover:text-foreground hover:underline"
                >
                  {site.email}
                </a>
              </div>

              {related.length > 0 && (
                <div className="mt-10 border-t border-border pt-7">
                  <p className="eyebrow mb-4">Related services</p>
                  <div className="flex flex-wrap gap-3">
                    {related.map((r) => (
                      <Link
                        key={r.slug}
                        href={`/services/${r.slug}`}
                        className="rounded-full border border-border-strong px-4 py-2 text-sm text-foreground transition-colors hover:bg-surface-2"
                      >
                        {r.name} →
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
