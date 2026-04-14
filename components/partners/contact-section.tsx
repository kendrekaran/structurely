import { ContactSalesForm } from "@/components/partners/contact-sales-form";
import { HubSpotContactFormEmbed } from "@/components/partners/hubspot-contact-form-embed";

export default function ContactSection() {
  return (
    <section id="partners-contact" className="relative z-0">
      <div className="px-global">
        <div className="max-w-global mx-auto border-x border-b border-[#E5E7EB]">
          <div className="flex flex-col items-center gap-8 px-6 py-8 md:px-24 md:py-16">
            <div className="flex w-full max-w-[46.375em] flex-col items-center gap-4">
              <div className="rounded-lg bg-white px-4 py-2 text-[12px] leading-[16px] font-medium text-[#646464] shadow-[0_0_0_1px_rgba(0,0,0,0.08),0_1px_1px_-0.5px_rgba(51,51,51,0.05),0_3px_3px_-1.5px_rgba(51,51,51,0.05),0_6px_6px_-3px_rgba(51,51,51,0.05),0_12px_12px_-6px_rgba(51,51,51,0.05),0_24px_24px_-12px_rgba(51,51,51,0.05)]">
                Contact sales
              </div>
              <h1 data-reveal="words" className="max-w-[13.85em] text-center">
                Let&apos;s improve your{" "}
                <span className="md:text-[#006FFF]">lead conversion.</span>
              </h1>
            </div>
          </div>

          <div className="relative flex flex-col items-center border-t border-[#E5E7EB] px-3 py-10 md:px-12">
            <svg
              className="absolute top-0 left-0"
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

            {/* <ContactSalesForm /> */}
            <HubSpotContactFormEmbed className="flex w-full max-w-[34.5em] flex-col items-center pt-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
