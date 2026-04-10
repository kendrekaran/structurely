"use client";

import { useState } from "react";
import Button from "../_ui/button";
import Badge from "../_ui/badge";

type DialerMode = "human" | "ai";

const topFeatures = [
  {
    title: "Toggle AI \u2194 Human Per Campaign",
    description:
      "Switch modes without changing anything. Teams dial manually in human mode. Flip to AI and the agent takes over the same list at scale.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 14L22 18L18 22" stroke="#006FFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M18 2L22 6L18 10" stroke="#006FFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 18H3.973C4.61949 18.0044 5.25742 17.852 5.83215 17.556C6.40687 17.2599 6.90127 16.8289 7.273 16.3L12.727 7.69997C13.0987 7.17102 13.5931 6.74005 14.1679 6.44398C14.7426 6.14791 15.3805 5.99556 16.027 5.99997H22" stroke="#006FFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 5.99997H3.972C4.71746 5.99479 5.44954 6.19802 6.08564 6.58675C6.72174 6.97548 7.23655 7.53423 7.572 8.19997" stroke="#006FFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M21.9998 18H15.9588C15.3034 17.9933 14.6596 17.8257 14.0842 17.5118C13.5088 17.1979 13.0193 16.7474 12.6588 16.2L12.2998 15.75" stroke="#006FFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Dial Thousands Simultaneously",
    description:
      "In AI mode, every lead on your list gets called the moment you flip the switch. No queue. No delay. Maximum coverage instantly.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.00024 10C3.18469 11.3951 2.85438 13.0211 3.06097 14.6238C3.26755 16.2265 3.99938 17.7155 5.14204 18.8582C6.2847 20.0009 7.77378 20.7327 9.37648 20.9393C10.9792 21.1459 12.6052 20.8156 14.0002 20L4.00024 10Z" stroke="#006FFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9 15L12 12" stroke="#006FFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M17 13C17 11.4087 16.3679 9.88258 15.2426 8.75736C14.1174 7.63214 12.5913 7 11 7" stroke="#006FFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M21 13C21 10.3478 19.9464 7.8043 18.0711 5.92893C16.1957 4.05357 13.6522 3 11 3" stroke="#006FFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Native Salesforce Integration",
    description:
      "Lives inside Salesforce. No new dashboard. No data sync. Your team works where they already work.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 13C10.4295 13.5741 10.9774 14.0491 11.6066 14.3929C12.2357 14.7367 12.9315 14.9411 13.6467 14.9923C14.3618 15.0435 15.0796 14.9403 15.7513 14.6897C16.4231 14.4392 17.0331 14.047 17.54 13.54L20.54 10.54C21.4508 9.59695 21.9548 8.33394 21.9434 7.02296C21.932 5.71198 21.4061 4.45791 20.4791 3.53087C19.5521 2.60383 18.298 2.07799 16.987 2.0666C15.676 2.0552 14.413 2.55918 13.47 3.46997L11.75 5.17997" stroke="#006FFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14.0002 11C13.5707 10.4259 13.0228 9.9508 12.3936 9.60704C11.7645 9.26328 11.0687 9.05886 10.3535 9.00765C9.63841 8.95643 8.92061 9.05961 8.24885 9.3102C7.5771 9.56079 6.96709 9.95291 6.4602 10.46L3.4602 13.46C2.54941 14.403 2.04544 15.666 2.05683 16.977C2.06822 18.288 2.59407 19.542 3.52111 20.4691C4.44815 21.3961 5.70221 21.922 7.01319 21.9334C8.32418 21.9447 9.58719 21.4408 10.5302 20.53L12.2402 18.82" stroke="#006FFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

const bottomFeatures = [
  {
    title: "Live Transfer to Your LOs",
    description:
      "When Structurely AI qualifies a lead, it bridges the call instantly to your team — no warm transfer lag, no dropped handoffs.",
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
    title: "Works With Your Existing Dialer",
    description:
      "Not a replacement — an upgrade layer. Add AI dialing capability without ripping out what\u2019s already working.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.67082 4.13603C9.72591 3.55637 9.99515 3.01807 10.4259 2.62631C10.8567 2.23454 11.418 2.01746 12.0003 2.01746C12.5826 2.01746 13.1439 2.23454 13.5747 2.62631C14.0055 3.01807 14.2747 3.55637 14.3298 4.13603C14.3629 4.51048 14.4858 4.87145 14.688 5.18837C14.8901 5.50529 15.1657 5.76884 15.4913 5.95671C15.8169 6.14457 16.183 6.25123 16.5585 6.26765C16.9341 6.28407 17.3081 6.20977 17.6488 6.05103C18.1779 5.81081 18.7775 5.77605 19.3308 5.95352C19.8841 6.13098 20.3516 6.50798 20.6423 7.01113C20.933 7.51429 21.0261 8.1076 20.9035 8.6756C20.7808 9.2436 20.4512 9.74565 19.9788 10.084C19.6712 10.2999 19.4201 10.5866 19.2467 10.9201C19.0734 11.2535 18.9829 11.6237 18.9829 11.9995C18.9829 12.3753 19.0734 12.7456 19.2467 13.079C19.4201 13.4124 19.6712 13.6992 19.9788 13.915C20.4512 14.2534 20.7808 14.7555 20.9035 15.3235C21.0261 15.8915 20.933 16.4848 20.6423 16.9879C20.3516 17.4911 19.8841 17.8681 19.3308 18.0455C18.7775 18.223 18.1779 18.1883 17.6488 17.948C17.3081 17.7893 16.9341 17.715 16.5585 17.7314C16.183 17.7478 15.8169 17.8545 15.4913 18.0424C15.1657 18.2302 14.8901 18.4938 14.688 18.8107C14.4858 19.1276 14.3629 19.4886 14.3298 19.863C14.2747 20.4427 14.0055 20.981 13.5747 21.3727C13.1439 21.7645 12.5826 21.9816 12.0003 21.9816C11.418 21.9816 10.8567 21.7645 10.4259 21.3727C9.99515 20.981 9.72591 20.4427 9.67082 19.863C9.63776 19.4884 9.51491 19.1273 9.31268 18.8103C9.11045 18.4933 8.83479 18.2296 8.50905 18.0418C8.18331 17.8539 7.81708 17.7472 7.4414 17.7309C7.06571 17.7146 6.69162 17.7891 6.35082 17.948C5.82171 18.1883 5.22214 18.223 4.66882 18.0455C4.11549 17.8681 3.64799 17.4911 3.3573 16.9879C3.06661 16.4848 2.97353 15.8915 3.09618 15.3235C3.21882 14.7555 3.54842 14.2534 4.02082 13.915C4.32844 13.6992 4.57955 13.4124 4.7529 13.079C4.92626 12.7456 5.01677 12.3753 5.01677 11.9995C5.01677 11.6237 4.92626 11.2535 4.7529 10.9201C4.57955 10.5866 4.32844 10.2999 4.02082 10.084C3.54908 9.74547 3.22007 9.24362 3.09772 8.67601C2.97537 8.1084 3.06842 7.51557 3.3588 7.01274C3.64918 6.50991 4.11613 6.13301 4.66891 5.95527C5.22168 5.77753 5.8208 5.81166 6.34982 6.05103C6.69057 6.20977 7.06456 6.28407 7.44012 6.26765C7.81567 6.25123 8.18175 6.14457 8.50735 5.95671C8.83296 5.76884 9.10851 5.50529 9.31068 5.18837C9.51286 4.87145 9.6357 4.51048 9.66882 4.13603" stroke="#006FFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="#006FFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Full BI Reporting Integration",
    description:
      "All dialer activity feeds your Structurely reporting suite — connect rates, transfer rates, and campaign performance in one place.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z" stroke="#006FFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9 8H16" stroke="#006FFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M8 12H14" stroke="#006FFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M11 16H16" stroke="#006FFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

function FeatureCell({ title, description, icon }: { title: string; description: string; icon: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-6 px-5 py-8 md:p-8">
      <div className="flex items-center justify-center gap-2 self-start rounded-[10px] bg-white h-[40px] w-[48px] shadow-[0_0_0_1px_rgba(0,0,0,0.08),0_1px_1px_-0.5px_rgba(51,51,51,0.05),0_3px_3px_-1.5px_rgba(51,51,51,0.05),0_6px_6px_-3px_rgba(51,51,51,0.05),0_12px_12px_-6px_rgba(51,51,51,0.05),0_24px_24px_-12px_rgba(51,51,51,0.05)]">
        {icon}
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-[16px] leading-[26px] tracking-[-0.01em] text-[#202020] font-medium" style={{ maxWidth: "22em" }}>
          {title}
        </p>
        <p className="text-[12px] leading-[20px] tracking-[-0.0075em] text-[#646464] font-medium" style={{ maxWidth: `${280 / 12}em` }}>
          {description}
        </p>
      </div>
    </div>
  );
}

export default function PricingAddonSection() {
  const [mode, setMode] = useState<DialerMode>("human");

  const modeLabel =
    mode === "human"
      ? "Human Mode — your LOs dial manually from the list"
      : "AI Mode — the agent dials thousands simultaneously";

  return (
    <section id="pricing-addon" className="relative z-0">
      <div className="px-global">
        <div className="max-w-global mx-auto flex flex-col border-x border-[#E5E7EB]">

          <div className="flex flex-col lg:flex-row ">
            <div className="flex flex-1 flex-col justify-center gap-4 px-[12px] md:px-8 p-8 md:p-12 md:py-[87px] ">
              <div className="self-start">
                <Badge text="Beta — Salesforce Add-on" />
              </div>

              <h2 data-reveal="words" style={{ maxWidth: "10em" }}>
                <span className="text-[#006FFF]">AI Power</span> Dialer
              </h2>

              <div className="flex flex-col gap-1 ">
                <p className="text-[16px] leading-[26px] tracking-[-0.01em] text-[#202020] font-medium">
                  Create a list, flip the switch, and let AI start dialing. Toggle back to your team anytime.
                </p>
                <p className="text-[14px] leading-[24px] tracking-[-0.01em] text-[#646464]">
                  No new platform. No new workflow. Just more conversations — at scale.
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3 mt-2">
                  <span className={`text-[16px] leading-[26px] tracking-[-0.01em] font-medium transition-colors ${mode === "human" ? "text-[#006FFF]" : "text-[#646464]"}`}>
                    Human
                  </span>
                  <button
                    onClick={() => setMode(mode === "human" ? "ai" : "human")}
                    aria-label="Toggle between Human and AI mode"
                    className="relative flex h-10 w-[6.25rem] shrink-0 cursor-pointer items-center rounded-full border border-[#006FFF] bg-white px-1 transition-all"
                  >
                    <span
                      className="absolute h-8 w-8 rounded-full bg-[#006FFF] shadow-[0_4px_8px_rgba(32,32,32,0.08),0_8px_16px_rgba(32,32,32,0.06)] transition-all duration-300"
                      style={{ left: mode === "human" ? "4px" : "calc(100% - 36px)" }}
                    />
                  </button>
                  <span className={`text-[16px] leading-[26px] tracking-[-0.01em] font-medium transition-colors ${mode === "ai" ? "text-[#006FFF]" : "text-[#646464]"}`}>
                    AI
                  </span>
                </div>
                <p className="text-[14px] leading-[24px] tracking-[-0.01em] text-[#646464]">
                  {modeLabel}
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center  px-3 pb-[56px] md:pb-0 md:p-12 ">
              <div className="flex flex-col w-full md:w-[289px] items-center justify-center gap-4 rounded-[10px] border border-[#E5E7EB] bg-white px-8 py-[55px] md:py-[31px] shadow-[0_0_0_1px_rgba(0,0,0,0.08)]">
                <div className="flex flex-col items-center gap-3 w-full">
                  <div className="flex flex-col items-center gap-2">
                    <span className="text-[16px] leading-6 tracking-[-0.006em] text-[#646464] font-medium">
                      AI Power Dialer
                    </span>
                    <div className="flex items-end gap-1">
                      <span className="text-[32px] leading-8 tracking-[-0.03em] text-[#202020] font-medium">
                        $999
                      </span>
                      <span className="text-[16px] leading-6 tracking-[-0.01em] text-[#646464] font-medium pb-0.5">
                        /mo
                      </span>
                    </div>
                  </div>
                  <p className="text-[12px] leading-6 tracking-[-0.0075em] text-[#646464] text-center" style={{ maxWidth: `${200 / 12}em` }}>
                    $199/mo per additional seat
                  </p>
                </div>
                <Button variant="primary" className="w-auto md:w-full">
                  Book a Demo
                </Button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 border-t border-[#E5E7EB] md:grid-cols-3 md:divide-x divide-y md:divide-y-0 divide-[#E5E7EB]">
            {topFeatures.map((feature) => (
              <FeatureCell key={feature.title} {...feature} />
            ))}
          </div>

          <div className="grid grid-cols-1 border-t border-[#E5E7EB] md:grid-cols-3 md:divide-x divide-y md:divide-y-0 divide-[#E5E7EB]">
            {bottomFeatures.map((feature) => (
              <FeatureCell key={feature.title} {...feature} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
