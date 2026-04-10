import Header from "@/components/_common/header";
import Separator from "@/components/_ui/separator";
import HeroSection from "@/components/use-cases/hero-section";
import IndustrySelectorSection from "@/components/use-cases/industry-selector-section";
import LeadEnvironmentsSection from "@/components/use-cases/lead-environments-section";
import FooterSection from "@/components/_common/footer-section";
import CtaSection from "@/components/_common/cta-section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Use Cases - Structurely",
  description:
    "Discover how teams use Structurely to automate lead engagement across industries and workflows.",
};

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
