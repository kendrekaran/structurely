const cardShadow =
  "shadow-[0_0_0_1px_rgba(0,0,0,0.08),0_1px_1px_-0.5px_rgba(51,51,51,0.05),0_3px_3px_-1.5px_rgba(51,51,51,0.05),0_6px_6px_-3px_rgba(51,51,51,0.05),0_12px_12px_-6px_rgba(51,51,51,0.05),0_24px_24px_-12px_rgba(51,51,51,0.05)]";

function SalesforceIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="3" width="7" height="7" rx="1.5" stroke="#006FFF" strokeWidth="1.5" />
      <rect x="14" y="3" width="7" height="7" rx="1.5" stroke="#006FFF" strokeWidth="1.5" />
      <rect x="3" y="14" width="7" height="7" rx="1.5" stroke="#006FFF" strokeWidth="1.5" />
      <rect x="14" y="14" width="7" height="7" rx="1.5" stroke="#006FFF" strokeWidth="1.5" />
    </svg>
  );
}

function MortgageIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z"
        stroke="#006FFF"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 22V12H15V22"
        stroke="#006FFF"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function DedicatedAMIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
        stroke="#006FFF"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx="9"
        cy="7"
        r="4"
        stroke="#006FFF"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M23 21v-2a4 4 0 0 0-3-3.87"
        stroke="#006FFF"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 3.13a4 4 0 0 1 0 7.75"
        stroke="#006FFF"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M6 12L10 8L6 4"
        stroke="#006FFF"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const features = [
  {
    Icon: SalesforceIcon,
    title: "Salesforce Integration",
    description:
      "Full CRM integration so your AI workforce operates inside your existing systems from day one.",
  },
  {
    Icon: MortgageIcon,
    title: "Mortgage Agent — Ready to Go",
    description:
      "Out-of-the-box agent trained on VA, Conventional, FHA, HELOC, Purchase, and Refinance conversations.",
  },
  {
    Icon: DedicatedAMIcon,
    title: "60-Day Dedicated AM",
    description:
      "A named Account Manager to fine-tune campaigns, optimize transfers, and make sure you see ROI fast.",
  },
];

export default function OnboardingSection() {
  return (
    <section id="onboarding" className="relative z-0 border-t border-[#E5E7EB] bg-white">
      <div className="px-global py-section-md">
        <div className="max-w-global mx-auto flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col gap-4 md:max-w-[55%]">
            <h2>
              Onboarding That Sets{" "}
              <span className="text-[#006FFF]">You Up to Win</span>
            </h2>
            <p>
              Your onboarding fee isn&apos;t a setup cost — it&apos;s the
              foundation of your AI sales operation. We build your system,
              connect your tools, and pair you with a dedicated Account Manager
              who stays with you for the first 60 days.
            </p>
          </div>

          <div className="flex flex-col items-start gap-1 md:items-end md:text-right">
            <span className="text-[52px] font-medium leading-none tracking-[-0.04em] text-[#202020] md:text-[64px]">
              $2,500
            </span>
            <span className="text-[14px] leading-5 text-[#646464]">
              One-time per account
            </span>
          </div>
        </div>
      </div>

      <div className="border-t border-b border-[#E5E7EB]">
        <div className="px-global">
          <div className="max-w-global mx-auto">
            <div className="flex flex-col md:flex-row items-stretch">
              {features.map((feature, index) => (
                <div key={index} className="flex flex-1 items-stretch">
                  <div className="flex flex-1 flex-col items-center justify-center gap-5 px-6 py-10 md:px-12">
                    <div className={`flex items-center justify-center rounded-[10px] bg-white p-3 ${cardShadow}`}>
                      <feature.Icon />
                    </div>
                    <div className="flex flex-col items-center gap-2 text-center">
                      <span className="text-[15px] font-medium leading-5 tracking-[-0.01em] text-[#202020]">
                        {feature.title}
                      </span>
                      <span className="text-[13px] leading-5 text-[#646464] max-w-[18em]">
                        {feature.description}
                      </span>
                    </div>
                  </div>

                  {index < features.length - 1 && (
                    <div className="hidden md:flex flex-col items-center self-stretch">
                      <div className="w-px flex-1 bg-[#E5E7EB]" />
                      <div className={`flex items-center rounded-md bg-white p-1 ${cardShadow}`}>
                        <ChevronIcon />
                      </div>
                      <div className="w-px flex-1 bg-[#E5E7EB]" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
