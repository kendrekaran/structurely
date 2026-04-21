"use client";

import Link from "next/link";

const articles = [
  { title: "Create a Call AI agent", active: false },
  { title: "Pick your greetings", active: false },
  { title: "Voicemail settings", active: true },
  { title: "Set live transfer messages", active: false },
  { title: "Knowledge bases", active: false },
  { title: "Add guidelines (call scripting)", active: false },
  { title: "Qualification (+ disqualification)", active: false },
  { title: "Advanced settings (Call AI)", active: false },
  { title: "Live transfer routing", active: false },
  { title: "6. Add guidelines (call scripting)", active: false },
];

function ArrowRightIcon({ color }: { color: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.1665 10H15.8332" stroke={color} strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10 4.16699L15.8333 10.0003L10 15.8337" stroke={color} strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function CallAiSection() {
  return (
    <section id="call-ai" className="relative z-0">
      <div className="px-global">
        <div className="max-w-global mx-auto border-x border-b border-[#E5E7EB]">

          <div className="flex items-center gap-1 border-b border-[#E5E7EB] px-6 py-3">
            <Link href="/help-center" className="flex flex-1 items-center gap-1 text-[#646464]">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.00016 12.6663L3.3335 7.99967L8.00016 3.33301" stroke="#646464" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12.6668 8H3.3335" stroke="#646464" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="text-[14px] leading-[20px] tracking-[-0.084px]">Back to help center</span>
            </Link>
            <div className="flex items-center justify-center rounded-lg bg-white px-4 py-2 shadow-[0_0_0_1px_rgba(0,0,0,0.08),0_1px_1px_-0.5px_rgba(51,51,51,0.05),0_3px_3px_-1.5px_rgba(51,51,51,0.05),0_6px_6px_-3px_rgba(51,51,51,0.05),0_12px_12px_-6px_rgba(51,51,51,0.05),0_24px_24px_-12px_rgba(51,51,51,0.05)]">
              <span className="text-[14px] leading-[20px] tracking-[-0.084px] text-[#646464]">10 articles</span>
            </div>
          </div>

          <div className="flex flex-col items-center px-[12px] md:px-6 py-[40px] md:py-16">
            <div className="flex w-full max-w-[46.375em] flex-col items-center gap-[10px] md:gap-4 text-center">
              <h2 data-reveal="words" className="max-w-[13.5em] text-[36px] md:text-[48px] leading-[44px] md:leading-[54px] font-normal md:font-medium tracking-[-0.03em] text-left md:text-center">Call AI</h2>
              <p className="max-w-[600px] text-center text-[16px] md:text-[18px] leading-[26px] md:leading-[28px] tracking-[-0.01em] text-[#646464]">
                A step-by-step guide to Structurely&apos;s Call AI Agents
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center border-t border-[#E5E7EB] bg-white">
            <div className="w-full max-w-[742px]">
              {articles.map((article, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 border-b border-[#E5E7EB] px-5 py-[23px] md:py-5"
                >
                  <span className="flex-1 text-[14px] leading-[26px] tracking-[-0.14px] text-[#646464]">
                    {article.title}
                  </span>
                  <div className={`flex items-center justify-center p-[6px_8px] ${!article.active ? "opacity-50" : ""}`}>
                    <ArrowRightIcon color={article.active ? "#006FFF" : "#646464"} />
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
