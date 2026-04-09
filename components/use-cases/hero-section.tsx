function HeroSection() {
  return (
    <section id="hero" className="relative z-0">
      <div className="px-global">
        <div className="max-w-global py-[64px] md:py-section-md mx-auto flex flex-col items-center gap-3.5 md:gap-4 px-[12px] md:px-0 border-x border-[#E5E7EB]">
          <h2 data-reveal="words" className="max-w-[11.08em] md:max-w-[653px] text-center text-[32px] md:text-[48px] leading-[44px] md:leading-[54px] font-normal md:font-medium tracking-[-0.04em] md:tracking-[-0.03em]">
          This is built for High Volume Revenue Teams that need to scale and nurture.
          </h2>
          <p className="max-w-[35em] md:max-w-[742px] text-center text-[16px] md:text-[18px] leading-[26px] md:leading-[28px] tracking-[-0.01em]">
            <span className="text-[#006FFF]">Structurely AI</span> supports any
            organization where speed, qualification,<br/> and follow-up determine
            revenue.
          </p>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
