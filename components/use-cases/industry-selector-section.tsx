"use client";

import Image from "next/image";
import { useState } from "react";

const industries = [
  {
    title: "Mortgage & Lending",
    description:
      "Automate your CRM and sales resources with AI-powered appointment setting and calling.",
    features: [
      "Qualification before LO involvement",
      "Appointment booking",
      "Instant borrower engagement",
      "Automated nurture for long-cycle buyers",
    ],
    chat: {
      sender: "Jordan · Oakland Athletics",
      subtitle: "Verified Business · Structurely AI",
      time: "Today · 10:14 AM",
      messages: [
        {
          text: "Hey Amber! Jordan here from Oakland Athletics. Quick one — you came to a couple Grizzlies games last year, right? 🏀",
          fromUser: false,
        },
        {
          text: "I did! Those were fun. Didn't know you'd have my info like that ha.",
          fromUser: true,
        },
        {
          text: "Ha — we keep track of our fans. Alumni rate on season tickets is live — $249/seat instead of $349. Expires Sunday.",
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
      sender: "Maya · HomeVest Realty",
      subtitle: "Verified Business · Structurely AI",
      time: "Today · 9:30 AM",
      messages: [
        {
          text: "Hi Tom! I saw you viewed 3 listings in Midtown this week. Still looking in that area? 🏡",
          fromUser: false,
        },
        {
          text: "Yeah, still searching. Nothing has clicked yet.",
          fromUser: true,
        },
        {
          text: "Got it! A new 3BR just listed today — matches your wishlist. Want me to schedule a showing?",
          fromUser: false,
        },
      ],
    },
  },
  {
    title: "Home improvement",
    description:
      "Engage new leads instantly and qualify project interest so your team can book more jobs faster.",
    features: [
      "Trade-in qualification",
      "Test drive booking",
      "Re-engagement of cold leads",
      "Inventory inquiry follow-up",
    ],
    chat: {
      sender: "Chris · ProBuild",
      subtitle: "Verified Business · Structurely AI",
      time: "Today · 11:00 AM",
      messages: [
        {
          text: "Hey! Chris from ProBuild here. You requested a quote for kitchen remodeling last week — still interested? 🔨",
          fromUser: false,
        },
        {
          text: "Yes, we're ready to move forward.",
          fromUser: true,
        },
        {
          text: "Perfect! I can have a crew out for a free estimate Thursday or Friday — which works better?",
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
      sender: "Alex · Riverside FC",
      subtitle: "Verified Business · Structurely AI",
      time: "Today · 2:15 PM",
      messages: [
        {
          text: "Hey Mike! You've been a season ticket holder for 3 years. Early renewal locks in your seat at last year's price ⚽",
          fromUser: false,
        },
        {
          text: "Is the early bird discount still available?",
          fromUser: true,
        },
        {
          text: "Yes — 15% off through Friday. I can send the link right now if you'd like to lock it in.",
          fromUser: false,
        },
      ],
    },
  },
  {
    title: "Marketing agencies",
    description:
      "Instantly qualify agency leads and seamlessly hand them off.",
    features: [
      "Leads are purchased",
      "Speed determines contact rate",
      "Sales teams lack follow-up capacity",
      "CRM usage is inconsistent",
    ],
    chat: {
      sender: "Dana · GrowthLab",
      subtitle: "Verified Business · Structurely AI",
      time: "Today · 2:00 PM",
      messages: [
        {
          text: "Hi! Dana from GrowthLab. You filled out our agency inquiry — looking to scale your paid ads? 📈",
          fromUser: false,
        },
        {
          text: "Yes, we're spending $50k/mo and need better results.",
          fromUser: true,
        },
        {
          text: "We've helped 3 similar brands cut CAC by 40%. Quick 15-min call this week?",
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
      sender: "Taylor · YourBrand AI",
      subtitle: "Verified Business · Structurely AI",
      time: "Today · 3:15 PM",
      messages: [
        {
          text: "Hi! Taylor here. You expressed interest in our white-label platform — still exploring? 🤝",
          fromUser: false,
        },
        {
          text: "We are! We want to offer this under our own brand.",
          fromUser: true,
        },
        {
          text: "Perfect fit. We handle the AI, you get full branding control. Want me to walk you through the partner program?",
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
      sender: "Sam · Westfield University",
      subtitle: "Verified Business · Structurely AI",
      time: "Today · 10:45 AM",
      messages: [
        {
          text: "Hi Emma! Sam from Westfield U. You attended our virtual open day — have questions about programs? 🎓",
          fromUser: false,
        },
        {
          text: "Yes! I'm deciding between two programs.",
          fromUser: true,
        },
        {
          text: "Happy to help. I can connect you with a current student from each — would that be useful?",
          fromUser: false,
        },
      ],
    },
  },
];

function IndustrySelectorSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = industries[activeIndex];

  return (
    <section id="industry-selector" className="relative z-0">
      <div className="px-0 md:px-global">
        <div className="max-w-global mx-auto border-x  border-[#E5E7EB]">
          <div className="flex flex-col md:flex-row">
            <div className="flex md:w-[429px] md:shrink-0 flex-col border-b md:border-b-0  border-[#E5E7EB]">
              {industries.map((ind, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`relative flex w-full flex-col items-start text-left transition-colors ${
                    activeIndex === i
                      ? "gap-4 bg-white px-3 py-5 md:px-8 md:py-6"
                      : `gap-2 bg-[#FAFAFA] px-3 py-5 md:px-8 md:py-6 ${
                          i !== industries.length - 1 ? "border-b border-[#E5E7EB]" : ""
                        }`
                  }`}
                >
                  <span className="text-base font-medium leading-6 tracking-[-0.02em] text-[#202020]">
                    {ind.title}
                  </span>
                  {activeIndex === i && (
                    <>
                      <span className="text-base font-medium leading-[26px] tracking-[-0.01em] text-[#646464]">
                        {ind.description}
                      </span>
                      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#E5E7EB]" />
                      <div className="absolute bottom-0 left-0 h-[3px] w-[92px] bg-[#006FFF]" />
                    </>
                  )}
                </button>
              ))}
            </div>

            <div className="px-global md:flex md:flex-1 md:px-0">
                <div className="flex h-full flex-1 border-l border-[#E5E7EB] flex-col items-center justify-between gap-8 px-3 pt-8 pb-0 md:px-8 md:pt-[37px]  md:pb-0">
                  <div className="flex flex-wrap justify-center max-w-[560px] mx-auto gap-3">
                    {active.features.map((feature, i) => (
                      <span
                        key={i}
                        className="rounded-[8px] text-[12px] leading-[16px] md:text-[14px] md:leading-[20px] bg-[#006FFF14] px-4 py-2 text-sm font-medium tracking-[-0.01em] text-[#006FFF]"
                        style={{
                          boxShadow:
                            "0px 0.5px 0.5px 0px #FFFFFF inset, 0px 0px 0px 1px #006FFF33"
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
                    className="mt-auto block h-auto w-full max-w-[280px] md:max-w-[360px]"
                    priority
                  />
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default IndustrySelectorSection;
