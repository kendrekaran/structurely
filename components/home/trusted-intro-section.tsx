function TrustedIntroSection() {
  return (
    <section id="trusted-intro" className="px-global relative z-0">
      <div className="max-w-global mx-auto border-x border-[#E5E7EB]">
        <div className="px-global py-section-md flex flex-col items-center gap-4">
          <div className="proof-badge flex items-center rounded-lg bg-white px-4 py-2 shadow-[0_0_0_1px_rgba(0,0,0,0.08),0_1px_1px_-0.5px_rgba(51,51,51,0.05),0_3px_3px_-1.5px_rgba(51,51,51,0.05),0_6px_6px_-3px_rgba(51,51,51,0.05)]">
            <span className="text-[12px] leading-4 font-medium text-[var(--foreground)]">
              Proof
            </span>
          </div>
          <h2 className="max-w-[17em] text-center">
            Trusted by <span className="text-[var(--primary)]">leading</span>{" "}
            teams across sales-driven industries
          </h2>
        </div>
      </div>
    </section>
  );
}

export default TrustedIntroSection;
