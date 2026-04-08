"use client";

import Image from "next/image";
import Rive from "@/components/_ui/rive";
import { Fit, Layout } from "@rive-app/react-canvas";

function HeroAnimationSection() {
  return (
    <div className="px-global">
      <section
        id="hero-animation"
        className="max-w-global relative mx-auto flex min-h-[260px] w-full items-stretch justify-center border-x border-[#E5E7EB] bg-white md:min-h-[480px]"
      >
        {/* <Image
          src="/assets/home/hero-img.png"
          alt="Structurely AI platform overview"
          width={1200}
          height={630}
          className="hidden w-full object-cover md:block"
          priority
        /> */}

        <Rive
          src="/rive/home/new/1.riv"
          className="hidden w-full object-cover md:block"
          layout={new Layout({ fit: Fit.Cover, layoutScaleFactor: 1 })}
        />
        <Image
          src="/assets/home/hero-mobile.png"
          alt="Structurely AI platform overview"
          width={1200}
          height={630}
          className="w-full object-cover px-[12px] pt-[32px] md:hidden"
          priority
        />
      </section>
    </div>
  );
}

export default HeroAnimationSection;
