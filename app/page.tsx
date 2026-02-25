import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Testimonials } from "@/components/testimonials";
import { Stats } from "@/components/stats";
import { CTA } from "@/components/cta";
import { Footer } from "@/components/footer";
import { PricingSection } from "@/components/pricing";
import { FAQSection } from "@/components/faq-section";
import { FeaturesTab } from "@/components/features-tab-section";
import { Packages } from "@/components/packages";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen selection:bg-primary selection:text-primary-foreground">
      <Navbar />
      <main className="mx-auto sm:max-w-6xl border-x">
        <Hero />
        {/* <div className="flex justify-center border-b bg-red-300">
          <CopyCode />
        </div> */}
        <Packages />
        <Stats />
        <FeaturesTab />
        <PricingSection />
        <FAQSection />
        {/* <Testimonials /> */}
        <CTA />
        <Footer />
      </main>
    </div>
  );
}
