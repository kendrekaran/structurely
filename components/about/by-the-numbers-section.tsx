function ByTheNumbersSection() {
  return (
    <section id="by-the-numbers" className="relative z-0">
      <div className="px-global">
        <div className="max-w-global mx-auto border-x border-[#E5E7EB]">
          <div className="md:py-section-md flex flex-col items-center justify-center py-[24px]">
            <h2 data-reveal="words" className="max-w-[11em] text-center font-medium text-[28px] leading-[36px]  tracking-[-0.02em] md:text-[48px] md:leading-[54px] md:tracking-[-0.03em]">
              By the Numbers
            </h2>
          </div>
          <div className="divide-y divide-[#E5E7EB] border-t border-[#E5E7EB]">
            <div className="grid grid-cols-1 divide-y divide-[#E5E7EB] sm:grid-cols-2 sm:divide-x sm:divide-y-0">
              <div
                className="border-b-2 border-b-transparent px-3 py-4 transition-all duration-300 ease-out hover:border-b-[#006FFF] hover:bg-white md:px-8 md:py-8"
              >
                <p className="text-foreground transition-colors duration-300 ease-out hover:text-heading">
                  Over 10 years in operation
                </p>
              </div>
              <div
                className="border-b-2 border-b-transparent px-3 py-4 transition-all duration-300 ease-out hover:border-b-[#006FFF] hover:bg-white sm:pl-8 md:py-8"
              >
                <p className="text-foreground transition-colors duration-300 ease-out hover:text-heading">
                  Millions of inbound conversations handled
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 divide-y divide-[#E5E7EB] sm:grid-cols-2 sm:divide-x sm:divide-y-0">
              <div
                className="border-b-2 border-b-transparent px-3 py-4 transition-all duration-300 ease-out hover:border-b-[#006FFF] hover:bg-white md:px-8 md:py-8"
              >
                <p className="text-foreground transition-colors duration-300 ease-out hover:text-heading">
                  Thousands of sales professionals supported
                </p>
              </div>
              <div
                className="border-b border-b-[#E5E7EB] px-3 py-4 transition-all duration-300 ease-out hover:border-b-[#006FFF] hover:bg-white sm:pl-8 md:py-8"
              >
                <p className="text-foreground text-[14px] transition-colors duration-300 ease-out hover:text-heading">
                  Continuous product development across multiple platform
                  generations
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ByTheNumbersSection;
