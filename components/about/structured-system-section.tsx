import Image from "next/image";

function StructuredSystemSection() {
  const requirementItems = [
    {
      label: "Defined qualification logic",
      icon: "/assets/about/structure-system/1.svg",
    },
    {
      label: "Consistent outreach",
      icon: "/assets/about/structure-system/2.svg",
    },
    {
      label: "Clear handoffs",
      icon: "/assets/about/structure-system/3.svg",
    },
    {
      label: "Measurable intent",
      icon: "/assets/about/structure-system/4.svg",
    },
  ];

  return (
    <section id="structured-system" className="relative z-0">
      <div className="px-global">
        <div className="max-w-global mx-auto flex flex-col items-center border-x border-b border-[#E5E7EB]">
          <div className="py-section-md flex flex-col items-center gap-3 text-center">
            <h2 className="max-w-[278px] sm:max-w-[11em]">
              Why Our Systems Are{" "}
              <span className="text-primary">Structured</span>
            </h2>
            <p className="max-w-[278px] text-center sm:max-w-[27.375em]">
              Over time, we learned that successful follow-up requires more than
              speed.
            </p>
          </div>

          <div className="flex w-full flex-col items-center">
            <div className="rounded-t-xl border border-b-0 border-[#E5E7EB] bg-white px-4 py-2">
              <span className="text-foreground text-[14px] leading-[20px] tracking-[-0.01em]">
                It requires:
              </span>
            </div>

            <div className="flex w-full flex-col items-center justify-center gap-4 border-t border-[#E5E7EB] bg-[#FAFAFA] px-6 py-6 md:flex-row md:flex-wrap">
              {requirementItems.map((item) => (
                <div
                  key={item.label}
                  className="flex w-fit items-center gap-2 rounded-[10px] bg-white px-3 py-2 shadow-[0_0_0_1px_rgba(0,0,0,0.08),0_1px_1px_-0.5px_rgba(51,51,51,0.05),0_3px_3px_-1.5px_rgba(51,51,51,0.05),0_6px_6px_-3px_rgba(51,51,51,0.05),0_12px_12px_-6px_rgba(51,51,51,0.05),0_24px_24px_-12px_rgba(51,51,51,0.05)]"
                >
                  <Image
                    src={item.icon}
                    alt={item.label}
                    width={20}
                    height={20}
                  />
                  <span className="text-foreground text-[14px] leading-[20px] tracking-[-0.006em] whitespace-nowrap">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex w-full items-center">
              <div className="h-px flex-1 bg-[#E5E7EB]" />
              <div className="flex h-[24px] w-[28.8px] md:h-[40px] md:w-[48px] items-center justify-center rounded-[6px]  md:rounded-[10px] bg-white p-1.5 md:p-2 shadow-[0_0_0_1px_rgba(0,0,0,0.08),0_1px_1px_-0.5px_rgba(51,51,51,0.05),0_3px_3px_-1.5px_rgba(51,51,51,0.05),0_6px_6px_-3px_rgba(51,51,51,0.05),0_12px_12px_-6px_rgba(51,51,51,0.05),0_24px_24px_-12px_rgba(51,51,51,0.05)]">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
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
              <div className="h-px flex-1 bg-[#E5E7EB]" />
            </div>

            <div className="max-w-[33.857em] flex flex-col items-center gap-3 py-6 text-center">
              <p className=" text-[14px] leading-[20px] tracking-[-0.01em]">
                <span className="text-heading text-[14px] leading-[20px] tracking-[-0.01em]">
                  They are designed{" "}
                </span>
                <span className="text-[14px] leading-[20px] tracking-[-0.01em]">
                  to operate reliably inside existing workflows.
                </span>
              </p>
              <p
                className="max-w-[29.875em]  font-figma-hand text-center text-[16px] leading-6 font-bold tracking-[-0.02em]"
              >
                <span className="text-primary">
                  Our products are built around{" "}
                </span>
                <span className="text-heading">
                  structure and repeatability.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StructuredSystemSection;
