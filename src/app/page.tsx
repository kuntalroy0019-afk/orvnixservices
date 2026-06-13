import Header from "@/components/Header";
import RidgeCanvas from "@/components/RidgeCanvas";
import ParallaxBG from "@/components/ParallaxBG";
import HeroDotMatrix from "@/components/HeroDotMatrix";
import Hero from "@/components/Hero";
import AboutImpact from "@/components/AboutImpact";
import Services from "@/components/Services";
import Reach from "@/components/Reach";
import Process from "@/components/Process";
import Benefits from "@/components/Benefits";
import Comparison from "@/components/Comparison";
import Work from "@/components/Work";
import Workspace from "@/components/Workspace";
import Studio from "@/components/Studio";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";

export default function Home() {
  return (
    <>
      <JsonLd />
      <Header />
      <main className="relative z-[2]">
        {/* One persistent canvas — hero, about and the stats all scroll over
            the same washed image, fading to white before the next chapter. */}
        <div className="relative">
          <div aria-hidden className="absolute inset-0 overflow-hidden opacity-40 md:opacity-100">
            <ParallaxBG>
              <div className="animate-settle absolute inset-0">
                <RidgeCanvas />
              </div>
            </ParallaxBG>
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, var(--background) 4%, rgba(255,255,255,0.12) 38%, rgba(255,255,255,0.3) 78%, var(--background) 94%)",
              }}
            />
            <HeroDotMatrix className="absolute inset-0 h-full w-full" />
          </div>
          <div className="relative">
            {/* Frame 2 — typographic hero */}
            <Hero />
            {/* Frame 3 — about statement + impact statistics */}
            <AboutImpact />
          </div>
        </div>
        {/* Frame 4 — core offering, scroll theater with mini-stats */}
        <Services />
        {/* Frame 5 — geographic reach + partner callout */}
        <Reach />
        <Process />
        <Benefits />
        <Comparison />
        <Work />
        <Workspace />
        <Studio />
        <Testimonials />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
