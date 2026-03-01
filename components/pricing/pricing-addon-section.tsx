"use client";

import { useState } from "react";

type DialerMode = "human" | "ai";

const features = [
  "Toggle between AI mode and human mode per campaign",
  "Dial thousands of leads simultaneously in AI mode",
  "Native Salesforce integration — lives inside your CRM",
  "AI handles the conversation, transfers live to your LOs",
  "Works alongside your existing dialer setup",
];

const topBars = [
  { h: 55, a: false },
  { h: 30, a: false },
  { h: 80, a: true },
  { h: 40, a: false },
  { h: 65, a: false },
  { h: 25, a: false },
  { h: 95, a: false },
  { h: 45, a: false },
  { h: 35, a: false },
  { h: 70, a: true },
  { h: 50, a: false },
  { h: 85, a: false },
  { h: 28, a: false },
  { h: 60, a: false },
  { h: 42, a: false },
  { h: 75, a: false },
  { h: 22, a: false },
  { h: 48, a: false },
  { h: 38, a: false },
  { h: 68, a: false },
];

const bottomBars = [
  { h: 35, a: false },
  { h: 60, a: false },
  { h: 22, a: false },
  { h: 78, a: false },
  { h: 40, a: false },
  { h: 52, a: false },
  { h: 28, a: false },
  { h: 145, a: true },
  { h: 45, a: false },
  { h: 68, a: false },
  { h: 32, a: false },
  { h: 55, a: false },
  { h: 25, a: false },
  { h: 48, a: false },
  { h: 38, a: false },
  { h: 72, a: false },
  { h: 28, a: false },
  { h: 44, a: false },
  { h: 35, a: false },
  { h: 58, a: false },
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
      className="relative z-0 border-t border-[#E5E7EB] bg-white"
    >
      <div className="max-w-global mx-auto flex flex-col lg:flex-row">
        <div className="px-global py-section-md flex flex-1 flex-col gap-8">
          <span className="inline-flex self-start rounded-full border border-[#E5E7EB] px-3 py-1.5 text-[13px] leading-5 font-medium">
            Beta — Salesforce Add-on
          </span>

          <h2>
            <span className="text-[#006FFF]">AI Power</span> Dialer
          </h2>

          <div className="flex flex-col gap-2">
            <div className="text-[14px] leading-[28px] font-medium tracking-[-0.01em] text-[#202020] md:text-[18px]">
              You don&apos;t have to replace your dialer — unless you want to.
              Create a list, flip the switch, and let AI start dialing.
            </div>
            <p>
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
                <span className="text-[14px] leading-5 tracking-[-0.01em] text-[#202020]">
                  {feature}
                </span>
              </li>
            ))}
          </ul>

          <div className="flex gap-3">
            <div className="flex flex-col gap-1 rounded-xl border border-[#E5E7EB] px-5 py-4">
              <div className="flex items-baseline gap-1">
                <span className="text-[24px] leading-8 font-medium tracking-[-0.03em] text-[#202020]">
                  $999
                </span>
                <span className="text-[13px] leading-5">/mo</span>
              </div>
              <span className="text-[12px] leading-4">AI Power Dialer</span>
            </div>
            <div className="flex flex-col gap-1 rounded-xl border border-[#E5E7EB] px-5 py-4">
              <div className="flex items-baseline gap-1">
                <span className="text-[24px] leading-8 font-medium tracking-[-0.03em] text-[#202020]">
                  $199
                </span>
                <span className="text-[13px] leading-5">/mo</span>
              </div>
              <span className="text-[12px] leading-4">
                Each additional seat
              </span>
            </div>
          </div>
        </div>

        <div className="hidden min-h-[520px] flex-col overflow-hidden border-l border-[#E5E7EB] lg:flex lg:w-[48%]">
          <div className="flex flex-1 items-start gap-[5px] overflow-hidden px-8 pt-8">
            {topBars.map((bar, i) => (
              <div
                key={i}
                className={`flex-1 rounded-sm ${bar.a ? "bg-[#006FFF]" : "bg-[#C2DAFF]"}`}
                style={{ height: `${bar.h}px` }}
              />
            ))}
          </div>

          <div className="flex flex-col items-center gap-4 px-8 py-10">
            <div className="flex items-center gap-3">
              <span
                className={`text-[14px] leading-5 font-medium transition-colors ${
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
                className={`text-[14px] leading-5 font-medium transition-colors ${
                  mode === "ai" ? "text-[#006FFF]" : ""
                }`}
              >
                AI
              </span>
            </div>

            <div className="flex flex-col items-center gap-1.5 text-center">
              <span className="text-[28px] leading-9 font-medium tracking-[-0.03em] text-[#202020]">
                {mode === "human" ? "Human Mode" : "AI Mode"}
              </span>
              <span className="text-[14px] leading-5">
                {mode === "human"
                  ? "Your LOs dial manually from a list"
                  : "AI dials and qualifies thousands simultaneously"}
              </span>
            </div>
          </div>

          <div className="flex flex-1 items-end gap-[5px] overflow-hidden px-8 pb-8">
            {bottomBars.map((bar, i) => (
              <div
                key={i}
                className={`flex-1 rounded-sm ${bar.a ? "bg-[#006FFF]" : "bg-[#C2DAFF]"}`}
                style={{ height: `${bar.h}px` }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
