"use client";

import { useState } from "react";

function TabIcon({ active }: { active: boolean }) {
  const stroke = active ? "#006FFF" : "#646464";
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22 17C22 17.5304 21.7893 18.0391 21.4142 18.4142C21.0391 18.7893 20.5304 19 20 19H6.828C6.29761 19.0001 5.78899 19.2109 5.414 19.586L3.212 21.788C3.1127 21.8873 2.9862 21.9549 2.84849 21.9823C2.71077 22.0097 2.56803 21.9956 2.43831 21.9419C2.30858 21.8881 2.1977 21.7971 2.11969 21.6804C2.04167 21.5637 2.00002 21.4264 2 21.286V5C2 4.46957 2.21071 3.96086 2.58579 3.58579C2.96086 3.21071 3.46957 3 4 3H20C20.5304 3 21.0391 3.21071 21.4142 3.58579C21.7893 3.96086 22 4.46957 22 5V17Z"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 11H12.01"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 11H16.01"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 11H8.01"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const iconShadow =
  "shadow-[0_0_0_1px_rgba(0,0,0,0.08),0_1px_1px_-0.5px_rgba(51,51,51,0.05),0_3px_3px_-1.5px_rgba(51,51,51,0.05),0_6px_6px_-3px_rgba(51,51,51,0.05),0_12px_12px_-6px_rgba(51,51,51,0.05),0_24px_24px_-12px_rgba(51,51,51,0.05)]";

const tabs = [
  {
    title: "Call the AI",
    description: "Dial this number and have a real conversation.",
  },
  {
    title: "Text the AI",
    description: "Send a message and see how it responds.",
  },
];

export default function DemoHeroSection() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section
      id="demo-hero"
      className="relative z-0  md:border-b border-[#E5E7EB] "
    >
      <div className="px-global">
        <div className="max-w-global mx-auto border-x border-[#E5E7EB]">
          <div className="flex flex-col items-center gap-3.5 md:gap-4 px-6 py-10 md:py-section-md text-center md:px-24">
            <h2 data-reveal="words" className="max-w-[258px] md:max-w-[10em] text-center text-[32px] md:text-[48px] leading-[44px] md:leading-[54px] font-normal md:font-medium tracking-[-0.04em] md:tracking-[-0.03em]">Experience the AI.</h2>
            <p className="max-w-[34.44em] text-[16px] md:text-[18px] leading-[26px] md:leading-[28px] tracking-[-0.01em] text-center">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry
            </p>
          </div>

          <div className="flex md:border-t border-[#E5E7EB] bg-[#FAFAFA] max-md:flex-col max-md:divide-y max-md:divide-[#E5E7EB]">
            {tabs.map((tab, index) => {
              const isActive = activeTab === index;
              return (
                <button
                  key={tab.title}
                  onClick={() => setActiveTab(index)}
                  className={[
                    "flex flex-1 cursor-pointer items-center gap-4 md:gap-6  px-4 py-4 text-left transition-colors md:px-12",
                    isActive
                      ? "md:border-b-2 md:border-[#006FFF] border-b-0 bg-white"
                      : "md:border-[#E5E7EB] border-b-0 bg-[#FAFAFA] md:border-t md:border-b md:border-l",
                  ].join(" ")}
                >
                  <div
                    className={`flex flex-shrink-0 items-center justify-center rounded-[10px] bg-white px-3 py-2 ${iconShadow}`}
                  >
                    <TabIcon active={isActive} />
                  </div>
                  <div className="flex flex-col gap-1">
                    <span
                      className={`text-[14px] md:text-base leading-6 tracking-[-0.006em] transition-colors ${isActive ? "text-[#202020]" : "text-[#646464]"}`}
                    >
                      {tab.title}
                    </span>
                    <span
                      className={`text-sm leading-5 tracking-[-0.006em] transition-colors ${isActive ? "text-[#646464]" : "text-[#646464] opacity-80"}`}
                    >
                      {tab.description}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
