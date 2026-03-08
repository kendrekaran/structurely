import Separator from "../_ui/separator";

const syncItems = [
  {
    icon: "/assets/how-it-works/footer-logo/1.svg",
    label: "Message",
  },
  {
    icon: "/assets/how-it-works/footer-logo/2.svg",
    label: "Call attempt",
  },
  {
    icon: "/assets/how-it-works/footer-logo/3.svg",
    label: "Response",
  },
  {
    icon: "/assets/how-it-works/footer-logo/4.svg",
    label: "Qualification update",
  },
  {
    icon: "/assets/how-it-works/footer-logo/5.svg",
    label: "Appointment booked",
  },
];

function ChevronDivider() {
  return (
    <>
      {/* Desktop: vertical lines with right-pointing chevron */}
      <div className="hidden shrink-0 flex-col items-center justify-center gap-px self-stretch md:flex">
        <div className="w-px flex-1 bg-[#E5E7EB]" />
        <div className="flex items-center gap-2 rounded-md bg-white p-1 shadow-[0_0_0_1px_rgba(0,0,0,0.08),0_1px_1px_-0.5px_rgba(51,51,51,0.05),0_3px_3px_-1.5px_rgba(51,51,51,0.05),0_6px_6px_-3px_rgba(51,51,51,0.05)]">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 12L10 8L6 4"
              stroke="#006FFF"
              strokeWidth="1.33333"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="w-px flex-1 bg-[#E5E7EB]" />
      </div>
      {/* Mobile: horizontal lines with down-pointing chevron */}
      <div className="flex w-full shrink-0 flex-row items-center justify-center gap-px md:hidden">
        <div className="h-px flex-1 bg-[#E5E7EB]" />
        <div className="flex items-center gap-2 rounded-[6px] bg-white p-1 shadow-[0_0_0_1px_rgba(0,0,0,0.08),0_1px_1px_-0.5px_rgba(51,51,51,0.05),0_3px_3px_-1.5px_rgba(51,51,51,0.05),0_6px_6px_-3px_rgba(51,51,51,0.05)] md:rounded-[10px]">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 6L8 10L12 6"
              stroke="#006FFF"
              strokeWidth="1.33333"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="h-px flex-1 bg-[#E5E7EB]" />
      </div>
    </>
  );
}

function CrmSynchronizationSection() {
  return (
    <div className="px-global">
      <section
        id="crm-synchronization"
        className="max-w-global relative z-0 mx-auto border-x border-[#E5E7EB]"
      >
        <div className="py-section-md flex flex-col items-center gap-3 px-6 md:px-24">
          <h2 className="max-w-[12em] text-center">
            <span className="text-[#006FFF]">CRM</span>{" "}
            <span className="md:text-heading text-[#006FFF]">
              Synchronization
            </span>
          </h2>
        </div>

        <div className="flex flex-col items-center">
          <div className="rounded-t-xl border border-b-0 border-[#E5E7EB] bg-white px-4 py-2">
            <span className="text-foreground text-[14px] leading-5 tracking-[-0.01em]">
              Every
            </span>
          </div>
        </div>

        <div className="mr-[calc(50%-50vw)] ml-[calc(50%-50vw)] w-screen">
          <Separator />
        </div>
        <div className="flex flex-col border-b border-[#E5E7EB] md:flex-row md:items-center">
          {syncItems.map((item, index) => (
            <div
              key={item.label}
              className="flex flex-col md:min-w-[120px] md:flex-1 md:flex-row md:items-center"
            >
              <div className="flex flex-1 flex-col items-center justify-center gap-4 px-6 py-6 md:h-[151px] md:gap-6 md:px-0 md:py-8">
                <div className="flex h-[40px] w-[48px] items-center gap-2 rounded-[10px] bg-white px-3 py-2 shadow-[0_0_0_1px_rgba(0,0,0,0.08),0_1px_1px_-0.5px_rgba(51,51,51,0.05),0_3px_3px_-1.5px_rgba(51,51,51,0.05),0_6px_6px_-3px_rgba(51,51,51,0.05),0_12px_12px_-6px_rgba(51,51,51,0.05),0_24px_24px_-12px_rgba(51,51,51,0.05)]">
                  <img
                    src={item.icon}
                    alt={item.label}
                    width={24}
                    height={24}
                    className="shrink-0"
                  />
                </div>
                <span className="max-w-[137px] text-heading text-center text-[14px] leading-6 tracking-[-0.01em]">
                  {item.label}
                </span>
              </div>
              {index < syncItems.length - 1 && <ChevronDivider />}
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center gap-3 border-b border-[#E5E7EB] px-6 py-6 md:px-24">
          <p className="text-center text-[14px] leading-5 tracking-[-0.01em]">
            Is recorded inside your{" "}
            <span className="text-heading font-medium">CRM.</span>
          </p>
          <p className="font-figma-hand text-center text-[16px] leading-6 font-bold tracking-[-0.02em]">
            <span className="text-[#006FFF] underline">Sales teams</span>
            <span className="text-[#006FFF]"> </span>
            <span className="text-heading">see complete context.</span>
          </p>
        </div>
      </section>
    </div>
  );
}

export default CrmSynchronizationSection;
