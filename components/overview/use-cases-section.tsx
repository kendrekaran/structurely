import Image from "next/image";

const featureTags = [
  "Listing inquiry follow-up",
  "Showing scheduling",
  "Long-term nurture campaigns",
  "New buyer & seller lead qualification",
];

function FeatureTag({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-2 overflow-hidden rounded-lg bg-[rgba(0,111,255,0.08)] px-3 py-2 shadow-[0_0_0_1px_rgba(0,111,255,0.20),inset_0_0.5px_0.5px_0_#fff]">
      <span className="text-[0.75rem] leading-4 font-medium tracking-[-0.006em] text-[#006FFF] md:text-sm md:leading-5">
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
          <div className="border-b border-[#E5E7EB] px-6 py-8 text-center md:px-24 md:py-16">
            <h2 className="mx-auto max-w-[8em]">Use cases.</h2>
          </div>

          <div className="flex flex-col gap-0 overflow-hidden bg-[#FAFAFA] px-6 pt-6 md:flex-row md:justify-between md:px-[96px] md:pt-0">
            <div className="flex flex-col gap-4 pb-3 md:max-w-[563px] md:gap-8 md:pt-[160px] md:pb-[96px]">
              <div className="flex flex-col items-center gap-2 md:items-start">
                <h3 className="max-w-[10em] text-center text-[24px] leading-[32px] font-medium tracking-[-0.03em] md:text-left md:text-[24px] md:leading-[32px]">
                  Real estate
                </h3>
                <p className="max-w-[31.375em] text-center text-[16px] leading-[26px] tracking-[-0.01em] text-[#646464] md:text-left">
                  Automate lead follow-up and appointment setting for
                  high-volume real estate teams.
                </p>
              </div>

              <div className="flex flex-wrap justify-center gap-2 md:justify-start">
                {featureTags.map((tag) => (
                  <FeatureTag key={tag} label={tag} />
                ))}
              </div>
            </div>

            <div className="mt-4 flex w-full items-end justify-center md:mt-0 md:w-auto md:justify-end">
              <div className="relative h-[340px] w-[280px] overflow-hidden md:h-[405px] md:w-[338px]">
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
