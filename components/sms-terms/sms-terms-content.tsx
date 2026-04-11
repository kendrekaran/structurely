import Link from "next/link";

const body =
  "text-[16px] leading-[26px] font-medium tracking-[-0.16px] text-[#646464] break-words [overflow-wrap:anywhere]";
const listPlain =
  "text-[16px] leading-[26px] font-medium tracking-[-0.16px] text-[#202020] list-none flex flex-col break-words [overflow-wrap:anywhere]";
const listBulleted =
  "text-[16px] leading-[26px] font-medium tracking-[-0.16px] text-[#646464] list-disc list-outside pl-5 space-y-1 marker:text-[#646464] break-words [overflow-wrap:anywhere]";
const h2 =
  "text-[24px] leading-[32px] font-semibold tracking-[-0.48px] text-[#202020]";
const sectionGap = "flex flex-col gap-4 mt-6";
const blockGap = "flex flex-col gap-2";
const sectionDivider = "w-full border-t border-[#E5E7EB] mt-6";

function SmsTermsContent() {
  return (
    <section id="sms-terms" className="relative z-0 w-full min-w-0">
      <div className="px-global">
        <div className="max-w-global mx-auto flex w-full min-w-0 flex-col border-x border-[#E5E7EB] px-3 py-[32px] sm:px-2">
          <div className="mx-auto flex w-full max-w-[744px] min-w-0 flex-col gap-4">
            <p className="text-[14px] leading-[20px] font-medium tracking-[-0.084px] text-[#646464]">
              EFFECTIVE DATE: [8/16/24]
            </p>

            <h1 className="text-[36px] leading-[44px] font-medium tracking-[-1.08px] text-[#202020]">
              SMS Terms for Structurely
            </h1>

            <div className={blockGap}>
              <p className={body}>
                These SMS Terms apply to text messages sent by Reinform, Inc.
                d/b/a Structurely (&ldquo;Structurely,&rdquo; &ldquo;we,&rdquo;
                &ldquo;us,&rdquo; or &ldquo;our&rdquo;) to individuals who opt
                in to receive text messages from us through our website forms,
                landing pages, scheduling flows, or other consent-based
                interactions.
              </p>

              <p className={body}>
                By providing your mobile number, checking the applicable consent
                box, and clicking Submit or otherwise affirmatively opting in,
                you agree to receive text messages from Structurely in
                accordance with these SMS Terms, our{" "}
                <Link
                  href="/privacy-policy"
                  className="text-[#646464] underline"
                >
                  Privacy Policy
                </Link>
                , and our{" "}
                <Link href="/terms-of-use" className="text-[#646464] underline">
                  Terms of Use
                </Link>
                .
              </p>

              <p className={body}>
                This Policy describes the types of personal information we
                collect through the Site and how that personal information may
                be used and/or with whom it may be shared. This Policy also
                describes how you can reach us to update your personal
                information, access and control the use of the personal
                information, or get answers to questions you may have about our
                privacy practices at this Site. Please read this Policy
                carefully, because by accessing and using this Site you are
                acknowledging that you understand and agree to the terms of this
                Policy.
              </p>

              <p className={body}>
                This Privacy Policy does not apply to any websites operated by
                third parties. We are not responsible for, and this Privacy
                Policy does not apply to, the privacy practices of other
                companies or other websites. We encourage you to seek out and
                read the privacy policy of each website that you visit.
              </p>
            </div>

            <div
              className={sectionDivider}
              role="separator"
              aria-hidden="true"
            />

            <div id="program-description" className={sectionGap}>
              <h2 className={h2}>1. Program Description</h2>
              <div className={blockGap}>
                <p className={body}>
                  Structurely may send text messages related to your inquiry,
                  requested information, demo requests, appointment scheduling,
                  follow-up communications, and, where you have provided the
                  required consent, recurring marketing or promotional messages
                  about Structurely&rsquo;s products or services.
                </p>
                <p className={body}>
                  Text messages may be sent using an automated system or other
                  technology. Consent to receive marketing text messages is not
                  a condition of purchase.
                </p>
              </div>
            </div>

            <div
              className={sectionDivider}
              role="separator"
              aria-hidden="true"
            />

            <div id="message-frequency" className={sectionGap}>
              <h2 className={h2}>2. Message Frequency</h2>
              <div className={blockGap}>
                <p className={body}>
                  Message frequency varies. You may receive recurring text
                  messages depending on your interaction with Structurely, your
                  requests, and your ongoing relationship with us.
                </p>
              </div>
            </div>

            <div
              className={sectionDivider}
              role="separator"
              aria-hidden="true"
            />

            <div id="message-data-rates" className={sectionGap}>
              <h2 className={h2}>3. Message and Data Rates</h2>
              <div className={blockGap}>
                <p className={body}>
                  Message and data rates may apply to any messages sent to you
                  from us and to us from you. Check with your wireless provider
                  for details about your text messaging plan.
                </p>
              </div>
            </div>

            <div
              className={sectionDivider}
              role="separator"
              aria-hidden="true"
            />

            <div id="opting-in" className={sectionGap}>
              <h2 className={h2}>4. Opting In</h2>
              <div className={blockGap}>
                <p className={body}>
                  You may opt in to receive text messages from Structurely by
                  submitting a web form, requesting information, scheduling a
                  demo, signing up through another consent-based channel, or
                  otherwise clearly providing your consent to receive text
                  messages from us.
                </p>
                <p className={body}>
                  Where required by law, Structurely will send text messages
                  only after receiving the level of consent required for the
                  type of message being sent.
                </p>
              </div>
            </div>

            <div
              className={sectionDivider}
              role="separator"
              aria-hidden="true"
            />

            <div id="opting-out" className={sectionGap}>
              <h2 className={h2}>5. Opting Out</h2>
              <div className={blockGap}>
                <p className={body}>
                  You may opt out of marketing text messages at any time by
                  replying STOP to any message.
                </p>
                <p className={body}>
                  After you reply STOP, we may send you one final text message
                  confirming that you have been unsubscribed. After that, you
                  will no longer receive marketing text messages from that
                  messaging program unless you opt in again.
                </p>
                <p className={body}>
                  You may also revoke your consent by contacting us at{" "}
                  <a
                    href="mailto:help@structurely.com"
                    className="text-[#646464] underline"
                  >
                    help@structurely.com
                  </a>{" "}
                  or by using any other reasonable method that clearly
                  communicates your request to stop receiving text messages.
                </p>
              </div>
            </div>

            <div
              className={sectionDivider}
              role="separator"
              aria-hidden="true"
            />

            <div id="help-support" className={sectionGap}>
              <h2 className={h2}>6. Help and Support</h2>
              <div className={blockGap}>
                <p className={body}>
                  For help, reply HELP to any text message from us or contact us
                  at:
                </p>
                <p className={body}>
                  Structurely
                  <br />
                  2655 N Airport Rd #60439 <br />
                  Ft. Myers, FL 33907
                  <br />
                  Email:{" "}
                  <a
                    href="mailto:help@structurely.com"
                    className="text-[#202020] underline"
                  >
                    help@structurely.com
                  </a>
                </p>
              </div>
            </div>

            <div
              className={sectionDivider}
              role="separator"
              aria-hidden="true"
            />

            <div id="eligibility" className={sectionGap}>
              <h2 className={h2}>7. Eligibility and Mobile Number Ownership</h2>
              <div className={blockGap}>
                <p className={body}>By opting in, you represent that:</p>
                <ul className={listBulleted}>
                  <li>
                    you are the authorized user of the mobile number you
                    provided, or
                  </li>
                  <li>
                    you have authority to provide that number and receive
                    messages at that number.
                  </li>
                </ul>
                <p className={body}>
                  If your mobile number changes, you agree to notify us before
                  the number is reassigned or before you submit another inquiry
                  using a new number.
                </p>
              </div>
            </div>

            <div
              className={sectionDivider}
              role="separator"
              aria-hidden="true"
            />

            <div id="carriers" className={sectionGap}>
              <h2 className={h2}>8. Carriers</h2>
              <div className={blockGap}>
                <p className={body}>
                  Wireless carriers are not liable for delayed or undelivered
                  messages.
                </p>
              </div>
            </div>

            <div
              className={sectionDivider}
              role="separator"
              aria-hidden="true"
            />

            <div id="privacy" className={sectionGap}>
              <h2 className={h2}>9. Privacy</h2>
              <div className={blockGap}>
                <p className={body}>
                  Information collected in connection with our text messaging
                  program is subject to our{" "}
                  <Link
                    href="/privacy-policy"
                    className="text-[#646464] underline"
                  >
                    Privacy Policy
                  </Link>
                  .
                </p>
              </div>
            </div>

            <div
              className={sectionDivider}
              role="separator"
              aria-hidden="true"
            />

            <div id="changes" className={sectionGap}>
              <h2 className={h2}>10. Changes to These SMS Terms</h2>
              <div className={blockGap}>
                <p className={body}>
                  We may update these SMS Terms from time to time. Any changes
                  will be effective when posted to this page, unless otherwise
                  stated. Your continued participation in our text messaging
                  program after changes become effective constitutes your
                  acceptance of the revised SMS Terms.
                </p>
              </div>
            </div>

            <div
              className={sectionDivider}
              role="separator"
              aria-hidden="true"
            />

            <div id="contact" className={sectionGap}>
              <h2 className={h2}>11. Contact Information</h2>
              <div className={blockGap}>
                <p className={body}>
                  If you have questions about these SMS Terms or our text
                  messaging practices, please contact:
                </p>
                <p className={body}>
                  2655 N Airport Rd #60439 <br /> Ft. Myers, FL 33907
                  <br />
                  <a
                    href="mailto:help@structurely.com"
                    className="text-[#202020] underline"
                  >
                    Email:help@structurely.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SmsTermsContent;
