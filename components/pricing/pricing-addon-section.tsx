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
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0"
    >
      <circle cx="10" cy="10" r="8" stroke="#006FFF" strokeWidth="1.2" />
      <path
        d="M10 6.5V10L12.5 12"
        stroke="#006FFF"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function PricingAddonSection() {
  const [mode, setMode] = useState<DialerMode>("human");

  return (
    <section
      id="pricing-addon"
      className="relative z-0  "
    >
      <div className="px-global">
        <div className="max-w-global mx-auto flex flex-col border-x  border-[#E5E7EB] lg:flex-row">
          <div className="px-global py-section-md flex flex-1 flex-col gap-8">
            <div className="self-start">
            <Badge text="Beta — Salesforce Add-on" />
            </div>

            <h2>
              <span className="text-[#006FFF]">AI Power</span> Dialer
            </h2>

            <div className="max-w-[29.375rem] flex flex-col gap-2">
              <div className="text-[14px] leading-[26px]  tracking-[-0.01em] text-[#202020] md:text-[16px]">
                You don&apos;t have to replace your dialer — unless you want to.
                Create a list, flip the switch, and let AI start dialing.
              </div>
              <p className="text-[14px] leading-[24px] font-light  tracking-[-0.01em]">
                Toggle back to human mode anytime. Dial thousands of leads at
                once, integrated seamlessly into Salesforce.
              </p>
            </div>

            <ul className="divide-y divide-[#E5E7EB]">
              {features.map((feature, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 py-3 first:pt-0 last:pb-0"
                >
                  <FeatureIcon />
                  <span className="text-[14px] leading-[26px] tracking-[-0.01em] text-[#646464]">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            <div className="flex gap-3">
              <div className="flex flex-col gap-1 rounded-xl border border-[#E5E7EB] p-3 min-w-[180px]">
                <div className="flex items-baseline gap-1">
                  <span className="text-[20px] leading-[20px]  tracking-[-0.006em] text-[#202020]">
                    $999
                  </span>
                  <span className="text-[16px] leading-[24px] tracking-[-0.01em]">/mo</span>
                </div>
                <span className="text-[12px] leading-[24px] tracking-[-0.01em] ">AI Power Dialer</span>
              </div>
              <div className="flex flex-col gap-1 rounded-xl border border-[#E5E7EB] p-3 min-w-[180px]">
                <div className="flex items-baseline gap-1">
                  <span className="text-[20px] leading-[20px]  tracking-[-0.006em] text-[#202020]">
                    $199
                  </span>
                  <span className="text-[16px] leading-[24px] tracking-[-0.01em]">/mo</span>
                </div>
                <span className="text-[12px] leading-[24px] tracking-[-0.01em]">
                  Each additional seat
                </span>
              </div>
            </div>
          </div>

          <div className="hidden min-h-[520px] flex-col overflow-hidden border-l border-[#E5E7EB] lg:flex lg:w-[48%] p-[12px]">
            <div
              className="flex flex-1 flex-col border border-[#E5E7EB] items-center justify-center gap-4 px-8 py-10"
              style={{
                backgroundImage: "url('/assets/pricing/human-mode-bg.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="flex items-center gap-3">
                <span
                  className={`text-[14px] leading-[26px] tracking-[-0.01em]  transition-colors ${
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
                  className={`text-[14px] leading-[26px] tracking-[-0.01em]  transition-colors ${
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
                <span className="text-[14px] leading-[24px]  tracking-[-0.01em]">
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
