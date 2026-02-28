function WhyItMattersSection() {
  const facts = [
    "Inbound volume has increased.",
    "Customer expectations have risen.",
    "Sales teams are managing more conversations than ever.",
  ];

  return (
    <section id="why-it-matters" className="relative z-0">
      <div className="flex flex-col items-center px-global py-16 gap-3 text-center border-b border-[#E5E7EB]">
        <h2 className="max-w-[11em]">Why It Matters</h2>
        <p className="max-w-[27.375em] text-center">
          Over time, we learned that successful follow-up requires more than
          speed.
        </p>
      </div>

      <div className="flex divide-x divide-[#E5E7EB] border-y border-[#E5E7EB]">
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

      <div className="flex flex-col items-center gap-3 px-global py-6 border-b border-[#E5E7EB] text-center">
        <p className="text-[14px] leading-[20px] tracking-[-0.01em] max-w-[34.14em]">
          <span className="text-foreground">
            Execution can no longer depend on individual capacity alone.
          </span>
          <span className="text-heading font-semibold">
            {" "}
            Structurely exists to provide that consistency.
          </span>
        </p>
        <p
          className="text-[16px] leading-[24px] tracking-[-0.02em] font-bold max-w-[29.875em]"
          style={{ fontFamily: "var(--font-caveat)" }}
        >
          <span className="text-primary">Organizations that </span>
          <span className="text-heading">
            handle inbound demand consistently have an advantage.
          </span>
        </p>
      </div>
    </section>
  );
}

export default WhyItMattersSection;
