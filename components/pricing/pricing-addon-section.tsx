"use client";

import { useState } from "react";
import Badge from "../_ui/badge";

type DialerMode = "human" | "ai";

const features = [
  "Toggle between AI mode and human mode per campaign",
  "Dial thousands of leads simultaneously in AI mode",
  "Native Salesforce integration — lives inside your CRM",
  "AI handles the conversation, transfers live to your LOs",
  "Works alongside your existing dialer setup",
];

function FeatureIcon() {
  return (
    <img
      src="/assets/common/verification.svg"
      alt=""
      width={20}
      height={20}
      className="shrink-0"
    />
  );
}

export default function PricingAddonSection() {
  const [mode, setMode] = useState<DialerMode>("human");

  return (
    <section id="pricing-addon" className="relative z-0">
      <div className="px-global">
        <div className="max-w-global mx-auto flex flex-col border-x border-[#E5E7EB] lg:flex-row">
          <div className="px-global py-section-md flex flex-1 flex-col gap-[16px] md:px-[48px] md:py-[48px]">
            <div className="self-start">
              <Badge text="Beta — Salesforce Add-on" />
            </div>

            <h2>
              <span className="text-[#006FFF]">AI Power</span> Dialer
            </h2>

            <div className="flex max-w-[29.375rem] flex-col md:gap-1">
              <div className="text-[16px] leading-[26px] tracking-[-0.01em] text-[#202020]">
                You don&apos;t have to replace your dialer — unless you want to.
                &nbsp;
                <br className="md:hidden" />
                Create a list, flip the switch, and let AI start dialing.
              </div>
              <p className="text-[14px] leading-[24px] font-light tracking-[-0.01em]">
                Toggle back to human mode anytime. Dial thousands of leads at
                once, integrated seamlessly into Salesforce.
              </p>
            </div>

            <ul className="mt-[8px] divide-y divide-[#E5E7EB]">
              {features.map((feature, i) => (
                <li
                  key={i}
                  className="flex items-center gap-2 py-3 first:pt-0 last:pb-0 md:gap-3"
                >
                  <FeatureIcon />
                  <span className="text-[14px] leading-[20px] tracking-[-0.01em] text-[#646464]">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            <hr className="mt-0 mb-0 border-[#E5E7EB]" />

            <div className="mt-[8px] flex w-full max-w-full flex-col gap-[12px] md:flex-row md:gap-3">
              <div className="flex flex-col gap-1 rounded-xl border border-[#E5E7EB] p-3 md:min-w-[180px]">
                <div className="flex items-baseline gap-1">
                  <span className="text-[20px] leading-[20px] tracking-[-0.006em] text-[#202020]">
                    $999
                  </span>
                  <span className="text-[16px] leading-[24px] tracking-[-0.01em]">
                    /mo
                  </span>
                </div>
                <span className="text-[12px] leading-[24px] tracking-[-0.01em]">
                  AI Power Dialer
                </span>
              </div>
              <div className="flex flex-col gap-1 rounded-xl border border-[#E5E7EB] p-3 md:min-w-[180px]">
                <div className="flex items-baseline gap-1">
                  <span className="text-[20px] leading-[20px] tracking-[-0.006em] text-[#202020]">
                    $199
                  </span>
                  <span className="text-[16px] leading-[24px] tracking-[-0.01em]">
                    /mo
                  </span>
                </div>
                <span className="text-[12px] leading-[24px] tracking-[-0.01em]">
                  Each additional seat
                </span>
              </div>
            </div>
          </div>

          <div className="flex min-h-[520px] flex-col overflow-hidden p-[12px] lg:w-[48%] lg:border-l lg:border-[#E5E7EB]">
            <div
              className="flex flex-1 flex-col items-center justify-center gap-4 border border-[#E5E7EB] px-8 py-10"
              style={{
                backgroundImage: "url('/assets/pricing/human-mode-bg.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="flex items-center gap-3">
                <span
                  className={`text-[14px] leading-[26px] tracking-[-0.01em] transition-colors ${
                    mode === "human" ? "text-[#006FFF]" : ""
                  }`}
                >
                  Human
                </span>
                <button
                  onClick={() => setMode(mode === "human" ? "ai" : "human")}
                  className="relative h-7 w-14 cursor-pointer rounded-full bg-[#E8EAED] transition-colors"
                >
                  <span
                    className="absolute top-0.5 h-6 w-6 rounded-full bg-[#006FFF] shadow-sm transition-all duration-300"
                    style={{
                      left: mode === "human" ? "2px" : "calc(100% - 26px)",
                    }}
                  />
                </button>
                <span
                  className={`text-[14px] leading-[26px] tracking-[-0.01em] transition-colors ${
                    mode === "ai" ? "text-[#006FFF]" : ""
                  }`}
                >
                  AI
                </span>
              </div>

              <div className="flex flex-col items-center gap-1.5 text-center">
                <span className="text-[28px] leading-[36px] font-medium tracking-[-0.03em] text-[#202020]">
                  {mode === "human" ? "Human Mode" : "AI Mode"}
                </span>
                <span className="text-[14px] leading-[24px] tracking-[-0.01em]">
                  {mode === "human"
                    ? "Your LOs dial manually from a list"
                    : "AI dials and qualifies thousands simultaneously"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
