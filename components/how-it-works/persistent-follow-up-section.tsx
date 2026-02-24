const featureRows = [
  {
    text: "Executes long-tail follow-up sequences",
    lineWidthClass: "w-[8%]",
    lineColor: "bg-[#202020]",
    arrowFill: "#202020",
    active: true,
  },
  {
    text: "Adjusts messaging over time",
    lineWidthClass: "w-[25%]",
    lineColor: "bg-[#E5E7EB]",
    arrowFill: "#E5E7EB",
    active: false,
  },
  {
    text: "Re-engages dormant leads",
    lineWidthClass: "w-[42%]",
    lineColor: "bg-[#E5E7EB]",
    arrowFill: "#E5E7EB",
    active: false,
  },
  {
    text: "Tracks responsiveness trends",
    lineWidthClass: "w-1/2",
    lineColor: "bg-[#E5E7EB]",
    arrowFill: "#E5E7EB",
    active: false,
  },
];

function ArrowHead({ fill }: { fill: string }) {
  return (
    <svg
      width="7"
      height="7"
      viewBox="0 0 7 7"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0"
    >
      <path d="M3.5 0L6.39711 3.5L3.5 7L0.602886 3.5L3.5 0Z" fill={fill} />
    </svg>
  );
}

function DotGrid() {
  return (
    <svg
      width="148"
      height="112"
      viewBox="0 0 148 112"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute top-2 right-2 hidden md:block pointer-events-none select-none"
    >
      <rect x="4" y="8" width="14" height="10" rx="2" fill="#006FFF" fillOpacity="0.12" />
      <rect x="28" y="8" width="14" height="10" rx="2" fill="#006FFF" fillOpacity="0.06" />
      <rect x="52" y="8" width="14" height="10" rx="2" fill="#006FFF" fillOpacity="0.35" />
      <rect x="76" y="8" width="14" height="10" rx="2" fill="#006FFF" fillOpacity="0.14" />
      <rect x="100" y="8" width="14" height="10" rx="2" fill="#006FFF" fillOpacity="0.06" />
      <rect x="124" y="8" width="14" height="10" rx="2" fill="#006FFF" fillOpacity="0.28" />
      <rect x="4" y="26" width="14" height="10" rx="2" fill="#006FFF" fillOpacity="0.06" />
      <rect x="28" y="26" width="14" height="10" rx="2" fill="#006FFF" fillOpacity="0.48" />
      <rect x="52" y="26" width="14" height="10" rx="2" fill="#006FFF" fillOpacity="0.18" />
      <rect x="76" y="26" width="14" height="10" rx="2" fill="#006FFF" fillOpacity="0.56" />
      <rect x="100" y="26" width="14" height="10" rx="2" fill="#006FFF" fillOpacity="0.24" />
      <rect x="124" y="26" width="14" height="10" rx="2" fill="#006FFF" fillOpacity="0.08" />
      <rect x="4" y="44" width="14" height="10" rx="2" fill="#006FFF" fillOpacity="0.28" />
      <rect x="28" y="44" width="14" height="10" rx="2" fill="#006FFF" fillOpacity="0.14" />
      <rect x="52" y="44" width="14" height="10" rx="2" fill="#006FFF" fillOpacity="0.72" />
      <rect x="76" y="44" width="14" height="10" rx="2" fill="#006FFF" fillOpacity="0.32" />
      <rect x="100" y="44" width="14" height="10" rx="2" fill="#006FFF" fillOpacity="0.52" />
      <rect x="124" y="44" width="14" height="10" rx="2" fill="#006FFF" fillOpacity="0.06" />
      <rect x="4" y="62" width="14" height="10" rx="2" fill="#006FFF" fillOpacity="0.08" />
      <rect x="28" y="62" width="14" height="10" rx="2" fill="#006FFF" fillOpacity="0.36" />
      <rect x="52" y="62" width="14" height="10" rx="2" fill="#006FFF" fillOpacity="0.24" />
      <rect x="76" y="62" width="14" height="10" rx="2" fill="#006FFF" fillOpacity="0.78" />
      <rect x="100" y="62" width="14" height="10" rx="2" fill="#006FFF" fillOpacity="0.16" />
      <rect x="124" y="62" width="14" height="10" rx="2" fill="#006FFF" fillOpacity="0.42" />
      <rect x="4" y="80" width="14" height="10" rx="2" fill="#006FFF" fillOpacity="0.06" />
      <rect x="28" y="80" width="14" height="10" rx="2" fill="#006FFF" fillOpacity="0.2" />
      <rect x="52" y="80" width="14" height="10" rx="2" fill="#006FFF" fillOpacity="0.42" />
      <rect x="76" y="80" width="14" height="10" rx="2" fill="#006FFF" fillOpacity="0.24" />
      <rect x="100" y="80" width="14" height="10" rx="2" fill="#006FFF" fillOpacity="0.62" />
      <rect x="124" y="80" width="14" height="10" rx="2" fill="#006FFF" fillOpacity="0.12" />
      <rect x="4" y="98" width="14" height="10" rx="2" fill="#006FFF" fillOpacity="0.16" />
      <rect x="28" y="98" width="14" height="10" rx="2" fill="#006FFF" fillOpacity="0.06" />
      <rect x="52" y="98" width="14" height="10" rx="2" fill="#006FFF" fillOpacity="0.28" />
      <rect x="76" y="98" width="14" height="10" rx="2" fill="#006FFF" fillOpacity="0.08" />
      <rect x="100" y="98" width="14" height="10" rx="2" fill="#006FFF" fillOpacity="0.32" />
      <rect x="124" y="98" width="14" height="10" rx="2" fill="#006FFF" fillOpacity="0.06" />
    </svg>
  );
}

function PersistentFollowUpSection() {
  return (
    <div className="px-global">
      <section
        id="persistent-follow-up"
        className="max-w-global mx-auto border-x border-[#E5E7EB] relative z-0"
      >
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6 px-6 md:px-12 py-12 md:py-16">
          <h2>
            <span>Persistent </span>
            <span className="text-[#006FFF]">Follow-Up</span>
          </h2>
          <div className="flex flex-col sm:items-end gap-1 shrink-0">
            <span className="text-[16px] leading-[26px] tracking-[-0.01em] text-foreground sm:text-right block">
              Most teams stop too early.
            </span>
            <span className="text-[#006FFF] underline font-bold text-[16px] leading-6 tracking-[-0.02em] [font-family:var(--font-caveat)] block">
              AI doesn&apos;t.
            </span>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div className="px-4 py-2 rounded-t-xl border-t border-l border-r border-[#E5E7EB] bg-white">
            <span className="text-[14px] leading-5 tracking-[-0.01em] text-foreground">
              Structurely AI 3:
            </span>
          </div>
        </div>

        <div className="flex flex-col ">

          <div className="divide-y divide-[#E5E7EB] border-t  border-[#E5E7EB]">
            {featureRows.map((row) => (
              <div key={row.text} className="flex items-center py-6 overflow-hidden">
                <div className={`shrink-0 ${row.lineWidthClass} flex items-center`}>
                  <div className={`flex-1 h-px ${row.lineColor}`} />
                  <ArrowHead fill={row.arrowFill} />
                </div>
                <span
                  className={`ml-3 text-[16px] leading-[26px] tracking-[-0.02em] ${
                    row.active ? "text-heading" : "text-foreground"
                  }`}
                >
                  {row.text}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center py-6 bg-[#006FFF]">
          <span className="text-[16px] leading-[26px] tracking-[-0.02em] text-white font-medium">
            No lead is forgotten.
          </span>
        </div>
      </section>
    </div>
  );
}

export default PersistentFollowUpSection;
