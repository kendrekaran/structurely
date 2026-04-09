function WhyItMattersSection() {
  const facts = [
    "Inbound volume has increased.",
    "Customer expectations have risen.",
    "Sales teams are managing more conversations than ever.",
  ];

  return (
    <section id="why-it-matters" className="relative z-0">
      <div className="px-global">
        <div className="max-w-global md:py-section-md mx-auto flex flex-col items-center gap-3 border-x border-b border-[#E5E7EB] py-[24px] text-center">
          <h2 data-reveal="words" className="max-w-[11em] text-[28px] leading-[36px]  tracking-[-0.02em] md:text-[48px] md:leading-[54px] md:tracking-[-0.03em]">Why It Matters</h2>
          <p className="px-[12px] max-w-[27.375em] w-full md:max-w-[488px]  text-center">
            Over time, we learned that successful follow-up requires more than
            speed.
          </p>
        </div>
      </div>

      <div className="px-global">
        <div className="max-w-global mx-auto flex flex-col divide-y divide-[#E5E7EB] border-x border-b border-[#E5E7EB] bg-white md:flex-row md:divide-x md:divide-y-0">
          {facts.map((fact) => (
            <div
              key={fact}
              className="flex flex-1 items-center justify-center px-6  py-[16px] text-center md:px-10 md:py-8"
            >
              <p className="text-[14px] leading-[20px] tracking-[-0.006em]">
                {fact}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="px-global border-b border-[#E5E7EB]">
        <div className="max-w-global mx-auto flex flex-col items-center px-[12px] gap-4 md:gap-3 border-x border-[#E5E7EB] py-6 text-center">
          <p className="max-w-[29.14em]">
            <span className="text-foreground text-[14px] leading-[20px] tracking-[-0.01em]">
              Execution can no longer depend on individual capacity alone.<br className="md:hidden" />
            </span>
            <span className="text-heading text-[14px] leading-[20px] tracking-[-0.01em]">
              {" "}
              Structurely exists to provide that consistency.
            </span>
          </p>
          <p
            className="max-w-[29.875em]  text-center text-[16px] leading-6 font-bold tracking-[-0.02em]"
          >
            <span className="text-primary">Organizations that </span>
            <span className="text-heading">
              handle inbound demand consistently have an advantage.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}

export default WhyItMattersSection;
