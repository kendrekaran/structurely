import Badge from "@/components/_ui/badge";

const problemItems = [
  {
    label: "Leads wait.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 2V6"
          stroke="#006FFF"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16.2002 7.80002L19.1002 4.90002"
          stroke="#006FFF"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18 12H22"
          stroke="#006FFF"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16.2002 16.2L19.1002 19.1"
          stroke="#006FFF"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 18V22"
          stroke="#006FFF"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4.90039 19.1L7.80039 16.2"
          stroke="#006FFF"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M2 12H6"
          stroke="#006FFF"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4.90039 4.90002L7.80039 7.80002"
          stroke="#006FFF"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: "Follow-up is inconsistent.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6 22C5.46957 22 4.96086 21.7893 4.58579 21.4142C4.21071 21.0391 4 20.5304 4 20V4C4 3.46957 4.21071 2.96086 4.58579 2.58579C4.96086 2.21072 5.46957 2 6 2H14C14.3166 1.99949 14.6301 2.06161 14.9225 2.18277C15.215 2.30394 15.4806 2.48176 15.704 2.706L19.292 6.294C19.5168 6.51751 19.6952 6.78335 19.8167 7.07616C19.9382 7.36898 20.0005 7.68297 20 8V20C20 20.5304 19.7893 21.0391 19.4142 21.4142C19.0391 21.7893 18.5304 22 18 22H6Z"
          stroke="#006FFF"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14 2V7C14 7.26522 14.1054 7.51957 14.2929 7.70711C14.4804 7.89464 14.7348 8 15 8H20"
          stroke="#006FFF"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8 12H16"
          stroke="#006FFF"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10 11V13"
          stroke="#006FFF"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8 17H16"
          stroke="#006FFF"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14 16V18"
          stroke="#006FFF"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: "Qualification varies.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20 20C20.5304 20 21.0391 19.7893 21.4142 19.4142C21.7893 19.0391 22 18.5304 22 18V8C22 7.46957 21.7893 6.96086 21.4142 6.58579C21.0391 6.21071 20.5304 6 20 6H12.1C11.7655 6.00328 11.4355 5.92261 11.1403 5.76538C10.8451 5.60815 10.594 5.37938 10.41 5.1L9.6 3.9C9.41789 3.62347 9.16997 3.39648 8.8785 3.2394C8.58702 3.08231 8.26111 3.00005 7.93 3H4C3.46957 3 2.96086 3.21071 2.58579 3.58579C2.21071 3.96086 2 4.46957 2 5V18C2 18.5304 2.21071 19.0391 2.58579 19.4142C2.96086 19.7893 3.46957 20 4 20H20Z"
          stroke="#006FFF"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9 13L11 15L15 11"
          stroke="#006FFF"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: "Opportunities are missed.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
          stroke="#006FFF"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M22 12H18"
          stroke="#006FFF"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6 12H2"
          stroke="#006FFF"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 6V2"
          stroke="#006FFF"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 22V18"
          stroke="#006FFF"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

const ChevronRight = () => (
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
);

function AboutProblemSection() {
  return (
    <section id="about-problem" className="relative z-0">
      <div className="px-global ">
        <div className="max-w-global mx-auto flex flex-col items-center gap-4 border-x border-b border-[#E5E7EB] py-section-md text-center">
          <div className="flex flex-col items-center gap-4">
            <Badge text="The Problem" />
            <h2 className="max-w-[11.08em] text-center">
              <span className="text-[#006FFF]">The Problem</span> <br/> We Exist to
              Solve
            </h2>
          </div>
          <p className="max-w-[27.375em] text-center">
            Many organizations generate meaningful inbound demand.
          </p>
        </div>
      </div>

      <div className="px-global ">
        <div className="max-w-global mx-auto flex items-center justify-center border-x border-b border-[#E5E7EB] py-6">
          <p className="text-center text-[14px] leading-[20px] tracking-[-0.01em]">
            But execution breaks down between inquiry and action.
          </p>
        </div>
      </div>

      <div className="px-global ">
        <div className="max-w-global mx-auto flex flex-col items-stretch divide-y divide-[#E5E7EB] border-x border-b border-[#E5E7EB] md:flex-row md:divide-x md:divide-y-0">
          {problemItems.map((item, index) => (
            <div
              key={item.label}
              className="relative flex flex-1 items-center gap-4 px-8 py-8 md:flex-col md:justify-center md:gap-6 md:px-12 md:py-8"
            >
              <div className="flex flex-shrink-0 items-center gap-2 rounded-[10px] bg-white p-3 shadow-[0_0_0_1px_rgba(0,0,0,0.08),0_1px_1px_-0.5px_rgba(51,51,51,0.05),0_3px_3px_-1.5px_rgba(51,51,51,0.05),0_6px_6px_-3px_rgba(51,51,51,0.05),0_12px_12px_-6px_rgba(51,51,51,0.05),0_24px_24px_-12px_rgba(51,51,51,0.05)]">
                {item.icon}
              </div>
              <p className="text-center text-[14px] leading-[20px] tracking-[-0.006em] md:text-center">
                {item.label}
              </p>
              {index < problemItems.length - 1 && (
                <div className="absolute top-1/2 right-0 z-10 hidden translate-x-1/2 -translate-y-1/2 flex-col items-center gap-px md:flex">
                  <div className="flex items-center justify-center rounded-md bg-white p-1 shadow-[0_0_0_1px_rgba(0,0,0,0.08),0_1px_1px_-0.5px_rgba(51,51,51,0.05),0_3px_3px_-1.5px_rgba(51,51,51,0.05),0_6px_6px_-3px_rgba(51,51,51,0.05),0_12px_12px_-6px_rgba(51,51,51,0.05),0_24px_24px_-12px_rgba(51,51,51,0.05)]">
                    <ChevronRight />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="px-global">
        <div className="max-w-global border-b  mx-auto flex items-center justify-center border-x border-[#E5E7EB] py-[24px] ">
          <p className="text-center font-[cursive] text-[16px] leading-[24px] font-bold tracking-[-0.02em] italic">
            <span className="text-[#006FFF]">Structurely</span> was built to
            address that gap.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutProblemSection;
