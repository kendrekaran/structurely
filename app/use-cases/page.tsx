import Header from "@/components/_common/header";
import Separator from "@/components/_ui/separator";
import HeroSection from "@/components/use-cases/hero-section";
import IndustriesSection from "@/components/use-cases/industries-section";
import LeadEnvironmentsSection from "@/components/use-cases/lead-environments-section";

export default function UseCases() {
  return (
    <main className="min-h-screen max-w-full overflow-x-clip">
      <Header />
      <HeroSection />
      <Separator />
      <IndustriesSection />
      <Separator />
      <LeadEnvironmentsSection />
    </main>
  );
}
