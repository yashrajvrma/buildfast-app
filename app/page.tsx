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

export default function Home() {
  return (
    <div className="min-h-screen selection:bg-primary selection:text-primary-foreground">
      <Navbar />
      <main>
        <Hero />
        <Packages />
        <Stats />
        <FeaturesTab />
        <PricingSection />
        <FAQSection />
        {/* <Testimonials /> */}
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
