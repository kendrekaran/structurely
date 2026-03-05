"use client";

import { useState } from "react";

const features = [
  {
    icon: "conversation",
    text: "It has structured conversations.",
    content:
      "Structurely engages every lead with structured, context-aware conversations — no scripts, no guesswork, just intelligent dialogue that drives real responses.",
  },
  {
    icon: "qualify",
    text: "It qualifies with context.",
    content:
      "Every lead is qualified based on real signals — timeline, intent, budget — so your team always knows exactly who is worth pursuing and why.",
  },
  {
    icon: "followup",
    text: "It follows up persistently.",
    content:
      "Structurely follows up across days, weeks, and months — automatically — so no lead goes cold and no opportunity slips through the cracks.",
  },
  {
    icon: "route",
    text: "It routes high-intent opportunities to the right person — with intelligence.",
    content:
      "When a lead is ready to move, Structurely routes them to the right team member instantly — with full conversation context attached.",
  },
];

function ConversationIcon({ color = "#646464" }: { color?: string }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22 17C22 17.5304 21.7893 18.0391 21.4142 18.4142C21.0391 18.7893 20.5304 19 20 19H6.82799C6.2976 19.0001 5.78898 19.2109 5.41399 19.586L3.21199 21.788C3.11476 21.8925 2.9879 21.9648 2.84843 21.9951C2.70897 22.0255 2.56355 22.0125 2.43168 21.9579C2.2998 21.9032 2.18778 21.8096 2.11063 21.6895C2.03347 21.5694 1.99487 21.4286 1.99999 21.286V5C1.99999 4.46957 2.21071 3.96086 2.58578 3.58579C2.96085 3.21071 3.46956 3 3.99999 3H20C20.5304 3 21.0391 3.21071 21.4142 3.58579C21.7893 3.96086 22 4.46957 22 5V17Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 11L11 13L15 9"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function QualifyIcon({ color = "#646464" }: { color?: string }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22 17C22 17.5304 21.7893 18.0391 21.4142 18.4142C21.0391 18.7893 20.5304 19 20 19H6.828C6.29761 19.0001 5.78899 19.2109 5.414 19.586L3.212 21.788C3.1127 21.8873 2.9862 21.9549 2.84849 21.9823C2.71077 22.0097 2.56803 21.9956 2.43831 21.9419C2.30858 21.8881 2.1977 21.7971 2.11969 21.6804C2.04167 21.5637 2.00002 21.4264 2 21.286V5C2 4.46957 2.21071 3.96086 2.58579 3.58579C2.96086 3.21071 3.46957 3 4 3H20C20.5304 3 21.0391 3.21071 21.4142 3.58579C21.7893 3.96086 22 4.46957 22 5V17Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 11H17"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 15H13"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 7H15"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function FollowUpIcon({ color = "#646464" }: { color?: string }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21 17V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V17"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21 7V5C21 4.46957 20.7893 3.96086 20.4142 3.58579C20.0391 3.21071 19.5304 3 19 3H5C4.46957 3 3.96086 3.21071 3.58579 3.58579C3.21071 3.96086 3 4.46957 3 5V7"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.944 12.33C19.0187 12.1164 19.0187 11.8837 18.944 11.67C18.381 10.2905 17.4198 9.10985 16.183 8.27879C14.9463 7.44774 13.49 7.00391 12 7.00391C10.51 7.00391 9.05369 7.44774 7.81693 8.27879C6.58018 9.10985 5.619 10.2905 5.05599 11.67C4.9813 11.8837 4.9813 12.1164 5.05599 12.33C5.619 13.7096 6.58018 14.8902 7.81693 15.7213C9.05369 16.5523 10.51 16.9962 12 16.9962C13.49 16.9962 14.9463 16.5523 16.183 15.7213C17.4198 14.8902 18.381 13.7096 18.944 12.33Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function RouteIcon({ color = "#646464" }: { color?: string }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 18V5"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15 13C14.1348 12.7471 13.3748 12.2206 12.834 11.4995C12.2932 10.7784 12.0005 9.90141 12 9C11.9995 9.90141 11.7068 10.7784 11.166 11.4995C10.6252 12.2206 9.8652 12.7471 9 13"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.598 6.49989C17.8281 6.10138 17.9635 5.65527 17.9936 5.19608C18.0237 4.73689 17.9478 4.27693 17.7717 3.85178C17.5956 3.42663 17.324 3.04769 16.9781 2.74427C16.6321 2.44085 16.221 2.22108 15.7765 2.10198C15.332 1.98288 14.866 1.96763 14.4147 2.0574C13.9634 2.14718 13.5387 2.33959 13.1737 2.61973C12.8086 2.89988 12.5129 3.26025 12.3093 3.67298C12.1058 4.0857 12 4.53971 12 4.99989C12 4.53971 11.8942 4.0857 11.6907 3.67298C11.4871 3.26025 11.1914 2.89988 10.8263 2.61973C10.4613 2.33959 10.0366 2.14718 9.5853 2.0574C9.13396 1.96763 8.66803 1.98288 8.22353 2.10198C7.77904 2.22108 7.3679 2.44085 7.02193 2.74427C6.67596 3.04769 6.40442 3.42663 6.22833 3.85178C6.05224 4.27693 5.97632 4.73689 6.00643 5.19608C6.03655 5.65527 6.17189 6.10138 6.402 6.49989"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.997 5.125C18.5848 5.27614 19.1305 5.55905 19.5928 5.95231C20.0551 6.34557 20.4218 6.83887 20.6652 7.39485C20.9086 7.95082 21.0223 8.55489 20.9976 9.16131C20.973 9.76773 20.8107 10.3606 20.523 10.895"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18 17.9999C18.8805 17.9998 19.7364 17.7093 20.4349 17.1733C21.1335 16.6372 21.6356 15.8857 21.8635 15.0352C22.0914 14.1847 22.0323 13.2827 21.6954 12.4693C21.3585 11.6558 20.7625 10.9762 20 10.5359"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19.967 17.4829C20.0371 18.0251 19.9953 18.576 19.8441 19.1014C19.693 19.6269 19.4357 20.1157 19.0882 20.5379C18.7407 20.96 18.3104 21.3064 17.8238 21.5557C17.3372 21.805 16.8046 21.9518 16.259 21.9872C15.7134 22.0227 15.1664 21.9458 14.6516 21.7615C14.1369 21.5772 13.6654 21.2893 13.2662 20.9157C12.8671 20.542 12.5488 20.0905 12.331 19.589C12.1132 19.0875 12.0006 18.5467 12 17.9999C11.9994 18.5467 11.8867 19.0875 11.669 19.589C11.4512 20.0905 11.1329 20.542 10.7338 20.9157C10.3346 21.2893 9.86313 21.5772 9.34838 21.7615C8.83364 21.9458 8.28657 22.0227 7.74097 21.9872C7.19537 21.9518 6.66283 21.805 6.17622 21.5557C5.68961 21.3064 5.25927 20.96 4.91178 20.5379C4.56429 20.1157 4.30703 19.6269 4.15589 19.1014C4.00474 18.576 3.96291 18.0251 4.033 17.4829"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.00001 17.9999C5.1195 17.9998 4.26361 17.7093 3.56507 17.1733C2.86653 16.6372 2.36438 15.8857 2.13648 15.0352C1.90859 14.1847 1.96769 13.2827 2.30462 12.4693C2.64156 11.6558 3.23749 10.9762 4.00001 10.5359"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.00299 5.125C5.41519 5.27614 4.86949 5.55905 4.40722 5.95231C3.94495 6.34557 3.57823 6.83887 3.33483 7.39485C3.09144 7.95082 2.97775 8.55489 3.00238 9.16131C3.02701 9.76773 3.18931 10.3606 3.47699 10.895"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function FeatureIcon({ type, color }: { type: string; color?: string }) {
  if (type === "conversation") return <ConversationIcon color={color} />;
  if (type === "qualify") return <QualifyIcon color={color} />;
  if (type === "followup") return <FollowUpIcon color={color} />;
  if (type === "route") return <RouteIcon color={color} />;
  return null;
}

function SolutionSection() {
  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <section id="solution" className="relative z-0">
      <div className="px-global">
        <div className="max-w-global mx-auto border-x border-[#E5E7EB]">
          <div className="flex flex-col md:flex-row">
            <div className="flex flex-col border-b border-[#E5E7EB] md:w-1/2 md:border-r md:border-b-0">
              {features.map((feature, index) => {
                const isActive = index === activeIndex;
                return (
                  <div
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`relative flex cursor-pointer items-center gap-4 border-b border-[#E5E7EB] py-8 pl-8 transition-colors duration-200 last:border-b-0 ${isActive ? "bg-white" : "hover:bg-gray-50"}`}
                  >
                    <div className="shrink-0">
                      <FeatureIcon
                        type={feature.icon}
                        color={isActive ? "#006FFF" : "#646464"}
                      />
                    </div>
                    <span
                      className="text-base leading-[1.625] tracking-[-0.01em] transition-colors duration-200"
                      style={{ color: isActive ? "#202020" : "#646464" }}
                    >
                      {feature.text}
                    </span>
                    {isActive && (
                      <div className="absolute right-0 bottom-0 left-0 h-[2px] bg-gradient-to-r from-[#006FFF] to-transparent" />
                    )}
                  </div>
                );
              })}
            </div>

            <div className="py-section-md flex items-center justify-center bg-white px-10 md:w-1/2">
              <p className="text-center text-base leading-[1.75] tracking-[-0.01em] transition-all duration-300">
                {features[activeIndex].content}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SolutionSection;
