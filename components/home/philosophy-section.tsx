function PhilosophySection() {
  return (
    <section id="philosophy" className="relative z-0">

      <div className="px-global bg-[#FAFAFA]">
        <div className="max-w-global mx-auto border-x border-[#E5E7EB]">
          <div className="flex flex-col items-center gap-10 py-10">
            <div className="text-center text-[24px] leading-8 tracking-[-0.02em]">
              <span className="text-[24px]">AI shouldn&apos;t replace</span>{" "}
              <span className="text-[24px] text-[#202020]">your team.</span>
            </div>

            <div className="flex h-[400px] w-full max-w-[46.625rem] items-center justify-center rounded-xl bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.08),0_1px_1px_-0.5px_rgba(51,51,51,0.05),0_3px_3px_-1.5px_rgba(51,51,51,0.05),0_6px_6px_-3px_rgba(51,51,51,0.05),0_12px_12px_-6px_rgba(51,51,51,0.05),0_24px_24px_-12px_rgba(51,51,51,0.05)]">
              <span className="text-[16px] leading-6 tracking-[-0.01em]">
                Philosophy Graphic
              </span>
            </div>

            <div className="flex w-full max-w-[46.625rem] flex-col items-center gap-3">
              <div
                className="max-w-[20em] text-center text-[28px] leading-6 font-bold tracking-[-0.02em] text-[#202020]"
                style={{ fontFamily: "var(--font-caveat), cursive" }}
              >
                It should remove the friction that keeps them from performing at
                their <span className="text-[#006FFF]">highest level.</span>
              </div>
              <div className="max-w-[21.875rem] text-center text-[14px] leading-[22px] tracking-[-0.01em]">
                Structurely exists to eliminate unfinished follow-up. so your
                team can focus on real opportunities.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PhilosophySection;
