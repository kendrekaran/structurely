import Separator from "../_ui/separator";

const industries = [
  {
    title: "Mortgage & Lending",
    features: [
      ["Appointment booking", "Instant borrower engagement"],
      [
        "Qualification before LO involvement",
        "Automated nurture for long-cycle buyers",
      ],
    ],
  },
  {
    title: "Real Estate",
    features: [
      ["New buyer & seller lead qualification", "Showing scheduling"],
      ["Long-term nurture campaigns", "Listing inquiry follow-up"],
    ],
  },
  {
    title: "Automotive",
    features: [
      ["Inventory inquiry follow-up", "Trade-in qualification"],
      ["Test drive booking", "Re-engagement of cold leads"],
    ],
  },
  {
    title: "Enterprise Sales Teams",
    features: [
      ["SDR workload reduction", "MQL pre-qualification"],
      ["Meeting scheduling", "Consistent follow-up enforcement"],
    ],
  },
];

function IndustryCard({
  title,
  features,
}: {
  title: string;
  features: string[][];
}) {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col items-center justify-center py-8">
        <h3 className="text-center">{title}</h3>
      </div>
      <div className="flex flex-col border-t border-[#E5E7EB]">
        <div className="px-8 py-6 md:px-12">
          <div
            className="flex h-[200px] items-center justify-center rounded-xl bg-white px-3 py-2"
            style={{
              boxShadow:
                "0 0 0 1px rgba(0,0,0,0.08), 0 1px 1px -0.5px rgba(51,51,51,0.05), 0 3px 3px -1.5px rgba(51,51,51,0.05), 0 6px 6px -3px rgba(51,51,51,0.05), 0 12px 12px -6px rgba(51,51,51,0.05), 0 24px 24px -12px rgba(51,51,51,0.05)",
            }}
          >
            <p className="text-center text-sm text-[#646464]">Graphic</p>
          </div>
        </div>
        <div className="divide-y divide-[#E5E7EB] border-t border-[#E5E7EB]">
          {features.map((row, rowIdx) => (
            <div key={rowIdx} className="flex divide-x divide-[#E5E7EB]">
              {row.map((item, colIdx) => (
                <div
                  key={colIdx}
                  className="flex flex-1 items-center justify-center px-4 py-3"
                >
                  <p className="text-center text-xs leading-6 tracking-[-0.01em] text-[#646464]">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function IndustriesSection() {
  return (
    <section id="industries" className="relative z-0">
      <div className="px-global">
        <div className="max-w-global mx-auto border-x ">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="md:border-r border-[#E5E7EB]">
              <IndustryCard
                title={industries[0].title}
                features={industries[0].features}
              />
            </div>
            <div className="border-b md:border-b-0 border-[#E5E7EB]">
              <IndustryCard
                title={industries[1].title}
                features={industries[1].features}
              />
            </div>
          </div>
          <div className="w-screen ml-[calc(50%-50vw)] mr-[calc(50%-50vw)]">
            <Separator />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="md:border-r border-[#E5E7EB]">
              <IndustryCard
                title={industries[2].title}
                features={industries[2].features}
              />
            </div>
            <div>
              <IndustryCard
                title={industries[3].title}
                features={industries[3].features}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default IndustriesSection;
