import { IconStepsRow } from "@/components/_ui/icon-steps-row";

function SmsIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M22 17C22 17.5304 21.7893 18.0391 21.4142 18.4142C21.0391 18.7893 20.5304 19 20 19H6.828C6.29761 19.0001 5.78899 19.2109 5.414 19.586L3.212 21.788C3.1127 21.8873 2.9862 21.9549 2.84849 21.9823C2.71077 22.0097 2.56803 21.9956 2.43831 21.9419C2.30858 21.8881 2.1977 21.7971 2.11969 21.6804C2.04167 21.5637 2.00002 21.4264 2 21.286V5C2 4.46957 2.21071 3.96086 2.58579 3.58579C2.96086 3.21071 3.46957 3 4 3H20C20.5304 3 21.0391 3.21071 21.4142 3.58579C21.7893 3.96086 22 4.46957 22 5V17Z" stroke="#006FFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 11H12.01" stroke="#006FFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16 11H16.01" stroke="#006FFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8 11H8.01" stroke="#006FFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function PhoneOutgoingIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 8L22 2" stroke="#006FFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M22 8V2H16" stroke="#006FFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M13.832 16.568C14.0385 16.6628 14.2712 16.6845 14.4917 16.6294C14.7122 16.5744 14.9073 16.4458 15.045 16.265L15.4 15.8C15.5863 15.5516 15.8279 15.35 16.1056 15.2111C16.3833 15.0723 16.6895 15 17 15H20C20.5304 15 21.0391 15.2107 21.4142 15.5858C21.7893 15.9609 22 16.4696 22 17V20C22 20.5304 21.7893 21.0391 21.4142 21.4142C21.0391 21.7893 20.5304 22 20 22C15.2261 22 10.6477 20.1036 7.27208 16.7279C3.89642 13.3523 2 8.7739 2 4C2 3.46957 2.21071 2.96086 2.58579 2.58579C2.96086 2.21071 3.46957 2 4 2H7C7.53043 2 8.03914 2.21071 8.41421 2.58579C8.78929 2.96086 9 3.46957 9 4V7C9 7.31049 8.92771 7.61672 8.78885 7.89443C8.65 8.17214 8.44839 8.41371 8.2 8.6L7.732 8.951C7.54842 9.09118 7.41902 9.29059 7.36579 9.51535C7.31256 9.74012 7.33878 9.97638 7.44 10.184C8.80668 12.9599 11.0544 15.2048 13.832 16.568Z" stroke="#006FFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M22 7L13.009 12.727C12.7039 12.9042 12.3573 12.9976 12.0045 12.9976C11.6517 12.9976 11.3051 12.9042 11 12.727L2 7" stroke="#006FFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M20 4H4C2.89543 4 2 4.89543 2 6V18C2 19.1046 2.89543 20 4 20H20C21.1046 20 22 19.1046 22 18V6C22 4.89543 21.1046 4 20 4Z" stroke="#006FFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

const CARD_SHADOW =
  "shadow-[0_0_0_1px_rgba(0,0,0,0.08),0_1px_1px_-0.5px_rgba(51,51,51,0.05),0_3px_3px_-1.5px_rgba(51,51,51,0.05),0_6px_6px_-3px_rgba(51,51,51,0.05),0_12px_12px_-6px_rgba(51,51,51,0.05),0_24px_24px_-12px_rgba(51,51,51,0.05)]";

const credits = [
  { label: "= 1 SMS response", Icon: SmsIcon },
  { label: "= 10 seconds of AI talk time", Icon: PhoneOutgoingIcon },
  { label: "= 2 emails sent", Icon: MailIcon },
];

export default function ActionCreditSection() {
  return (
    <section id="action-credit" className="relative z-0 ">
      <div className="px-global">
        <div className="max-w-global mx-auto border-x border-[#E5E7EB]">
          <div className="flex flex-col items-center gap-3 px-3 py-8 md:py-16 md:px-24">
            <div className={`flex items-center justify-center gap-1 overflow-hidden rounded-lg bg-white px-4 py-2 ${CARD_SHADOW}`}>
              <span className="text-center text-[12px] font-medium leading-4 text-[#646464]">
                How Billing Works
              </span>
            </div>
            <h2 className="max-w-[13.375em] text-center  ">
              What is an <span className="text-[#006FFF]">Action Credit?</span>
            </h2>
            <p className="max-w-[29.375em] text-center text-[16px] font-medium leading-[26px] tracking-[-0.01em] text-[#646464]">
              An Action Credit is a unit of AI labor. You only pay when the AI
              works — no minimums, no idle charges, no wasted budget.
            </p>
          </div>
        </div>
      </div>

      <div className="px-global">
        <div className="max-w-global mx-auto border-x border-t border-b border-[#E5E7EB]">
          <IconStepsRow
            items={credits.map((credit) => ({
              key: credit.label,
              label: credit.label,
              icon: <credit.Icon />,
              topLabel: "1 Credit",
            }))}
          />
        </div>
      </div>

      <div className="px-global">
        <div className="max-w-global mx-auto border-x border-[#E5E7EB] bg-white px-6 py-6 md:px-24">
          <p className="mx-auto max-w-[40.143em] text-center text-[14px] font-medium leading-5 tracking-[-0.01em] text-[#646464]">
            Think of it like paying a team member per task completed — not per
            hour logged. If your AI isn&apos;t working leads, you&apos;re not spending
            credits.
          </p>
        </div>
      </div>
    </section>
  );
}
