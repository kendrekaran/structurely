"use client";

import { AnimatePresence, motion } from "motion/react";
import type { KeyboardEvent } from "react";
import { useState } from "react";

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

const accordionTransition = {
  duration: 0.3,
  ease: [0.4, 0, 0.2, 1] as const,
};

const rotationTransition = {
  duration: 0.3,
  ease: [0.4, 0, 0.2, 1] as const,
};

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(2);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLButtonElement>, index: number) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggle(index);
    }
  };

  return (
    <section id="faq" className="relative z-0">
      <div className="bg-background px-global">
        <div className="max-w-global py-section-md mx-auto flex flex-col items-center gap-3 border-x border-[#E5E7EB]">
          <h2 className="text-center">FAQ</h2>
          <p className="text-center">Frequently Asked Questions</p>
        </div>
      </div>

      <div className=" ">
        <div className="px-global">
          <div className="max-w-global py-section-md mx-auto border-x border-t border-[#E5E7EB] bg-white md:py-[52px]">
            <div className="mx-auto max-w-[550px] divide-y divide-[#E5E7EB] border-[#E5E7EB] md:border-b md:pb-[20px]">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;
                return (
                  <button
                    key={index}
                    type="button"
                    onClick={() => toggle(index)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    className="w-full cursor-pointer py-[20px] first:pt-0 last:pb-0"
                    aria-expanded={isOpen}
                  >
                    <div className="flex w-full items-center justify-between gap-4 px-[12px] text-left md:px-0">
                      <p
                        className={`text-left transition-colors ${
                          isOpen
                            ? "text-[16px] leading-[26px] tracking-[-0.01em] text-[#202020]"
                            : "text-[16px] leading-[26px] font-normal tracking-[-0.01em] text-[#646464]"
                        }`}
                      >
                        {faq.question}
                      </p>
                      <span className="relative inline-flex h-5 w-5 shrink-0 items-center justify-center">
                        <AnimatePresence mode="sync" initial={false}>
                          {isOpen ? (
                            <motion.span
                              key="minus"
                              initial={{
                                opacity: 0,
                                rotate: -90,
                                filter: "blur(2px)",
                              }}
                              animate={{
                                opacity: 1,
                                rotate: 0,
                                filter: "blur(0px)",
                              }}
                              exit={{
                                opacity: 0,
                                rotate: 90,
                                filter: "blur(2px)",
                              }}
                              transition={rotationTransition}
                              className="absolute inset-0 flex items-center justify-center"
                            >
                              <MinusIcon />
                            </motion.span>
                          ) : (
                            <motion.span
                              key="plus"
                              initial={{
                                opacity: 0,
                                rotate: -90,
                                filter: "blur(2px)",
                              }}
                              animate={{
                                opacity: 1,
                                rotate: 0,
                                filter: "blur(0px)",
                              }}
                              exit={{
                                opacity: 0,
                                rotate: 90,
                                filter: "blur(2px)",
                              }}
                              transition={rotationTransition}
                              className="absolute inset-0 flex items-center justify-center"
                            >
                              <PlusIcon />
                            </motion.span>
                          )}
                        </AnimatePresence>
                      </span>
                    </div>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{
                            opacity: 0,
                            height: 0,
                            y: -10,
                            filter: "blur(2px)",
                          }}
                          animate={{
                            opacity: 1,
                            height: "auto",
                            y: 0,
                            filter: "blur(0px)",
                          }}
                          exit={{
                            opacity: 0,
                            height: 0,
                            y: -10,
                            filter: "blur(2px)",
                          }}
                          transition={accordionTransition}
                          className="overflow-hidden"
                        >
                          <div className="pt-3">
                            <div className="max-w-[332px] px-[12px] text-left text-[14px] leading-6 tracking-[-0.01em] text-[#202020] md:max-w-[491px] md:px-0">
                              {faq.answer}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
