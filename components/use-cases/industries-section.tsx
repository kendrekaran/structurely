const industries = [
  {
    title: "Mortgage & Lending",
    features: [
      ["Appointment booking", "Instant borrower engagement"],
      ["Qualification before LO involvement", "Automated nurture for long-cycle buyers"],
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

function IndustryCard({ title, features }: { title: string; features: string[][] }) {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col items-center justify-center py-8">
        <h3 className="text-center">{title}</h3>
      </div>
      <div className="flex flex-col border-t border-[#E5E7EB]">
        <div className="px-8 md:px-12 py-6">
          <div className="flex h-[200px] items-center justify-center rounded-xl bg-white px-3 py-2"
            style={{
              boxShadow:
                "0 0 0 1px rgba(0,0,0,0.08), 0 1px 1px -0.5px rgba(51,51,51,0.05), 0 3px 3px -1.5px rgba(51,51,51,0.05), 0 6px 6px -3px rgba(51,51,51,0.05), 0 12px 12px -6px rgba(51,51,51,0.05), 0 24px 24px -12px rgba(51,51,51,0.05)",
            }}
          >
            <p className="text-[#646464] text-center text-sm">Graphic</p>
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
                  <p className="text-[#646464] text-center text-xs leading-6 tracking-[-0.01em]">
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
      <div className="max-w-global mx-auto">
        <div className="border-y border-[#E5E7EB] grid grid-cols-1 md:grid-cols-2">
          {industries.map((industry, idx) => (
            <div
              key={idx}
              className={[
                "border-[#E5E7EB]",
                idx % 2 === 0 ? "md:border-r" : "",
                idx < 2 ? "md:border-b" : "",
                idx < industries.length - 1 ? "border-b md:border-b-0" : "",
              ].join(" ").trim()}
            >
              <IndustryCard title={industry.title} features={industry.features} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default IndustriesSection;
