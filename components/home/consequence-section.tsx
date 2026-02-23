import Button from "@/components/ui/button";

const problemItems = [
  { text: "Leads sit.", active: false },
  { text: "Follow-up stalls.", active: true },
  { text: "Qualification is inconsistent.", active: false },
  { text: "Sales teams waste time chasing noise.", active: false },
];

const chevronDividers = [
  { dimmed: true },
  { dimmed: false },
  { dimmed: true },
];

function ChevronDivider({ dimmed }: { dimmed: boolean }) {
  return (
    <div className="flex items-center self-stretch w-full">
      <div className="flex-1 h-px bg-[#E5E7EB]" />
      <div
        className="flex p-2 items-center rounded-[10px] bg-white overflow-hidden"
        style={{
          boxShadow:
            "0 0 0 1px rgba(0,0,0,0.08), 0 1px 1px -0.5px rgba(51,51,51,0.05), 0 3px 3px -1.5px rgba(51,51,51,0.05), 0 6px 6px -3px rgba(51,51,51,0.05), 0 12px 12px -6px rgba(51,51,51,0.05), 0 24px 24px -12px rgba(51,51,51,0.05)",
        }}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ opacity: dimmed ? 0.48 : 1 }}
        >
          <path
            d="M7 6L12 11L17 6"
            stroke="#006FFF"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7 13L12 18L17 13"
            stroke="#006FFF"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div className="flex-1 h-px bg-[#E5E7EB]" />
    </div>
  );
}

function SpeedLines({ side }: { side: "left" | "right" }) {
  const lines = [
    { width: 70, color: "rgba(20, 30, 70, 0.35)", y: 18 },
    { width: 110, color: "rgba(0, 111, 255, 0.3)", y: 40 },
    { width: 55, color: "rgba(0, 111, 255, 0.45)", y: 62 },
    { width: 90, color: "rgba(0, 111, 255, 0.55)", y: 92 },
    { width: 145, color: "rgba(0, 111, 255, 0.65)", y: 120 },
    { width: 195, color: "rgba(0, 111, 255, 0.9)", y: 152 },
    { width: 130, color: "rgba(0, 111, 255, 0.4)", y: 180 },
    { width: 80, color: "rgba(0, 111, 255, 0.25)", y: 208 },
  ];

  return (
    <div
      className={`absolute top-0 ${side === "left" ? "left-0" : "right-0"} h-full pointer-events-none overflow-hidden`}
      style={{ width: "220px" }}
    >
      {lines.map((line, i) => (
        <div
          key={i}
          className={`absolute`}
          style={{
            width: `${line.width}px`,
            height: "1.5px",
            backgroundColor: line.color,
            top: `${line.y}px`,
            ...(side === "right" ? { right: 0 } : { left: 0 }),
          }}
        />
      ))}
    </div>
  );
}

function ConsequenceSection() {
  return (
    <section id="consequence" className="relative z-0  border-b border-[#E5E7EB]">
      <div className="px-global">
        <div className="max-w-global mx-auto border-x  border-[#E5E7EB]">
          {problemItems.map((item, index) => (
            <div key={index}>
              <div className="flex justify-center items-center py-12 px-6 md:px-24">
                <span
                  className="text-[24px] leading-[32px] tracking-[-0.02em] text-center"
                  style={{ color: item.active ? "#202020" : "#646464" }}
                >
                  {item.text}
                </span>
              </div>
              {index < chevronDividers.length && (
                <ChevronDivider dimmed={chevronDividers[index].dimmed} />
              )}
            </div>
          ))}

          <div className="relative overflow-hidden flex bg-white flex-col items-center justify-center gap-8 py-12 px-6 md:px-24 border-t border-[#E5E7EB]">
            <div
              className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: "url('/assets/home/cta/cta.png')" }}
            />
            <div className="flex flex-col items-center gap-1 relative z-10">
              <span
                className="text-[24px] leading-[32px] tracking-[-0.02em] text-center"
                style={{ color: "#646464" }}
              >
                Inbound demand doesn&apos;t fail.
              </span>
              <span
                className="text-[24px] leading-[32px] tracking-[-0.02em] text-center"
                style={{ color: "#202020" }}
              >
                Execution does.
              </span>
            </div>
            <div className="relative z-10">
              <Button variant="primary" size="md">
                Request Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ConsequenceSection;
