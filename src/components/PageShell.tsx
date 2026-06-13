import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";

/**
 * Standard shell for the dedicated nav pages: the fixed header, a breadcrumb
 * cleared of the bar, the page's reused landing section(s), a shared contact
 * CTA and the footer. Keeps every standalone page consistent without touching
 * the landing page.
 */
export default function PageShell({
  crumb,
  children,
}: {
  crumb: string;
  children?: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="relative z-[2]">
        <nav
          aria-label="Breadcrumb"
          className="px-5 pt-[clamp(6.5rem,10vw,8.5rem)] md:px-[5vw]"
        >
          <ol className="flex items-center gap-2 font-sans text-xs text-muted-2">
            <li>
              <Link href="/" className="transition-colors hover:text-foreground">
                Home
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li className="text-foreground">{crumb}</li>
          </ol>
        </nav>

        {children}

        <CTA />
      </main>
      <Footer />
    </>
  );
}
