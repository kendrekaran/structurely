const CARD_SHADOW =
  "shadow-[0_0_0_1px_rgba(0,0,0,0.08),0_1px_1px_-0.5px_rgba(51,51,51,0.05),0_3px_3px_-1.5px_rgba(51,51,51,0.05),0_6px_6px_-3px_rgba(51,51,51,0.05),0_12px_12px_-6px_rgba(51,51,51,0.05),0_24px_24px_-12px_rgba(51,51,51,0.05)]";

const ArrowIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4.16602 10H15.8327" stroke="#646464" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M10 4.16675L15.8333 10.0001L10 15.8334" stroke="#646464" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

function PhoneTransfersSection() {
  return (
    <div className="px-global">
      <section id="phone-transfers" className="max-w-global mx-auto border-x border-[#E5E7EB] border-t border-t-[#E5E7EB]">
        <div className="flex flex-col items-center gap-3 py-16 px-6 md:px-24">
          <div className={`inline-flex items-center justify-center gap-1 overflow-hidden rounded-lg bg-white px-4 py-2 ${CARD_SHADOW}`}>
            <span className="text-center text-[12px] leading-4 font-medium text-[#646464]">
              Phone Transfers + Appointments
            </span>
          </div>

          <h2 data-reveal="words" className="max-w-[12em] text-center">
            Get live phone transfers or appointments with your{" "}
            <span className="text-[#006FFF]">most qualified leads.</span>
          </h2>
        </div>

        <div className="relative border-t border-[#E5E7EB]">
          <svg
            className="absolute left-0 top-0 z-10"
            width="1"
            height="132"
            viewBox="0 0 1 132"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0.5 0L0.5 132" stroke="url(#phone-gradient)" strokeWidth="1" />
            <defs>
              <linearGradient id="phone-gradient" x1="0.5" y1="0" x2="0.5" y2="132" gradientUnits="userSpaceOnUse">
                <stop stopColor="#006FFF" />
                <stop offset="1" stopColor="#006FFF" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>

          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[#E5E7EB]">
            <div className="flex flex-col items-center p-1 pb-0">
              <div className={`flex h-60 w-full items-center justify-center rounded-md bg-white ${CARD_SHADOW} overflow-hidden`}>
                <span className="text-base leading-6 tracking-[-0.01em] text-[#646464]">Graphic</span>
              </div>
              <div className="flex flex-col items-center gap-4 py-10 w-full">
                <h3 className="text-center text-[20px] leading-7 font-medium tracking-[-0.005em] text-[#202020]">
                  Live phone transfers
                </h3>
                <button
                  className={`inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-[14px] leading-5 font-medium text-[#646464] ${CARD_SHADOW}`}
                >
                  Live phone transfers
                  <ArrowIcon />
                </button>
              </div>
            </div>

            <div className="flex flex-col items-center p-1 pb-0">
              <div className={`flex h-60 w-full items-center justify-center rounded-md bg-white ${CARD_SHADOW} overflow-hidden`}>
                <span className="text-base leading-6 tracking-[-0.01em] text-[#646464]">Graphic</span>
              </div>
              <div className="flex flex-col items-center gap-4 py-10 w-full">
                <h3 className="text-center text-[20px] leading-7 font-medium tracking-[-0.005em] text-[#202020]">
                  Appointment setting
                </h3>
                <button
                  className={`inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-[14px] leading-5 font-medium text-[#646464] ${CARD_SHADOW}`}
                >
                  Appointment setting
                  <ArrowIcon />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PhoneTransfersSection;
