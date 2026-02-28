function PhilosophySection() {
  return (
    <section id="philosophy" className="relative z-0">
      <div className=" px-global">
        <div className="max-w-global mx-auto border-x border-[#E5E7EB]">
          <div className="py-16 flex flex-col items-center gap-4">
            <div className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-white overflow-hidden shadow-[0_0_0_1px_rgba(0,0,0,0.08),0_1px_1px_-0.5px_rgba(51,51,51,0.05),0_3px_3px_-1.5px_rgba(51,51,51,0.05),0_6px_6px_-3px_rgba(51,51,51,0.05),0_12px_12px_-6px_rgba(51,51,51,0.05),0_24px_24px_-12px_rgba(51,51,51,0.05)]">
              <span className="text-[#646464] text-[12px] font-medium leading-4">Philosophy</span>
            </div>
            <h2 className="text-center max-w-[11em]">
              Capacity Is the new competitive{" "}
              <span className="text-[#006FFF]">advantage</span>
            </h2>
          </div>
        </div>
      </div>

      <div className="bg-[#FAFAFA]  px-global">
        <div className="max-w-global mx-auto border-x border-[#E5E7EB]">
          <div className="py-10 flex flex-col items-center gap-10">
            <div className="text-[24px] leading-8 tracking-[-0.02em] text-center">
              <span className="text-[#646464]">AI shouldn&apos;t replace</span>{" "}
              <span className="text-[#202020] ">your team.</span>
            </div>

            <div className="w-full max-w-[46.625rem] h-[400px] bg-white rounded-xl flex items-center justify-center shadow-[0_0_0_1px_rgba(0,0,0,0.08),0_1px_1px_-0.5px_rgba(51,51,51,0.05),0_3px_3px_-1.5px_rgba(51,51,51,0.05),0_6px_6px_-3px_rgba(51,51,51,0.05),0_12px_12px_-6px_rgba(51,51,51,0.05),0_24px_24px_-12px_rgba(51,51,51,0.05)]">
              <span className="text-[#646464] text-[16px] leading-6 tracking-[-0.01em]">Philosophy Graphic</span>
            </div>

            <div className="flex flex-col items-center gap-3 w-full max-w-[46.625rem]">
              <div className="max-w-[20em] text-[28px] leading-6 tracking-[-0.02em] font-bold text-center text-[#202020]" style={{ fontFamily: "var(--font-caveat), cursive" }}>
                It should remove the friction that keeps them from performing at their{" "}
                <span className="text-[#006FFF]">highest level.</span>
              </div>
              <div className="text-[14px] leading-5 tracking-[-0.01em] text-[#646464] text-center max-w-[29.875rem]">
                Structurely exists to eliminate unfinished follow-up — so your team can focus on real opportunities.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PhilosophySection;
