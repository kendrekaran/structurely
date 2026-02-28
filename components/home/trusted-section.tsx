"use client";

import Image from "next/image";
import { useState } from "react";

const logoRows = [
  [
    {
      name: "Sierra Interactive",
      src: "/assets/home/companies/1.svg",
      width: 124,
      height: 40,
    },
    {
      name: "RealGeeks",
      src: "/assets/home/companies/2.svg",
      width: 105,
      height: 40,
    },
    {
      name: "CINC",
      src: "/assets/home/companies/3.svg",
      width: 76,
      height: 40,
    },
  ],
  [
    {
      name: "ValleyDreamTeam",
      src: "/assets/home/companies/4.svg",
      width: 160,
      height: 40,
    },
    {
      name: "firepoint",
      src: "/assets/home/companies/5.svg",
      width: 100,
      height: 40,
    },
    {
      name: "Winchoice",
      src: "/assets/home/companies/6.svg",
      width: 110,
      height: 40,
    },
  ],
];

const allLogos = logoRows.flat();

function TrustedSection() {
  const [activeIndex, setActiveIndex] = useState<number>(1);

  return (
    <section id="trusted" className="relative z-0">
      <div className="px-global">
        <div className="max-w-global mx-auto flex flex-col items-stretch border-x border-[#E5E7EB]">
          <div className="px-global  flex flex-col items-center gap-4  py-16">
            <div className="proof-badge flex items-center rounded-lg bg-white px-4 py-2 shadow-[0_0_0_1px_rgba(0,0,0,0.08),0_1px_1px_-0.5px_rgba(51,51,51,0.05),0_3px_3px_-1.5px_rgba(51,51,51,0.05),0_6px_6px_-3px_rgba(51,51,51,0.05)]">
              <span className="text-[12px] leading-4 font-medium text-[var(--foreground)]">
                Proof
              </span>
            </div>
            <h2 className="max-w-[15em] text-center">
              Trusted by <span className="text-[var(--primary)]">leading</span>{" "}
              teams across sales-driven industries
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {allLogos.map((logo, i) => {
              const col = i % 3;
              const row = Math.floor(i / 3);
              const smCol = i % 2;

              const isActive = activeIndex === i;

              return (
                <div
                  key={logo.name}
                  onClick={() => setActiveIndex(i)}
                  className={[
                    "flex cursor-pointer items-center justify-center px-10 py-16 transition-colors duration-200",
                    isActive ? "bg-white" : "",
                    "",
                    smCol === 0 ? "sm:border-border sm:border-r" : "",
                    col !== 2
                      ? "md:border-border md:border-r"
                      : "md:border-r-0",
                    col === 0 && smCol !== 0 ? "sm:border-r-0" : "",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                >
                  <Image
                    src={logo.src}
                    alt={logo.name}
                    width={logo.width}
                    height={logo.height}
                    className={[
                      "h-auto max-w-full transition-all duration-200",
                      isActive ? "opacity-100" : "opacity-60 grayscale",
                    ].join(" ")}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TrustedSection;
