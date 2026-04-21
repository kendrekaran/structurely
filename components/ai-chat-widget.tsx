"use client";

import { useState } from "react";
import Button from "@/components/_ui/button";
import { useAiChatWidgetStore } from "@/stores/ai-chat-widget-store";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { LiveDemoPhoneRow } from "@/components/home/live-demo-phone-row";
import { AiCallForm } from "@/components/_common/ai-call-form";

export default function AiChatWidget() {
  const [phone, setPhone] = useState("");
  const pathname = usePathname();
  const isOpen = useAiChatWidgetStore((state) => state.isOpen);
  const isHomeLiveDemoInView = useAiChatWidgetStore(
    (state) => state.isHomeLiveDemoInView,
  );
  const closeWidget = useAiChatWidgetStore((state) => state.closeWidget);

  const isNewsPage = pathname === "/news" || pathname.startsWith("/news/");
  const visible = isNewsPage
    ? false
    : pathname === "/"
      ? isOpen && !isHomeLiveDemoInView
      : isOpen;

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          key="ai-chat-widget"
          initial={{ opacity: 0, filter: "blur(6px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          exit={{ opacity: 0, filter: "blur(6px)" }}
          transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
          className="fixed right-0 bottom-0 z-40 w-[403px] max-w-full px-4.5 py-2.5"
        >
          <div className="rounded-[20px] border border-[#E5E7EB] bg-[#fafafa] p-3">
            <div className="flex flex-col gap-4 rounded-[8px] bg-white p-3 shadow-[0_0_0_1px_rgba(0,0,0,0.08),0_1px_1px_-0.5px_rgba(51,51,51,0.05),0_3px_3px_-1.5px_rgba(51,51,51,0.05),0_6px_6px_-3px_rgba(51,51,51,0.05),0_12px_12px_-6px_rgba(51,51,51,0.05),0_24px_24px_-12px_rgba(51,51,51,0.05)]">
              <div className="flex items-center justify-between">
                <div className="rounded-[10px] bg-white p-2 shadow-[0_0_0_1px_rgba(0,0,0,0.08),0_1px_1px_-0.5px_rgba(51,51,51,0.05),0_3px_3px_-1.5px_rgba(51,51,51,0.05),0_6px_6px_-3px_rgba(51,51,51,0.05),0_12px_12px_-6px_rgba(51,51,51,0.05),0_24px_24px_-12px_rgba(51,51,51,0.05)]">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.0004 2.00044V6.00044M22.0004 4.00044H18.0004M11.0174 2.81444C11.0603 2.58504 11.182 2.37786 11.3615 2.22876C11.5411 2.07966 11.7671 1.99805 12.0004 1.99805C12.2338 1.99805 12.4598 2.07966 12.6393 2.22876C12.8189 2.37786 12.9406 2.58504 12.9834 2.81444L14.0344 8.37244C14.1091 8.76759 14.3011 9.13106 14.5855 9.41541C14.8698 9.69977 15.2333 9.8918 15.6284 9.96644L21.1864 11.0174C21.4158 11.0603 21.623 11.182 21.7721 11.3615C21.9212 11.5411 22.0028 11.7671 22.0028 12.0004C22.0028 12.2338 21.9212 12.4598 21.7721 12.6393C21.623 12.8189 21.4158 12.9406 21.1864 12.9834L15.6284 14.0344C15.2333 14.1091 14.8698 14.3011 14.5855 14.5855C14.3011 14.8698 14.1091 15.2333 14.0344 15.6284L12.9834 21.1864C12.9406 21.4158 12.8189 21.623 12.6393 21.7721C12.4598 21.9212 12.2338 22.0028 12.0004 22.0028C11.7671 22.0028 11.5411 21.9212 11.3615 21.7721C11.182 21.623 11.0603 21.4158 11.0174 21.1864L9.96644 15.6284C9.8918 15.2333 9.69977 14.8698 9.41541 14.5855C9.13106 14.3011 8.76759 14.1091 8.37244 14.0344L2.81444 12.9834C2.58504 12.9406 2.37786 12.8189 2.22876 12.6393C2.07966 12.4598 1.99805 12.2338 1.99805 12.0004C1.99805 11.7671 2.07966 11.5411 2.22876 11.3615C2.37786 11.182 2.58504 11.0603 2.81444 11.0174L8.37244 9.96644C8.76759 9.8918 9.13106 9.69977 9.41541 9.41541C9.69977 9.13106 9.8918 8.76759 9.96644 8.37244L11.0174 2.81444ZM6.00044 20.0004C6.00044 21.105 5.10501 22.0004 4.00044 22.0004C2.89587 22.0004 2.00044 21.105 2.00044 20.0004C2.00044 18.8959 2.89587 18.0004 4.00044 18.0004C5.10501 18.0004 6.00044 18.8959 6.00044 20.0004Z"
                      stroke="#006FFF"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <button
                  onClick={closeWidget}
                  className="cursor-pointer opacity-40 transition-opacity hover:opacity-70"
                  aria-label="Close"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15 5L5 15M5 5L15 15"
                      stroke="#202020"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex flex-col gap-1">
                  <p className="text-sm font-medium tracking-[-0.01em] text-[#202020]">
                    TRY OUR AI NOW
                  </p>
                  <p className="text-sm leading-6 font-medium tracking-[-0.01em] text-[#646464]">
                    Automate your sales with AI calling, texting, appointment
                    setting, &amp; live phone transfers.
                  </p>
                </div>

                <LiveDemoPhoneRow />
              </div>
              <AiCallForm />
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
