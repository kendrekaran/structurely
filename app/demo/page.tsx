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
import ProblemSection from "@/components/home/problem-section";
import TrustedLogosSection from "@/components/overview/trusted-logos-section";
import ContactSection from "@/components/partners/contact-section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Request a demo - Structurely",
  description:
    "Request a demo to see how Structurely automates lead qualification and follow-up with AI.",
};

export default function PartnersPage() {
  return (
    <main className="max-w-full overflow-x-clip">
      <Header />
      <ContactSection />
      <TrustedLogosSection />
      <div className="px-global">
        <div className="h-px max-w-global mx-auto bg-[#E5E7EB]"></div>
      </div>
      <CtaSection />
      <FooterSection />
    </main>
  );
}
