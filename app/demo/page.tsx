// import Header from "@/components/_common/header";
// import DemoHeroSection from "@/components/demo/demo-hero-section";
// import DemoGraphicSection from "@/components/demo/demo-graphic-section";
// import DemoCtaSection from "@/components/demo/demo-cta-section";

// export default function DemoPage() {
//   return (
//     <main className="max-w-full overflow-x-clip">
//       <Header />
//       <DemoHeroSection />
//       <DemoGraphicSection />
//       <DemoCtaSection />
//     </main>
//   );
// }


import CtaSection from "@/components/_common/cta-section";
import FooterSection from "@/components/_common/footer-section";
import Header from "@/components/_common/header";
import Separator from "@/components/_ui/separator";
import ProblemSection from "@/components/home/problem-section";
import TrustedLogosSection from "@/components/overview/trusted-logos-section";
import ContactSection from "@/components/partners/contact-section";

export default function PartnersPage() {
  return (
    <main className="max-w-full overflow-x-clip">
      <Header />
      <ContactSection />
      <TrustedLogosSection />
      <Separator />
      <CtaSection />
      <FooterSection />
    </main>
  );
}
