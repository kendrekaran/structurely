function HeroSection() {
  return (
    <section id="hero" className="relative z-0">
      <div className="px-global">
        <div className="max-w-global md:py-section-md mx-auto flex flex-col items-center gap-3.5 border-x border-[#E5E7EB] px-[12px] py-[64px] md:gap-4 md:px-0">
          <h2
            data-reveal="words"
            className="max-w-[11.08em] text-center text-[32px] leading-[44px] font-medium tracking-[-0.04em] md:max-w-[653px] md:text-[48px] md:leading-[54px] md:tracking-[-0.03em]"
          >
            This is built for high-volume revenue teams that need to scale and
            nurture.
          </h2>
          <p className="max-w-[35em] text-center text-[16px] leading-[26px] tracking-[-0.01em] md:max-w-[742px] md:text-[18px] md:leading-[28px]">
            <span className="text-[#006FFF]">Structurely AI</span> supports any
            organization where speed, qualification,
            <br /> and follow-up determine revenue.
          </p>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
