"use client";

import { useState } from "react";
import Header from "@/components/_common/header";
import PricingHeroSection, { type BillingCycle } from "@/components/pricing/pricing-hero-section";
import PricingCardsSection from "@/components/pricing/pricing-cards-section";
import PricingAddonSection from "@/components/pricing/pricing-addon-section";
import ActionCreditSection from "@/components/pricing/action-credit-section";
import OnboardingSection from "@/components/pricing/onboarding-section";
import ComparePlansSection from "@/components/pricing/compare-plans-section";
import FaqSection from "@/components/pricing/faq-section";
import CtaSection from "@/components/_common/cta-section";

export default function PricingPage() {
  const [billing, setBilling] = useState<BillingCycle>("annual");

  return (
    <main className="max-w-full overflow-x-clip">
      <Header />
      <PricingHeroSection billing={billing} onBillingChange={setBilling} />
      <PricingCardsSection billing={billing} />
      <PricingAddonSection />
      <ActionCreditSection />
      <OnboardingSection />
      <ComparePlansSection />
      <FaqSection />
      <CtaSection />
    </main>
  );
}
