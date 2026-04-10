import { IconStepsRow } from "@/components/_ui/icon-steps-row";
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

function CrmSynchronizationSection() {
  return (
    <div className="px-global">
      <section
        id="crm-synchronization"
        className="max-w-global relative z-0 mx-auto border-x border-[#E5E7EB]"
      >
        <div className="py-section-md flex flex-col items-center gap-3 px-6 md:px-24">
          <h2 data-reveal="words" className="max-w-[12em] text-center">
            <span className="text-[#006FFF]">CRM</span>{" "}
            <span className="md:text-heading text-[#006FFF]">
              synchronization
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
        <IconStepsRow
          items={syncItems.map((item) => ({
            key: item.label,
            label: item.label,
            icon: (
              <img
                src={item.icon}
                alt={item.label}
                width={24}
                height={24}
                className="shrink-0"
              />
            ),
          }))}
        />

        <div className="flex flex-col items-center gap-3 border-t border-[#E5E7EB] px-6 py-6 md:px-24">
          <p className="text-center text-[14px] leading-5 tracking-[-0.01em]">
            Is recorded inside your{" "}
            <span className="text-heading font-medium">CRM.</span>
          </p>
          <p className=" text-center text-[16px] leading-6 font-bold tracking-[-0.02em]">
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
