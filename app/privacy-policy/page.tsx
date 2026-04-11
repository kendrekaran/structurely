import Header from "@/components/_common/header";
import FooterSection from "@/components/_common/footer-section";
import PrivacyPolicyContent from "@/components/privacy-policy/privacy-policy-content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Structurely",
  description:
    "Read the Structurely privacy policy to understand how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="max-w-full overflow-x-clip">
      <Header />
      <PrivacyPolicyContent />
      <FooterSection />
    </main>
  );
}
