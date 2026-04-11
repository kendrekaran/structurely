import Header from "@/components/_common/header";
import FooterSection from "@/components/_common/footer-section";
import SmsTermsContent from "@/components/sms-terms/sms-terms-content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SMS Terms - Structurely",
  description:
    "Read the Structurely SMS Terms governing text messages sent by Structurely to opted-in individuals.",
};

export default function SmsTermsPage() {
  return (
    <main className="max-w-full overflow-x-clip">
      <Header />
      <SmsTermsContent />
      <FooterSection />
    </main>
  );
}
