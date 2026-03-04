function WhyItMattersSection() {
  const facts = [
    "Inbound volume has increased.",
    "Customer expectations have risen.",
    "Sales teams are managing more conversations than ever.",
  ];

  return (
    <section id="why-it-matters" className="relative z-0">
      <div className="px-global ">
        <div className="max-w-global mx-auto border-b  flex flex-col items-center gap-3 border-x border-[#E5E7EB] py-section-md text-center">
          <h2 className="max-w-[11em]">Why It Matters</h2>
          <p className="max-w-[27.375em] text-center">
            Over time, we learned that successful follow-up requires more than
            speed.
          </p>
        </div>
      </div>

      <div className="px-global  ">
        <div className="max-w-global mx-auto flex bg-white divide-x border-b  divide-[#E5E7EB] border-x border-[#E5E7EB]">
          {facts.map((fact) => (
            <div
              key={fact}
              className="flex flex-1 items-center justify-center px-10 py-8 text-center"
            >
              <p className="text-[14px] leading-[20px] tracking-[-0.006em]">
                {fact}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="px-global border-b border-[#E5E7EB]">
        <div className="max-w-global mx-auto flex flex-col items-center gap-3 border-x border-[#E5E7EB] py-6 text-center">
          <p className="max-w-[29.14em] ">
            <span className="text-foreground text-[14px] leading-[20px] tracking-[-0.01em]">
              Execution can no longer depend on individual capacity alone.
            </span>
            <span className="text-heading text-[14px] leading-[20px] tracking-[-0.01em]">
              {" "}
              Structurely exists to provide that consistency.
            </span>
          </p>
          <p
            className="max-w-[29.875em] text-[16px] leading-[24px] font-bold tracking-[-0.02em]"
            style={{ fontFamily: "var(--font-caveat)" }}
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
