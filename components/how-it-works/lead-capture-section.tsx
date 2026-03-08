import { div } from "motion/react-client";
import Image from "next/image";
import LeadCaptureHeader from "./lead-capture-header";

const leadSources = [
  { label: "Web form", icon: "/assets/how-it-works/logo/9.svg" },
  { label: "Paid ads", icon: "/assets/how-it-works/logo/1.svg" },
  { label: "Organic inquiry", icon: "/assets/how-it-works/logo/2.svg" },
  { label: "Manual entry", icon: "/assets/how-it-works/logo/4.svg" },
];

const thirdPartySource = {
  label: "Third-party marketplace",
  icon: "/assets/how-it-works/logo/3.svg",
};

const iconShadow =
  "0 0 0 1px rgba(0,0,0,0.08), 0 1px 1px -0.5px rgba(51,51,51,0.05), 0 3px 3px -1.5px rgba(51,51,51,0.05), 0 6px 6px -3px rgba(51,51,51,0.05), 0 12px 12px -6px rgba(51,51,51,0.05), 0 24px 24px -12px rgba(51,51,51,0.05)";

function LeadCaptureSection() {
  return (
    <div className="px-global">
      <section
        id="lead-capture"
        className="max-w-global relative z-0 mx-auto flex flex-col items-center border-x"
      >
        <div className="w-full border-b border-[var(--border)]">
          {/* Mobile: 2-col grid, 5th card below; Desktop: all 5 in a flex row */}
          <div className="grid grid-cols-2 md:flex md:flex-row">
            {leadSources.map((source, index) => {
              const totalItems = leadSources.length;
              const mobileCols = 2;
              const mobileRow = Math.floor(index / mobileCols);
              const mobileCol = index % mobileCols;
              const mobileRows = Math.ceil(totalItems / mobileCols);
              const isMobileLastCol = mobileCol === mobileCols - 1;
              const isMobileLastRow = mobileRow === mobileRows - 1;

              return (
                <div
                  key={source.label}
                  className={`flex flex-1 flex-col items-center justify-center gap-4 px-8 py-6 md:w-0 md:gap-6 md:border-r md:border-[var(--border)] md:py-8 ${
                    !isMobileLastCol ? "border-r border-[var(--border)]" : ""
                  } ${
                    !isMobileLastRow
                      ? "border-b border-[var(--border)] md:border-b-0"
                      : ""
                  }`}
                >
                  <Image
                    src={source.icon}
                    alt={source.label}
                    width={48}
                    height={40}
                    className="h-[40px] w-[48px] rounded-[10px] px-[12px] py-[8px]"
                    style={{ boxShadow: iconShadow }}
                  />
                  <span className="text-foreground text-center text-[14px] leading-5 font-normal tracking-[-0.006em] whitespace-nowrap">
                    {source.label}
                  </span>
                </div>
              );
            })}
            {/* Desktop only: 5th card inline */}
            <div className="hidden flex-1 flex-col items-center justify-center gap-6 px-8 py-8 md:flex md:w-0">
              <Image
                src={thirdPartySource.icon}
                alt={thirdPartySource.label}
                width={48}
                height={40}
                className="h-[40px] w-[48px] rounded-[10px] px-[12px] py-[8px]"
                style={{ boxShadow: iconShadow }}
              />
              <span className="text-foreground text-center text-sm leading-5 font-normal tracking-[-0.006em] whitespace-nowrap">
                {thirdPartySource.label}
              </span>
            </div>
          </div>
          {/* Mobile only: 5th card below the grid */}
          <div className="flex w-full flex-col items-center justify-center gap-6 border-t border-[var(--border)] px-8 py-8 md:hidden">
            <Image
              src={thirdPartySource.icon}
              alt={thirdPartySource.label}
              width={48}
              height={40}
              className="h-[40px] w-[48px] rounded-[10px] px-[12px] py-[8px]"
              style={{ boxShadow: iconShadow }}
            />
            <span className="text-foreground text-center text-sm leading-5 font-normal tracking-[-0.006em] whitespace-nowrap">
              {thirdPartySource.label}
            </span>
          </div>
        </div>

        <div className="flex flex-col items-center gap-3 px-6 py-[24px] text-center ">
          <p className="text-sm leading-5">
            <span className="text-heading">Structurely AI </span>{" "}
            <span className="text-foreground">activates instantly.</span>
          </p>
          <p className="font-figma-hand text-center text-[16px] leading-6 font-bold tracking-[-0.02em]">
            <span className="text-[var(--primary)]">No delay.</span>{" "}
            <span className="text-heading">No rep assignment required.</span>
          </p>
        </div>
      </section>
    </div>
  );
}

export default LeadCaptureSection;
