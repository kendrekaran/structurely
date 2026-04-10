import type { Metadata } from "next";
import PricingPageClient from "@/components/pricing/pricing-page-client";

export const metadata: Metadata = {
  title: "Pricing - Structurely",
  description:
    "Explore Structurely pricing plans for AI-powered lead qualification, outreach, and follow-up workflows.",
};

export default function PricingPage() {
  return <PricingPageClient />;
}
