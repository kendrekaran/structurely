"use client";

import Header from "@/components/common/header";
import HeroSection from "@/components/home/hero-section";
import HeroAnimationSection from "@/components/home/hero-animation-section";
import ProblemSection from "@/components/home/problem-section";
import ConsequenceSection from "@/components/home/consequence-section";
import SolutionSection from "@/components/home/solution-section";
import ProductsSection from "@/components/home/products-section";
import TrustedSection from "@/components/home/trusted-section";
import PhilosophySection from "@/components/home/philosophy-section";
import CtaSection from "@/components/common/cta-section";

export default function Home() {
  return (
    <>
      <main className="max-h-screen max-w-full overflow-x-clip">
        <Header />
        <HeroSection />
        <HeroAnimationSection />
        <ProblemSection />
        <ConsequenceSection />
        <SolutionSection />
        <ProductsSection />
        <TrustedSection />
        <PhilosophySection />
        <CtaSection />
      </main>
    </>
  );
}
