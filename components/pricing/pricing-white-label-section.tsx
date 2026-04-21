import Button from "@/components/_ui/button";
import Link from "next/link";

const features = [
  "Multi-tenant architecture",
  "Dedicated partner success team",
  "Powering 50+ platforms today",
  "Fully white-labeled - your brand, your UX",
  "Integrate in days, not weeks",
  "Complete REST API & webhook suite",
];

function CheckIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0"
    >
      <path
        d="M5.625 10.8861L8.25 13.5423L14.375 6.45898"
        stroke="#006FFF"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function PricingWhiteLabelSection() {
  return (
    <section id="pricing-white-label" className="relative z-0">
      <div className="px-global">
        <div className="max-w-global mx-auto border-x border-[#E5E7EB]">
          <div className="grid grid-cols-1 divide-[#E5E7EB] md:grid-cols-2 md:flex-row md:divide-x md:divide-y md:divide-y-0">
            <div className="flex flex-1 flex-col gap-5 border-b bg-white p-5 md:border-b-0 md:p-12">
              <div className="flex flex-col gap-3">
                <span className="text-base leading-6 font-medium tracking-[-0.096px] text-[#646464]">
                  White label
                </span>

                <div className="flex items-baseline gap-2">
                  <span className="text-[32px] leading-[1] font-medium tracking-[-1.44px] text-[#202020]">
                    Custom
                  </span>
                  <span className="text-[12px] leading-6 font-medium tracking-[-0.12px] text-[#646464]">
                    /pricing &nbsp;·&nbsp; platform fee
                  </span>
                </div>

                <hr className="border-[#E5E7EB]" />

                <p className="text-[12px] leading-6 font-medium tracking-[-0.12px] text-[#646464]">
                  For CRMs, sales platforms, and outreach tools ready to embed
                  AI. Already powering 50+ white-labeled platforms across
                  mortgage, real estate, and financial services.
                </p>
              </div>

              <Button
                variant="outline"
                size="md"
                className="w-fit!"
                style={{ color: "#646464", borderColor: "#E5E7EB" }}
              >
                <Link href="https://calendly.com/structurely-sales/schedule-demo">
                  Talk to sales for pricing
                </Link>
              </Button>
            </div>

            <div className="flex flex-1 flex-col gap-4 p-5">
              <span className="text-[12px] leading-6 font-medium tracking-[-0.12px] text-[#646464]">
                Built for platforms:
              </span>

              <ul className="flex flex-col gap-5">
                {features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <CheckIcon />
                    <span className="text-[14px] leading-5 font-medium tracking-[-0.084px] text-[#646464]">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
