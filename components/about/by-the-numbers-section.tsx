function ByTheNumbersSection() {
  return (
    <section id="by-the-numbers" className="relative z-0">
      <div className="px-global">
        <div className="max-w-global mx-auto">
          <div className="flex flex-col items-center justify-center py-16">
            <h2 className="max-w-[11em] text-center">By the Numbers</h2>
          </div>
          <div className="divide-y divide-[#E5E7EB] border-t border-[#E5E7EB]">
            <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-[#E5E7EB]">
              <div className="py-8 pr-8">
                <p className="text-foreground">Over 10 years in operation</p>
              </div>
              <div className="py-8 sm:pl-8">
                <p className="text-foreground">Millions of inbound conversations handled</p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-[#E5E7EB]">
              <div className="py-8 pr-8 border-b-2 border-b-[#006FFF]">
                <p className="text-heading">Thousands of sales professionals supported</p>
              </div>
              <div className="py-8 sm:pl-8">
                <p className="text-foreground text-[14px]">Continuous product development across multiple platform generations</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ByTheNumbersSection;
