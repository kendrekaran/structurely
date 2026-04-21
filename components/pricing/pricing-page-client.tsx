"use client";

import { useState } from "react";
import Header from "@/components/_common/header";
import PricingHeroSection, {
  type BillingCycle,
} from "@/components/pricing/pricing-hero-section";
import PricingCardsSection from "@/components/pricing/pricing-cards-section";
import PricingComparisonCardsSection from "@/components/pricing/pricing-comparison-cards-section";
import PricingWhiteLabelSection from "@/components/pricing/pricing-white-label-section";
import PricingCtaSection from "@/components/pricing/pricing-cta-section";
import LeadStoreSection from "@/components/pricing/lead-store-section";
import PricingAddonSection from "@/components/pricing/pricing-addon-section";
import PricingOnboardingSection from "@/components/pricing/pricing-onboarding-section";
import ActionCreditSection from "@/components/pricing/action-credit-section";
import ComparePlansSection from "@/components/pricing/compare-plans-section";
import FaqSection from "@/components/pricing/faq-section";
import PilotSection from "@/components/pricing/pilot-section";
import LocalNumbersSection from "@/components/pricing/local-numbers-section";
import Separator from "@/components/_ui/separator";
import FooterSection from "@/components/_common/footer-section";

export default function PricingPageClient() {
  const [billing, setBilling] = useState<BillingCycle>("annual");

  return (
    <main className="min-h-screen max-w-full overflow-x-clip">
      <Header />
      <PricingHeroSection billing={billing} onBillingChange={setBilling} />
      {/* <Separator /> */}
      {/* <PricingCardsSection billing={billing} onBillingChange={setBilling} /> */}
      <Separator />
      <PricingComparisonCardsSection />
      <Separator />
      <PricingWhiteLabelSection />
      {/* <Separator /> */}
      {/* <PricingCtaSection /> */}
      <Separator />
      <LeadStoreSection />

      <Separator />
      {/* <LocalNumbersSection /> */}
      {/* <Separator /> */}
      <PricingAddonSection />
      <Separator />
      <ActionCreditSection />
      <Separator />
      <PricingOnboardingSection />
      {/* <Separator /> */}
      <ComparePlansSection />
      <Separator />
      <FaqSection />
      <PilotSection />
      <FooterSection />
    </main>
  );
}
