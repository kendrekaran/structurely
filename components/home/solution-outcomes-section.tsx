import React from "react";

const outcomes = [
  { text: "No scripts..", icon: "scripts" },
  { text: "No manual chasing..", icon: "chasing" },
  { text: "No guesswork..", icon: "guesswork" },
  { text: "Just finished follow-up.", icon: "done" },
];

function ScriptsIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 22C5.46957 22 4.96086 21.7893 4.58579 21.4142C4.21071 21.0391 4 20.5304 4 20V4C4 3.46957 4.21071 2.96086 4.58579 2.58579C4.96086 2.21072 5.46957 2 6 2H14C14.3166 1.99949 14.6301 2.06161 14.9225 2.18277C15.215 2.30394 15.4806 2.48176 15.704 2.706L19.292 6.294C19.5168 6.51751 19.6952 6.78335 19.8167 7.07616C19.9382 7.36898 20.0005 7.68297 20 8V20C20 20.5304 19.7893 21.0391 19.4142 21.4142C19.0391 21.7893 18.5304 22 18 22H6Z"
        stroke="#646464"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 2V7C14 7.26522 14.1054 7.51957 14.2929 7.70711C14.4804 7.89464 14.7348 8 15 8H20"
        stroke="#646464"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 16L10 14L8 12"
        stroke="#646464"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 18H16"
        stroke="#646464"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChasingIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 22C5.46957 22 4.96086 21.7893 4.58579 21.4142C4.21071 21.0391 4 20.5304 4 20V4C4 3.46957 4.21071 2.96086 4.58579 2.58579C4.96086 2.21072 5.46957 2 6 2H14C14.3166 1.99949 14.6301 2.06161 14.9225 2.18277C15.215 2.30394 15.4806 2.48176 15.704 2.706L19.292 6.294C19.5168 6.51751 19.6952 6.78335 19.8167 7.07616C19.9382 7.36898 20.0005 7.68297 20 8V20C20 20.5304 19.7893 21.0391 19.4142 21.4142C19.0391 21.7893 18.5304 22 18 22H6Z"
        stroke="#646464"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 2V7C14 7.26522 14.1054 7.51957 14.2929 7.70711C14.4804 7.89464 14.7348 8 15 8H20"
        stroke="#646464"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 13H10"
        stroke="#646464"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 13H16"
        stroke="#646464"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 17H10"
        stroke="#646464"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 17H16"
        stroke="#646464"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function GuessworkIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 22C5.46957 22 4.96086 21.7893 4.58579 21.4142C4.21071 21.0391 4 20.5304 4 20V4C4 3.46957 4.21071 2.96086 4.58579 2.58579C4.96086 2.21072 5.46957 2 6 2H14C14.3166 1.99949 14.6301 2.06161 14.9225 2.18277C15.215 2.30394 15.4806 2.48176 15.704 2.706L19.292 6.294C19.5168 6.51751 19.6952 6.78335 19.8167 7.07616C19.9382 7.36898 20.0005 7.68297 20 8V20C20 20.5304 19.7893 21.0391 19.4142 21.4142C19.0391 21.7893 18.5304 22 18 22H6Z"
        stroke="#646464"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 2V7C14 7.26522 14.1054 7.51957 14.2929 7.70711C14.4804 7.89464 14.7348 8 15 8H20"
        stroke="#646464"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 15H15"
        stroke="#646464"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function DoneIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.84995 8.6201C3.70399 7.96262 3.7264 7.27894 3.91511 6.63244C4.10381 5.98593 4.4527 5.39754 4.92942 4.92182C5.40614 4.4461 5.99526 4.09844 6.64216 3.91109C7.28905 3.72374 7.97278 3.70276 8.62995 3.8501C8.99166 3.2844 9.48995 2.81886 10.0789 2.49638C10.6678 2.17391 11.3285 2.00488 11.9999 2.00488C12.6714 2.00488 13.3321 2.17391 13.921 2.49638C14.5099 2.81886 15.0082 3.2844 15.3699 3.8501C16.0281 3.70212 16.713 3.72301 17.3609 3.91081C18.0089 4.09862 18.5988 4.44724 19.0758 4.92425C19.5528 5.40126 19.9014 5.99117 20.0892 6.6391C20.277 7.28703 20.2979 7.97193 20.1499 8.6301C20.7156 8.99181 21.1812 9.4901 21.5037 10.079C21.8261 10.668 21.9952 11.3286 21.9952 12.0001C21.9952 12.6715 21.8261 13.3322 21.5037 13.9211C21.1812 14.5101 20.7156 15.0084 20.1499 15.3701C20.2973 16.0273 20.2763 16.711 20.089 17.3579C19.9016 18.0048 19.554 18.5939 19.0782 19.0706C18.6025 19.5473 18.0141 19.8962 17.3676 20.0849C16.7211 20.2736 16.0374 20.2961 15.3799 20.1501C15.0187 20.718 14.52 21.1855 13.9301 21.5094C13.3401 21.8333 12.678 22.0032 12.0049 22.0032C11.3319 22.0032 10.6698 21.8333 10.0798 21.5094C9.48987 21.1855 8.99119 20.718 8.62995 20.1501C7.97278 20.2974 7.28905 20.2765 6.64216 20.0891C5.99526 19.9018 5.40614 19.5541 4.92942 19.0784C4.4527 18.6027 4.10381 18.0143 3.91511 17.3678C3.7264 16.7213 3.70399 16.0376 3.84995 15.3801C3.27991 15.0193 2.81036 14.5203 2.485 13.9293C2.15963 13.3384 1.98901 12.6747 1.98901 12.0001C1.98901 11.3255 2.15963 10.6618 2.485 10.0709C2.81036 9.47992 3.27991 8.98085 3.84995 8.6201Z"
        fill="#006FFF"
      />
      <path
        d="M9 12L11 14L15 10"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function OutcomeIcon({ type }: { type: string }) {
  if (type === "scripts") return <ScriptsIcon />;
  if (type === "chasing") return <ChasingIcon />;
  if (type === "guesswork") return <GuessworkIcon />;
  if (type === "done") return <DoneIcon />;
  return null;
}

const OutcomeChevronDivider = () => (
  <div className="flex flex-col items-center justify-center gap-px self-stretch">
    <div className="w-px flex-1 bg-[#E5E7EB]" />
    <div className="flex items-center gap-2 overflow-hidden rounded-md bg-white p-1 shadow-[0_0_0_1px_rgba(0,0,0,0.08),0_1px_1px_-0.5px_rgba(51,51,51,0.05),0_3px_3px_-1.5px_rgba(51,51,51,0.05),0_6px_6px_-3px_rgba(51,51,51,0.05),0_12px_12px_-6px_rgba(51,51,51,0.05),0_24px_24px_-12px_rgba(51,51,51,0.05)]">
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6 12L10 8L6 4"
          stroke="#006FFF"
          strokeWidth="1.33333"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
    <div className="w-px flex-1 bg-[#E5E7EB]" />
  </div>
);

function SolutionOutcomesSection() {
  return (
    <section id="solution-outcomes" className="px-global relative z-0">
      <div className="max-w-global mx-auto border-x border-[#E5E7EB]">
        <div className="flex flex-col items-stretch divide-y divide-[#E5E7EB] md:flex-row md:divide-y-0">
          {outcomes.map((outcome, index) => (
            <React.Fragment key={index}>
              <div className="flex flex-1 items-stretch">
                <div className="flex flex-1 flex-col items-center justify-center gap-6 px-3 py-8 md:px-12">
                  <div className="flex items-center rounded-[10px] bg-white px-3 py-2 shadow-[0_0_0_1px_rgba(0,0,0,0.08),0_1px_1px_-0.5px_rgba(51,51,51,0.05),0_3px_3px_-1.5px_rgba(51,51,51,0.05),0_6px_6px_-3px_rgba(51,51,51,0.05),0_12px_12px_-6px_rgba(51,51,51,0.05),0_24px_24px_-12px_rgba(51,51,51,0.05)]">
                    <OutcomeIcon type={outcome.icon} />
                  </div>
                  <span className="text-center text-sm leading-[1.625] tracking-[-0.01em] text-[#202020] md:text-base">
                    {outcome.text}
                  </span>
                </div>
              </div>
              {index < outcomes.length - 1 && (
                <div className="hidden md:flex">
                  <OutcomeChevronDivider />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SolutionOutcomesSection;
