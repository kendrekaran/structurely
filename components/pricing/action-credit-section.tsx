const cardShadow = "shadow-[0_0_0_1px_rgba(0,0,0,0.08),0_1px_1px_-0.5px_rgba(51,51,51,0.05),0_3px_3px_-1.5px_rgba(51,51,51,0.05),0_6px_6px_-3px_rgba(51,51,51,0.05),0_12px_12px_-6px_rgba(51,51,51,0.05),0_24px_24px_-12px_rgba(51,51,51,0.05)]";

function SmsIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z"
        stroke="#006FFF"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="8" cy="10" r="1" fill="#006FFF" />
      <circle cx="12" cy="10" r="1" fill="#006FFF" />
      <circle cx="16" cy="10" r="1" fill="#006FFF" />
    </svg>
  );
}

function PhoneOutgoingIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.48 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.5a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
        stroke="#006FFF"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <polyline points="16 2 22 2 22 8" stroke="#006FFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="22" y1="2" x2="15" y2="9" stroke="#006FFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="4" width="20" height="16" rx="2" stroke="#006FFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M2 7L12 13L22 7" stroke="#006FFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ChevronIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 12L10 8L6 4" stroke="#006FFF" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const credits = [
  { label: "1 SMS response", Icon: SmsIcon },
  { label: "10 seconds of talk time", Icon: PhoneOutgoingIcon },
  { label: "2 emails", Icon: MailIcon },
];

export default function ActionCreditSection() {
  return (
    <section id="action-credit" className="relative z-0 border-t border-[#E5E7EB] bg-white">
      <div className="px-global py-section-md">
        <div className="max-w-global mx-auto flex flex-col items-center gap-4">
          <h2 className="max-w-[12em] text-center">
            What is an{" "}
            <span className="text-[#006FFF]">Action Credit?</span>
          </h2>
          <p className="max-w-[22em] text-center">
            An Action Credit is a unit of AI labor.
          </p>
        </div>
      </div>

      <div className="border-t border-[#E5E7EB]">
        <div className="px-global py-10">
          <div className="max-w-global mx-auto">
            <p className="mx-auto max-w-[38em] text-center">
              Every time Structurely works on your behalf — chasing documents,
              following up with a lead, or prequalifying a borrower — it spends
              Action Credits.
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-b border-[#E5E7EB]">
        <div className="px-global">
          <div className="max-w-global mx-auto">
            <div className="flex items-stretch">
              {credits.map((credit, index) => (
                <div key={index} className="flex flex-1 items-stretch">
                  <div className="flex flex-1 flex-col items-center justify-center gap-5 px-6 py-10 md:px-12">
                    <div className={`flex items-center justify-center rounded-[10px] bg-white p-3 ${cardShadow}`}>
                      <credit.Icon />
                    </div>
                    <div className="flex flex-col items-center gap-1 text-center">
                      <span className="text-[16px] font-medium leading-6 tracking-[-0.01em] text-[#202020]">
                        1 Credit
                      </span>
                      <span className="text-[13px] leading-5 text-[#646464]">
                        {credit.label}
                      </span>
                    </div>
                  </div>

                  {index < credits.length - 1 && (
                    <div className="flex flex-col items-center self-stretch">
                      <div className="w-px flex-1 bg-[#E5E7EB]" />
                      <div className={`flex items-center rounded-md bg-white p-1 ${cardShadow}`}>
                        <ChevronIcon />
                      </div>
                      <div className="w-px flex-1 bg-[#E5E7EB]" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="px-global py-8">
        <div className="max-w-global mx-auto">
          <p className="text-center">
            Think of it like paying a team member per task completed, not per
            hour logged.
          </p>
        </div>
      </div>
    </section>
  );
}
