import Image from "next/image";
import Separator from "../_ui/separator";
import Link from "next/link";

const logos = [
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
  { name: "CINC", src: "/assets/home/companies/3.svg", width: 76, height: 40 },
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
];

const CHECK_ICON = (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3.20849 7.18358C3.08686 6.63568 3.10554 6.06595 3.26279 5.52719C3.42004 4.98844 3.71078 4.49811 4.10805 4.10168C4.50532 3.70524 4.99625 3.41553 5.53533 3.25941C6.07441 3.10328 6.64419 3.0858 7.19183 3.20858C7.49325 2.73716 7.9085 2.34921 8.39929 2.08048C8.89008 1.81175 9.44062 1.6709 10.0002 1.6709C10.5597 1.6709 11.1102 1.81175 11.601 2.08048C12.0918 2.34921 12.5071 2.73716 12.8085 3.20858C13.357 3.08526 13.9277 3.10267 14.4677 3.25917C15.0076 3.41568 15.4992 3.70619 15.8967 4.10371C16.2942 4.50122 16.5847 4.9928 16.7412 5.53275C16.8977 6.07269 16.9151 6.64344 16.7918 7.19191C17.2632 7.49334 17.6512 7.90858 17.9199 8.39937C18.1886 8.89016 18.3295 9.4407 18.3295 10.0002C18.3295 10.5598 18.1886 11.1103 17.9199 11.6011C17.6512 12.0919 17.2632 12.5072 16.7918 12.8086C16.9146 13.3562 16.8971 13.926 16.741 14.4651C16.5849 15.0042 16.2952 15.4951 15.8987 15.8924C15.5023 16.2896 15.012 16.5804 14.4732 16.7376C13.9345 16.8949 13.3647 16.9135 12.8168 16.7919C12.5158 17.2651 12.1002 17.6547 11.6086 17.9247C11.117 18.1946 10.5652 18.3361 10.0043 18.3361C9.44347 18.3361 8.89168 18.1946 8.40006 17.9247C7.90843 17.6547 7.49286 17.2651 7.19183 16.7919C6.64419 16.9147 6.07441 16.8972 5.53533 16.7411C4.99625 16.585 4.50532 16.2952 4.10805 15.8988C3.71078 15.5024 3.42004 15.012 3.26279 14.4733C3.10554 13.9345 3.08686 13.3648 3.20849 12.8169C2.73346 12.5163 2.34217 12.1004 2.07103 11.6079C1.7999 11.1155 1.65771 10.5624 1.65771 10.0002C1.65771 9.43807 1.7999 8.88503 2.07103 8.39257C2.34217 7.9001 2.73346 7.48421 3.20849 7.18358Z"
      stroke="#006FFF"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7.5 10.0002L9.16667 11.6668L12.5 8.3335"
      stroke="#006FFF"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ARROW_ICON = (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4.1665 10H15.8332"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10 4.1665L15.8333 9.99984L10 15.8332"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const conditions = [
  "Leads are purchased",
  "CRM usage is inconsistent",
  "Speed determines contact rate",
  "Sales teams lack follow-up capacity",
];

function LeadEnvironmentsSection() {
  return (
    <section id="lead-environments" className="relative z-0">
      <div className="px-global">
        <div className="max-w-global mx-auto border-x border-[#E5E7EB]">
          <div className="flex flex-col items-center py-[32px]">
            <h3 className="mb-8 text-center">High-Volume Lead Environments</h3>

            <div className="px-global mb-0 flex w-full justify-center">
              <div className="flex h-[200px] w-full max-w-[29.25em] items-center justify-center rounded-xl bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.08),0_1px_1px_-0.5px_rgba(51,51,51,0.05),0_3px_3px_-1.5px_rgba(51,51,51,0.05),0_6px_6px_-3px_rgba(51,51,51,0.05),0_12px_12px_-6px_rgba(51,51,51,0.05),0_24px_24px_-12px_rgba(51,51,51,0.05)]">
                <span className="text-foreground text-[16px] leading-6 tracking-[-0.01em]">
                  Graphic
                </span>
              </div>
            </div>

            <div className="mt-[59px] flex justify-center md:mt-[32px]">
              <div className="rounded-t-xl border border-b-0 border-[#E5E7EB] bg-white px-4 py-1">
                <span className="text-foreground text-[14px] leading-5 tracking-[-0.01em]">
                  Any organization where
                </span>
              </div>
            </div>

            <div className="mr-[calc(50%-50vw)] ml-[calc(50%-50vw)] w-screen">
              <Separator />
            </div>

            <div className="w-full">
              <div className="px-global flex flex-wrap md:flex-nowrap justify-center gap-6 py-6 md:gap-6">
                {conditions.map((condition) => (
                  <div
                    key={condition}
                    className="flex items-center gap-2 rounded-[10px] bg-white px-3 py-2 shadow-[0_0_0_1px_rgba(0,0,0,0.08),0_1px_1px_-0.5px_rgba(51,51,51,0.05),0_3px_3px_-1.5px_rgba(51,51,51,0.05),0_6px_6px_-3px_rgba(51,51,51,0.05),0_12px_12px_-6px_rgba(51,51,51,0.05),0_24px_24px_-12px_rgba(51,51,51,0.05)]"
                  >
                    {CHECK_ICON}
                    <span className="text-foreground text-[14px] leading-5 tracking-[-0.006em] whitespace-nowrap">
                      {condition}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mr-[calc(50%-50vw)] ml-[calc(50%-50vw)] w-screen">
              <Separator />
            </div>

            <div className="w-full">
              <div className="hidden items-center justify-center border-b border-[#E5E7EB] py-8 md:flex">
                <p className="text-heading  text-center text-[1.25em] leading-[28px] tracking-[-0.01em]">
                  Trusted by industry leaders
                </p>
              </div>
              <div className="scrollbar-hide flex divide-x divide-[#EAEDF5] overflow-x-auto md:flex-wrap">
                {logos.map((logo) => (
                  <div
                    key={logo.name}
                    className="flex shrink-0 items-center justify-center px-8 py-5 md:flex-1 md:shrink md:basis-1/6"
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

            <div className="flex w-full items-center justify-center gap-3 bg-[#006FFF] md:px-6 py-5">
              <Link href="/how-it-works" className="flex items-center gap-2">
              <span className="text-[14px] leading-5 font-medium text-white">
                See How It Works in Your Environment
              </span>
              {ARROW_ICON}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LeadEnvironmentsSection;
