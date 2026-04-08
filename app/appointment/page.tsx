import Header from "@/components/_common/header";
import CtaSection from "@/components/_common/cta-section";
import FooterSection from "@/components/_common/footer-section";
import HeroSection from "@/components/appointment/hero-section";
import HeroAnimationSection from "@/components/email-ai/hero-animation-section";
import PowerDialerSection from "@/components/email-ai/power-dialer-section";
import PhoneTransfersSection from "@/components/email-ai/phone-transfers-section";
import StatsSection from "@/components/email-ai/stats-section";
import CrmIntegrationSection from "@/components/email-ai/crm-integration-section";
import TrustedLogosSection from "@/components/overview/trusted-logos-section";

export default function AppointmentPage() {
  return (
    <main className="min-h-screen max-w-full overflow-x-clip">
      <Header />
      <HeroSection />
      <HeroAnimationSection />
      <PowerDialerSection />
      <PhoneTransfersSection />
      <StatsSection />
      <CrmIntegrationSection />
      <TrustedLogosSection />
      <CtaSection />
      <FooterSection />
    </main>
  );
}
