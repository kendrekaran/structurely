import Header from "@/components/_common/header";
import Separator from "@/components/_ui/separator";
import HeroSection from "@/components/use-cases/hero-section";
import TabsFilter from "@/components/use-cases/tabs-filter";
import IndustrySelectorSection from "@/components/use-cases/industry-selector-section";
import LeadEnvironmentsSection from "@/components/use-cases/lead-environments-section";
import FooterSection from "@/components/_common/footer-section";
import CtaSection from "@/components/_common/cta-section";

export default function UseCases() {
  return (
    <main className="min-h-screen max-w-full overflow-x-clip">
      <Header />
      <HeroSection />
      {/* <TabsFilter /> */}
      <Separator />
      <IndustrySelectorSection />
      <Separator />
      <LeadEnvironmentsSection />
      <CtaSection />
      <FooterSection />
    </main>
  );
}
