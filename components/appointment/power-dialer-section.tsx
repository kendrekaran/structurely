const CARD_SHADOW =
  "shadow-[0_0_0_1px_rgba(0,0,0,0.08),0_1px_1px_-0.5px_rgba(51,51,51,0.05),0_3px_3px_-1.5px_rgba(51,51,51,0.05),0_6px_6px_-3px_rgba(51,51,51,0.05),0_12px_12px_-6px_rgba(51,51,51,0.05),0_24px_24px_-12px_rgba(51,51,51,0.05)]";

const features = [
  {
    key: "two-way",
    title: "Two-Way Conversation",
    description: "Instantly engage and nurture your leads.",
    active: false,
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 10C16 10.5304 15.7893 11.0391 15.4142 11.4142C15.0391 11.7893 14.5304 12 14 12H6.828C6.29761 12.0001 5.78899 12.2109 5.414 12.586L3.212 14.788C3.1127 14.8873 2.9862 14.9549 2.84849 14.9823C2.71077 15.0097 2.56803 14.9956 2.43831 14.9419C2.30858 14.8881 2.1977 14.7971 2.11969 14.6804C2.04167 14.5637 2.00002 14.4264 2 14.286V4C2 3.46957 2.21071 2.96086 2.58579 2.58579C2.96086 2.21071 3.46957 2 4 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V10Z" stroke="#646464" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M20 9C20.5304 9 21.0391 9.21071 21.4142 9.58579C21.7893 9.96086 22 10.4696 22 11V21.286C22 21.4264 21.9583 21.5637 21.8803 21.6804C21.8023 21.7971 21.6914 21.8881 21.5617 21.9419C21.432 21.9956 21.2892 22.0097 21.1515 21.9823C21.0138 21.9549 20.8873 21.8873 20.788 21.788L18.586 19.586C18.211 19.2109 17.7024 19.0001 17.172 19H10C9.46957 19 8.96086 18.7893 8.58579 18.4142C8.21071 18.0391 8 17.5304 8 17V16" stroke="#646464" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    key: "rescheduling",
    title: "Automated Rescheduling",
    description: "AI sets followups within a lead's timeframe if they're not ready now.",
    active: true,
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 2V6" stroke="#006FFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16 2V6" stroke="#006FFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z" stroke="#006FFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M3 10H21" stroke="#006FFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9 16L11 18L15 14" stroke="#006FFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    key: "drip",
    title: "Long Term Drip Campaigns",
    description: "AI automatically follows up with your leads for over twelve months.",
    active: false,
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 2V6" stroke="#646464" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16 2V6" stroke="#646464" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z" stroke="#646464" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M3 10H21" stroke="#646464" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    key: "customizable",
    title: "Fully Customizable",
    description: "Make your AI behave and speak exactly how you'd like.",
    active: false,
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 22C5.46957 22 4.96086 21.7893 4.58579 21.4142C4.21071 21.0391 4 20.5304 4 20V4C4 3.46957 4.21071 2.96086 4.58579 2.58579C4.96086 2.21072 5.46957 2 6 2H14C14.3166 1.99949 14.6301 2.06161 14.9225 2.18277C15.215 2.30394 15.4806 2.48176 15.704 2.706L19.292 6.294C19.5168 6.51751 19.6952 6.78335 19.8167 7.07616C19.9382 7.36898 20.0005 7.68297 20 8V20C20 20.5304 19.7893 21.0391 19.4142 21.4142C19.0391 21.7893 18.5304 22 18 22H6Z" stroke="#646464" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14 2V7C14 7.26522 14.1054 7.51957 14.2929 7.70711C14.4804 7.89464 14.7348 8 15 8H20" stroke="#646464" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M8 18V16" stroke="#646464" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 18V14" stroke="#646464" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16 18V12" stroke="#646464" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

function PowerDialerSection() {
  return (
    <div className="px-global">
      <section id="power-dialer" className="max-w-global mx-auto border-x border-[#E5E7EB]">
        <div className="flex flex-col items-center gap-3 py-16 px-6 md:px-24">
          <div
            className={`inline-flex items-center justify-center gap-1 overflow-hidden rounded-lg bg-white px-4 py-2 ${CARD_SHADOW}`}
          >
            <span className="text-center text-[12px] leading-4 font-medium text-[#646464]">
              AI Power Dialer
            </span>
          </div>

          <h2 className="max-w-[12em] text-center">
            Power your sales efforts{" "}
            <span className="text-[#006FFF]">like never before.</span>
          </h2>
        </div>

        <div className="relative flex items-stretch border-y border-[#E5E7EB]">
          <svg
            className="absolute left-0 top-0 z-10"
            width="1"
            height="132"
            viewBox="0 0 1 132"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0.5 0L0.5 132" stroke="url(#dialer-gradient)" strokeWidth="1" />
            <defs>
              <linearGradient id="dialer-gradient" x1="0.5" y1="0" x2="0.5" y2="132" gradientUnits="userSpaceOnUse">
                <stop stopColor="#006FFF" />
                <stop offset="1" stopColor="#006FFF" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>

          <div className="flex flex-col md:flex-row w-full divide-y md:divide-y-0 divide-[#E5E7EB]">
            {features.map((feature, index) => (
              <div
                key={feature.key}
                className={[
                  "flex flex-1 flex-col items-center gap-5 px-6 py-6",
                  feature.active
                    ? "border-b-2 border-b-[#006FFF] bg-white"
                    : "",
                  index < features.length - 1
                    ? "md:border-r md:border-[#E5E7EB]"
                    : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
              >
                <div
                  className={`flex items-center gap-2 overflow-hidden rounded-[10px] bg-white px-3 py-2 ${CARD_SHADOW}`}
                >
                  {feature.icon}
                </div>
                <div className="flex flex-col items-center gap-2">
                  <p className="text-center text-[16px] leading-6 font-medium tracking-[-0.006em] text-[#202020]">
                    {feature.title}
                  </p>
                  <p className="text-center text-[14px] leading-5 font-medium tracking-[-0.006em] text-[#646464]">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex min-h-[460px] items-center justify-center border-t border-t-[#006FFF] bg-white px-3 py-2">
          <span className="text-base leading-6 tracking-[-0.01em] text-[#646464]">
            Graphic
          </span>
        </div>
      </section>
    </div>
  );
}

export default PowerDialerSection;
