const body =
  "text-[16px] leading-[26px] font-medium tracking-[-0.16px] text-[#646464] break-words [overflow-wrap:anywhere]";
const listPlain =
  "text-[16px] leading-[26px] font-medium tracking-[-0.16px] text-[#202020] list-none flex flex-col break-words [overflow-wrap:anywhere]";
const listBulleted =
  "text-[16px] leading-[26px] font-medium tracking-[-0.16px] text-[#646464] list-disc list-outside pl-5 space-y-1 marker:text-[#646464] break-words [overflow-wrap:anywhere]";
const h2 =
  "text-[24px] leading-[32px] font-semibold tracking-[-0.48px] text-[#202020]";
const sectionGap = "flex flex-col gap-4 mt-4";
const blockGap = "flex flex-col gap-2";
const sectionDivider = "w-full border-t border-[#E5E7EB]";

function PrivacyPolicyContent() {
  return (
    <section id="privacy-policy" className="relative z-0 w-full min-w-0">
      <div className="px-global">
        <div className="max-w-global mx-auto flex w-full min-w-0 flex-col border-x border-[#E5E7EB] px-3 py-[32px] sm:px-2">
          <div className="mx-auto flex w-full min-w-0 max-w-[744px] flex-col gap-4">
            <p className="text-[14px] leading-[20px] font-medium tracking-[-0.084px] text-[#646464]">
              LAST UPDATED: [8/16/24]
            </p>

            <h1 className="text-[36px] leading-[44px] font-medium tracking-[-1.08px] text-[#202020]">
              Privacy Policy
            </h1>

            <div className={blockGap}>
              <p className={body}>
                Reinform, Inc. d/b/a Structurely (&ldquo;Structurely&rdquo;,
                &ldquo;we&rdquo;, &ldquo;our&rdquo;, and &ldquo;us&rdquo;)
                respects your concerns about privacy and personal data
                protection and we value our relationship with you. This
                Privacy Policy (this &ldquo;Policy&rdquo;) applies solely to
                personal information collected through{" "}
                <a
                  href="https://www.structurely.com"
                  className="underline text-[#646464]"
                >
                  www.structurely.com
                </a>{" "}
                and text message/live chat conversations between you and our
                realtor customers (the &ldquo;Site&rdquo;), whether accessed via
                computer, mobile device or other device.
              </p>

              <p className={body}>
                This Policy describes the types of personal information we
                collect through the Site and how that personal information may
                be used and/or with whom it may be shared. This Policy also
                describes how you can reach us to update your personal
                information, access and control the use of the personal
                information, or get answers to questions you may have about
                our privacy practices at this Site. Please read this Policy
                carefully, because by accessing and using this Site you are
                acknowledging that you understand and agree to the terms of
                this Policy.
              </p>

              <p className={body}>
                This Privacy Policy does not apply to any websites operated by
                third parties. We are not responsible for, and this Privacy
                Policy does not apply to, the privacy practices of other
                companies or other websites. We encourage you to seek out and
                read the privacy policy of each website that you visit.
              </p>
            </div>

            <nav aria-label="Table of contents" className={sectionGap}>
              <h2 className={h2}>Table of Contents</h2>
              <ol className={`${listPlain} gap-2`}>
                <li>How do we collect your information?</li>
                <li>What information do we collect?</li>
                <li>How do we use your personal information?</li>
                <li>Do we disclose any information to outside parties?</li>
                <li>What choices do you have about your personal information?</li>
                <li>Location of this Site</li>
                <li>How long do we retain your personal information?</li>
                <li>Third party links</li>
                <li>Third party application usage policy</li>
                <li>Artificial Intelligence third party application usage policy</li>
                <li>How do we protect your information?</li>
                <li>Your California privacy rights</li>
                <li>Do we collect information from children?</li>
                <li>Contacting us</li>
                <li>Changes to our Privacy Policy</li>
              </ol>
            </nav>

            <div id="how-do-we-collect" className={sectionGap}>
              <p className="text-[16px] leading-[26px] font-medium tracking-[-0.16px] text-[#202020]">How do we collect your information?</p>
              <div className={blockGap}>
                <p className={body}>
                  Structurely collects information relating to you and your use
                  of the Site in order to provide services and features that
                  are responsive to your needs. Structurely collects personal
                  information in the following ways:
                </p>
                <p className={body}>
                  <strong>From you.</strong> We collect information from you when
                  you register an account with us, utilize our text message/live
                  chat service, request information, send us email, send us
                  postal mail, speak with us on the telephone, or otherwise
                  interact with us.
                </p>
                <p className={body}>
                  <strong>From other third party sources.</strong> We may receive
                  information about you from our third-party service providers
                  who help us to provide services to you, including our Site.
                </p>
                <p className={body}>
                  <strong>Automatically as you navigate the Site.</strong>{" "}
                  Information collected automatically may include usage
                  details, email address, IP addresses, and information
                  collected through cookies and other tracking technologies.
                </p>
              </div>
            </div>

            <div className={sectionDivider} role="separator" aria-hidden="true" />

            <div id="what-information" className={sectionGap}>
              <h2 className={h2}>What information do we collect?</h2>
              <div className={blockGap}>
                <p className={body}>
                  <span>Information You Manually Provide.</span> Structurely
                  collects the information you manually provide in text
                  message/live chat conversations with our realtor customers or
                  when you otherwise use the Site, including but not limited to:
                </p>
                <ul className={listBulleted}>
                  <li>Name</li>
                  <li>Telephone number</li>
                  <li>Email address</li>
                  <li>Home preferences</li>
                  <li>Credit score</li>
                  <li>Income</li>
                  <li>Financial information</li>
                  <li>Veteran status</li>
                  <li>Mortgage pre-qualification information</li>
                </ul>
                <p className={body}>
                  <span className="text-[#202020]">Information Sent to Us by Your Web Browser.</span>{" "}
                  We collect information that is sent to us automatically by
                  your web browser or mobile device. This information typically
                  includes your IP address, the identity of your Internet
                  service provider, the name and version of your operating
                  system, the name and version of your browser, the date and
                  time of your visit, and the pages you visit. The information
                  we receive may depend on your browser or device settings.
                </p>
                <p className={body}>
                  The information we receive from your web browser and/or
                  device is not, in and of itself, personally identifiable.
                  Generally, we use this information in the aggregate to help
                  us improve the Site and make it more compatible with the
                  technology used by our visitors. However, we may combine it
                  with other information in an attempt to identify you or we may
                  combine it with information that does identify you. We may
                  also review our server logs for security purposes—for example,
                  to detect intrusions into our network—and we might share our
                  server logs, which contain visitors&rsquo; IP addresses, with
                  the appropriate investigative authorities who could use that
                  information to trace and identify you.
                </p>
                <p className={body}>
                  <strong>
                    Information Collected by Cookies and Other Technologies.
                  </strong>{" "}
                  We use tracking technologies to collect information and
                  support certain features of the Site, including cookies, web
                  beacons, and pixels. We may use cookies and other tracking
                  technologies to:
                </p>
                <ul className={listBulleted}>
                  <li>
                    collect information about the ways visitors use this
                    Site—which pages they visit, which links they use, and how
                    long they stay on each page;
                  </li>
                  <li>
                    support the features and functionality of this Site—for
                    example, to save you the trouble of re-entering information
                    already in our database or to prompt the settings you
                    established on previous visits; and
                  </li>
                  <li>
                    personalize your experience when you use the Site
                  </li>
                </ul>
              </div>
            </div>

            <div className={sectionDivider} role="separator" aria-hidden="true" />

            <div id="how-we-use" className={sectionGap}>
              <h2 className={h2}>How do we use your personal information?</h2>
              <div className={blockGap}>
                <p className={body}>
                  We process personal information in order to provide services
                  to you and additional services you request, as well as to
                  respond to communications from you. The precise purposes for
                  which your personal information is processed will be
                  determined by the request, and by applicable laws, regulatory
                  guidance, and professional standards.
                </p>
                <p className={body}>
                  We use information we collect from you and information that we
                  collect automatically to manage and improve our Site and our
                  business. We take steps to ensure that your rights are
                  safeguarded.
                </p>
                <p className={body}>
                  Generally, we use the personal information we collect through
                  this Site:
                </p>
                <ul className={listBulleted}>
                  <li>to provide the information and services you request;</li>
                  <li>
                    to better understand your needs and interests pertaining to
                    your home search;
                  </li>
                  <li>
                    to provide you with a personalized experience when you use
                    the Site;
                  </li>
                  <li>to provide you with effective customer service;</li>
                  <li>
                    to improve the content, functionality and usability of the
                    Site;
                  </li>
                  <li>
                    to contact you with information and notices related to your
                    use of the Site;
                  </li>
                  <li>
                    to contact you with special offers and other information we
                    believe will be of interest to you (in accordance with any
                    preferences you have expressed to us);
                  </li>
                  <li>
                    to invite you to participate in surveys and provide feedback
                    to us (in accordance with any preferences you have expressed
                    to us);
                  </li>
                  <li>to improve our services;</li>
                  <li>to improve our marketing and promotional efforts; and</li>
                  <li>
                    for any other purpose identified in any other agreement
                    between you and us.
                  </li>
                </ul>
                <p className={body}>
                  Please see below for information about the choices you have
                  about the ways we use your personal information.
                </p>
              </div>
            </div>

            <div className={sectionDivider} role="separator" aria-hidden="true" />

            <div id="disclose" className="flex flex-col gap-6 mt-4">
              <div className="flex flex-col gap-4">
                <h2 className={h2}>
                  Do we disclose any information to outside parties?
                </h2>
                <p className={body}>
                  We do not sell, trade, or transfer your personal information
                  to third parties, except in the circumstances described below.
                </p>
              </div>

              <div
                className={sectionDivider}
                role="separator"
                aria-hidden="true"
              />

              <div className="flex flex-col gap-4">
                <h2 className={h2}>Our Realtor Customers</h2>
                <p className={body}>
                  Our realtor customers have full access to the information you
                  provide through our live chat/text message feature. To
                  understand how our customers are using your personal data,
                  please refer to our client&rsquo;s own privacy policies. We
                  have no responsibility or liability for the activities of
                  our clients.
                </p>
              </div>

              <div
                className={sectionDivider}
                role="separator"
                aria-hidden="true"
              />

              <div className="flex flex-col gap-4">
                <h2 className={h2}>Third-Party Service Providers</h2>
                <div className={blockGap}>
                  <p className={body}>
                    We may disclose your personal information to our vendors and
                    other third-party service providers, such as website hosts,
                    that help us provide services and support features on our
                    Site.
                  </p>
                  <p className={body}>
                    We use third-party services to help protect and improve our
                    website. One of these services is Google reCAPTCHA, which
                    helps us prevent spam and abuse. This service may collect
                    certain information from you, such as your IP address and
                    browser settings. The{" "}
                    <a
                      href="https://policies.google.com/privacy"
                      className="underline text-[#646464]"
                      rel="noopener noreferrer"
                    >
                      Google Privacy Policy
                    </a>{" "}
                    and{" "}
                    <a
                      href="https://policies.google.com/terms"
                      className="underline text-[#646464]"
                      rel="noopener noreferrer"
                    >
                      Terms of Service
                    </a>{" "}
                    apply.
                  </p>
                </div>
              </div>

              <div
                className={sectionDivider}
                role="separator"
                aria-hidden="true"
              />

              <div className="flex flex-col gap-4">
                <h2 className={h2}>
                  Legal Requirements and Business Transfers
                </h2>
                <p className={body}>
                  We may disclose personal information (i) if we are required to
                  do so by law, legal process, statute, rule, regulation, or
                  professional standard, or to respond to a subpoena, search
                  warrant, or other government official requests, (ii) when we
                  believe disclosure is necessary or appropriate to prevent
                  physical harm or financial loss, (iii) in connection with an
                  investigation of a complaint, security threat, or suspected or
                  actual illegal activity; (iv) in connection with an internal
                  audit; or (v) in the event that Structurely is subject to
                  mergers, acquisitions, joint ventures, sales of assets,
                  reorganizations, divestitures, dissolutions, bankruptcies,
                  liquidations, or other types of business transactions. In
                  these types of transactions, personal information may be
                  shared, sold, or transferred, and it may be used subsequently
                  by a third party.
                </p>
              </div>
            </div>

            <div className={sectionDivider} role="separator" aria-hidden="true" />

            <div id="choices" className={sectionGap}>
              <h2 className={h2}>
                What choices do you have about your personal information?
              </h2>
              <div className={blockGap}>
                <p className={body}>
                  We offer certain choices about how we communicate with you and
                  what personal information we obtain about you and share with
                  others.
                </p>
                <p className={body}>
                  <strong>In General.</strong> We respect your right to make
                  choices about the ways we collect, use, and disclose your
                  information. In addition, we may ask you to indicate your
                  choices at the time and on the page where you provide your
                  information. For example, we may give you choice about the
                  types of email communications you receive from us.
                </p>
                <p className={body}>
                  <strong>Email preferences.</strong> You cannot opt out of
                  transactional emails related to your registration with the
                  Site. However, you can opt out of promotional emails we send
                  you. If you wish to stop receiving promotional emails, simply
                  select &ldquo;unsubscribe&rdquo; located at the bottom of each
                  communication.
                </p>
                <p className={body}>
                  <strong>Do Not Track.</strong> Because there currently is not
                  an industry or legal standard for recognizing or honoring Do
                  Not Track (&ldquo;DNT&rdquo;) signals, we do not respond to
                  them at this time.
                </p>
                <p className={body}>
                  <span className="text-[#202020]">Previously Expressed Preferences.</span> You may
                  change previously expressed preferences regarding how we use
                  your information. If at any time you wish to be taken off our
                  mailing lists, please contact us using the information
                  provided above. Please provide your full name, postal
                  address, and e-mail address so that we can find you on our
                  mailing lists. Once we have the information we need, we will
                  remove you from our mailing lists as you have requested.
                  Please give us a reasonable amount of time to honor your
                  request.
                </p>
                <p className={body}>
                  <strong>Cookies.</strong>
                </p>
                <p className={body}>
                  We provide a variety of services on our services using
                  cookies. We place cookies on your device in order to provide
                  you with personalized access to essential services, enhance
                  functionality, and to show you offers and services tailored to
                  your interests.
                </p>
                <p className={body}>
                  A cookie is a small piece of data that a website can send to
                  your browser, which may then be stored on your hard drive as a
                  &ldquo;tag&rdquo; that identifies your computer. Cookies help
                  to navigate from page to page on a website, provide secure
                  connections, gather statistics about the usage and
                  effectiveness of our site, and remembers preferences from a
                  previous visit, when you return.
                </p>
                <p className={body}>
                  We use third-party services for analytics and interest-based
                  advertising purposes. These service providers and ad partners
                  may use cookies alone or in conjunction with unique
                  identifiers, beacons, and other tracking technologies to
                  collect information about you when you use our Site, open our
                  emails, or interact with our ads. We do not combine the
                  information collected through the use of these services with
                  information that directly identifies you.
                </p>
                <p className={body}>
                  Most web browsers automatically accept cookies, but you can
                  change your browser&rsquo;s settings to disable all or certain
                  cookies if you wish. Please note that by disabling or deleting
                  cookies, you may not be able to access the full functionality
                  of our Site. Disabling or clearing cookies also may affect
                  cookie-based opt-outs by either preventing you from using such
                  cookie-based opt-outs or clearing opt-outs that you previously
                  set.
                </p>
              </div>
            </div>

            <div className={sectionDivider} role="separator" aria-hidden="true" />

            <div id="location" className={sectionGap}>
              <h2 className={h2}>Location of this Site</h2>
              <div className={blockGap}>
                <p className={body}>
                  This Site is hosted and operated in the United States.
                  However, we and our service providers may store information
                  about individuals in the United States, or we may transfer it
                  to, and store it within, other countries.
                </p>
                <p className={body}>
                Visitors from jurisdictions outside the United States visit us
                at their own choice and risk.
                  If you are not a resident of the United States, you acknowledge
                  and agree that we may collect and use your personal
                  information outside your home jurisdiction, and that we may
                  store your personal information in the United States or
                  elsewhere. Please note that the level of legal protection
                  provided in the United States from which you may access our
                  Site may not be as stringent as that under privacy standards
                  or the privacy laws of other countries, possibly including
                  your home jurisdiction.
                </p>
              </div>
            </div>

            <div className={sectionDivider} role="separator" aria-hidden="true" />

            <div id="retention" className={sectionGap}>
              <h2 className={h2}>
                How long do we retain your personal information?
              </h2>
              <div className={blockGap}>
                <p className={body}>
                  We will keep your personal information for the period
                  necessary to fulfil the purposes described in this Privacy
                  Policy, unless a longer retention period is permitted or
                  required by law.
                </p>
              </div>
            </div>

            <div className={sectionDivider} role="separator" aria-hidden="true" />

            <div id="third-party-links" className={sectionGap}>
              <h2 className={h2}>Third party links</h2>
              <div className={blockGap}>
                <p className={body}>
                  Occasionally, at our discretion, we may include or offer third
                  party products or services on our Site. These third party sites
                  have separate and independent privacy policies. We therefore
                  have no responsibility or liability for the content and
                  activities of these linked sites. We urge you to read the
                  privacy policies of other websites before submitting any
                  information to those websites.
                </p>
              </div>
            </div>

            <div className={sectionDivider} role="separator" aria-hidden="true" />

            <div id="third-party-apps" className={sectionGap}>
              <h2 className={h2}>Third party application usage policy</h2>
              <div className={blockGap}>
                <p className={body}>
                  <strong>Google:</strong><br/> Structurely use and transfer of
                  information received from Google APIs to any other app will
                  adhere to{" "}
                  <a
                    href="https://developers.google.com/terms/api-services-user-data-policy"
                    className="underline text-[#646464]"
                    rel="noopener noreferrer"
                  >
                    Google API Services User Data Policy
                  </a>
                  , including the Limited Use requirements.
                </p>
                <p className={body}>
                  Structurely uses least access controls to request the lowest
                  and least amount of data possible with Google (and all third
                  party applications). This means that data ingested into
                  Structurely from Google is restricted in scope to only the use
                  cases outlined in this Privacy Policy and Terms of Service.
                </p>

                <p className={body}>
                Structurely allows users to opt-in to using any third party
                integrations at any time.
                  Structurely allows users to opt-out of using third party
                  integrations at any time. Doing so ensures no data transfer
                  will continue, and all prior received data will no longer be
                  utilized in the Structurely application or applications.
                </p>
                <p className={body}>
                  Structurely may send limited, non-identifiable information to
                  third parties, such as telephony, software and other
                  applications on only an as needed basis. For example,
                  currently, Structurely may send Google Calendar event times to
                  third-party services to schedule appointments, but no other
                  data outside of simple time blocks like (1pm - 2pm) are sent
                  outside of Structurely.
                </p>
              </div>
            </div>

            <div className={sectionDivider} role="separator" aria-hidden="true" />

            <div id="ai-policy" className={sectionGap}>
              <h2 className={h2}>
                Artificial Intelligence (AI) third-party application usage
                policy
              </h2>
              <div className={blockGap}>
                <p className={body}>
                  Structurely uses a variety of AI models to provide its
                  software. Many of which are on-premise, self-contained models,
                  where user data never leaves the confines of
                  Structurely&rsquo;s application and systems.
                </p>
                <p className={body}>
                  In some cases, Structurely may leverage third-party AI
                  applications to perform specific actions, such as converting
                  languages into new languages, etc. These messages are not
                  stored or used for training purposes outside of Structurely,
                  and users may opt-out of any use of third-party AI models in
                  Structurely at any time by contacting the support team at
                  Structurely.
                </p>
              </div>
            </div>

            <div className={sectionDivider} role="separator" aria-hidden="true" />

            <div id="protect" className={sectionGap}>
              <h2 className={h2}>How do we protect your information?</h2>
              <div className={blockGap}>
                <p className={body}>
                  Structurely has implemented reasonable physical, technical,
                  and administrative security standards to protect personal
                  information from loss, misuse, alteration, or destruction. We
                  strive to protect your personal information against
                  unauthorized access, use or disclosure, using security
                  technologies and procedures, such as encryption and limited
                  access. Only authorized individuals access your personal
                  information, and they receive training about the importance of
                  protecting personal information.
                </p>
              </div>
            </div>

            <div className={sectionDivider} role="separator" aria-hidden="true" />

            <div id="california" className={sectionGap}>
              <h2 className={h2}>Your California privacy rights</h2>
              <div className={blockGap}>
                <p className={body}>
                  Pursuant to applicable California law, including the California
                  Consumer Privacy Act (CCPA), Structurely makes the following
                  disclosures regarding the personal information we collect:
                </p>
                <div className="max-w-full overflow-x-auto">
                  <table className="w-full min-w-[520px] border-collapse text-left text-[14px] leading-[22px] font-medium tracking-[-0.14px] text-[#646464]">
                    <thead>
                      <tr className="border-b border-[#E5E7EB]">
                        <th className="py-2 pr-3 align-top font-medium text-[#202020]">
                          Category of Personal Information
                        </th>
                        <th className="py-2 pr-3 align-top font-medium text-[#202020]">
                          Category of Source from Which Data is Collected
                        </th>
                        <th className="py-2 pr-3 align-top font-medium text-[#202020]">
                          Purpose of Collection
                        </th>
                        <th className="py-2 align-top font-medium text-[#202020]">
                          Category of Third Parties to Whom Data is Disclosed
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-[#E5E7EB]">
                        <td className="py-2 pr-3 align-top">
                          Name, telephone number, e-mail address, home
                          preferences, credit score, income, financial
                          information, veteran status, mortgage
                          pre-qualification information
                        </td>
                        <td className="py-2 pr-3 align-top">
                          Website and text message/live chat conversations with
                          our realtor customers
                        </td>
                        <td className="py-2 pr-3 align-top">
                          To nurture online leads for the sale of homes
                        </td>
                        <td className="py-2 align-top">
                          Our realtor customers and third-party service
                          providers, such as website hosts
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className={body}>
                  Structurely has not sold consumers&rsquo; personal information
                  in the twelve (12) months preceding the Effective Date of this
                  Privacy Policy.
                </p>
                <p className={body}>
                  If you are a California resident, pursuant to the California
                  Consumer Protection Act (CCPA), you have the right to
                  request:
                </p>
                <ul className={listBulleted}>
                  <li>
                    the categories of personal information Structurely has
                    collected about you;
                  </li>
                  <li>
                    the categories of sources from which your personal
                    information is collected;
                  </li>
                  <li>
                    the business or commercial purpose of collecting or selling
                    your personal information;
                  </li>
                  <li>
                    the categories of third parties with whom Structurely shares
                    your personal information;
                  </li>
                  <li>
                    the specific pieces of personal information Structurely has
                    collected about you;
                  </li>
                  <li>
                    the categories of personal information that Structurely has
                    sold about you and the categories of third parties to whom
                    the personal information was sold, if applicable;
                  </li>
                  <li>deletion of your personal information; and</li>
                  <li>
                    an opt out of having your personal information disclosed or
                    sold to third parties.
                  </li>
                </ul>
                <p className={body}>
                  To submit a request, please contact us at{" "}
                  <a
                    href="mailto:info@structurely.com"
                    className="underline text-[#646464]"
                  >
                    info@structurely.com
                  </a>
                  .
                </p>
                <p className={body}>
                  However, Structurely will not be required to comply with your
                  request to delete your personal information if it is necessary
                  for Structurely to maintain your personal information in order
                  to:
                </p>
                <ul className={listBulleted}>
                  <li>
                    complete the transaction for which the personal information
                    was collected, provide a good or service requested by you, or
                    reasonably anticipated within the context of
                    Structurely&rsquo;s ongoing business relationship with you,
                    or otherwise perform a contract between you and Structurely;
                  </li>
                  <li>
                    detect security incidents, protect against malicious,
                    deceptive, fraudulent, or illegal activity; or prosecute
                    those responsible for that activity;
                  </li>
                  <li>
                    debug to identify and repair errors that impair existing
                    intended functionality;
                  </li>
                  <li>
                    exercise free speech, ensure the right of another consumer
                    to exercise his or her right of free speech, or exercise
                    another right provided for by law;
                  </li>
                  <li>
                    comply with the California Electronic Communications Privacy
                    Act pursuant to Chapter 3.6 (commencing with Section 1546)
                    of Title 12 of Part 2 of the Penal Code;
                  </li>
                  <li>
                    engage in public or peer-reviewed scientific, historical, or
                    statistical research in the public interest that adheres to
                    all other applicable ethics and privacy laws, when
                    Structurely&rsquo;s deletion of the information is likely to
                    render impossible or seriously impair the achievement of
                    such research, if you have provided informed consent;
                  </li>
                  <li>
                    to enable solely internal uses that are reasonably aligned
                    with your expectations based on your relationship with the
                    Structurely;
                  </li>
                  <li>comply with a legal obligation; or</li>
                  <li>
                    otherwise use your personal information, internally, in a
                    lawful manner that is compatible with the context in which
                    you provided the information.
                  </li>
                </ul>
                <p className={body}>
                  Structurely will not discriminate against you in the event
                  you exercise any of the aforementioned rights under CCPA,
                  including, but not limited to, by:
                </p>
                <ul className={listBulleted}>
                  <li>denying goods or services to you;</li>
                  <li>
                    charging different prices or rates for goods or services,
                    including through the use of discounts or other benefits or
                    imposing penalties;
                  </li>
                  <li>
                    providing a different level or quality of goods or services
                    to you; or
                  </li>
                  <li>
                    suggesting that you will receive a different price or rate
                    for goods or services or a different level or quality of
                    goods or services.
                  </li>
                </ul>
              </div>
            </div>

            <div className={sectionDivider} role="separator" aria-hidden="true" />

            <div id="children" className={sectionGap}>
              <h2 className={h2}>Do we collect information from children?</h2>
              <div className={blockGap}>
                <p className={body}>
                  Our Site is not intended for children under 13 years of age. No
                  one under age 13 may provide any information to or on the
                  Site. We do not knowingly collect personal information from
                  children under 13. If you are under 13, do not use or provide
                  any information on the Site or on or through any of its
                  features, including your name or email address. If we learn we
                  have collected or received personal information from a child
                  under 13 without verification of parental consent, we will
                  delete that information. If you believe we might have any
                  information from or about a child under 13, please contact us
                  at{" "}
                  <a
                    href="mailto:info@structurely.com"
                    className="underline text-[#646464]"
                  >
                    info@structurely.com
                  </a>
                  .
                </p>
                <p className={body}>
                  Pursuant to CCPA, we will not sell the personal information of
                  any consumer less than 16 years of age, unless the consumer, in
                  the case of consumers between 13 and 16 years of age, or the
                  consumer&rsquo;s parent or guardian, in the case of consumers
                  who are less than 13 years of age, has affirmatively
                  authorized the sale of the consumer&rsquo;s personal
                  information.
                </p>
              </div>
            </div>

            <div className={sectionDivider} role="separator" aria-hidden="true" />

            <div id="contact" className={sectionGap}>
              <h2 className={h2}>Contacting us</h2>
              <div className={blockGap}>
                <p className={body}>
                  For any questions, or to request further information regarding
                  this Privacy Policy, please contact us at
                </p>
                <p className={body}>
                  Reinform, Inc. d/b/a Structurely
                  <br />
                  525 Kellogg Ave, Unit 408
                  <br />
                  Ames, Iowa 50010
                  <br />
                  <a
                    href="mailto:info@structurely.com"
                    className="underline text-[#202020]"
                  >
                    info@structurely.com
                  </a>
                </p>
              </div>
            </div>

            <div className={sectionDivider} role="separator" aria-hidden="true" />

            <div id="changes" className={sectionGap}>
              <h2 className={h2}>Changes to our privacy policy</h2>
              <div className={blockGap}>
                <p className={body}>
                  It is our policy to post any changes we make to our Privacy
                  Policy on this page. If we make material changes to how we
                  treat our users&rsquo; personal information, we will notify you
                  by e-mail to the primary e-mail address you have provided to
                  us and/or possibly through a notice on our Site&rsquo;s home
                  page. The date the Privacy Policy was last revised is
                  identified at the top of the page. You are responsible for
                  ensuring we have an up-to-date active and deliverable e-mail
                  address for you, and for periodically visiting our Site and
                  this Privacy Policy to check for any changes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PrivacyPolicyContent;
