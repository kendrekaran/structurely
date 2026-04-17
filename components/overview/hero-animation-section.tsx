"use client";

import Image from "next/image";
import Rive from "@/components/_ui/rive";
import { Fit, Layout } from "@rive-app/react-canvas";

function HeroAnimationSection() {
  return (
    <div className="px-global">
      <section
        id="hero-animation"
        className="max-w-global relative mx-auto flex min-h-[260px] w-full items-stretch justify-center border-x border-[#E5E7EB] md:min-h-[480px]"
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
          src="/rive/home/hero.riv"
          className="hidden w-full object-cover md:block"
          layout={new Layout({ fit: Fit.Cover, layoutScaleFactor: 1 })}
        />
        <Image
          src="/assets/home/hero-mobile.png"
          alt="Structurely AI platform overview"
          width={1200}
          height={630}
          className="mx-auto w-full max-w-[375px] object-cover px-[12px] pt-[32px] md:hidden"
          priority
        />
      </section>
    </div>
  );
}

export default HeroAnimationSection;
