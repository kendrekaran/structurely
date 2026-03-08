function WhatWeBelieveSection() {
  return (
    <section id="what-we-believe" className="relative z-0">
      <div className="px-global">
        <div className="max-w-global py-section-md mx-auto flex flex-col items-center gap-4 border-x border-[#E5E7EB]  text-center">
          <div className="flex items-center justify-center rounded-lg bg-white px-4 py-2 shadow-[0_0_0_1px_rgba(0,0,0,0.08),0_1px_1px_-0.5px_rgba(51,51,51,0.05),0_3px_3px_-1.5px_rgba(51,51,51,0.05),0_6px_6px_-3px_rgba(51,51,51,0.05),0_12px_12px_-6px_rgba(51,51,51,0.05),0_24px_24px_-12px_rgba(51,51,51,0.05)]">
            <span className="text-[12px] leading-4 font-medium">
              What We Believe
            </span>
          </div>
          <h2 className="max-w-[11em] tracking-[-0.03em]">
            What We <span className="text-[#006FFF]">Believe</span>
          </h2>
        </div>
      </div>

      <div className="relative">
        <div className="px-global">
          <div className="max-w-global mx-auto border-x border-b border-[#E5E7EB]">
            <div className="flex justify-center">
              <div className="flex overflow-hidden rounded-t-xl border-x border-t border-[#E5E7EB] bg-white px-4 py-2">
                <span className="text-[14px] leading-5 tracking-[-0.01em]">
                  Inbound demand is valuable.
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="px-global">
          <div className="max-w-global mx-auto border-x border-b border-[#E5E7EB]">
            <div className="grid grid-cols-1 divide-y divide-[#E5E7EB] md:grid-cols-3 md:divide-x md:divide-y-0">
              <div className="flex w-full max-h-[84px] items-center justify-center px-[12px]  py-6 last:pr-0 md:px-[40px] md:py-[32px] md:last:px-8">
                <p className="text-[14px] leading-[20px] tracking-[-0.01em]">
                  It deserves timely engagement.
                </p>
              </div>
              <div className="flex w-full max-h-[84px] items-center justify-center px-[12px]  py-6 md:px-8 md:py-8">
                <p className="text-[14px] leading-[20px] tracking-[-0.01em]">
                  It requires consistent qualification.
                </p>
              </div>
              <div className="flex w-full max-h-[84px] items-center justify-center px-[12px]  py-6 first:pl-0 last:pr-0 md:px-8 md:py-8">
                <p className="text-[14px] text-center leading-[20px] tracking-[-0.01em]">
                  It should not depend on whether someone remembered to follow
                  up.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-global">
        <div className="max-w-global mx-auto flex justify-center border-x border-b border-[#E5E7EB] py-[24px]">
          <p className="max-w-[34em] text-center text-[14px] leading-[20px] tracking-[-0.01em]">
            We believe AI should support teams by handling the structured work —{" "}
            <span className="text-heading">
              so people can focus on conversations that matter.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}

export default WhatWeBelieveSection;
