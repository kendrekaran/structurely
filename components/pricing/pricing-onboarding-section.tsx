import Button from "@/components/_ui/button";
import Link from "next/link";

const featureRows = [
  [
    {
      title: "Platform setup & configuration",
      description:
        "Your account configured, campaigns built, and agents trained — ready to work leads from day one.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 15.9999V7.9999C20.9996 7.64918 20.9071 7.30471 20.7315 7.00106C20.556 6.69742 20.3037 6.44526 20 6.2699L13 2.2699C12.696 2.09437 12.3511 2.00195 12 2.00195C11.6489 2.00195 11.304 2.09437 11 2.2699L4 6.2699C3.69626 6.44526 3.44398 6.69742 3.26846 7.00106C3.09294 7.30471 3.00036 7.64918 3 7.9999V15.9999C3.00036 16.3506 3.09294 16.6951 3.26846 16.9987C3.44398 17.3024 3.69626 17.5545 4 17.7299L11 21.7299C11.304 21.9054 11.6489 21.9979 12 21.9979C12.3511 21.9979 12.696 21.9054 13 21.7299L20 17.7299C20.3037 17.5545 20.556 17.3024 20.7315 16.9987C20.9071 16.6951 20.9996 16.3506 21 15.9999Z" stroke="#006FFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" stroke="#006FFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      title: "Agents configured for your vertical",
      description:
        "Pre-built agents trained on mortgage, real estate, or home improvement — your talk track, your qualification criteria.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 18V5" stroke="#006FFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M15 13C14.1348 12.7471 13.3748 12.2206 12.834 11.4995C12.2932 10.7784 12.0005 9.90141 12 9C11.9995 9.90141 11.7068 10.7784 11.166 11.4995C10.6252 12.2206 9.8652 12.7471 9 13" stroke="#006FFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M17.598 6.49989C17.8281 6.10138 17.9635 5.65527 17.9936 5.19608C18.0237 4.73689 17.9478 4.27693 17.7717 3.85178C17.5956 3.42663 17.324 3.04769 16.9781 2.74427C16.6321 2.44085 16.221 2.22108 15.7765 2.10198C15.332 1.98288 14.866 1.96763 14.4147 2.0574C13.9634 2.14718 13.5387 2.33959 13.1737 2.61973C12.8086 2.89988 12.5129 3.26025 12.3093 3.67298C12.1058 4.0857 12 4.53971 12 4.99989C12 4.53971 11.8942 4.0857 11.6907 3.67298C11.4871 3.26025 11.1914 2.89988 10.8263 2.61973C10.4613 2.33959 10.0366 2.14718 9.5853 2.0574C9.13396 1.96763 8.66803 1.98288 8.22353 2.10198C7.77904 2.22108 7.3679 2.44085 7.02193 2.74427C6.67596 3.04769 6.40442 3.42663 6.22833 3.85178C6.05224 4.27693 5.97632 4.73689 6.00643 5.19608C6.03655 5.65527 6.17189 6.10138 6.402 6.49989" stroke="#006FFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M17.9971 5.125C18.5849 5.27614 19.1306 5.55905 19.5928 5.95231C20.0551 6.34557 20.4218 6.83887 20.6652 7.39485C20.9086 7.95082 21.0223 8.55489 20.9977 9.16131C20.9731 9.76773 20.8108 10.3606 20.5231 10.895" stroke="#006FFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M18 17.9999C18.8805 17.9998 19.7364 17.7093 20.4349 17.1733C21.1335 16.6372 21.6356 15.8857 21.8635 15.0352C22.0914 14.1847 22.0323 13.2827 21.6954 12.4693C21.3585 11.6558 20.7625 10.9762 20 10.5359" stroke="#006FFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M19.967 17.4829C20.0371 18.0251 19.9953 18.576 19.8441 19.1014C19.693 19.6269 19.4357 20.1157 19.0882 20.5379C18.7407 20.96 18.3104 21.3064 17.8238 21.5557C17.3372 21.805 16.8046 21.9518 16.259 21.9872C15.7134 22.0227 15.1664 21.9458 14.6516 21.7615C14.1369 21.5772 13.6654 21.2893 13.2662 20.9157C12.8671 20.542 12.5488 20.0905 12.331 19.589C12.1132 19.0875 12.0006 18.5467 12 17.9999C11.9994 18.5467 11.8867 19.0875 11.669 19.589C11.4512 20.0905 11.1329 20.542 10.7338 20.9157C10.3346 21.2893 9.86313 21.5772 9.34838 21.7615C8.83364 21.9458 8.28657 22.0227 7.74097 21.9872C7.19537 21.9518 6.66283 21.805 6.17622 21.5557C5.68961 21.3064 5.25927 20.96 4.91178 20.5379C4.56429 20.1157 4.30703 19.6269 4.15589 19.1014C4.00474 18.576 3.96291 18.0251 4.033 17.4829" stroke="#006FFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M5.99983 17.9999C5.11932 17.9998 4.26343 17.7093 3.56489 17.1733C2.86635 16.6372 2.3642 15.8857 2.1363 15.0352C1.90841 14.1847 1.96751 13.2827 2.30444 12.4693C2.64137 11.6558 3.23731 10.9762 3.99983 10.5359" stroke="#006FFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M6.00293 5.125C5.41513 5.27614 4.86943 5.55905 4.40716 5.95231C3.94489 6.34557 3.57817 6.83887 3.33477 7.39485C3.09138 7.95082 2.97769 8.55489 3.00232 9.16131C3.02695 9.76773 3.18925 10.3606 3.47693 10.895" stroke="#006FFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
  ],
  [
    {
      title: "60-day dedicated AM",
      description:
        "A named Account Manager to fine-tune campaigns, optimize transfer rates, and make sure you see ROI — fast.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11 17L13 19C13.197 19.197 13.4308 19.3532 13.6882 19.4598C13.9456 19.5665 14.2214 19.6213 14.5 19.6213C14.7786 19.6213 15.0544 19.5665 15.3118 19.4598C15.5692 19.3532 15.803 19.197 16 19C16.197 18.803 16.3532 18.5692 16.4598 18.3118C16.5665 18.0544 16.6213 17.7786 16.6213 17.5C16.6213 17.2214 16.5665 16.9456 16.4598 16.6882C16.3532 16.4308 16.197 16.197 16 16" stroke="#006FFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M14.0002 14L16.5002 16.5C16.8981 16.8978 17.4376 17.1213 18.0002 17.1213C18.5628 17.1213 19.1024 16.8978 19.5002 16.5C19.8981 16.1022 20.1215 15.5626 20.1215 15C20.1215 14.4374 19.8981 13.8978 19.5002 13.5L15.6202 9.62002C15.0577 9.05821 14.2952 8.74265 13.5002 8.74265C12.7052 8.74265 11.9427 9.05821 11.3802 9.62002L10.5002 10.5C10.1024 10.8978 9.56284 11.1213 9.00023 11.1213C8.43762 11.1213 7.89805 10.8978 7.50023 10.5C7.1024 10.1022 6.87891 9.56262 6.87891 9.00002C6.87891 8.43741 7.1024 7.89784 7.50023 7.50002L10.3102 4.69002C11.2225 3.78016 12.4121 3.20057 13.6909 3.04299C14.9696 2.88541 16.2644 3.15885 17.3702 3.82002L17.8402 4.10002C18.266 4.357 18.7723 4.44613 19.2602 4.35002L21.0002 4.00002" stroke="#006FFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M21 3L22 14H20" stroke="#006FFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M3 3L2 14L8.5 20.5C8.89782 20.8978 9.43739 21.1213 10 21.1213C10.5626 21.1213 11.1022 20.8978 11.5 20.5C11.8978 20.1022 12.1213 19.5626 12.1213 19C12.1213 18.4374 11.8978 17.8978 11.5 17.5" stroke="#006FFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M3 4H11" stroke="#006FFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      title: "Local number setup",
      description:
        "Spam-mitigated, market-matched local area code numbers configured for your lead geographies.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 8C18 11.613 14.131 15.429 12.607 16.795C12.4327 16.9282 12.2194 17.0003 12 17.0003C11.7806 17.0003 11.5673 16.9282 11.393 16.795C9.87 15.429 6 11.613 6 8C6 6.4087 6.63214 4.88258 7.75736 3.75736C8.88258 2.63214 10.4087 2 12 2C13.5913 2 15.1174 2.63214 16.2426 3.75736C17.3679 4.88258 18 6.4087 18 8Z" stroke="#006FFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 10C13.1046 10 14 9.10457 14 8C14 6.89543 13.1046 6 12 6C10.8954 6 10 6.89543 10 8C10 9.10457 10.8954 10 12 10Z" stroke="#006FFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8.71406 14H5.00406C4.79439 14.0001 4.59005 14.0661 4.41994 14.1886C4.24982 14.3112 4.12253 14.4841 4.05606 14.683L2.05206 20.683C2.00182 20.8333 1.98803 20.9934 2.01182 21.1501C2.03561 21.3068 2.0963 21.4556 2.18888 21.5842C2.28147 21.7128 2.40331 21.8176 2.54434 21.8899C2.68538 21.9622 2.84158 21.9999 3.00006 22H21.0001C21.1584 21.9999 21.3145 21.9621 21.4554 21.8899C21.5964 21.8177 21.7181 21.713 21.8107 21.5845C21.9033 21.456 21.964 21.3074 21.9879 21.1508C22.0118 20.9942 21.9981 20.8343 21.9481 20.684L19.9481 14.684C19.8817 14.4848 19.7543 14.3115 19.584 14.1888C19.4137 14.066 19.209 13.9999 18.9991 14H15.2871" stroke="#006FFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
  ],
];

function ChevronDivider() {
  return (
    <div className="flex flex-col items-center justify-center gap-px self-stretch">
      <div className="w-px flex-1 bg-[#E5E7EB]" />
      <div className="flex items-center gap-2 rounded-[6px] bg-white p-1 shadow-[0_0_0_1px_rgba(0,0,0,0.08),0_1px_1px_-0.5px_rgba(51,51,51,0.05),0_3px_3px_-1.5px_rgba(51,51,51,0.05),0_6px_6px_-3px_rgba(51,51,51,0.05),0_12px_12px_-6px_rgba(51,51,51,0.05),0_24px_24px_-12px_rgba(51,51,51,0.05)]">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 12L10 8L6 4" stroke="#006FFF" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      <div className="w-px flex-1 bg-[#E5E7EB]" />
    </div>
  );
}

function FeatureCard({ title, description, icon }: { title: string; description: string; icon: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center gap-6 px-3 md:px-12 py-8">
      <div className="flex items-center justify-center h-[40px] w-[48px] gap-2 rounded-[10px] bg-white p-3 shadow-[0_0_0_1px_rgba(0,0,0,0.08),0_1px_1px_-0.5px_rgba(51,51,51,0.05),0_3px_3px_-1.5px_rgba(51,51,51,0.05),0_6px_6px_-3px_rgba(51,51,51,0.05),0_12px_12px_-6px_rgba(51,51,51,0.05),0_24px_24px_-12px_rgba(51,51,51,0.05)]">
        {icon}
      </div>
      <div className="flex flex-col items-center gap-1 self-stretch">
        <p className="text-center font-medium text-[#202020]" style={{ fontSize: "16px", lineHeight: "26px", letterSpacing: "-0.01em" }}>
          {title}
        </p>
        <p className="self-stretch text-center max-w-[456px] text-[#646464]" style={{ fontSize: "14px", lineHeight: "24px", letterSpacing: "-0.01em", margin: "0 auto" }}>
          {description}
        </p>
      </div>
    </div>
  );
}

export default function PricingOnboardingSection() {
  return (
    <section id="pricing-onboarding" className="relative z-0">
      <div className="px-global">
        <div className="max-w-global mx-auto flex flex-col border-x border-[#E5E7EB]">

          <div className="flex flex-col items-center gap-4 px-6 py-8 md:py-16 md:px-24">
            <div className="rounded-[8px] bg-white px-4 py-2 shadow-[0_0_0_1px_rgba(0,0,0,0.08),0_1px_1px_-0.5px_rgba(51,51,51,0.05),0_3px_3px_-1.5px_rgba(51,51,51,0.05),0_6px_6px_-3px_rgba(51,51,51,0.05),0_12px_12px_-6px_rgba(51,51,51,0.05),0_24px_24px_-12px_rgba(51,51,51,0.05)]">
              <span className="text-[12px] font-medium leading-4 text-[#646464]">One-time setup</span>
            </div>
            <h2 data-reveal="words" className="text-center  " style={{ maxWidth: "500px" }}>
            Onboarding that sets
            you up to win
            </h2>
            <p className="text-center text-[#646464]" style={{ maxWidth: `${470 / 16}em`, fontSize: "16px", lineHeight: "26px", letterSpacing: "-0.01em" }}>
            Your onboarding fee isn&apos;t overhead — it&apos;s the foundation of your AI enhanced sales operation.
            </p>
          </div>

          <div className="flex flex-col items-start justify-between gap-6 border-t bg-white border-[#E5E7EB] px-3 md:px-6 py-6 md:py-12 md:flex-row md:items-center md:px-12">
            <div className="flex flex-col gap-3">
              <p style={{ fontSize: "28px", lineHeight: "36px", letterSpacing: "-0.03em" }}>
                <span className="text-[#646464] font-medium">Everything you need</span>
                <span className="text-[#202020] font-medium"> to go live — fast.</span>
              </p>
              <p className="text-[#646464] max-w-[577px]" style={{ fontSize: "14px", lineHeight: "24px", letterSpacing: "-0.01em" }}>
                We configure your system, set up your agents, and pair you with a dedicated Account Manager who stays with you for 60 days to optimize transfers and hit your ROI targets.
              </p>
            </div>
            <div className="flex flex-col items-start gap-4 md:items-end">
              <div className="flex flex-col items-start gap-1 md:items-end">
                <p className="text-center md:text-left text-[24px] md:text-[36px] leading-[32px] md:leading-[44px] tracking-[-0.03em]">
                  <span className="font-medium text-[#202020]">From </span>
                  <span className="font-medium text-[#006FFF]">$1,500</span>
                </p>
                <p className="text-[#646464]" style={{ fontSize: "16px", lineHeight: "24px", letterSpacing: "-0.006em" }}>
                  One-time · per plan
                </p>
              </div>
              <div className="flex items-center gap-1 rounded-[8px] bg-[rgba(40,159,64,0.12)] px-2 py-1">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.625 10.8853L8.25 13.5416L14.375 6.45825" stroke="#289F40" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="text-[12px] font-medium leading-4 text-[#289F40]">Included with all plans</span>
              </div>
            </div>
          </div>

          {featureRows.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className={`flex items-stretch border-t border-[#E5E7EB] ${rowIndex === featureRows.length - 1 ? "" : ""}`}
            >
              <div className="flex flex-1 flex-col md:flex-row divide-y divide-[#E5E7EB] md:divide-y-0 ">
                <div className="flex-1  ">
                  <FeatureCard {...row[0]} />
                </div>
                <span className="hidden md:flex"><ChevronDivider /></span>
                <div className="flex-1">
                  <FeatureCard {...row[1]} />
                </div>
              </div>
            </div>
          ))}

          <div className="flex flex-col bg-white items-center  justify-between gap-4 border-t  border-[#E5E7EB] px-6 py-6 md:flex-row md:items-center md:px-12">
            <p className="text-center md:text-left" style={{ fontSize: "14px", lineHeight: "20px", letterSpacing: "-0.01em", maxWidth: `${520 / 14}em` }}>
              <span className="text-[#646464]">Usage-based pricing means </span>
              <span className="text-[#006FFF]">you only pay as the AI delivers value</span> <br/>
              <span className="text-[#646464]"> — the more it works, the more you grow.</span>
            </p>
            <Link href="/demo">
              <Button variant="primary" className="w-fit md:w-auto">
                Request a demo
              </Button>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
