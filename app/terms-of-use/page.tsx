import Header from "@/components/_common/header";
import FooterSection from "@/components/_common/footer-section";
import TermsOfUseContent from "@/components/terms-of-use/terms-of-use-content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use - Structurely",
  description:
    "Read the Structurely terms of use governing access to structurely.com and our services.",
};

export default function TermsOfUsePage() {
  return (
    <main className="max-w-full overflow-x-clip">
      <Header />
      <TermsOfUseContent />
      <FooterSection />
    </main>
  );
}
