import Image from "next/image";

const iconShadow =
  "0 0 0 1px rgba(0,0,0,0.08), 0 1px 1px -0.5px rgba(51,51,51,0.05), 0 3px 3px -1.5px rgba(51,51,51,0.05), 0 6px 6px -3px rgba(51,51,51,0.05), 0 12px 12px -6px rgba(51,51,51,0.05), 0 24px 24px -12px rgba(51,51,51,0.05)";

const channels = [
  { logo: "/assets/how-it-works/logo/5.svg", label: "SMS" },
  { logo: "/assets/how-it-works/logo/6.svg", label: "Email" },
  { logo: "/assets/how-it-works/logo/7.svg", label: "Voice (AI-powered calling)" },
  { logo: "/assets/how-it-works/logo/8.svg", label: "AI auto dialer for follow-up sequences" },
];

function MultiChannelSection() {
  return (
    <div className="px-global ">
      <section id="multi-channel" className="max-w-global mx-auto border-x border-b border-border relative z-0">
        <div className="pt-section-md">
          <div className="">
            <div className="flex flex-col items-center">
              <h2 className="max-w-[11em] text-center">
                Immediate{" "}
                <span className="text-[#4B7BFF]">Multi-Channel</span>{" "}
                Engagement
              </h2>

              <div className="mt-16 flex flex-col items-center w-full">
                <div className="inline-flex items-center justify-center px-4 py-2 rounded-t-xl border border-b-0 border-border bg-white">
                  <span className="text-sm text-foreground tracking-[-0.14px]">AI initiates</span>
                </div>

                <div className="w-full border-y border-border flex items-stretch overflow-x-auto">
                  {channels.map((channel, index) => (
                    <div
                      key={channel.label}
                      className={`flex flex-col items-center justify-center gap-6 flex-1 min-w-[120px] px-8 py-8 ${
                        index < channels.length - 1 ? "border-r border-border" : ""
                      }`}
                    >
                      <Image
                        src={channel.logo}
                        alt={channel.label}
                        width={48}
                        height={40}
                        className="rounded-[10px] w-[48px] py-[8px] px-[12px] h-[40px]"
                        style={{ boxShadow: iconShadow }}
                      />
                      <span className="text-foreground text-sm font-normal leading-5 text-center tracking-[-0.006em] whitespace-nowrap">
                        {channel.label}
                      </span>
                    </div>
                  ))}
                </div>

                <p className="py-6 text-[14px] leading-[20px] tracking-[-0.01em] text-foreground text-center">
                  All logged in your <strong className="font-normal text-heading">CRM automatically.</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default MultiChannelSection;
