"use client";

import Header from "@/components/_common/header";
import HeroSection from "@/components/home/hero-section";
import HeroAnimationSection from "@/components/home/hero-animation-section";
import ProblemSection from "@/components/home/problem-section";
import ConsequenceSection from "@/components/home/consequence-section";
import SolutionSection from "@/components/home/solution-section";
import SolutionIntroSection from "@/components/home/solution-intro-section";
import SolutionOutcomesSection from "@/components/home/solution-outcomes-section";
import ProductsSection from "@/components/home/products-section";
import TrustedSection from "@/components/home/trusted-section";
import PhilosophySection from "@/components/home/philosophy-section";
import CtaSection from "@/components/_common/cta-section";
import Separator from "@/components/_ui/separator";
import InboundDemandSection from "@/components/home/inbound-section";

export default function Home() {
  return (
    <>
      <main className="min-h-screen max-w-full overflow-x-clip">
        <Header />
        <HeroSection />
        <Separator />
        <HeroAnimationSection />
        <Separator />
        <ProblemSection />
        <Separator />
        <ConsequenceSection />
        <Separator />
        <InboundDemandSection />
        <Separator />
        <SolutionIntroSection />
        <Separator />
        <SolutionSection />
        <Separator />
        <SolutionOutcomesSection />
        <Separator />
        <ProductsSection />
        <TrustedSection />
        <PhilosophySection />
        <CtaSection />
      </main>
    </>
  );
}
