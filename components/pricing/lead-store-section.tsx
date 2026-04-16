const verticals = [
  {
    label: "Mortgage",
    price: "$3 – $40 / lead",
    aged: "Aged from $3",
    realtime: "Real-time up to $40",
  },
  {
    label: "Credit Card Processing",
    price: "$3 – $40 / lead",
    aged: "Aged from $3",
    realtime: "Real-time up to $40",
  },
  {
    label: "Home Improvement",
    price: "$3 – $40 / lead",
    aged: "Aged from $3",
    realtime: "Real-time up to $40",
  },
];

export default function LeadStoreSection() {
  return (
    <section id="lead-store" className="relative z-0">
      <div className="px-global">
        <div className="max-w-global mx-auto border-x border-[#E5E7EB] bg-white">
          <div className="flex flex-col items-center gap-4 px-6 py-16 text-center md:px-12">
            <div
              className="rounded-lg bg-white px-4 py-2 text-[12px] font-medium leading-4 text-[#646464]"
              style={{
                boxShadow:
                  "0 0 0 1px rgba(0,0,0,0.08), 0 1px 1px -0.5px rgba(51,51,51,0.05), 0 3px 3px -1.5px rgba(51,51,51,0.05), 0 6px 6px -3px rgba(51,51,51,0.05), 0 12px 12px -6px rgba(51,51,51,0.05), 0 24px 24px -12px rgba(51,51,51,0.05)",
              }}
            >
              NEW — Lead Store
            </div>

            <h2
              data-reveal="words"
              className="max-w-[14em] text-[32px] leading-[1.125] tracking-[-0.03em] md:text-[48px]"
            >
              Stop renting pipeline.{" "}
              <span className="text-[#006FFF]">Own it.</span>
            </h2>

            <p className="max-w-[36em] text-[16px] font-medium leading-[1.625] tracking-[-0.01em]">
              Structurely Lead Store delivers opt-in, TCPA-compliant leads
              directly into your AI agent&apos;s workflow. Your AI starts
              working the lead the second it arrives.
            </p>
          </div>

          <div className="grid grid-cols-1 divide-y divide-[#E5E7EB] border-y border-[#E5E7EB] md:grid-cols-3 md:divide-x md:divide-y-0">
            {verticals.map((vertical) => (
              <div
                key={vertical.label}
                className="flex flex-col items-center gap-6 p-8"
              >
                <div className="rounded-lg border border-[#E5E7EB] bg-white px-3 py-2">
                  <span className="text-[12px] font-medium leading-4 tracking-[-0.006em] text-[#006FFF]">
                    {vertical.label}
                  </span>
                </div>

                <div className="flex flex-col items-center gap-1">
                  <span className="text-[24px] font-medium leading-8 tracking-[-0.03em] text-[#202020]">
                    {vertical.price}
                  </span>
                  <p className="text-center text-[12px] font-medium leading-6 tracking-[-0.01em]">
                    <span className="text-[#646464]">{vertical.aged} · </span>
                    <span className="font-semibold text-[#202020]">
                      {vertical.realtime}
                    </span>
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="px-6 py-6 text-center md:px-12">
            <p className="mx-auto max-w-[36em] text-[13px] leading-6 text-[#646464]">
              All leads are opt-in and TCPA-compliant. Volume discounts
              available. Pricing varies by recency, vertical, and intent signal.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
