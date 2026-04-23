import Image from "next/image";
import IndustrySelectorSection from "@/components/use-cases/industry-selector-section";

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
          <div className="md:border-b border-[#E5E7EB] px-6 py-8 text-center md:px-24 md:py-16">
            <h2 className="mx-auto max-w-[8em]">Use cases.</h2>
          </div>
        </div>
      </div>
      <IndustrySelectorSection />
    </section>
  );
}

export default UseCasesSection;
