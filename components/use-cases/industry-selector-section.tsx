"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { Fit, Layout, useRive } from "@rive-app/react-canvas";

const industries = [
  {
    title: "Mortgage",
    description:
      "Automate your CRM and sales resources with AI-powered appointment setting and calling.",
    features: [
      "Qualification before LO involvement",
      "Appointment booking",
      "Instant borrower engagement",
      "Automated nurture for long-cycle buyers",
    ],
    chat: {
      sender: "Jordan · Summit Loans",
      subtitle: "Verified Business · Structurely AI",
      time: "Today · 10:14 AM",
      messages: [
        {
          text: "Hi Amber! Jordan here from Summit Loans. I see you started a refi inquiry last month — still interested in lowering your rate? 🏠",
          fromUser: false,
        },
        {
          text: "Definitely! But haven't had the chance to gather docs yet.",
          fromUser: true,
        },
        {
          text: "No worries, I can walk you through it. Want to set a time for a quick call this week?",
          fromUser: false,
        },
      ],
    },
  },
  {
    title: "Real Estate",
    description:
      "Automate lead follow-up and appointment setting for high-volume real estate teams.",
    features: [
      "Listing inquiry follow-up",
      "Showing scheduling",
      "Long-term nurture campaigns",
      "New buyer & seller qualification",
    ],
    chat: {
      sender: "Maya · Westbrook Realty",
      subtitle: "Verified Business · Structurely AI",
      time: "Today · 9:30 AM",
      messages: [
        {
          text: "Hi Tom! This is Maya at Westbrook Realty. I noticed you checked out a few Uptown listings — still house-hunting? 🏡",
          fromUser: false,
        },
        {
          text: "Yeah, I'm just waiting for something that fits.",
          fromUser: true,
        },
        {
          text: "A new 3BR just hit the market today that matches your wishlist. Want me to schedule a showing?",
          fromUser: false,
        },
      ],
    },
  },
  {
    title: "Home Improvement",
    description:
      "Engage new leads instantly and qualify project interest so your team can book more jobs faster.",
    features: [
      "Trade-in qualification",
      "Test drive booking",
      "Re-engagement of cold leads",
      "Inventory inquiry follow-up",
    ],
    chat: {
      sender: "Chris · Brighthome Exteriors",
      subtitle: "Verified Business · Structurely AI",
      time: "Today · 11:00 AM",
      messages: [
        {
          text: "Hey! Chris from Brighthome Exteriors here. Ready to move forward with your siding replacement quote? 🔨",
          fromUser: false,
        },
        {
          text: "Yes! What’s the next step?",
          fromUser: true,
        },
        {
          text: "We can schedule an installer visit for Thursday or Friday this week for final measurements. Preference?",
          fromUser: false,
        },
      ],
    },
  },
  {
    title: "Sports",
    description:
      "Turn fan and prospect engagement into qualified opportunities with fast, personalized follow-up.",
    features: [
      "MQL pre-qualification",
      "Meeting scheduling",
      "Consistent follow-up enforcement",
      "SDR workload reduction",
    ],
    chat: {
      sender: "Alex · University Athletics",
      subtitle: "Verified Business · Structurely AI",
      time: "Today · 2:15 PM",
      messages: [
        {
          text: "Hey Mike! Renew your University Athletics season tickets now to guarantee your seats for next year 🏀",
          fromUser: false,
        },
        {
          text: "Is the early bird discount still valid?",
          fromUser: true,
        },
        {
          text: "Yes — renew by Friday to save 15%. Want me to send you the payment link now?",
          fromUser: false,
        },
      ],
    },
  },
  {
    title: "Marketing Agencies",
    description: "Instantly qualify agency leads and seamlessly hand them off.",
    features: [
      "Leads are purchased",
      "Speed determines contact rate",
      "Sales teams lack follow-up capacity",
      "CRM usage is inconsistent",
    ],
    chat: {
      sender: "Dana · Nortline Growth",
      subtitle: "Verified Business · Structurely AI",
      time: "Today · 2:00 PM",
      messages: [
        {
          text: "Hi! Dana from Nortline Growth. You filled out our agency inquiry — looking to scale your paid ads? 📈",
          fromUser: false,
        },
        {
          text: "Yes, we're spending $50k/mo and want better results.",
          fromUser: true,
        },
        {
          text: "We’ve helped 3 brands in your space cut CAC by 40%. Quick 15-min call this week to chat?",
          fromUser: false,
        },
      ],
    },
  },
  {
    title: "Whitelabel",
    description:
      "Start better partner conversations and surface the right fit faster.",
    features: [
      "MQL pre-qualification",
      "Meeting scheduling",
      "Consistent follow-up enforcement",
      "SDR workload reduction",
    ],
    chat: {
      sender: "Taylor · Elevate Partners",
      subtitle: "Verified Business · Structurely AI",
      time: "Today · 3:15 PM",
      messages: [
        {
          text: "Hi! Taylor here from Elevate Partners. You showed interest in our white-label platform — still exploring? 🤝",
          fromUser: false,
        },
        {
          text: "We’re interested! Want to offer this under our own brand.",
          fromUser: true,
        },
        {
          text: "Awesome fit. We handle the AI, you get the branding control. Want a walkthrough of our partner program?",
          fromUser: false,
        },
      ],
    },
  },
  {
    title: "Universities",
    description:
      "Nurture prospective student relationships with timely, helpful conversations.",
    features: [
      "Leads are purchased",
      "Speed determines contact rate",
      "Sales teams lack follow-up capacity",
      "CRM usage is inconsistent",
    ],
    chat: {
      sender: "Sam · North Valley University",
      subtitle: "Verified Business · Structurely AI",
      time: "Today · 10:45 AM",
      messages: [
        {
          text: "Hello Emma! Sam from North Valley University. You attended our online info session — any questions about applying? 🎓",
          fromUser: false,
        },
        {
          text: "Yes! I’m deciding between two programs.",
          fromUser: true,
        },
        {
          text: "Great! I can connect you with a current student in each program. Want me to set up an intro?",
          fromUser: false,
        },
      ],
    },
  },
];

function IndustrySelectorSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [cycleResetKey, setCycleResetKey] = useState(0);
  const active = industries[activeIndex];
  const tabTransition = { duration: 0.4, ease: [0.4, 0, 0.2, 1] as const };
  const { rive, RiveComponent } = useRive({
    src: "/rive/how-it-works/6.riv",
    autoplay: true,
    stateMachines: "State Machine 1",
    layout: new Layout({ fit: Fit.Contain, layoutScaleFactor: 1 }),
  });

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % industries.length);
    }, 5000);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [activeIndex, cycleResetKey]);

  useEffect(() => {
    if (!rive) return;

    const inputs = rive.stateMachineInputs("State Machine 1");
    const numberInput = Array.isArray(inputs)
      ? inputs.find((input) => input.name === "Number 1")
      : null;

    if (
      numberInput &&
      "value" in numberInput &&
      typeof numberInput.value === "number"
    ) {
      numberInput.value = activeIndex + 1;
    }
  }, [rive, activeIndex, cycleResetKey]);

  return (
    <section id="industry-selector" className="relative z-0">
      <div className="md:px-global px-0">
        <div className="max-w-global mx-auto border-x border-t border-[#E5E7EB]">
          <div className="flex flex-col md:flex-row">
            <div className="flex flex-col border-b border-[#E5E7EB] md:w-[429px] md:shrink-0 md:border-b-0">
              {industries.map((ind, i) => (
                <motion.button
                  key={i}
                  onClick={() => {
                    setCycleResetKey((prev) => prev + 1);
                    if (i !== activeIndex) setActiveIndex(i);
                  }}
                  initial={false}
                  animate={{
                    backgroundColor: activeIndex === i ? "#FFFFFF" : "#FAFAFA",
                  }}
                  transition={tabTransition}
                  className={`relative flex w-full cursor-pointer flex-col items-start px-6 py-5 text-left md:px-8 md:py-6 ${
                    activeIndex !== i && i !== industries.length - 1
                      ? "border-b border-[#E5E7EB]"
                      : ""
                  }`}
                >
                  <span className="text-base leading-6 font-medium tracking-[-0.02em] text-[#202020]">
                    {ind.title}
                  </span>
                  <motion.div
                    className="overflow-hidden"
                    initial={false}
                    animate={{
                      height: activeIndex === i ? "auto" : 0,
                      opacity: activeIndex === i ? 1 : 0,
                      filter: activeIndex === i ? "blur(0px)" : "blur(4px)",
                      y: activeIndex === i ? 0 : 10,
                    }}
                    transition={tabTransition}
                  >
                    <div className="pt-2">
                      <span className="text-base leading-[26px] font-medium tracking-[-0.01em] text-[#646464]">
                        {ind.description}
                      </span>
                    </div>
                  </motion.div>
                  {activeIndex === i && (
                    <>
                      <div className="absolute right-0 bottom-0 left-0 h-[3px] bg-[#E5E7EB]" />
                      <motion.div
                        key={`${activeIndex}-${cycleResetKey}`}
                        className="absolute bottom-0 left-0 h-[3px] bg-[#006FFF]"
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 5, ease: "linear" }}
                      />
                    </>
                  )}
                </motion.button>
              ))}
            </div>

            <div className="px-global md:flex md:flex-1 md:px-0">
              <div className="flex h-full flex-1 flex-col border-l border-[#E5E7EB] px-6 py-6 md:px-0 md:py-0">
                <div className="flex flex-wrap justify-center gap-3 md:hidden">
                  {active.features.map((feature, i) => (
                    <span
                      key={i}
                      className="rounded-[8px] bg-[#006FFF14] px-4 py-2 text-sm font-medium tracking-[-0.01em] text-[#006FFF]"
                      style={{
                        boxShadow:
                          "0px 0.5px 0.5px 0px #FFFFFF inset, 0px 0px 0px 1px #006FFF33",
                      }}
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <Image
                  src="/assets/use-case/use-case-mobile.png"
                  alt="Conversation preview on mobile"
                  width={751}
                  height={787}
                  className="mt-6 block h-auto w-full max-w-[280px] self-center md:hidden"
                  priority
                />

                <div className="relative hidden min-h-[360px] flex-1 items-center justify-center overflow-hidden bg-white md:flex md:min-h-[500px]">
                  {RiveComponent ? (
                    <div className="h-full w-full scale-105">
                      <RiveComponent />
                    </div>
                  ) : (
                    <div className="text-sm text-[#646464]">
                      Loading animation...
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default IndustrySelectorSection;
