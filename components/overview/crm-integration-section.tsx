import Icon1 from "@/public/assets/overview/logos/1.svg";
import Icon2 from "@/public/assets/overview/logos/2.svg";
import Icon3 from "@/public/assets/overview/logos/3.svg";
import Icon4 from "@/public/assets/overview/logos/4.svg";
import Icon5 from "@/public/assets/overview/logos/5.svg";
import Icon6 from "@/public/assets/overview/logos/6.svg";
import Badge from "../_ui/badge";

const features = [
  {
    label: "Native integrations",
    icon: <Icon1 />,
  },
  {
    label: "Real-time activity logging",
    icon: <Icon2 />,
  },
  {
    label: "Automatic notes and summaries",
    icon: <Icon3 />,
  },
  {
    label: "Trigger-based workflows",
    icon: <Icon4 />,
  },
  {
    label: "Custom routing logic",
    icon: <Icon5 />,
  },
  {
    label: "It activates the CRM you already rely on.",
    icon: <Icon6 />,
  },
];

function CrmIntegrationSection() {
  return (
    <div className="px-global">
      <section
        id="crm-integration"
        className="max-w-global mx-auto flex flex-col items-start border-x  border-[#E5E7EB]"
      >
        <div className="flex flex-col items-center justify-center gap-4 self-stretch px-6 py-section-md md:px-24">
          <Badge text="CRM Integration" />
          <h2 className="max-w-[11.5em] text-center tracking-[-0.03em]">
            Built to Power Your CRM,{" "}
            <span className="text-[#006FFF]">Not Replace It</span>
          </h2>
        </div>

        <div className="flex items-center justify-center self-stretch border-t border-[#E5E7EB] bg-[#ffffff] px-6 py-[24px]  md:px-24">
          <p className="text-center text-[14px] leading-6 md:text-[16px]">
            <span className="font-medium text-[#006FFF]">
              Structurely AI works
            </span>{" "}
            inside your existing system.
          </p>
        </div>

        <div className="grid grid-cols-1 self-stretch border-t border-[#E5E7EB] sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const isLastRow =
              index >=
              features.length -
                (features.length % 3 === 0 ? 3 : features.length % 3);
            const isRightColSm = index % 2 === 1;
            const isRightColLg = index % 3 === 2;
            const isMidColLg = index % 3 === 1;

            return (
              <div
                key={feature.label}
                className={[
                  "flex flex-col items-center -space-y-3  border-[#E5E7EB] px-8 pt-[31px] pb-[11px] ",
                  "border-b lg:border-b",
                  isLastRow ? "lg:border-b-0" : "",
                  isRightColSm ? "" : "sm:border-r",
                  isRightColLg
                    ? "lg:border-r-0"
                    : isMidColLg
                      ? "lg:border-r"
                      : "lg:border-r",
                ]
                  .filter(Boolean)
                  .join(" ")}
              >
                <div className="">{feature.icon}</div>
                <p className="max-w-[14.28em]  text-center text-[14px] leading-5 text-[#202020] md:text-[14px]">
                  {feature.label}
                </p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default CrmIntegrationSection;
