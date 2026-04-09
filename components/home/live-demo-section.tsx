function LiveDemoSection() {
  return (
    <section id="live-demo" className="relative z-0">
      <div className="px-global">
        <div className="max-w-global relative mx-auto flex justify-center border-x border-[#E5E7EB]  ">

          <div className="pointer-events-none absolute inset-0 hidden md:block">
            <div className="absolute left-[6%] top-0 h-[44%] w-px bg-[#E5E7EB]" />
            <div className="absolute left-[22.78%] top-0 h-[44%] w-px bg-[#E5E7EB]" />
            <div className="absolute left-[68.73%] top-0 h-[44%] w-px bg-[#E5E7EB]" />
            <div className="absolute left-[85.51%] top-0 h-[44%] w-px bg-[#E5E7EB]" />

            <div className="absolute left-0 top-[44%] h-px w-full bg-[#E5E7EB]" />

            <div className="absolute bottom-0 left-[14.39%] h-[56%] w-px bg-[#E5E7EB]" />
            <div className="absolute bottom-0 left-[28.17%] h-[56%] w-px bg-[#E5E7EB]" />
            <div className="absolute bottom-0 left-[76.12%] h-[56%] w-px bg-[#E5E7EB]" />
            <div className="absolute bottom-0 left-[94.9%] h-[56%] w-px bg-[#E5E7EB]" />
          </div>

          <div className="relative z-10 w-full max-w-[22em] overflow-hidden border-x border-[#E5E7EB]">
            <div className="flex items-center justify-center gap-2 border-b border-[#E5E7EB] bg-white px-4 py-3">
              <p className="text-center tracking-[-0.01em]">
                <span className="text-[#646464]">This is not a </span>
                <span className="font-semibold text-[#202020]">scripted demo.</span>
                <span className="text-[#202020]"> Try it now</span>
              </p>
            </div>

            <div className="flex items-center gap-1.5 border-b-[3px] border-transparent bg-[#FAFAFA] px-3 py-1.5 focus-within:border-[#006FFF]">
              <div className="flex flex-1 items-center gap-2 rounded-lg px-1.5 py-3">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.7503 1.49985H5.25031C4.42188 1.49985 3.75031 2.17142 3.75031 2.99985V14.9998C3.75031 15.8283 4.42188 16.4998 5.25031 16.4998H12.7503C13.5787 16.4998 14.2503 15.8283 14.2503 14.9998V2.99985C14.2503 2.17142 13.5787 1.49985 12.7503 1.49985Z" stroke="#646464" strokeWidth="1.3125" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9 13.5H9.00833" stroke="#646464" strokeWidth="1.3125" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <input
                  type="tel"
                  placeholder="Enter your number here"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  aria-label="Phone number"
                  className="w-full bg-transparent font-sans text-[14px] font-medium leading-[20px] tracking-[-0.006em] text-[#202020] outline-none placeholder:text-[#A0A0A0]"
                />
              </div>

              <div className="flex items-center gap-2 rounded-lg border border-[#E5E7EB] bg-white p-2">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.75012 8.99997H14.2501M14.2501 8.99997L9.00012 3.74997M14.2501 8.99997L9.00012 14.25" stroke="#006FFF" strokeWidth="1.67143" strokeLinecap="square" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default LiveDemoSection;
