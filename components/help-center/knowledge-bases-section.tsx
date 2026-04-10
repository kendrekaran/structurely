"use client";

import Link from "next/link";

const feedbackOptions = [
  { emoji: "😞", label: "Disappointed" },
  { emoji: "😐", label: "Neutral" },
  { emoji: "😃", label: "Happy" },
];

export default function KnowledgeBasesSection() {
  return (
    <section id="knowledge-bases" className="relative z-0">
      <div className="px-global">
        <div className="max-w-global mx-auto border-x border-b border-[#E5E7EB]">
          <div className="flex items-center gap-1 border-b border-[#E5E7EB] px-6 py-3">
            <Link
              href="/help-center/call-ai"
              className="flex flex-1 items-center gap-1 text-[#646464]"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.00016 12.6663L3.3335 7.99967L8.00016 3.33301"
                  stroke="#646464"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12.6668 8H3.3335"
                  stroke="#646464"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-[14px] leading-[20px] tracking-[-0.084px]">
                Call AI
              </span>
            </Link>
            <div className="flex items-center justify-center rounded-lg bg-white px-4 py-2 shadow-[0_0_0_1px_rgba(0,0,0,0.08),0_1px_1px_-0.5px_rgba(51,51,51,0.05),0_3px_3px_-1.5px_rgba(51,51,51,0.05),0_6px_6px_-3px_rgba(51,51,51,0.05),0_12px_12px_-6px_rgba(51,51,51,0.05),0_24px_24px_-12px_rgba(51,51,51,0.05)]">
              <span className="text-[14px] leading-[20px] tracking-[-0.084px] text-[#646464]">
                Call AI
              </span>
            </div>
          </div>

          <div className="flex flex-col items-center px-3 py-8 pb-[24px]">
            <div className="flex w-full max-w-[744px] flex-col items-center gap-[32px] ">
              <div className="flex w-full flex-col items-start px-3 md:px-0 gap-4">
                <h2 data-reveal="words" className="text-heading max-w-[16em] text-[36px] leading-[44px] font-medium tracking-[-0.03em]">
                  5. Knowledge bases
                </h2>
                <p className="text-heading text-[16px]  leading-[26px]  tracking-[-0.01em]">
                  Create a shared basis of information that ALL of your Call AI
                  (and Text AI) Agents can reference internally! 🧠
                </p>
              </div>

              <div className="flex w-full justify-center">
                <div className="h-[360px] w-full max-w-[564px] rounded-xl bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.08),0_1px_1px_-0.5px_rgba(51,51,51,0.05),0_3px_3px_-1.5px_rgba(51,51,51,0.05),0_6px_6px_-3px_rgba(51,51,51,0.05),0_12px_12px_-6px_rgba(51,51,51,0.05),0_24px_24px_-12px_rgba(51,51,51,0.05)]" />
              </div>

              <div className="flex w-full flex-col gap-6 ">
                <h2 data-reveal="words" className="text-heading max-w-[16em] text-[28px] md:text-[36px] leading-[36px] md:leading-[44px] font-medium tracking-[-0.02em] md:tracking-[-0.03em]">
                  Do you have a pre-existing FAQ or reference materials?
                </h2>
                <p className="text-heading">
                  If so, that file can be uploaded using our uploader tool
                  (which supports DOCX + PDF files) - this should pop up when
                  you select the &ldquo;Create Knowledge Base&rdquo; button 👇
                </p>
                <p>
                  Once your uploaded file has been processed, you will have an
                  opportunity to review the information that has been extracted.
                </p>
                <p>
                  This is strictly a preview - any necessary edits can be made
                  once the Knowledge Base is officially created.{" "}
                    <span className="text-heading">
                      If you feel that there are more relevant Q+A than were
                      identified by the upload tool, you can choose to
                      &ldquo;Re-process&rdquo; the document to extract
                      additional content.
                    </span>
                  👇
                </p>
              </div>

              <div className="flex w-full justify-center my-[16px]">
                <div className="h-[360px] w-full max-w-[564px] rounded-xl bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.08),0_1px_1px_-0.5px_rgba(51,51,51,0.05),0_3px_3px_-1.5px_rgba(51,51,51,0.05),0_6px_6px_-3px_rgba(51,51,51,0.05),0_12px_12px_-6px_rgba(51,51,51,0.05),0_24px_24px_-12px_rgba(51,51,51,0.05)]" />
              </div>

              <div className="flex w-full flex-col gap-6">
                <p>
                  With the rise of technology, artificial intelligence (AI) has
                  revolutionized how businesses interact with leads, making the
                  process more efficient and effective. Structurely&apos;s Call
                  AI and Text AI features are leading this innovation, helping
                  sales teams improve response rates and follow-up calls in ways
                  that feel seamless and natural.
                </p>
                <p>
                  The secret behind the success of Structurely&apos;s AI
                  features lies in its unique Text + Call + AI approach—engaging
                  the lead via text message first and then following up with a
                  call from the same phone number once the lead is ready. This
                  process ensures that the outreach feels more human, less
                  intrusive, and more in line with how people prefer to
                  communicate today.
                </p>
              </div>

              <div className="w-full border-t border-[#E5E7EB] my-[16px]" />

              <div className="flex w-full flex-col gap-6">
                <h2 data-reveal="words" className="text-heading max-w-[22em] text-[36px] leading-[44px] font-medium tracking-[-0.03em]">
                  Now that you&apos;ve established a knowledge base, add it to
                  the applicable Call AI agent(s) here!
                </h2>
                <p className="text-heading">
                  Head to the &ldquo;Knowledge Bases&rdquo; section of the
                  appropriate Call Agent and choose the specific Knowledge Base
                  by name from the dropdown shown below. 👇
                </p>
              </div>

              <div className="w-full border-t border-[#E5E7EB] my-[16px]" />

              <div className="flex w-full flex-col gap-6">
                <p>
                  With the rise of technology, artificial intelligence (AI) has
                  revolutionized how businesses interact with leads, making the
                  process more efficient and effective. Structurely&apos;s Call
                  AI and Text AI features are leading this innovation, helping
                  sales teams improve response rates and follow-up calls in ways
                  that feel seamless and natural.
                </p>
                <p>
                  The secret behind the success of Structurely&apos;s AI
                  features lies in its unique Text + Call + AI approach—engaging
                  the lead via text message first and then following up with a
                  call from the same phone number once the lead is ready. This
                  process ensures that the outreach feels more human, less
                  intrusive, and more in line with how people prefer to
                  communicate today.
                </p>
              </div>
            </div>
          </div>

          <div className="px-3 md:px-0">
            <div className="flex flex-col items-center gap-3 border-t border-[#E5E7EB]  py-6 ">
              <p className="text-center text-heading">Did this answer your question?</p>
              <div className="flex items-center gap-3">
                {feedbackOptions.map((option) => (
                  <button
                    key={option.label}
                    aria-label={option.label}
                    className="flex items-center justify-center rounded-lg bg-white px-4 py-2 text-2xl shadow-[0_0_0_1px_rgba(0,0,0,0.08),0_1px_1px_-0.5px_rgba(51,51,51,0.05),0_3px_3px_-1.5px_rgba(51,51,51,0.05),0_6px_6px_-3px_rgba(51,51,51,0.05),0_12px_12px_-6px_rgba(51,51,51,0.05),0_24px_24px_-12px_rgba(51,51,51,0.05)] transition-transform hover:scale-110"
                  >
                    {option.emoji}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
