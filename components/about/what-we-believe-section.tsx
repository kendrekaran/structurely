function WhatWeBelieveSection() {
  return (
    <section id="what-we-believe" className="relative z-0">
      <div className="px-global border-b border-[#E5E7EB]">
        <div className="max-w-global mx-auto pt-16 pb-10 flex flex-col items-center gap-4 text-center">
          <div className="flex items-center justify-center px-4 py-2 rounded-lg bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.08),0_1px_1px_-0.5px_rgba(51,51,51,0.05),0_3px_3px_-1.5px_rgba(51,51,51,0.05),0_6px_6px_-3px_rgba(51,51,51,0.05),0_12px_12px_-6px_rgba(51,51,51,0.05),0_24px_24px_-12px_rgba(51,51,51,0.05)]">
            <span className="text-[#646464] text-[12px] font-medium leading-4">What We Believe</span>
          </div>
          <h2 className="max-w-[11em] tracking-[-0.03em]">
            What We <span className="text-[#006FFF]">Believe</span>
          </h2>
        </div>
      </div>

      <div className="relative border-b border-[#E5E7EB]">
        <div className="px-global">
          <div className="max-w-global mx-auto">
            <div className="flex justify-center -translate-y-1/2">
              <div className="flex items-center px-4 py-2 bg-white rounded-lg border border-[#E5E7EB] shadow-[0_1px_3px_rgba(0,0,0,0.06)]">
                <span className="text-[#202020] text-[14px] leading-5 tracking-[-0.01em]">Inbound demand is valuable.</span>
              </div>
            </div>
          </div>
        </div>

        <div className="px-global border-t border-[#E5E7EB]">
          <div className="max-w-global mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#E5E7EB]">
              <div className="py-8 px-6 md:px-8 first:pl-0 last:pr-0">
                <p className="text-[#202020] text-[16px] leading-[26px] tracking-[-0.01em]">
                  It deserves timely engagement.
                </p>
              </div>
              <div className="py-8 px-6 md:px-8">
                <p className="text-[#202020] text-[16px] leading-[26px] tracking-[-0.01em]">
                  It requires consistent qualification.
                </p>
              </div>
              <div className="py-8 px-6 md:px-8 first:pl-0 last:pr-0">
                <p className="text-[#202020] text-[16px] leading-[26px] tracking-[-0.01em]">
                  It should not depend on whether someone remembered to follow up.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-global border-b border-[#E5E7EB]">
        <div className="max-w-global mx-auto py-10 flex justify-center">
          <p className="max-w-[37.5em] text-center text-[#646464] text-[14px] md:text-[16px] leading-[26px] tracking-[-0.01em]">
            We believe AI should support teams by handling the structured work —{" "}
            <strong className="text-[#202020] font-semibold">so people can focus on conversations that matter.</strong>
          </p>
        </div>
      </div>
    </section>
  );
}

export default WhatWeBelieveSection;
