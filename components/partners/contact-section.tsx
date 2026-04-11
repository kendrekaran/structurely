import { ContactSalesForm } from "@/components/partners/contact-sales-form";

export default function ContactSection() {
  return (
    <section id="partners-contact" className="relative z-0 ">
      <div className="px-global">
        <div className="max-w-global mx-auto border-x border-b border-[#E5E7EB]">
          <div className="flex flex-col items-center gap-8 py-8 md:py-16 px-6 md:px-24">
            <div className="flex flex-col items-center gap-4 w-full max-w-[46.375em]">
              <div className="px-4 py-2 rounded-lg bg-white text-[#646464] text-[12px] font-medium leading-[16px] shadow-[0_0_0_1px_rgba(0,0,0,0.08),0_1px_1px_-0.5px_rgba(51,51,51,0.05),0_3px_3px_-1.5px_rgba(51,51,51,0.05),0_6px_6px_-3px_rgba(51,51,51,0.05),0_12px_12px_-6px_rgba(51,51,51,0.05),0_24px_24px_-12px_rgba(51,51,51,0.05)]">
                Contact sales
              </div>
              <h1 data-reveal="words" className="text-center max-w-[13.85em]">
                Let&apos;s improve your{" "}
                <span className="md:text-[#006FFF]">lead conversion.</span>
              </h1>
            </div>
          </div>

          <div className="relative border-t border-[#E5E7EB] flex flex-col items-center py-10 px-3 md:px-12">
            <svg
              className="absolute left-0 top-0"
              height="132"
              viewBox="0 0 1 132"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width="1"
            >
              <path
                d="M0.5 0L0.5 132"
                stroke="url(#contact-gradient)"
                strokeWidth="1"
              />
              <defs>
                <linearGradient
                  id="contact-gradient"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="132"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#006FFF" />
                  <stop offset="1" stopColor="#006FFF" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>

            <ContactSalesForm />
          </div>
        </div>
      </div>
    </section>
  );
}
