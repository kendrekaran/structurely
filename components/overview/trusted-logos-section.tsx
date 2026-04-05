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
        <div className="max-w-global  mx-auto flex flex-col items-center gap-8 border-x border-b border-[#E5E7EB] pt-6">
          <p className="text-center text-base font-medium leading-relaxed tracking-[-0.01em]">
            <span className="text-heading">Trusted by </span>
            <span className="text-foreground">industry leaders</span>
          </p>
          <div className="flex w-full divide-x divide-[#E5E7EB] border-t border-[#E5E7EB] overflow-x-auto scrollbar-hide">
            {logos.map((logo) => (
              <div
                key={logo.name}
                className="flex flex-1 bg-white shrink-0 items-center justify-center px-8 py-3 min-w-[120px]"
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
