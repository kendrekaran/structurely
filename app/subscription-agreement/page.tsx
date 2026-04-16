import Header from "@/components/_common/header";
import FooterSection from "@/components/_common/footer-section";
import SubscriptionAgreementContent from "@/components/subscription-agreement/subscription-agreement-content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Master Subscription Agreement (MSA) - Structurely",
  description:
    "Master Subscription Agreement for Structurely platform services, including definitions, subscription terms, fees, and legal terms.",
};

export default function SubscriptionAgreementPage() {
  return (
    <main className="max-w-full overflow-x-clip">
      <Header />
      <SubscriptionAgreementContent />
      <FooterSection />
    </main>
  );
}
