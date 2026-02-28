import Header from "@/components/_common/header";
import AboutHeroSection from "@/components/about/hero-section";
import AboutProblemSection from "@/components/about/problem-section";
import WhyItMattersSection from "@/components/about/why-it-matters-section";
import WhoWeAreSection from "@/components/about/who-we-are-section";
import WhatWeBelieveSection from "@/components/about/what-we-believe-section";
import StructuredSystemSection from "@/components/about/structured-system-section";
import ByTheNumbersSection from "@/components/about/by-the-numbers-section";

export default function About() {
  return (
    <main className="min-h-screen max-w-full overflow-x-clip">
      <Header />
      <AboutHeroSection />
      <WhoWeAreSection />
      <WhatWeBelieveSection />
      <AboutProblemSection />
      <StructuredSystemSection />
      <ByTheNumbersSection />
      <WhyItMattersSection />
    </main>
  );
}
