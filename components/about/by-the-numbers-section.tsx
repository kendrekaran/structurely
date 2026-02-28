function ByTheNumbersSection() {
  return (
    <section id="by-the-numbers" className="relative z-0">
      <div className="px-global">
        <div className="max-w-global mx-auto border-x border-[#E5E7EB]">
          <div className="flex flex-col items-center justify-center py-section-md">
            <h2 className="max-w-[11em] text-center font-medium">By the Numbers</h2>
          </div>
          <div className="divide-y divide-[#E5E7EB] border-t border-[#E5E7EB]">
            <div className="grid grid-cols-1 divide-y divide-[#E5E7EB] sm:grid-cols-2 sm:divide-x sm:divide-y-0">
              <div className="py-8 px-8">
                <p className="text-foreground">Over 10 years in operation</p>
              </div>
              <div className="py-8 sm:pl-8">
                <p className="text-foreground">
                  Millions of inbound conversations handled
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 divide-y divide-[#E5E7EB] sm:grid-cols-2 sm:divide-x sm:divide-y-0">
              <div className="border-b-2 border-b-[#006FFF] py-8 px-8">
                <p className="text-heading">
                  Thousands of sales professionals supported
                </p>
              </div>
              <div className="py-8 sm:pl-8">
                <p className="text-foreground text-[14px]">
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
