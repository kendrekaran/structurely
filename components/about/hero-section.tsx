function AboutHeroSection() {
  return (
    <section id="about-hero" className="relative z-0">
      <div className="px-global">
        <div className="max-w-global md:py-section-md mx-auto flex flex-col items-center gap-3.5 md:gap-4 border-x border-[#E5E7EB] py-[40px] text-center">
          <h2 data-reveal="words" className="max-w-[11.08em] text-center text-[32px] md:text-[48px] leading-[44px] md:leading-[54px] font-normal md:font-medium tracking-[-0.04em] md:tracking-[-0.03em]">Structurely</h2>
          <p className="max-w-[27.6em] text-center text-[16px] leading-[26px] tracking-[-0.01em] md:text-[18px] md:leading-[28px]">
            For over a decade, Structurely has helped businesses capture,
            qualify, follow-up and convert inbound demand.
          </p>
        </div>
        <div className=" ">
          <div className="max-w-global mx-auto flex items-center justify-center border border-[#E5E7EB] bg-[#FFFFFF] px-[12px] py-[24px]">
            <p className="max-w-[34.1em] text-center text-[14px] leading-[20px] tracking-[-0.01em]">
              <span className="text-foreground text-[14px] leading-[20px] tracking-[-0.01em]">
                We build systems that ensure inbound opportunities are
                handled{" "}
              </span>
              <span className="text-heading text-[14px] leading-[20px] tracking-[-0.01em]">
                consistently and completely.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutHeroSection;
