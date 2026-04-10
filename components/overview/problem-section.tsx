import React from "react";
import Image from "next/image";
import Badge from "@/components/_ui/badge";
import { IconStepsRow } from "@/components/_ui/icon-steps-row";

const problems = [
  {
    label: "Responded to too slowly",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.99194 16.3421C3.13897 16.713 3.17171 17.1194 3.08594 17.5091L2.02094 20.7991C1.98662 20.9659 1.99549 21.1388 2.04671 21.3012C2.09793 21.4637 2.1898 21.6103 2.3136 21.7273C2.43741 21.8443 2.58904 21.9278 2.75413 21.9697C2.91923 22.0117 3.0923 22.0108 3.25694 21.9671L6.66994 20.9691C7.03765 20.8961 7.41846 20.928 7.76894 21.0611C9.90432 22.0583 12.3233 22.2693 14.5991 21.6568C16.8749 21.0443 18.8612 19.6477 20.2076 17.7134C21.5541 15.7791 22.1741 13.4315 21.9582 11.0846C21.7424 8.73775 20.7046 6.54253 19.028 4.88626C17.3514 3.22998 15.1436 2.2191 12.7943 2.03196C10.445 1.84481 8.10507 2.49344 6.18738 3.8634C4.26968 5.23336 2.89747 7.2366 2.31283 9.5197C1.72819 11.8028 1.9687 14.219 2.99194 16.3421Z"
          stroke="#006FFF"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10 15L7 12L10 9"
          stroke="#006FFF"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7 12H15C15.5304 12 16.0391 12.2107 16.4142 12.5858C16.7893 12.9609 17 13.4696 17 14V15"
          stroke="#006FFF"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: "Partially qualified",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20 13C20 18 16.5 20.5 12.34 21.95C12.1222 22.0238 11.8855 22.0202 11.67 21.94C7.5 20.5 4 18 4 13V5.99996C4 5.73474 4.10536 5.48039 4.29289 5.29285C4.48043 5.10532 4.73478 4.99996 5 4.99996C7 4.99996 9.5 3.79996 11.24 2.27996C11.4519 2.09896 11.7214 1.99951 12 1.99951C12.2786 1.99951 12.5481 2.09896 12.76 2.27996C14.51 3.80996 17 4.99996 19 4.99996C19.2652 4.99996 19.5196 5.10532 19.7071 5.29285C19.8946 5.48039 20 5.73474 20 5.99996V13Z"
          stroke="#006FFF"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9 12L11 14L15 10"
          stroke="#006FFF"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: "Followed up inconsistently",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 2C13.9401 1.99965 15.8385 2.56368 17.4637 3.62336C19.0889 4.68303 20.3707 6.19259 21.153 7.96804C21.9352 9.74349 22.1841 11.7082 21.8693 13.6226C21.5545 15.537 20.6896 17.3185 19.38 18.75"
          stroke="#006FFF"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 8V16"
          stroke="#006FFF"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16 12H8"
          stroke="#006FFF"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M2.5 8.875C2.18135 9.84366 2.01273 10.8554 2 11.875"
          stroke="#006FFF"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M2.83008 16C3.39158 17.2918 4.21966 18.4505 5.26008 19.4"
          stroke="#006FFF"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4.63599 5.23505C4.91503 4.93128 5.2126 4.64507 5.52699 4.37805"
          stroke="#006FFF"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8.64404 21.42C11.1377 22.3084 13.8819 22.1718 16.275 21.04"
          stroke="#006FFF"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: "Routed without context",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16.466 7.5C15.643 4.237 13.952 2 12 2C9.239 2 7 6.477 7 12C7 17.523 9.239 22 12 22C12.342 22 12.677 21.931 13 21.8"
          stroke="#006FFF"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15.1941 13.707L19.0081 15.567L17.1481 19.381"
          stroke="#006FFF"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M19 15.57C17.196 16.455 14.726 17 12 17C6.477 17 2 14.761 2 12C2 9.239 6.477 7 12 7C16.838 7 20.873 8.718 21.8 11"
          stroke="#006FFF"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

function OverviewProblemSection() {
  return (
    <section id="overview-problem" className="relative z-0">
      <div className="px-global">
        <div className="max-w-global mx-auto  border-x border-[#E5E7EB] md:space-y-[64px]">
          <div className="flex flex-col items-center">
            <div className="md:pt-section-md flex w-full flex-col items-center gap-3 px-3 py-4  md:gap-4 md:px-6">
              <div className="flex flex-col items-center gap-4">
                <Badge text="Seamless AI tools that convert" />
                <h2 data-reveal="words" className="max-w-[11em] text-center">
                Get more qualified appointments.{" "} <br />
                  <span className="text-[#006FFF]">Grow your revenue.</span>
                </h2>
              </div>
            </div> 
          </div>

          <Image
            src="/assets/home/dashboard/dash-mobile.png"
            alt="Structurely dashboard mobile view with lead metrics and activity overview"
            width={342}
            height={217.74}
            className=" w-full  p-4 h-auto  border-t border-[#E5E7EB] md:hidden"
            
          />
          <Image
            src="/assets/home/dashboard/dashboard.png"
            alt="Structurely dashboard with lead metrics, activity chart, and pipeline overview"
            width={2256}
            height={960}
            className="hidden h-auto w-full max-w-5xl border-t border-[#E5E7EB] md:block"
            sizes="(max-width: 768px) 100vw, min(1024px, 100vw)"
          />

        </div>
      </div>
    </section>
  );
}

export default OverviewProblemSection;
