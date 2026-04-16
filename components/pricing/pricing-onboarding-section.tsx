import Button from "@/components/_ui/button";
import Link from "next/link";
import Badge from "../_ui/badge";

const featureRows = [
  [
    {
      title: "Platform Setup & Configuration",
      description:
        "Account built, campaigns ready, agents trained from day one.",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21 15.9999V7.9999C20.9996 7.64918 20.9071 7.30471 20.7315 7.00106C20.556 6.69742 20.3037 6.44526 20 6.2699L13 2.2699C12.696 2.09437 12.3511 2.00195 12 2.00195C11.6489 2.00195 11.304 2.09437 11 2.2699L4 6.2699C3.69626 6.44526 3.44398 6.69742 3.26846 7.00106C3.09294 7.30471 3.00036 7.64918 3 7.9999V15.9999C3.00036 16.3506 3.09294 16.6951 3.26846 16.9987C3.44398 17.3024 3.69626 17.5545 4 17.7299L11 21.7299C11.304 21.9054 11.6489 21.9979 12 21.9979C12.3511 21.9979 12.696 21.9054 13 21.7299L20 17.7299C20.3037 17.5545 20.556 17.3024 20.7315 16.9987C20.9071 16.6951 20.9996 16.3506 21 15.9999Z"
            stroke="#006FFF"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
            stroke="#006FFF"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
    },
    {
      title: "Vertical-specific agents",
      description:
        "Pre-built for mortgage, real estate, home improvement & more.",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 18V5"
            stroke="#006FFF"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15 13C14.1348 12.7471 13.3748 12.2206 12.834 11.4995C12.2932 10.7784 12.0005 9.90141 12 9C11.9995 9.90141 11.7068 10.7784 11.166 11.4995C10.6252 12.2206 9.8652 12.7471 9 13"
            stroke="#006FFF"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M17.598 6.49989C17.8281 6.10138 17.9635 5.65527 17.9936 5.19608C18.0237 4.73689 17.9478 4.27693 17.7717 3.85178C17.5956 3.42663 17.324 3.04769 16.9781 2.74427C16.6321 2.44085 16.221 2.22108 15.7765 2.10198C15.332 1.98288 14.866 1.96763 14.4147 2.0574C13.9634 2.14718 13.5387 2.33959 13.1737 2.61973C12.8086 2.89988 12.5129 3.26025 12.3093 3.67298C12.1058 4.0857 12 4.53971 12 4.99989C12 4.53971 11.8942 4.0857 11.6907 3.67298C11.4871 3.26025 11.1914 2.89988 10.8263 2.61973C10.4613 2.33959 10.0366 2.14718 9.5853 2.0574C9.13396 1.96763 8.66803 1.98288 8.22353 2.10198C7.77904 2.22108 7.3679 2.44085 7.02193 2.74427C6.67596 3.04769 6.40442 3.42663 6.22833 3.85178C6.05224 4.27693 5.97632 4.73689 6.00643 5.19608C6.03655 5.65527 6.17189 6.10138 6.402 6.49989"
            stroke="#006FFF"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M17.9971 5.125C18.5849 5.27614 19.1306 5.55905 19.5928 5.95231C20.0551 6.34557 20.4218 6.83887 20.6652 7.39485C20.9086 7.95082 21.0223 8.55489 20.9977 9.16131C20.9731 9.76773 20.8108 10.3606 20.5231 10.895"
            stroke="#006FFF"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18 17.9999C18.8805 17.9998 19.7364 17.7093 20.4349 17.1733C21.1335 16.6372 21.6356 15.8857 21.8635 15.0352C22.0914 14.1847 22.0323 13.2827 21.6954 12.4693C21.3585 11.6558 20.7625 10.9762 20 10.5359"
            stroke="#006FFF"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M19.967 17.4829C20.0371 18.0251 19.9953 18.576 19.8441 19.1014C19.693 19.6269 19.4357 20.1157 19.0882 20.5379C18.7407 20.96 18.3104 21.3064 17.8238 21.5557C17.3372 21.805 16.8046 21.9518 16.259 21.9872C15.7134 22.0227 15.1664 21.9458 14.6516 21.7615C14.1369 21.5772 13.6654 21.2893 13.2662 20.9157C12.8671 20.542 12.5488 20.0905 12.331 19.589C12.1132 19.0875 12.0006 18.5467 12 17.9999C11.9994 18.5467 11.8867 19.0875 11.669 19.589C11.4512 20.0905 11.1329 20.542 10.7338 20.9157C10.3346 21.2893 9.86313 21.5772 9.34838 21.7615C8.83364 21.9458 8.28657 22.0227 7.74097 21.9872C7.19537 21.9518 6.66283 21.805 6.17622 21.5557C5.68961 21.3064 5.25927 20.96 4.91178 20.5379C4.56429 20.1157 4.30703 19.6269 4.15589 19.1014C4.00474 18.576 3.96291 18.0251 4.033 17.4829"
            stroke="#006FFF"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5.99983 17.9999C5.11932 17.9998 4.26343 17.7093 3.56489 17.1733C2.86635 16.6372 2.3642 15.8857 2.1363 15.0352C1.90841 14.1847 1.96751 13.2827 2.30444 12.4693C2.64137 11.6558 3.23731 10.9762 3.99983 10.5359"
            stroke="#006FFF"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6.00293 5.125C5.41513 5.27614 4.86943 5.55905 4.40716 5.95231C3.94489 6.34557 3.57817 6.83887 3.33477 7.39485C3.09138 7.95082 2.97769 8.55489 3.00232 9.16131C3.02695 9.76773 3.18925 10.3606 3.47693 10.895"
            stroke="#006FFF"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
  ],
  [
    {
      title: "60-Day Dedicated AM",
      description: "Fine-tuning campaigns and optimizing transfer rates.",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m11 17 2 2a1.42 1.42 0 0 0 2.12 0 1.38 1.38 0 0 0 0-1.96l-1.1-1.09a1.38 1.38 0 0 0-1.96 0l-.85.86"
            stroke="#006FFF"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="m16.5 13.5 1.09-1.09c.78-.78 2.04-.85 2.93-.15l1.51 1.5c.9.9.9 2.34 0 3.24-.9.9-2.34.9-3.24 0l-.74-.74"
            stroke="#006FFF"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="m7.5 12.5 1.09-1.09c.78-.78 2.04-.85 2.93-.15l1.51 1.5c.9.9.9 2.34 0 3.24-.9.9-2.34.9-3.24 0l-.74-.74"
            stroke="#006FFF"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15 11a1 1 0 0 0 1-1V7a1 1 0 1 0-2 0"
            stroke="#006FFF"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9 12H4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h1"
            stroke="#006FFF"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M20 10V8a2 2 0 0 0-2-2h-2"
            stroke="#006FFF"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16 10V6a2 2 0 0 0-2-2H8l-1 1"
            stroke="#006FFF"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      title: "Local Number Setup",
      description:
        "Spam-mitigated, market-matched numbers for your geographies.",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18 8C18 11.613 14.131 15.429 12.607 16.795C12.4327 16.9282 12.2194 17.0003 12 17.0003C11.7806 17.0003 11.5673 16.9282 11.393 16.795C9.87 15.429 6 11.613 6 8C6 6.4087 6.63214 4.88258 7.75736 3.75736C8.88258 2.63214 10.4087 2 12 2C13.5913 2 15.1174 2.63214 16.2426 3.75736C17.3679 4.88258 18 6.4087 18 8Z"
            stroke="#006FFF"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M12 10C13.1046 10 14 9.10457 14 8C14 6.89543 13.1046 6 12 6C10.8954 6 10 6.89543 10 8C10 9.10457 10.8954 10 12 10Z"
            stroke="#006FFF"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M8.71357 14H5.00357C4.7939 14.0001 4.58956 14.0661 4.41945 14.1886C4.24933 14.3112 4.12204 14.4841 4.05557 14.683L2.05157 20.683C2.00133 20.8333 1.98754 20.9934 2.01133 21.1501C2.03512 21.3068 2.09581 21.4556 2.1884 21.5842C2.28098 21.7128 2.40282 21.8176 2.54385 21.8899C2.68489 21.9622 2.84109 21.9999 2.99957 22H20.9996C21.1579 21.9999 21.314 21.9621 21.455 21.8899C21.5959 21.8177 21.7176 21.713 21.8102 21.5845C21.9028 21.456 21.9635 21.3074 21.9874 21.1508C22.0113 20.9942 21.9976 20.8343 21.9476 20.684L19.9476 14.684C19.8812 14.4848 19.7539 14.3115 19.5835 14.1888C19.4132 14.066 19.2085 13.9999 18.9986 14H15.2866"
            stroke="#006FFF"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
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
  );
}

function FeatureCard({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-center gap-6 px-3 py-8 md:px-12">
      <div className="flex h-[40px] w-[48px] items-center justify-center gap-2 rounded-[10px] bg-white p-3 shadow-[0_0_0_1px_rgba(0,0,0,0.08),0_1px_1px_-0.5px_rgba(51,51,51,0.05),0_3px_3px_-1.5px_rgba(51,51,51,0.05),0_6px_6px_-3px_rgba(51,51,51,0.05),0_12px_12px_-6px_rgba(51,51,51,0.05),0_24px_24px_-12px_rgba(51,51,51,0.05)]">
        {icon}
      </div>
      <div className="flex flex-col items-center gap-1 self-stretch">
        <p className="text-center text-[16px] leading-[26px] font-medium tracking-[-0.01em] text-[#202020]">
          {title}
        </p>
        <p className="mx-auto max-w-[18.5em] self-stretch text-center text-[14px] leading-[24px] tracking-[-0.01em] text-[#646464]">
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
          <div className="flex flex-col lg:flex-row">
            <div className="flex flex-1 flex-col justify-center gap-4 p-8 px-[12px] md:p-12 md:px-8 md:py-[87px]">
              <div className="self-start">
                <Badge text="One-Time Setup" />
              </div>

              <h2 data-reveal="words" className="max-w-[10em]">
                Onboarding that sets you up to win
              </h2>

              <div className="flex flex-col gap-2">
                <p
                  className="text-[16px] leading-[26px] font-medium tracking-[-0.01em] text-[#202020]"
                  style={{ maxWidth: "34em" }}
                >
                  We configure your system, build your agents, and pair you with
                  a dedicated Account Manager who stays with you for 60 days to
                  optimize transfers and hit your ROI targets.
                </p>
                <p
                  className="text-[14px] leading-[24px] font-semibold tracking-[-0.01em] text-[#202020]"
                  style={{ maxWidth: "34em" }}
                >
                  Your implementation fee isn&apos;t overhead — it&apos;s the
                  foundation of your AI-enhanced sales operation.
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center px-3 pb-[56px] md:p-12 md:pb-0">
              <div className="flex w-full flex-col items-center justify-center gap-4 rounded-[10px] border border-[#E5E7EB] bg-white px-8 py-[40px] shadow-[0_0_0_1px_rgba(0,0,0,0.08)] md:w-[289px]">
                <div className="flex w-full flex-col items-center gap-2">
                  <span className="text-[14px] leading-5 font-medium tracking-[-0.006em] text-[#646464]">
                    From
                  </span>
                  <div className="flex items-end gap-1">
                    <span className="text-[40px] leading-[44px] font-medium tracking-[-0.03em] text-[#202020]">
                      $1,500
                    </span>
                    <span className="pb-1 text-[16px] leading-6 font-medium tracking-[-0.01em] text-[#646464]">
                      /mo
                    </span>
                  </div>
                  <p
                    className="text-center text-[12px] leading-5 tracking-[-0.0075em] text-[#646464]"
                    style={{ maxWidth: "14em" }}
                  >
                    one-time implementation fee, included with all plans
                  </p>
                </div>
                <Link href="/demo" className="w-full">
                  <Button variant="primary" className="w-full md:w-full">
                    Request a demo
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {featureRows.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className="flex items-stretch border-t border-[#E5E7EB]"
            >
              <div className="flex flex-1 flex-col divide-y divide-[#E5E7EB] md:flex-row md:divide-y-0">
                <div className="flex-1">
                  <FeatureCard {...row[0]} />
                </div>
                <span className="hidden md:flex">
                  <ChevronDivider />
                </span>
                <div className="flex-1">
                  <FeatureCard {...row[1]} />
                </div>
              </div>
            </div>
          ))}

          {/* <div className="flex flex-col items-center justify-between gap-4 border-t border-[#E5E7EB] bg-white px-6 py-6 md:flex-row md:items-center md:px-12">
            <p
              className="text-center text-[14px] leading-[20px] tracking-[-0.01em] md:text-left"
              style={{ maxWidth: `${520 / 14}em` }}
            >
              <span className="text-[#646464]">Usage-based pricing means </span>
              <span className="text-[#006FFF]">
                you only pay as the AI delivers value
              </span>
              <br />
              <span className="text-[#646464]">
                {" "}
                — the more it works, the more you grow.
              </span>
            </p>
            <Link href="/demo">
              <Button variant="primary" className="w-fit md:w-auto">
                Request a demo
              </Button>
            </Link>
          </div> */}
        </div>
      </div>
    </section>
  );
}
