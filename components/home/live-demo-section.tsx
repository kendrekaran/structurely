import { LiveDemoPhoneRow } from "@/components/home/live-demo-phone-row";
import Link from "next/link";
function LiveDemoSection() {
  return (
    <section id="live-demo" className="relative z-30">
      <div className="px-global">
        <div className="max-w-global relative mx-auto flex justify-center border-x border-[#E5E7EB]">
          <div className="relative z-10 w-full max-w-[22em]">
            <div className="flex items-center justify-center gap-2 px-4">
              <div className="flex flex-col items-center justify-center gap-2 px-4">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M23.3338 2.33287V6.99954M25.6672 4.6662H21.0005M12.8537 3.28254C12.9037 3.01491 13.0457 2.77319 13.2551 2.59924C13.4646 2.4253 13.7283 2.33008 14.0005 2.33008C14.2728 2.33008 14.5365 2.4253 14.7459 2.59924C14.9553 2.77319 15.0974 3.01491 15.1473 3.28254L16.3735 9.76687C16.4606 10.2279 16.6846 10.6519 17.0164 10.9837C17.3481 11.3154 17.7722 11.5395 18.2332 11.6265L24.7175 12.8527C24.9851 12.9027 25.2269 13.0447 25.4008 13.2542C25.5748 13.4636 25.67 13.7273 25.67 13.9995C25.67 14.2718 25.5748 14.5355 25.4008 14.7449C25.2269 14.9544 24.9851 15.0964 24.7175 15.1464L18.2332 16.3725C17.7722 16.4596 17.3481 16.6837 17.0164 17.0154C16.6846 17.3472 16.4606 17.7712 16.3735 18.2322L15.1473 24.7165C15.0974 24.9842 14.9553 25.2259 14.7459 25.3998C14.5365 25.5738 14.2728 25.669 14.0005 25.669C13.7283 25.669 13.4646 25.5738 13.2551 25.3998C13.0457 25.2259 12.9037 24.9842 12.8537 24.7165L11.6275 18.2322C11.5404 17.7712 11.3164 17.3472 10.9846 17.0154C10.6529 16.6837 10.2289 16.4596 9.76785 16.3725L3.28351 15.1464C3.01589 15.0964 2.77417 14.9544 2.60022 14.7449C2.42627 14.5355 2.33105 14.2718 2.33105 13.9995C2.33105 13.7273 2.42627 13.4636 2.60022 13.2542C2.77417 13.0447 3.01589 12.9027 3.28351 12.8527L9.76785 11.6265C10.2289 11.5395 10.6529 11.3154 10.9846 10.9837C11.3164 10.6519 11.5404 10.2279 11.6275 9.76687L12.8537 3.28254ZM7.00051 23.3329C7.00051 24.6215 5.95585 25.6662 4.66718 25.6662C3.37852 25.6662 2.33385 24.6215 2.33385 23.3329C2.33385 22.0442 3.37852 20.9995 4.66718 20.9995C5.95585 20.9995 7.00051 22.0442 7.00051 23.3329Z"
                    stroke="#006FFF"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <p className="text-center text-[14px] leading-[24px] font-semibold tracking-[-0.01em]">
                  <span className="text-[#202020]">GET </span>
                  <span className="text-[#646464]">A LIVE DEMO</span>
                  <span className="text-[#202020]"> CALL</span>
                </p>
              </div>
            </div>

            <LiveDemoPhoneRow />
            <p className="mx-auto flex max-w-[19em] items-center text-center text-[14px] leading-[1.4285714285714286] font-normal text-[#646464] italic">
              Enter your number and experience Structurely in action —
              instantly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LiveDemoSection;
