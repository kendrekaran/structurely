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
                    "py-section-md flex cursor-pointer items-center justify-center px-10 transition-colors duration-200",
                    isActive ? "bg-white" : "",
                    "",
                    smCol === 0 ? "sm:border-border sm:border-r" : "",
                    col !== 2
                      ? "md:border-border md:border-r"
                      : "md:border-r-0",
                    col === 0 && smCol !== 0 ? "sm:border-r-0" : "",
                    i < 2 ? "sm:border-border sm:border-b" : "",
                    i < 3 ? "md:border-border md:border-b" : "",
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
