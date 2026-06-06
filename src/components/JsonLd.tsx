import { site, sameAs, services, faqs } from "@/lib/site";

/**
 * Structured data for rich results and local (geo) SEO.
 * Rendered once on the home page.
 */
export default function JsonLd() {
  const orgId = `${site.url}/#organization`;
  const websiteId = `${site.url}/#website`;

  const graph = [
    {
      "@type": ["Organization", "ProfessionalService", "LocalBusiness"],
      "@id": orgId,
      name: site.name,
      legalName: site.legalName,
      url: site.url,
      logo: `${site.url}/icon.svg`,
      image: `${site.url}/opengraph-image`,
      description: site.description,
      email: site.email,
      telephone: site.phone,
      foundingDate: site.foundingYear,
      slogan: site.tagline,
      priceRange: "$$",
      address: {
        "@type": "PostalAddress",
        streetAddress: site.address.line1,
        addressLocality: site.address.city,
        addressRegion: site.address.state,
        postalCode: site.address.postcode,
        addressCountry: site.address.countryCode,
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: site.geo.lat,
        longitude: site.geo.lng,
      },
      areaServed: site.areaServed.map((name) => ({ "@type": "Place", name })),
      sameAs,
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "sales",
        email: site.email,
        telephone: site.phone,
        areaServed: "Worldwide",
        availableLanguage: ["English", "Hindi", "Bengali"],
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Services",
        itemListElement: services.map((s) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: s.name,
            description: s.description,
            provider: { "@id": orgId },
            areaServed: site.areaServed,
          },
        })),
      },
    },
    {
      "@type": "WebSite",
      "@id": websiteId,
      url: site.url,
      name: site.name,
      description: site.description,
      publisher: { "@id": orgId },
      inLanguage: "en",
    },
    {
      "@type": "FAQPage",
      "@id": `${site.url}/#faq`,
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ];

  const json = {
    "@context": "https://schema.org",
    "@graph": graph,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
}
