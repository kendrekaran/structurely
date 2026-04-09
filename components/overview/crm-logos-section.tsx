import Image from "next/image";
import Badge from "@/components/_ui/badge";

const logoCardShadow =
  "shadow-[0_3px_3px_-1.5px_rgba(100,100,100,0.02),0_6px_6px_-3px_rgba(100,100,100,0.04),0_12px_12px_-6px_rgba(100,100,100,0.04),0_24px_24px_-12px_rgba(100,100,100,0.04),0_48px_48px_-24px_rgba(100,100,100,0.04),0_0_0_1px_#FFF]";

function companyAroundAsset(filename: string) {
  return `/assets/home/company-around/${encodeURIComponent(filename)}`;
}

const leftLogos = [
  {
    src: companyAroundAsset("image 18.png"),
    alt: "Follow Up Boss",
    width: 55,
    height: 16,
    smWidth: 24,
    smHeight: 7,
  },
  {
    src: companyAroundAsset("image 20.png"),
    alt: "HubSpot",
    width: 57,
    height: 20,
    smWidth: 25,
    smHeight: 9,
  },
  {
    src: companyAroundAsset("image 19.png"),
    alt: "BoomTown",
    width: 52,
    height: 12,
    smWidth: 23,
    smHeight: 5,
  },
  {
    src: companyAroundAsset("Vector.png"),
    alt: "CRM integration",
    width: 55,
    height: 9,
    smWidth: 24,
    smHeight: 4,
  },
];

const centerLogos = [
  {
    src: companyAroundAsset("image 29.png"),
    alt: "Bonzo",
    width: 55,
    height: 18,
    smWidth: 25,
    smHeight: 8,
  },
  {
    src: companyAroundAsset("image 21.png"),
    alt: "Salesforce",
    width: 46,
    height: 32,
    smWidth: 20,
    smHeight: 14,
  },
];

const rightLogos = [
  {
    src: companyAroundAsset("image 22.png"),
    alt: "LP",
    width: 32,
    height: 32,
    smWidth: 14,
    smHeight: 14,
  },
  {
    src: companyAroundAsset("Layer 2.png"),
    alt: "MarketSharp",
    width: 54,
    height: 13,
    smWidth: 24,
    smHeight: 6,
  },
];

function LogoCard({
  children,
  hasShadow = false,
}: {
  children: React.ReactNode;
  hasShadow?: boolean;
}) {
  return (
    <div className="inline-flex items-center justify-center rounded-3xl border border-[#E5E7EB] bg-[#FAFAFA] p-1.5">
      <div
        className={[
          "flex h-20 w-20 flex-col items-center justify-center rounded-[18px] border border-[#E5E7EB] bg-white p-3",
          hasShadow ? logoCardShadow : "",
        ]
          .filter(Boolean)
          .join(" ")}
      >
        {children}
      </div>
    </div>
  );
}

function LogoCardSm({
  children,
  hasShadow = false,
}: {
  children: React.ReactNode;
  hasShadow?: boolean;
}) {
  return (
    <div className="inline-flex items-center justify-center rounded-[10px] border border-[#E5E7EB] bg-[#FAFAFA] p-[2.66px]">
      <div
        className={[
          "flex h-[35px] w-[35px] flex-col items-center justify-center rounded-[8px] border border-[#E5E7EB] bg-white p-[5px]",
          hasShadow ? logoCardShadow : "",
        ]
          .filter(Boolean)
          .join(" ")}
      >
        {children}
      </div>
    </div>
  );
}

function AccuLynxLogo() {
  return (
    <svg
      width="55"
      height="10"
      viewBox="0 0 55 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#acculynx-clip)">
        <path
          d="M22.8706 1.65355V5.01584C22.8706 5.28637 22.8191 5.48605 22.716 5.59555C22.613 5.70505 22.4584 5.76302 22.2458 5.76302C21.8272 5.76302 21.6275 5.54402 21.6146 5.07381V1.65355H20.1653V5.04805C20.1718 5.62775 20.365 6.09152 20.7386 6.42646C21.1058 6.7614 21.6146 6.92887 22.2523 6.92887C22.6296 6.93693 23.0038 6.85987 23.3473 6.70343C23.6629 6.55528 23.9077 6.32984 24.0751 6.03999C24.2426 5.75014 24.3263 5.40875 24.3263 5.02228V1.65355H22.8706ZM13.4085 4.27511C13.4085 6.18814 14.5486 6.98684 15.8498 6.98684C16.9834 6.98684 17.8465 6.23322 17.9496 5.13178H16.5196C16.4874 5.44096 16.2362 5.86608 15.7403 5.82099C15.1477 5.76946 14.9351 5.13178 14.948 4.27511C14.948 3.3347 15.2314 2.72922 15.7403 2.71634C16.204 2.69702 16.4681 3.01264 16.5196 3.41843H17.9496C17.8208 2.27834 16.9448 1.56337 15.7145 1.56337C14.3296 1.56981 13.4085 2.64549 13.4085 4.27511ZM6.99957 4.27511C6.99957 6.18814 8.13966 6.98684 9.44078 6.98684C10.5744 6.98684 11.4375 6.23322 11.5406 5.13178H10.1107C10.0785 5.44096 9.82725 5.86608 9.33128 5.82099C8.73869 5.76946 8.52613 5.13178 8.53902 4.27511C8.53902 3.3347 8.82243 2.72922 9.33128 2.71634C9.79504 2.69702 10.0591 3.01264 10.1107 3.41843H11.5406C11.4118 2.27834 10.5358 1.56337 9.30552 1.56337C7.92066 1.56981 6.99957 2.64549 6.99957 4.27511ZM3.5149 1.65355H2.13004L0.101074 6.87734H1.63407L1.96902 5.94981H3.68881L4.03019 6.87734H5.55675L3.5149 1.65355ZM2.40057 4.77108L2.82569 3.59234L3.25725 4.77108H2.40057ZM54.1619 0.107666H54.2714V8.68731H54.1619V0.107666Z"
          fill="#24476C"
        />
        <path
          d="M49.7624 4.24939L51.2374 1.63428H49.5563L48.8155 3.14151L48.0684 1.63428H46.3937L47.8687 4.24939L46.355 6.91604H48.0426L48.8155 5.37016L49.582 6.91604H51.2761L49.7624 4.24939ZM42.2713 1.6536V4.41687L40.6997 1.6536H39.2955V6.91604H40.7512V4.14634L42.3293 6.91604H43.727V1.6536H42.2713ZM35.4114 1.63428L34.5677 3.61816L33.7239 1.63428H32.1329L33.8269 5.00945V6.91604H35.3084V5.00945L37.0089 1.63428H35.4114ZM28.455 5.71798V1.6536H26.9993V6.89672H30.7802V5.71798H28.455Z"
          fill="#F5863B"
        />
      </g>
      <defs>
        <clipPath id="acculynx-clip">
          <rect width="54.75" height="9.01765" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

function AccuLynxLogoSm() {
  return (
    <svg
      width="25"
      height="4"
      viewBox="0 0 25 4"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#acculynx-sm-clip)">
        <path
          d="M10.1378 0.732961V2.22334C10.1378 2.34325 10.115 2.43176 10.0693 2.4803C10.0236 2.52884 9.95508 2.55453 9.86086 2.55453C9.67528 2.55453 9.58677 2.45746 9.58106 2.24904V0.732961H8.93866V2.23762C8.94151 2.49458 9.02717 2.70015 9.19276 2.84861C9.35551 2.99708 9.58106 3.07131 9.86372 3.07131C10.031 3.07489 10.1969 3.04073 10.3491 2.97138C10.489 2.90572 10.5975 2.80579 10.6717 2.67731C10.746 2.54882 10.7831 2.3975 10.7831 2.22619V0.732961H10.1378ZM5.94362 1.895C5.94362 2.74297 6.44898 3.09701 7.02572 3.09701C7.52822 3.09701 7.91081 2.76296 7.95649 2.27473H7.32265C7.30838 2.41178 7.19703 2.60022 6.97718 2.58023C6.71451 2.55739 6.62029 2.27473 6.626 1.895C6.626 1.47815 6.75163 1.20977 6.97718 1.20406C7.18275 1.19549 7.29981 1.33539 7.32265 1.51527H7.95649C7.89939 1.00991 7.51109 0.692989 6.96576 0.692989C6.35191 0.695844 5.94362 1.17265 5.94362 1.895ZM3.10277 1.895C3.10277 2.74297 3.60813 3.09701 4.18486 3.09701C4.68737 3.09701 5.06995 2.76296 5.11564 2.27473H4.4818C4.46752 2.41178 4.35617 2.60022 4.13633 2.58023C3.87365 2.55739 3.77943 2.27473 3.78514 1.895C3.78514 1.47815 3.91077 1.20977 4.13633 1.20406C4.34189 1.19549 4.45896 1.33539 4.4818 1.51527H5.11564C5.05853 1.00991 4.67024 0.692989 4.1249 0.692989C3.51105 0.695844 3.10277 1.17265 3.10277 1.895ZM1.55814 0.732961H0.944288L0.0449219 3.04847H0.724443L0.87291 2.63733H1.63523L1.78655 3.04847H2.46322L1.55814 0.732961ZM1.0642 2.11484L1.25264 1.59236L1.44394 2.11484H1.0642ZM24.008 0.0477295H24.0566V3.85076H24.008V0.0477295Z"
          fill="#24476C"
        />
        <path
          d="M22.0578 1.88355L22.7116 0.724365H21.9664L21.6381 1.39247L21.3069 0.724365H20.5646L21.2184 1.88355L20.5474 3.06557H21.2955L21.6381 2.38034L21.9779 3.06557H22.7288L22.0578 1.88355ZM18.7373 0.732931V1.95778L18.0406 0.732931H17.4182V3.06557H18.0635V1.83787L18.763 3.06557H19.3826V0.732931H18.7373ZM15.6966 0.724365L15.3226 1.60375L14.9485 0.724365H14.2433L14.9942 2.22045V3.06557H15.6509V2.22045L16.4046 0.724365H15.6966ZM12.613 2.53452V0.732931H11.9678V3.05701H13.6437V2.53452H12.613Z"
          fill="#F5863B"
        />
      </g>
      <defs>
        <clipPath id="acculynx-sm-clip">
          <rect width="24.2686" height="3.99718" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

function CrmLogosSection() {
  return (
    <section id="crm-logos" className="relative z-0">
      <div className="px-global">
        <div className="max-w-global mx-auto overflow-hidden border-x border-[#E5E7EB]">
          <div className="flex flex-col items-center gap-8  lg:px-24">
            {/* Desktop: scattered absolute layout */}
            <div
              className="relative hidden w-full lg:block"
              style={{ height: "460px" }}
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                <Badge text="Activity logs + remote management" />
                <h2 data-reveal="words" className="max-w-[8em] text-center">
                  Integrated with your{" "}
                  <span className="text-[#006FFF]">CRM.</span>
                </h2>
              </div>

              <div className="absolute -top-8 left-[48%] -translate-x-1/2">
                <LogoCard hasShadow>
                  <Image
                    src={centerLogos[0].src}
                    alt={centerLogos[0].alt}
                    width={centerLogos[0].width}
                    height={centerLogos[0].height}
                    className="object-contain"
                  />
                </LogoCard>
              </div>

              <div className="absolute top-[10%] left-[18%]">
                <LogoCard hasShadow>
                  <Image
                    src={leftLogos[1].src}
                    alt={leftLogos[1].alt}
                    width={leftLogos[1].width}
                    height={leftLogos[1].height}
                    className="object-contain"
                  />
                </LogoCard>
              </div>

              <div className="absolute top-1/2 left-[5%] -translate-y-1/2">
                <LogoCard hasShadow>
                  <Image
                    src={leftLogos[0].src}
                    alt={leftLogos[0].alt}
                    width={leftLogos[0].width}
                    height={leftLogos[0].height}
                    className="object-contain"
                  />
                </LogoCard>
              </div>

              <div className="absolute bottom-[8%] left-[18%]">
                <LogoCard hasShadow>
                  <Image
                    src={leftLogos[2].src}
                    alt={leftLogos[2].alt}
                    width={leftLogos[2].width}
                    height={leftLogos[2].height}
                    className="object-contain"
                  />
                </LogoCard>
              </div>

              <div className="absolute bottom-[-8%] left-[48%] -translate-x-1/2">
                <LogoCard>
                  <Image
                    src={centerLogos[1].src}
                    alt={centerLogos[1].alt}
                    width={centerLogos[1].width}
                    height={centerLogos[1].height}
                    className="object-contain"
                  />
                </LogoCard>
              </div>

              <div className="absolute top-[10%] right-[18%]">
                <LogoCard>
                  <Image
                    src={rightLogos[0].src}
                    alt={rightLogos[0].alt}
                    width={rightLogos[0].width}
                    height={rightLogos[0].height}
                    className="object-contain"
                  />
                </LogoCard>
              </div>

              <div className="absolute top-1/2 right-[5%] -translate-y-1/2">
                <LogoCard hasShadow>
                  <AccuLynxLogo />
                </LogoCard>
              </div>

              <div className="absolute right-[18%] bottom-[8%]">
                <LogoCard>
                  <Image
                    src={rightLogos[1].src}
                    alt={rightLogos[1].alt}
                    width={rightLogos[1].width}
                    height={rightLogos[1].height}
                    className="object-contain"
                  />
                </LogoCard>
              </div>
            </div>

            {/* Mobile: logos as background behind heading */}
            <div
              className="relative w-full overflow-hidden lg:hidden"
              style={{ height: "176px" }}
            >
              {/* Logos background layer */}
              <div className="pointer-events-none absolute inset-0">
                <div className="absolute left-1/2 top-[-16px] md:top-[22px] -translate-x-1/2">
                  <LogoCardSm hasShadow>
                    <Image
                      src={centerLogos[0].src}
                      alt={centerLogos[0].alt}
                      width={centerLogos[0].smWidth}
                      height={centerLogos[0].smHeight}
                      className="object-contain"
                    />
                  </LogoCardSm>
                </div>
                <div className="absolute left-1 md:left-3 top-[9px] md:top-[92px]">
                  <LogoCardSm hasShadow>
                    <Image
                      src={leftLogos[0].src}
                      alt={leftLogos[0].alt}
                      width={leftLogos[0].smWidth}
                      height={leftLogos[0].smHeight}
                      className="object-contain"
                    />
                  </LogoCardSm>
                </div>
                <div className="absolute md:right-3 right-2 md:top-[92px] top-[12px]">
                  <LogoCardSm>
                    <Image
                      src={rightLogos[0].src}
                      alt={rightLogos[0].alt}
                      width={rightLogos[0].smWidth}
                      height={rightLogos[0].smHeight}
                      className="object-contain"
                    />
                  </LogoCardSm>
                </div>
                <div className="absolute md:left-54 left-1 md:top-[154px] top-[66px]">
                  <LogoCardSm hasShadow>
                    <Image
                      src={leftLogos[1].src}
                      alt={leftLogos[1].alt}
                      width={leftLogos[1].smWidth}
                      height={leftLogos[1].smHeight}
                      className="object-contain"
                    />
                  </LogoCardSm>
                </div>
                <div className="absolute md:right-5 right-2 md:top-[154px] top-[66px]">
                  <LogoCardSm hasShadow>
                    <AccuLynxLogoSm />
                  </LogoCardSm>
                </div>
                <div className="absolute md:bottom-9 bottom-2 md:left-12 left-14">
                  <LogoCardSm hasShadow>
                    <Image
                      src={leftLogos[2].src}
                      alt={leftLogos[2].alt}
                      width={leftLogos[2].smWidth}
                      height={leftLogos[2].smHeight}
                      className="object-contain"
                    />
                  </LogoCardSm>
                </div>
                <div className="absolute md:bottom-9 bottom-2 md:right-12 right-14 ">
                  <LogoCardSm>
                    <Image
                      src={rightLogos[1].src}
                      alt={rightLogos[1].alt}
                      width={rightLogos[1].smWidth}
                      height={rightLogos[1].smHeight}
                      className="object-contain"
                    />
                  </LogoCardSm>
                </div>
                <div className="absolute md:bottom-3 -bottom-4 left-1/2 -translate-x-1/2">
                  <LogoCardSm>
                    <Image
                      src={centerLogos[1].src}
                      alt={centerLogos[1].alt}
                      width={centerLogos[1].smWidth}
                      height={centerLogos[1].smHeight}
                      className="object-contain"
                    />
                  </LogoCardSm>
                </div>
              </div>

              {/* Text in foreground */}
              <div className="relative z-10 flex flex-col items-center gap-4 px-4 pt-6 md:pt-10 text-center">
                <Badge text="Activity logs + remote management" />
                <h2 data-reveal="words" className="max-w-[8em]">
                  Integrated with your{" "}
                  <span className="text-[#006FFF]">CRM.</span>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CrmLogosSection;
