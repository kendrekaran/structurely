import Image from "next/image";

const logos = [
  { name: "Sierra Interactive", src: "/assets/home/companies/1.svg", width: 124, height: 14 },
  { name: "RealGeeks", src: "/assets/home/companies/2.svg", width: 105, height: 13 },
  { name: "CINC", src: "/assets/home/companies/3.svg", width: 76, height: 17 },
  { name: "ValleyDreamTeam", src: "/assets/home/companies/4.svg", width: 140, height: 19 },
  { name: "Firepoint", src: "/assets/home/companies/5.svg", width: 100, height: 17 },
  { name: "Winchoice", src: "/assets/home/companies/6.svg", width: 110, height: 17 },
];

function TrustedLogosSection() {
  return (
    <section id="trusted-logos" className="relative z-0">
      <div className="px-global">
        <div className="max-w-global mx-auto flex flex-col items-center border-x  border-[#E5E7EB] md:gap-8 md:pt-6">
          <div className="w-full flex justify-center  border-[#E5E7EB] py-8 md:border-b-0 md:py-0">
            <p className="text-center text-base font-medium leading-relaxed tracking-[-0.01em]">
              <span className="text-heading">Trusted by </span>
              <span className="text-foreground">industry leaders</span>
            </p>
          </div>
          <div className="w-full flex overflow-x-auto scrollbar-hide border-[#E5E7EB] border-t md:divide-x md:divide-[#E5E7EB]">
            {logos.map((logo) => (
              <div
                key={logo.name}
                className="flex h-[80px] bg-white shrink-0 items-center justify-center px-8 min-w-[120px] border-b border-r border-[#E5E7EB] md:border-r-0 md:border-b-0 md:flex-1"
              >
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={logo.width}
                  height={logo.height}
                  className="h-auto max-w-full opacity-60 grayscale"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TrustedLogosSection;
