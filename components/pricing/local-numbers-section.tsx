import Button from "@/components/_ui/button";
import Link from "next/link";

const ICON_SHADOW =
  "shadow-[0_0_0_1px_rgba(0,0,0,0.08),0_1px_1px_-0.5px_rgba(51,51,51,0.05),0_3px_3px_-1.5px_rgba(51,51,51,0.05),0_6px_6px_-3px_rgba(51,51,51,0.05),0_12px_12px_-6px_rgba(51,51,51,0.05),0_24px_24px_-12px_rgba(51,51,51,0.05)]";

const BADGE_SHADOW =
  "shadow-[0_0_0_1px_rgba(0,0,0,0.08),0_1px_1px_-0.5px_rgba(51,51,51,0.05),0_3px_3px_-1.5px_rgba(51,51,51,0.05),0_6px_6px_-3px_rgba(51,51,51,0.05),0_12px_12px_-6px_rgba(51,51,51,0.05),0_24px_24px_-12px_rgba(51,51,51,0.05)]";

function LocationIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20 10C20 14.993 14.461 20.193 12.601 21.799C12.4277 21.9293 12.2168 21.9998 12 21.9998C11.7832 21.9998 11.5723 21.9293 11.399 21.799C9.539 20.193 4 14.993 4 10C4 7.87827 4.84285 5.84344 6.34315 4.34315C7.84344 2.84285 9.87827 2 12 2C14.1217 2 16.1566 2.84285 17.6569 4.34315C19.1571 5.84344 20 7.87827 20 10Z"
        stroke="#006FFF"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z"
        stroke="#006FFF"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LockIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19 11H5C3.89543 11 3 11.8954 3 13V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V13C21 11.8954 20.1046 11 19 11Z"
        stroke="#006FFF"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 11V7C7 5.67392 7.52678 4.40215 8.46447 3.46447C9.40215 2.52678 10.6739 2 12 2C13.3261 2 14.5979 2.52678 15.5355 3.46447C16.4732 4.40215 17 5.67392 17 7V11"
        stroke="#006FFF"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function BarChartIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z"
        stroke="#006FFF"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 7V14"
        stroke="#006FFF"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 7V11"
        stroke="#006FFF"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 7V16"
        stroke="#006FFF"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const features = [
  {
    Icon: LocationIcon,
    title: "Local area codes — by market",
    description:
      "Leads are far more likely to answer a number that looks local. We assign numbers matched to your leads' area codes across every market you run.",
  },
  {
    Icon: LockIcon,
    title: "Spam-mitigated & carrier-registered",
    description:
      'Numbers are pre-registered and continuously monitored across all major carriers. No "Spam Risk" labels. No flagged calls. Just clean dials.',
  },
  {
    Icon: BarChartIcon,
    title: "Scales with your account",
    description:
      "As your operation grows across markets, we scale your number inventory to match. Pricing is tailored to the number of numbers your account requires.",
  },
];

export default function LocalNumbersSection() {
  return (
    <section id="local-numbers" className="relative z-0">
      <div className="px-global">
        <div className="max-w-global mx-auto border-x border-[#E5E7EB]">
          <div className="flex flex-col gap-8 px-3 py-8 md:flex-row md:items-center md:gap-12 md:px-12 md:py-16">
            <div className="flex flex-col gap-4 md:flex-1">
              <div
                className={`w-fit overflow-hidden rounded-lg bg-white px-4 py-2 ${BADGE_SHADOW}`}
              >
                <span className="text-[12px] leading-4 font-medium text-[#646464]">
                  🛡️ Built-in protection
                </span>
              </div>
              <h2 className="text-[32px] leading-[1.125] font-medium tracking-[-0.03em] md:text-[48px] md:leading-[54px]">
                <span className="text-[#202020]">Local numbers.</span>
                <br />
                <span className="text-[#006FFF]">More pickups.</span>
                <br />
                <span className="text-[#202020]">Zero spam flags.</span>
              </h2>
            </div>

            <div className="flex flex-col items-start gap-6 md:flex-1 md:items-end">
              <p className="text-[14px] leading-6 font-medium tracking-[-0.01em] text-[#646464] md:max-w-[510px] md:text-right">
                Your AI agent calls from local area codes that match your
                leads&apos; markets — not a 1-800 number they&apos;ll never
                answer.
                <br />
                <br />
                Our spam mitigation service keeps your numbers clean, your
                caller reputation protected, and your connect rates high.
              </p>
              <Link href="/demo">
                <Button variant="primary" size="md" className="w-fit!">
                  Ask Us About This
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="px-global">
        <div className="max-w-global mx-auto border-x border-t border-[#E5E7EB]">
          <div className="flex flex-col divide-y divide-[#E5E7EB] md:flex-row md:divide-x md:divide-y-0">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="flex flex-1 flex-col gap-6 p-8 px-5 md:px-8"
              >
                <div
                  className={`flex h-[40px] w-[48px] items-center justify-center overflow-hidden rounded-[10px] bg-white ${ICON_SHADOW}`}
                >
                  <feature.Icon />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-[16px] leading-[26px] font-medium tracking-[-0.01em] text-[#202020]">
                    {feature.title}
                  </h3>
                  <p className="text-[12px] leading-5 font-medium tracking-[-0.01em] text-[#646464]">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
