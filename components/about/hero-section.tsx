function AboutHeroSection() {
  return (
    <section id="about-hero" className="relative z-0">
      <div className="px-global border-b border-[#E5E7EB]">
        <div className="max-w-global mx-auto py-16 flex flex-col items-center gap-4 text-center">
          <h2 className="max-w-[13.6em]">Structurely</h2>
          <p className="max-w-[27.6em] text-center">
            For over a decade, Structurely has helped businesses capture,
            qualify, follow-up and convert inbound demand.
          </p>
        </div>
      </div>
      <div className="px-global border-b border-[#E5E7EB]">
        <div className="max-w-global mx-auto py-6 flex items-center justify-center">
          <p className="max-w-[34.1em] text-center text-[14px] leading-[20px] tracking-[-0.01em]">
            <span className="text-foreground">
              We build systems that ensure inbound opportunities are handled{" "}
            </span>
            <span className="font-semibold text-heading">
              consistently and completely.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutHeroSection;
