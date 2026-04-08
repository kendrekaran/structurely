import Header from "@/components/_common/header";
import HeroSection from "@/components/overview/hero-section";
import LiveDemoSection from "@/components/home/live-demo-section";
import HeroAnimationSection from "@/components/overview/hero-animation-section";
import TrustedLogosSection from "@/components/overview/trusted-logos-section";
import AutomateVideoSection from "@/components/overview/automate-video-section";
import StatsSection from "@/components/overview/stats-section";
import OverviewProblemSection from "@/components/overview/problem-section";
import CrmLogosSection from "@/components/overview/crm-logos-section";
import AiFeaturesSection from "@/components/overview/ai-features-section";
import HowItWorksSection from "@/components/overview/how-it-works-section";
import SmartOutreachSection from "@/components/overview/smart-outreach-section";
import StructuredSystemSection from "@/components/overview/structured-system-section";
import CrmIntegrationSection from "@/components/overview/crm-integration-section";
import OutcomesSection from "@/components/overview/outcomes-section";
import UseCasesSection from "@/components/overview/use-cases-section";
import CtaSection from "@/components/_common/cta-section";
import FooterSection from "@/components/_common/footer-section";
import Separator from "@/components/_ui/separator";
import BottomSpace from "@/components/_common/bottom-space";

export default function Overview() {
  return (
    <>
      <main className="max-w-full overflow-x-clip">
        <Header />
        <HeroSection />
        <Separator />
        <LiveDemoSection />
        <Separator />
        <HeroAnimationSection />
        <Separator />
        <TrustedLogosSection />
        <Separator />
        <AutomateVideoSection />
        <StatsSection />
        <Separator />
        <OverviewProblemSection />
        <Separator />
        <CrmLogosSection />
        <Separator />
        <AiFeaturesSection />
        <Separator />
        <HowItWorksSection />
        <Separator />
        <SmartOutreachSection />
        {/* <Separator />
        <StructuredSystemSection />
        <Separator />
        <CrmIntegrationSection /> 
        <Separator />
        <OutcomesSection /> */}
        <Separator />
        <UseCasesSection />
        <Separator />
        <CtaSection variant="overview" />
        <FooterSection />
      </main>
    </>
  );
}
