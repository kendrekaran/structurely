"use client";

import { useState } from "react";

type FaqItem = {
  question: string;
  answer: string;
};

const faqs: FaqItem[] = [
  {
    question: "What ROI can I expect?",
    answer:
      "Most clients see a measurable increase in qualified pipeline within the first 30 days. On average, teams using Structurely report a 3–5x increase in lead conversion from existing databases — without adding headcount.",
  },
  {
    question: "What are typical transfer rates?",
    answer:
      "Transfer rates vary by market and lead source, but our clients typically see 8–15% of AI-engaged leads transferred to a live loan officer. High-intent lead sources can push this to 20%+.",
  },
  {
    question: "What are the contract terms?",
    answer:
      "All plans are annual contracts at the listed price. Month-to-month is available at a 20% premium. Every plan includes a pilot period to prove unit economics with your actual leads before you commit long-term — so you see real results before signing.",
  },
  {
    question: "What's included in onboarding?",
    answer:
      "Onboarding includes full Salesforce CRM integration, a pre-built mortgage agent tuned for your loan types, campaign setup, and a dedicated Account Manager for 60 days who stays hands-on to optimize your system.",
  },
  {
    question: "What is an Action Credit?",
    answer:
      "An Action Credit is one unit of AI labor. Every time Structurely sends an SMS, speaks for 10 seconds on a call, or sends 2 emails on your behalf, it consumes one Action Credit. You only pay for work actually done.",
  },
  {
    question: "How does Structurely ensure success?",
    answer:
      "Every account comes with ongoing optimization support. Your Account Manager monitors transfer rates, conversation quality, and credit usage — and adjusts campaigns to continuously improve results.",
  },
];

function PlusIcon() {
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
        d="M10 4V16M4 10H16"
        stroke="#646464"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function MinusIcon() {
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
        d="M4 10H16"
        stroke="#006FFF"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(2);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative z-0 ">
      <div className="bg-background px-global">
        <div className="max-w-global py-section-md  mx-auto flex flex-col items-center gap-3 border-x border-[#E5E7EB]">
          <h2 className="text-center">FAQ</h2>
          <p className="text-center">Frequently Asked Questions</p>
        </div>
      </div>

      <div className=" ">
        <div className="px-global">
          <div className="max-w-global border-t  bg-white py-section-md md:py-[52px] mx-auto border-x border-[#E5E7EB]">
            <div className="mx-auto max-w-[550px] divide-y md:border-b border-[#E5E7EB] md:pb-[20px] divide-[#E5E7EB]">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;
                return (
                  <div key={index} className="py-[20px] first:pt-0 last:pb-0">
                    <button
                      onClick={() => toggle(index)}
                      className="flex w-full cursor-pointer px-[12px] md:px-0 items-center justify-between gap-4 text-left"
                    >
                      <p
                        className={` transition-colors ${
                          isOpen
                            ? "  text-[#202020] text-[16px]  leading-[26px]  tracking-[-0.01em]"
                            : "font-normal text-[16px]  leading-[26px]  tracking-[-0.01em]"
                        }`}
                      >
                        {faq.question}
                      </p>
                      {isOpen ? <MinusIcon /> : <PlusIcon />}
                    </button>

                    {isOpen && (
                      <div className="mt-3 max-w-[332px]  md:max-w-[491.48291015625px] px-[12px] md:px-0 text-[14px] leading-6 tracking-[-0.01em]">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
