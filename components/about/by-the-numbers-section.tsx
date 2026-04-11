function ByTheNumbersSection() {
  return (
    <section id="by-the-numbers" className="relative z-0">
      <div className="px-global">
        <div className="max-w-global mx-auto border-x border-[#E5E7EB]">
          <div className="md:py-section-md flex flex-col items-center justify-center py-[24px]">
            <h2
              data-reveal="words"
              className="max-w-[11em] text-center text-[28px] leading-[36px] font-medium tracking-[-0.02em] md:text-[48px] md:leading-[54px] md:tracking-[-0.03em]"
            >
              By the numbers
            </h2>
          </div>
        </div>
      </div>

      <div className="border-y border-[#E5E7EB]">
        <div className="px-global">
          <div className="max-w-global mx-auto border-x border-[#E5E7EB]">
            <div className="grid grid-cols-1 divide-y divide-[#E5E7EB] sm:grid-cols-2 sm:divide-x sm:divide-y-0">
              <div className="group relative px-3 py-4 transition-colors duration-300 ease-out hover:bg-white md:px-8 md:py-8">
                <p className="text-foreground group-hover:text-heading transition-colors duration-300 ease-out">
                  Over 10 years in operation
                </p>
                <div
                  aria-hidden
                  className="pointer-events-none absolute right-0 bottom-0 left-0 z-10 h-[2px] bg-[#006FFF] opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100"
                />
              </div>
              <div className="group relative px-3 py-4 transition-colors duration-300 ease-out hover:bg-white sm:pl-8 md:py-8">
                <p className="text-foreground group-hover:text-heading transition-colors duration-300 ease-out">
                  Millions of inbound conversations handled
                </p>
                <div
                  aria-hidden
                  className="pointer-events-none absolute right-0 bottom-0 left-0 z-10 h-[2px] bg-[#006FFF] opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100"
                />
              </div>
            </div>
            <div className="relative grid grid-cols-1 divide-y divide-[#E5E7EB] before:absolute before:top-0 before:left-1/2 before:z-10 before:h-px before:w-screen before:-translate-x-1/2 before:bg-[#E5E7EB] sm:grid-cols-2 sm:divide-x sm:divide-y-0">
              <div className="group relative px-3 py-4 transition-colors duration-300 ease-out hover:bg-white md:px-8 md:py-8">
                <p className="text-foreground group-hover:text-heading transition-colors duration-300 ease-out">
                  Thousands of sales professionals supported
                </p>
                <div
                  aria-hidden
                  className="pointer-events-none absolute right-0 bottom-0 left-0 z-10 h-[2px] bg-[#006FFF] opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100"
                />
              </div>
              <div className="group relative px-3 py-4 transition-colors duration-300 ease-out hover:bg-white sm:pl-8 md:py-8">
                <p className="text-foreground group-hover:text-heading text-[14px] transition-colors duration-300 ease-out">
                  Continuous product development across multiple platform
                  generations
                </p>
                <div
                  aria-hidden
                  className="pointer-events-none absolute right-0 bottom-0 left-0 z-10 h-[2px] bg-[#006FFF] opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ByTheNumbersSection;
