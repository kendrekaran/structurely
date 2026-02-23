import Header from "@/components/common/header";
import HeroSection from "@/components/overview/hero-section";
import HeroAnimationSection from "@/components/overview/hero-animation-section";

export default function Overview() {
  return (
    <>
      <main className="max-h-screen max-w-full overflow-x-clip">
        <Header />
        <HeroSection />
        <HeroAnimationSection />
      </main>
    </>
  );
}
