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
    <div className="flex flex-col justify-center items-center gap-px self-stretch shrink-0">
      <div className="w-px flex-1 bg-[#E5E7EB]" />
      <div className="flex p-1 items-center gap-2 rounded-md bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.08),0_1px_1px_-0.5px_rgba(51,51,51,0.05),0_3px_3px_-1.5px_rgba(51,51,51,0.05),0_6px_6px_-3px_rgba(51,51,51,0.05)]">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 12L10 8L6 4" stroke="#006FFF" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <div className="w-px flex-1 bg-[#E5E7EB]" />
    </div>
  );
}

function CrmSynchronizationSection() {
  return (
    <div className="px-global">
      <section
        id="crm-synchronization"
        className="max-w-global mx-auto border-x border-[#E5E7EB] relative z-0"
      >
        <div className="flex flex-col items-center py-section-md px-6 md:px-24 gap-3">
          <h2 className="max-w-[12em] text-center">
            <span className="text-[#006FFF]">CRM</span>{" "}
            <span>Synchronization</span>
          </h2>
        </div>

        <div className="flex flex-col items-center">
          <div className="px-4 py-2 rounded-t-xl border border-b-0 border-[#E5E7EB] bg-white">
            <span className="text-[14px] leading-5 tracking-[-0.01em] text-foreground">
              Every
            </span>
          </div>
        </div>

        <div className="w-screen ml-[calc(50%-50vw)] mr-[calc(50%-50vw)]">
          <Separator />
        </div>
        <div className="flex items-center  border-b border-[#E5E7EB] overflow-x-auto">
          {syncItems.map((item, index) => (
            <div key={item.label} className="flex items-center flex-1 min-w-[120px]">
              <div className="flex flex-col justify-center items-center gap-6 flex-1 px-6 md:px-12 py-8">
                <div className="flex px-3 py-2 items-center w-[48px] h-[40px] gap-2 rounded-[10px] bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.08),0_1px_1px_-0.5px_rgba(51,51,51,0.05),0_3px_3px_-1.5px_rgba(51,51,51,0.05),0_6px_6px_-3px_rgba(51,51,51,0.05),0_12px_12px_-6px_rgba(51,51,51,0.05),0_24px_24px_-12px_rgba(51,51,51,0.05)]">
                  <img
                    src={item.icon}
                    alt={item.label}
                    width={24}
                    height={24}
                    className="shrink-0"
                  />
                </div>
                <span className="text-[14px] leading-6 tracking-[-0.01em] text-heading text-center whitespace-nowrap">
                  {item.label}
                </span>
              </div>
              {index < syncItems.length - 1 && <ChevronDivider />}
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center gap-3 py-6 px-6 md:px-24 border-b border-[#E5E7EB]">
          <p className="text-center text-[14px] leading-5 tracking-[-0.01em]">
            Is recorded inside your{" "}
            <span className="text-heading font-medium">CRM.</span>
          </p>
          <p className="text-[16px] leading-6 tracking-[-0.02em] text-center [font-family:var(--font-caveat)] font-bold">
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
