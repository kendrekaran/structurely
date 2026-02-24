import HeroBadge from "@/components/ui/hero-badge";

const outcomeItems = [
  "Faster response times",
  "Higher contact rates",
  "Better qualification accuracy",
  "Increased conversion efficiency",
  "Reduced manual workload",
];

const pillShadow =
  "0 0 0 1px rgba(0,0,0,0.08), 0 1px 1px -0.5px rgba(51,51,51,0.05), 0 3px 3px -1.5px rgba(51,51,51,0.05), 0 6px 6px -3px rgba(51,51,51,0.05), 0 12px 12px -6px rgba(51,51,51,0.05), 0 24px 24px -12px rgba(51,51,51,0.05)";

function OutcomesSection() {
  return (
    <div className="px-global">
    <section id="outcomes" className="max-w-global mx-auto border-x border-[#E5E7EB] relative z-0 flex flex-col items-center">
      <div className="flex flex-col items-center gap-4 px-6 py-16 md:px-24 md:py-16 w-full">
        <HeroBadge text="Outcomes" />
        <h2 className="max-w-[11em] text-center tracking-[-0.03em]">
          Designed to Improve What{" "}
          <span className="text-[var(--primary)]">Matters</span>
        </h2>
      </div>

      <div
        className="flex flex-wrap justify-center gap-3 w-full border-t border-b border-[#E5E7EB] bg-[#FAFAFA] px-6 py-6 md:justify-between md:flex-nowrap"
      >
        {outcomeItems.map((item) => (
          <div
            key={item}
            className="flex items-center rounded-[10px] bg-white px-3 py-2 overflow-hidden"
            style={{ boxShadow: pillShadow }}
          >
            <span className="text-[#646464] text-center text-sm leading-5 tracking-[-0.006em] whitespace-nowrap">
              {item}
            </span>
          </div>
        ))}
      </div>
    </section>
    </div>
  );
}

export default OutcomesSection;
