import Image from "next/image";

function HeroAnimationSection() {
  return (
    <div className="px-global">
      <section
        id="hero-animation"
        className="max-w-global relative mx-auto flex min-h-[480px] w-full items-center justify-center border-x border-b-2 border-[#E5E7EB] border-b-[#006FFF] bg-white"
      >
        <Image
          src="/assets/overview/logos/hero-image.png"
          alt="Structurely AI platform overview"
          width={1200}
          height={630}
          className="w-full object-cover"
          priority
        />
      </section>
    </div>
  );
}

export default HeroAnimationSection;
