import Header from "@/components/_common/header";
import HeroSection from "@/components/overview/hero-section";
import HeroAnimationSection from "@/components/overview/hero-animation-section";
import OverviewProblemSection from "@/components/overview/problem-section";
import StructuredSystemSection from "@/components/overview/structured-system-section";
import CrmIntegrationSection from "@/components/overview/crm-integration-section";
import OutcomesSection from "@/components/overview/outcomes-section";
import CtaSection from "@/components/_common/cta-section";
import Separator from "@/components/_ui/separator";
import BottomSpace from "@/components/_common/bottom-space";

export default function Overview() {
  return (
    <>
      <main className="max-w-full overflow-x-clip">
        <Header />
        <HeroSection />
        <Separator />
        <HeroAnimationSection />
        <Separator />
        <OverviewProblemSection />
        <Separator />
        <StructuredSystemSection />
        <Separator />
        <CrmIntegrationSection />
        <Separator />
        <OutcomesSection />
        <Separator />
        <CtaSection variant="overview" />
        <Separator />
        <BottomSpace />
      </main>
    </>
  );
}
