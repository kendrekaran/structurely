import Image from "next/image";

const iconShadow =
  "0 0 0 1px rgba(0,0,0,0.08), 0 1px 1px -0.5px rgba(51,51,51,0.05), 0 3px 3px -1.5px rgba(51,51,51,0.05), 0 6px 6px -3px rgba(51,51,51,0.05), 0 12px 12px -6px rgba(51,51,51,0.05), 0 24px 24px -12px rgba(51,51,51,0.05)";

const channels = [
  { logo: "/assets/how-it-works/logo/5.svg", label: "SMS" },
  { logo: "/assets/how-it-works/logo/6.svg", label: "Email" },
  {
    logo: "/assets/how-it-works/logo/7.svg",
    label: "Voice (AI-powered calling)",
  },
  {
    logo: "/assets/how-it-works/logo/8.svg",
    label: "AI auto dialer for follow-up sequences",
  },
];

function MultiChannelSection() {
  return (
    <div className="px-global">
      <section
        id="multi-channel"
        className="max-w-global  border-border relative z-0 mx-auto border-x"
      >
        <div className="pt-section-md  md:px-0">
          <div className="">
            <div className="flex flex-col items-center">
              <h2 data-reveal="words" className="text-center md:max-w-[11em]">
                Immediate{" "}
                <span className="text-[#006FFF]">Multi-<br/>Channel</span>{" "}
                Engagement
              </h2>

              <div className="mt-6 flex w-full flex-col items-center md:mt-16">
                <div className="border-border inline-flex items-center justify-center rounded-t-xl border border-b-0 bg-white px-4 py-2">
                  <span className="text-foreground text-sm tracking-[-0.14px]">
                    AI initiates
                  </span>
                </div>

                <div className="border-border grid w-full grid-cols-2 border-y md:grid-cols-4">
                  {channels.map((channel, index) => {
                    const desktopCols = 4;
                    const mobileCols = 2;
                    const totalItems = channels.length;
                    const mobileRow = Math.floor(index / mobileCols);
                    const mobileCol = index % mobileCols;
                    const mobileRows = Math.ceil(totalItems / mobileCols);
                    const isMobileLastCol = mobileCol === mobileCols - 1;
                    const isMobileLastRow = mobileRow === mobileRows - 1;
                    const desktopCol = index % desktopCols;
                    const isDesktopLastCol =
                      desktopCol === desktopCols - 1 ||
                      index === totalItems - 1;

                    return (
                      <div
                        key={channel.label}
                        className={`flex flex-1 flex-col items-center justify-center gap-6 py-6 hover:bg-black/[0.03] md:h-[148px] px-[12px] md:px-8 md:py-8 ${
                          !isMobileLastCol ? "border-border border-r" : ""
                        } ${
                          !isMobileLastRow
                            ? "border-border border-b md:border-b-0"
                            : ""
                        } ${
                          !isDesktopLastCol
                            ? "md:border-border md:border-r"
                            : "md:border-r-0"
                        }`}
                      >
                        <Image
                          src={channel.logo}
                          alt={channel.label}
                          width={48}
                          height={40}
                          className="h-[40px] w-[48px] rounded-[10px] px-[12px] py-[8px]"
                          style={{ boxShadow: iconShadow }}
                        />
                        <span className="text-foreground max-w-[159px] text-center text-sm leading-5 font-normal tracking-[-0.006em] md:max-w-full">
                          {channel.label}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
              <p className="text-foreground w-full bg-white py-6 text-center text-[14px] leading-[20px] tracking-[-0.01em]">
                  All logged in your{" "}
                  <strong className="text-heading font-normal">
                    CRM automatically.
                  </strong>
                </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default MultiChannelSection;
