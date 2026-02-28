function PhoneIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3.5 4.5C3.5 4.5 4.5 3 6 3C7.5 3 8.5 5 8.5 5L9.5 7C9.5 7 10 8 9 8.5L8 9C8 9 7.5 9.5 8.5 11C9.5 12.5 10.5 13 11 13L11.5 12C12 11 13 11.5 13 11.5L15 12.5C15 12.5 17 13.5 17 15C17 16.5 15.5 17.5 15.5 17.5C14 18.5 11 18 8 15C5 12 4.5 9 3.5 7C2.5 5 3.5 4.5 3.5 4.5Z" stroke="#006FFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function ChatIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M17 10C17 13.866 13.866 17 10 17C8.63 17 7.35 16.61 6.27 15.94L3 17L4.06 13.73C3.39 12.65 3 11.37 3 10C3 6.134 6.134 3 10 3C13.866 3 17 6.134 17 10Z" stroke="#006FFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7 10H7.01M10 10H10.01M13 10H13.01" stroke="#006FFF" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}

const cardShadow = "shadow-[0_0_0_1px_rgba(0,0,0,0.08),0_1px_1px_-0.5px_rgba(51,51,51,0.05),0_3px_3px_-1.5px_rgba(51,51,51,0.05),0_6px_6px_-3px_rgba(51,51,51,0.05),0_12px_12px_-6px_rgba(51,51,51,0.05),0_24px_24px_-12px_rgba(51,51,51,0.05)]";

const options = [
  {
    Icon: PhoneIcon,
    title: "Call the AI",
    description: "Dial this number and have a real conversation.",
  },
  {
    Icon: ChatIcon,
    title: "Text the AI",
    description: "Send a message and see how it responds.",
  },
];

export default function DemoHeroSection() {
  return (
    <section id="demo-hero" className="relative z-0 border-b border-[#E5E7EB] bg-white">
      <div className="px-global pt-16 pb-0">
        <div className="max-w-global mx-auto">
          <div className="flex flex-col items-center gap-4 pb-10 text-center">
            <h1 className="max-w-[10em]">Experience the AI.</h1>
            <p className="max-w-[34.44em] text-center">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry
            </p>
          </div>

          <div className="grid grid-cols-1 divide-y divide-[#E5E7EB] border-t border-[#E5E7EB] md:grid-cols-2 md:divide-x md:divide-y-0">
            {options.map((option) => (
              <div
                key={option.title}
                className="flex items-center gap-4 bg-[#FAFAFA] px-8 py-6"
              >
                <div className={`flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-[10px] bg-white ${cardShadow}`}>
                  <option.Icon />
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="text-[14px] font-medium leading-5 tracking-[-0.01em] text-[#202020]">
                    {option.title}
                  </span>
                  <div className="text-[13px] leading-5 tracking-[-0.01em] text-[#646464]">
                    {option.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
