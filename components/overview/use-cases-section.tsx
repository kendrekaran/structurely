import Image from "next/image";

const featureTags = [
  "Listing inquiry follow-up",
  "Showing scheduling",
  "Long-term nurture campaigns",
  "New buyer & seller lead qualification",
];

function FeatureTag({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-2 rounded-lg px-3 py-2 bg-[rgba(0,111,255,0.08)] shadow-[0_0_0_1px_rgba(0,111,255,0.20),inset_0_0.5px_0.5px_0_#fff] overflow-hidden">
      <span className="text-[#006FFF] text-[0.75rem] md:text-sm font-medium leading-4 md:leading-5 tracking-[-0.006em]">
        {label}
      </span>
    </div>
  );
}

function UseCasesSection() {
  return (
    <section id="use-cases" className="relative z-0">
      <div className="px-global">
        <div className="max-w-global mx-auto border-x border-[#E5E7EB]">
          <div className="border-b border-[#E5E7EB] px-6 py-8 md:px-24 md:py-16 text-center">
            <h2 className="max-w-[8em] mx-auto">Use Cases</h2>
          </div>

          <div className="bg-[#FAFAFA]  flex flex-col md:flex-row md:justify-between gap-0 px-6 pt-6 md:px-[96px] md:pt-0 overflow-hidden">
            <div className="flex flex-col gap-4 md:gap-8 pb-3 md:pt-[160px] md:pb-[96px] md:max-w-[563px]">
              <div className="flex flex-col items-center md:items-start gap-2">
                <h3 className="max-w-[10em] text-[24px] md:text-[24px] leading-[32px] md:leading-[32px] font-medium tracking-[-0.03em] text-center md:text-left">Real Estate</h3>
                <p className="max-w-[31.375em] text-[#646464] text-[16px] leading-[26px] tracking-[-0.01em] text-center md:text-left">
                  Automate lead follow-up and appointment setting for high-volume real estate teams.
                </p>
              </div>

              <div className="flex flex-wrap justify-center md:justify-start gap-2">
                {featureTags.map((tag) => (
                  <FeatureTag key={tag} label={tag} />
                ))}
              </div>
            </div>

            <div className="flex justify-center items-end md:justify-end w-full md:w-auto mt-4 md:mt-0">
              <div className="relative w-[280px] md:w-[338px] h-[340px] md:h-[405px] overflow-hidden">
                <Image
                  src="/assets/home/home-usecase-mobile.png"
                  alt="Real estate AI chat on mobile"
                  fill
                  className="object-contain object-bottom"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default UseCasesSection;
