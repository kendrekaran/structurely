import Image from "next/image";

function HeroAnimationSection() {
  return (
    <div className="px-global">
      <section
        id="hero-animation"
        className="max-w-global relative mx-auto flex min-h-[260px] w-full items-stretch justify-center border-x border-[#E5E7EB] bg-white md:min-h-[480px]"
      >
        <Image
          src="/assets/home/hero-img.png"
          alt="Structurely AI platform overview"
          width={1200}
          height={630}
          className="w-full object-cover hidden md:block "
          priority
        />
        <Image
          src="/assets/home/hero-mobile.png"
          alt="Structurely AI platform overview"
          width={1200}
          height={630}
          className=" w-full pt-[32px] px-[12px] object-cover  md:hidden"
          priority
        />
      </section>
    </div>
  );
}

export default HeroAnimationSection;
