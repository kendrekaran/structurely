import Button from "@/components/_ui/button";
import DownArrow from "@/public/assets/common/arrows/down-arrow.svg";
import DownArrowBlur from "@/public/assets/common/arrows/down-arrow-blur.svg";

const problemItems = [
  { text: "Leads sit.", active: false },
  { text: "Follow-up stalls.", active: true },
  { text: "Qualification is inconsistent.", active: false },
  { text: "Sales teams waste time chasing noise.", active: false },
];

const chevronDividers = [{ dimmed: true }, { dimmed: false }, { dimmed: true }];

function ChevronDivider({ dimmed }: { dimmed: boolean }) {
  const ArrowIcon = dimmed ? DownArrowBlur : DownArrow;
  return (
    <div className="flex w-full items-center self-stretch">
      <div className="h-px flex-1 bg-[#E5E7EB]" />
      <div
        className="flex items-center justify-center overflow-hidden w-[48px] h-[40px] rounded-[10px] bg-white p-2"
        style={{
          boxShadow:
            "0 0 0 1px rgba(0,0,0,0.08), 0 1px 1px -0.5px rgba(51,51,51,0.05), 0 3px 3px -1.5px rgba(51,51,51,0.05), 0 6px 6px -3px rgba(51,51,51,0.05), 0 12px 12px -6px rgba(51,51,51,0.05), 0 24px 24px -12px rgba(51,51,51,0.05)",
        }}
      >
        <ArrowIcon />
      </div>
      <div className="h-px flex-1 bg-[#E5E7EB]" />
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
      className={`absolute top-0 ${side === "left" ? "left-0" : "right-0"} pointer-events-none h-full overflow-hidden`}
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
    <section
      id="consequence"
      className="relative z-0"
    >
      <div className="px-global">
        <div className="max-w-global mx-auto border-x border-[#E5E7EB]">
          {problemItems.map((item, index) => (
            <div key={index}>
              <div className="flex items-center justify-center px-6 py-12 md:px-24">
                <span
                  className="text-center text-[24px] leading-[32px] tracking-[-0.02em]"
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
         
          
        </div>
      </div>
    </section>
  );
}

export default ConsequenceSection;
