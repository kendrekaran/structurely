import { div } from "motion/react-client";
import Image from "next/image";
import Badge from "@/components/_ui/badge";

const leadSources = [
  { label: "Web form", icon: "/assets/how-it-works/logo/9.svg" },
  { label: "Paid ads", icon: "/assets/how-it-works/logo/1.svg" },
  { label: "Organic inquiry", icon: "/assets/how-it-works/logo/2.svg" },
  { label: "Third-party marketplace", icon: "/assets/how-it-works/logo/3.svg" },
  { label: "Manual entry", icon: "/assets/how-it-works/logo/4.svg" },
];

const iconShadow =
  "0 0 0 1px rgba(0,0,0,0.08), 0 1px 1px -0.5px rgba(51,51,51,0.05), 0 3px 3px -1.5px rgba(51,51,51,0.05), 0 6px 6px -3px rgba(51,51,51,0.05), 0 12px 12px -6px rgba(51,51,51,0.05), 0 24px 24px -12px rgba(51,51,51,0.05)";

function LeadCaptureSection() {
  return (
    <div className="px-global">
      <section
        id="lead-capture"
        className="max-w-global relative z-0 mx-auto flex flex-col items-center border-x border-b border-[#E5E7EB]"
      >
        <div className="py-section-md flex w-full flex-col items-center justify-center gap-3">
          <div className="flex w-full max-w-[46.375em] flex-col items-center gap-4">
            <Badge text="Lead Capture" />

            <h2 className="max-w-[11.08em] text-center">
            Structurely AI activates instantly.
              
            </h2>
          </div>
        </div>

        <div className="flex w-full items-stretch overflow-x-auto border-t border-b border-[var(--border)]">
          {leadSources.map((source, index) => (
            <div
              key={source.label}
              className={`flex min-w-[120px] flex-1 flex-col items-center justify-center gap-6 px-8 py-8 ${
                index < leadSources.length - 1
                  ? "border-r border-[var(--border)]"
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
              <span className="text-center text-sm leading-5 font-normal tracking-[-0.006em] whitespace-nowrap text-[var(--foreground)]">
                {source.label}
              </span>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center gap-1 px-6 py-[24px] text-center">
          <p className="text-sm leading-5">
            <strong className="  text-[var(--heading)]">
              Structurely AI 3
            </strong>{" "}
            <span className="text-[var(--foreground)]">
              activates instantly.
            </span>
          </p>
          <p className="text-sm leading-5 font-bold italic">
            <span className="cursue text-[var(--primary)]">No delay.</span>{" "}
            <span className="text-[var(--heading)]">
              No rep assignment required.
            </span>
          </p>
        </div>
      </section>
    </div>
  );
}

export default LeadCaptureSection;
