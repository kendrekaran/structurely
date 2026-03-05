import HeroBadge from "@/components/_ui/hero-badge";
import Badge from "../_ui/badge";

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
      <section
        id="outcomes"
        className="max-w-global relative z-0 mx-auto flex flex-col items-center border-x border-[#E5E7EB]"
      >
        <div className="py-section-md md:py-section-md flex w-full flex-col items-center gap-4 px-6 md:px-24">
          <Badge text="Outcomes" />
          <h2 className="max-w-[11em] text-center tracking-[-0.03em]">
            Designed to Improve What{" "}
            <span className="text-[var(--primary)]">Matters</span>
          </h2>
        </div>

        <div className="flex w-full flex-wrap justify-center gap-3 border-t  border-[#E5E7EB] bg-[#FAFAFA] px-6 py-6 md:flex-nowrap md:justify-between">
          {outcomeItems.map((item) => (
            <div
              key={item}
              className="flex items-center overflow-hidden rounded-[10px] bg-white px-3 py-2"
              style={{ boxShadow: pillShadow }}
            >
              <span className="text-center text-sm leading-5 tracking-[-0.006em] whitespace-nowrap">
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
