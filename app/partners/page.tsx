import FooterSection from "@/components/_common/footer-section";
import Header from "@/components/_common/header";
import ProblemSection from "@/components/home/problem-section";
import TrustedLogosSection from "@/components/overview/trusted-logos-section";
import ContactSection from "@/components/partners/contact-section";

export default function PartnersPage() {
  return (
    <main className="max-w-full overflow-x-clip">
      <Header />
      <ContactSection />
      <TrustedLogosSection />
      <ProblemSection />
      <FooterSection />
    </main>
  );
}
