"use client";

import { useState } from "react";
import Header from "@/components/_common/header";
import PricingHeroSection, {
  type BillingCycle,
} from "@/components/pricing/pricing-hero-section";
import PricingCardsSection from "@/components/pricing/pricing-cards-section";
import PricingAddonSection from "@/components/pricing/pricing-addon-section";
import ActionCreditSection from "@/components/pricing/action-credit-section";
import OnboardingSection from "@/components/pricing/onboarding-section";
import ComparePlansSection from "@/components/pricing/compare-plans-section";
import FaqSection from "@/components/pricing/faq-section";
import PilotSection from "@/components/pricing/pilot-section";
import SpamMitigationSection from "@/components/pricing/spam-mitigation-section";
import Separator from "@/components/_ui/separator";

export default function PricingPage() {
  const [billing, setBilling] = useState<BillingCycle>("annual");

  return (
    <main className="min-h-screen max-w-full overflow-x-clip">
      <Header />
      <PricingHeroSection billing={billing} onBillingChange={setBilling} />
      <Separator />
      <PricingCardsSection billing={billing} onBillingChange={setBilling} />
      <Separator />
      <PricingAddonSection />
      <Separator />
      <SpamMitigationSection />
      <Separator />
      <ActionCreditSection />
      <Separator />
      <OnboardingSection />
      <Separator />
      <PilotSection />
      <Separator />
      <ComparePlansSection />
      <Separator />
      <FaqSection />
    </main>
  );
}
