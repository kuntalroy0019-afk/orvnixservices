import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Process from "@/components/Process";
import Services from "@/components/Services";
import Benefits from "@/components/Benefits";
import Comparison from "@/components/Comparison";
import Work from "@/components/Work";
import Studio from "@/components/Studio";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="relative z-[2]">
        <Hero />
        <Process />
        <Services />
        <Benefits />
        <Comparison />
        <Work />
        <Studio />
        <Testimonials />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
