const body =
  "text-[16px] leading-[26px] font-medium tracking-[-0.16px] text-[#646464] break-words [overflow-wrap:anywhere]";
const listLowerAlpha =
  "text-[16px] leading-[26px] font-medium tracking-[-0.16px] text-[#646464] list-[lower-alpha] list-outside pl-5 space-y-2 marker:text-[#646464] break-words [overflow-wrap:anywhere]";
const h2 =
  "text-[20px] leading-[28px] font-semibold tracking-[-0.03px] text-[#202020]";
const h3 =
  "text-[18px] leading-[26px] font-semibold tracking-[-0.36px] text-[#202020]";
const sectionGap = "flex flex-col gap-4 mt-4";
const blockGap = "flex flex-col gap-2";
const sectionDivider = "w-full border-t border-[#E5E7EB]";

function SubscriptionAgreementContent() {
  return (
    <section id="subscription-agreement" className="relative z-0 w-full min-w-0">
      <div className="px-global">
        <div className="max-w-global mx-auto flex w-full min-w-0 flex-col border-x border-[#E5E7EB] px-3 py-8 sm:px-2">
          <div className="mx-auto flex w-full min-w-0 max-w-[744px] flex-col gap-4">
            <p className="text-[14px] leading-[20px] font-medium tracking-[-0.084px] text-[#646464]">
              Legal Policies
            </p>

            <h1 className="text-[36px] leading-[44px] font-medium tracking-[-1.08px] text-[#202020]">
              Master Subscription Agreement (MSA)
            </h1>

            <div className={blockGap}>
              <p className={body}>
                This Master Subscription Agreement (&ldquo;Agreement&rdquo;) is
                entered into as of [Effective Date] (&ldquo;Effective
                Date&rdquo;) by and between [Provider Legal Name], a [State]
                [entity type] with offices at [Address]
                (&ldquo;Provider&rdquo;), and [Customer Legal Name], a [State]
                [entity type] with offices at [Address]
                (&ldquo;Customer&rdquo;). Provider and Customer may be referred to
                individually as a &ldquo;Party&rdquo; and collectively as the
                &ldquo;Parties&rdquo;.
              </p>
            </div>

            <div className={sectionDivider} role="separator" aria-hidden="true" />

            <div id="msa-definitions" className={sectionGap}>
              <h2 className={h2}>1) Definitions</h2>
              <div className={blockGap}>
                <p className={body}>
                  <span className="font-semibold text-[#202020]">1.1</span>{" "}
                  &ldquo;Platform&rdquo; means Provider&rsquo;s hosted software
                  platform and related services described in an Order Form.
                </p>
                <p className={body}>
                  <span className="font-semibold text-[#202020]">1.2</span>{" "}
                  &ldquo;Subscription Plan&rdquo; means Starter, Growth, Scale,
                  or Enterprise (Custom), as selected on an Order Form.
                </p>
                <p className={body}>
                  <span className="font-semibold text-[#202020]">1.3</span>{" "}
                  &ldquo;Action Credits&rdquo; means units of AI labor consumed
                  when the Platform performs actions on Customer&rsquo;s behalf
                  (e.g., outreach, follow-up, pre-qualification workflows,
                  communications). 1 Action Credit equals: (a) 1 SMS response,
                  (b) 10 seconds of talk time, or (c) 2 emails. Provider may update
                  equivalencies from time to time for technical or vendor-cost
                  reasons with prior notice (Section 10.3).
                </p>
                <p className={body}>
                  <span className="font-semibold text-[#202020]">1.4</span>{" "}
                  &ldquo;Included Credits&rdquo; means the monthly Action
                  Credits included with the Subscription Plan.
                </p>
                <p className={body}>
                  <span className="font-semibold text-[#202020]">1.5</span>{" "}
                  &ldquo;Overages&rdquo; means usage in excess of Included
                  Credits during a given calendar month, billed per-credit at the
                  applicable overage rate on the Order Form (unless blocked per
                  Section 4.6).
                </p>
                <p className={body}>
                  <span className="font-semibold text-[#202020]">1.6</span>{" "}
                  &ldquo;Add-Ons&rdquo; means optional services such as AI Power
                  Dialer, additional seats, spam mitigation, phone numbers, or
                  other items listed on an Order Form.
                </p>
                <p className={body}>
                  <span className="font-semibold text-[#202020]">1.7</span>{" "}
                  &ldquo;Customer Data&rdquo; means data submitted to the
                  Platform by or on behalf of Customer, including leads, contact
                  data, scripts, recordings (if enabled), and configurations.
                </p>
                <p className={body}>
                  <span className="font-semibold text-[#202020]">1.8</span>{" "}
                  &ldquo;Documentation&rdquo; means Provider&rsquo;s user guides,
                  FAQs, and technical documentation made available to Customer.
                </p>
              </div>
            </div>

            <div className={sectionDivider} role="separator" aria-hidden="true" />

            <div id="msa-subscription" className={sectionGap}>
              <h2 className={h2}>2) Subscription; access grant</h2>
              <div className={blockGap}>
                <h3 className={h3}>2.1 Subscription</h3>
                <p className={body}>
                  Subject to this Agreement and timely payment, Provider grants
                  Customer a non-exclusive, non-transferable right during the Term
                  to access and use the Platform and Documentation for
                  Customer&rsquo;s internal business purposes, for lawful purposes
                  only and limited to Customer&rsquo;s authorized users and the
                  plan scope purchased.
                </p>
                <h3 className={h3}>2.2 Plan limits</h3>
                <p className={body}>
                  Use is subject to (i) Included Credits, (ii) overage rules,
                  (iii) seat counts (if applicable), and (iv) other limits
                  specified in the Order Form or Documentation.
                </p>
                <h3 className={h3}>2.3 Restrictions</h3>
                <p className={body}>
                  Customer will not (and will not allow any third party to): (a)
                  reverse engineer, decompile, or attempt to extract source code;
                  (b) circumvent usage limits; (c) use the Platform to build a
                  competing product; (d) transmit malware; (e) use the Platform
                  in violation of law or third-party rights.
                </p>
              </div>
            </div>

            <div className={sectionDivider} role="separator" aria-hidden="true" />

            <div id="msa-customer" className={sectionGap}>
              <h2 className={h2}>
                3) Customer responsibilities; regulated activity; licensing; data
              </h2>
              <div className={blockGap}>
                <h3 className={h3}>3.1 Account security</h3>
                <p className={body}>
                  Customer is responsible for all activity under its accounts and
                  for maintaining appropriate access controls.
                </p>
                <h3 className={h3}>
                  3.2 Compliance with laws and regulations governing
                  Customer&rsquo;s communications (critical)
                </h3>
                <p className={body}>
                  Customer represents and warrants that it will use the Platform in
                  compliance with all applicable laws and regulations, including
                  without limitation: telemarketing/robocalling and text messaging
                  rules (e.g., Telephone Consumer Protection Act, 47 U.S.C. § 227
                  (&ldquo;TCPA&rdquo;), Federal Communications Commission
                  regulations implementing the TCPA, including 47 C.F.R. §
                  64.1200(c)-(d), Do Not Call regulations, and similar state rules
                  prohibiting certain calls or other types of outreaches), privacy
                  laws, Do-Not-Call obligations, consent requirements, and recording
                  laws (one-party/two-party consent) as applicable (together,
                  &ldquo;Laws Applicable to Customer&rsquo;s
                  Communications&rdquo;).
                </p>
                <h3 className={h3}>3.3 Lead sources & consent</h3>
                <p className={body}>
                  Customer alone is solely responsible for the legality and
                  quality of its lead sources and for obtaining all required
                  consents and permissions to contact leads via live voice,
                  prerecorded messages, automated voice, automatic telephone dialing
                  systems, SMS, artificial intelligence (&ldquo;AI&rdquo;)
                  technology or email (&ldquo;Regulated Technology&rdquo;). Customer
                  must obtain from all leads express written consent or other types
                  of lawful consent to receive calls or other outreaches at the
                  telephone number provided using Regulated Technology before
                  using Provider&rsquo;s Platform or other Provider&rsquo;s
                  products or services. Customer shall retain records sufficient to
                  show that such consent was obtained for four (4) years after
                  the date a lead is first transmitted to Provider. Provider shall
                  be entitled to receive copies of such records upon reasonable
                  notice to Customer.
                </p>
                <h3 className={h3}>3.4 Third-party systems</h3>
                <p className={body}>
                  Customer is responsible for third-party tools, CRMs, dialers,
                  carriers, and data providers it connects, including licenses and
                  compliance.
                </p>
                <h3 className={h3}>
                  3.5 Mortgage / lending regulatory responsibilities; no Provider
                  responsibility for licensed activity
                </h3>
                <p className={body}>
                  The Parties acknowledge that Customer may use the Platform in
                  connection with residential mortgage origination and other
                  lending-related activities that may be regulated at the federal,
                  state, and local levels. Customer retains sole responsibility for
                  (a) determining whether any activity conducted by Customer, its
                  users, agents, contractors, loan officers, or other personnel
                  using the Platform constitutes &ldquo;mortgage loan
                  origination&rdquo; or other covered or licensed activity; (b)
                  obtaining, maintaining, and ensuring compliance with all required
                  licenses, registrations, authorizations, and approvals (including
                  state licensing and NMLS requirements); (c) supervising all
                  licensed activity; (d) ensuring that all scripts, disclosures,
                  notices, and communications (including voice, SMS, and email)
                  comply with applicable mortgage, consumer finance, advertising,
                  and privacy laws; and (e) maintaining any required records and
                  retention practices.
                </p>
                <h3 className={h3}>
                  3.6 No legal, compliance, or licensing advice
                </h3>
                <p className={body}>
                  Provider does not provide legal, compliance, or licensing advice.
                  Provider does not verify Customer&rsquo;s licensing status, does
                  not determine whether any call or communication is
                  &ldquo;covered activity,&rdquo; and does not assume any
                  responsibility for Customer&rsquo;s compliance with mortgage
                  lending laws or state licensing requirements. Customer is solely
                  responsible for ensuring that all calls and communications
                  initiated, assisted, or facilitated through the Platform are
                  conducted by properly authorized personnel and in compliance with
                  law.
                </p>
                <h3 className={h3}>3.7 Customer data; storage and safeguarding</h3>
                <p className={body}>
                  Customer remains responsible for the accuracy, integrity, and
                  legality of Customer Data, including any personal information,
                  consumer financial information, or other regulated data. Customer
                  is responsible for configuring the Platform and its connected
                  systems to meet Customer&rsquo;s data storage, retention,
                  encryption, access control, and privacy obligations.
                  Provider&rsquo;s security obligations are described in Section 8;
                  however, Provider is not responsible for Customer&rsquo;s
                  internal policies, regulatory storage requirements, or
                  recordkeeping obligations, including those applicable to mortgage
                  origination or servicing.
                </p>
              </div>
            </div>

            <div className={sectionDivider} role="separator" aria-hidden="true" />

            <div id="msa-fees" className={sectionGap}>
              <h2 className={h2}>
                4) Fees; billing; payment; overages; cancellation mechanics
              </h2>
              <div className={blockGap}>
                <h3 className={h3}>4.1 Fees</h3>
                <p className={body}>
                  Customer will pay Provider the Subscription Fees and any Add-On
                  fees set forth in the applicable Order Form(s).
                </p>
                <h3 className={h3}>4.2 Subscription billing timing (monthly in advance)</h3>
                <p className={body}>
                  All subscription charges are billed and collected on the 1st day
                  of each month, in advance, for that calendar month&rsquo;s access
                  and Included Credits (e.g., Jan 1 payment covers Jan 1–Jan 31).
                </p>
                <h3 className={h3}>4.3 Overage billing timing (15th of following month)</h3>
                <p className={body}>
                  Overage charges for a calendar month are billed on the 15th day
                  of the following month (e.g., January overages billed Feb 15),
                  unless blocked under Section 4.6.
                </p>
                <h3 className={h3}>4.4 Payment method</h3>
                <p className={body}>
                  Customer authorizes Provider (and its payment processor) to
                  charge the payment method on file for all amounts due under this
                  Agreement.
                </p>
                <h3 className={h3}>4.5 Taxes</h3>
                <p className={body}>
                  Fees are exclusive of taxes. Customer is responsible for
                  applicable sales, use, VAT, telecom surcharges, or similar taxes
                  (excluding taxes on Provider&rsquo;s income).
                </p>
                <h3 className={h3}>
                  4.6 Hard stop on overages during cancellation notice period
                </h3>
                <p className={body}>
                  If Customer provides notice of non-renewal or early termination
                  under Section 6 and enters a Cancellation Notice Period (defined
                  below), Provider will enforce a hard stop so that Customer cannot
                  incur Overages during that period. Customer may continue to use
                  the Platform up to its Included Credits (or as otherwise
                  specified), but no Overages may be incurred or billed during the
                  Cancellation Notice Period.
                </p>
                <h3 className={h3}>4.7 Late payments</h3>
                <p className={body}>
                  Overdue undisputed amounts may accrue interest at the lesser of
                  1.5% per month or the maximum permitted by law, plus reasonable
                  collection costs. Provider may suspend access for nonpayment
                  after notice and a reasonable cure period.
                </p>
                <h3 className={h3}>4.8 Invoice disputes</h3>
                <p className={body}>
                  Customer must notify Provider of any good-faith dispute regarding
                  an invoice within thirty (30) days of the invoice date,
                  otherwise the invoice will be deemed accepted.
                </p>
              </div>
            </div>

            <div className={sectionDivider} role="separator" aria-hidden="true" />

            <div id="msa-onboarding" className={sectionGap}>
              <h2 className={h2}>5) Onboarding; implementation; support</h2>
              <div className={blockGap}>
                <h3 className={h3}>5.1 Onboarding fee (if applicable)</h3>
                <p className={body}>
                  If an onboarding / implementation fee is listed on an Order Form
                  (e.g., $2,500 one-time onboarding fee), it is due per the Order
                  Form and is non-refundable once onboarding begins, except as
                  required by law.
                </p>
                <h3 className={h3}>5.2 Support</h3>
                <p className={body}>
                  Support levels (standard, priority, dedicated success manager) are
                  as described in the Order Form and Documentation.
                </p>
              </div>
            </div>

            <div className={sectionDivider} role="separator" aria-hidden="true" />

            <div id="msa-term" className={sectionGap}>
              <h2 className={h2}>6) Term; renewal; cancellation; early termination</h2>
              <div className={blockGap}>
                <h3 className={h3}>6.1 Term</h3>
                <p className={body}>
                  The term begins on the Effective Date and continues for the
                  initial term stated in the Order Form (&ldquo;Initial
                  Term&rdquo;).
                </p>
                <h3 className={h3}>6.2 Auto-renewal</h3>
                <p className={body}>
                  Unless Customer provides written notice of non-renewal at least
                  sixty (60) days before the end of the then-current term, the
                  subscription will renew for an additional term of the same length
                  (or as stated in the Order Form).
                </p>
                <h3 className={h3}>
                  6.3 Early termination for convenience (annual plans) – 2-month
                  subscription penalty + 60-day notice + no overages
                </h3>
                <ol className={listLowerAlpha}>
                  <li>
                    Customer may request early termination of an annual plan by
                    providing at least sixty (60) days&rsquo; written notice
                    (&ldquo;Cancellation Notice Period&rdquo;).
                  </li>
                  <li>
                    Customer must pay a two (2) month subscription penalty equal to
                    two monthly Subscription Fees at Customer&rsquo;s then-current
                    plan rate (the &ldquo;Early Termination Fee&rdquo;).
                  </li>
                  <li>
                    During the Cancellation Notice Period, Customer retains access
                    to the Platform but Overages are blocked under Section 4.6.
                  </li>
                  <li>
                    The Early Termination Fee is billed either (i) immediately upon
                    notice, or (ii) over the next two monthly invoices, at
                    Provider&rsquo;s option, unless otherwise stated in the Order
                    Form.
                  </li>
                </ol>
                <h3 className={h3}>6.4 Termination for cause</h3>
                <p className={body}>
                  Either Party may terminate for material breach if not cured within
                  thirty (30) days after written notice (ten (10) days for
                  nonpayment).
                </p>
                <h3 className={h3}>6.5 Effect of termination</h3>
                <p className={body}>
                  Upon termination/expiration: (i) access ends (except during the
                  Cancellation Notice Period); (ii) accrued payment obligations
                  survive; (iii) upon request, Provider will make Customer Data
                  available for export for thirty (30) days after termination, unless
                  legally prohibited.
                </p>
              </div>
            </div>

            <div className={sectionDivider} role="separator" aria-hidden="true" />

            <div id="msa-confidentiality" className={sectionGap}>
              <h2 className={h2}>7) Confidentiality</h2>
              <p className={body}>
                Each Party may receive Confidential Information from the other. The
                receiving Party will protect it using at least reasonable care and
                use it only to perform under this Agreement. Confidential
                Information excludes information that is publicly available without
                breach, independently developed, or rightfully received from a third
                party without restriction. Either Party may disclose Confidential
                Information if required by law, provided it gives notice (if legally
                permitted).
              </p>
            </div>

            <div className={sectionDivider} role="separator" aria-hidden="true" />

            <div id="msa-data" className={sectionGap}>
              <h2 className={h2}>8) Data; security; privacy</h2>
              <div className={blockGap}>
                <h3 className={h3}>8.1 Customer data</h3>
                <p className={body}>
                  Customer retains ownership of Customer Data. Customer grants
                  Provider the right to host, process, transmit, and display
                  Customer Data to provide the services.
                </p>
                <h3 className={h3}>8.2 Security</h3>
                <p className={body}>
                  Provider will use reasonable administrative, technical, and
                  physical safeguards designed to protect Customer Data.
                </p>
                <h3 className={h3}>8.3 Privacy</h3>
                <p className={body}>
                  To the extent Provider processes personal data, the Parties will
                  comply with applicable privacy laws. If required, the Parties will
                  execute a Data Processing Addendum (&ldquo;DPA&rdquo;).
                </p>
                <h3 className={h3}>8.4 AI and model training (Option A – conservative)</h3>
                <p className={body}>
                  Provider will not use Customer Data to train foundation models.
                  Provider may use de-identified and aggregated usage telemetry to
                  improve service reliability and performance.
                </p>
              </div>
            </div>

            <div className={sectionDivider} role="separator" aria-hidden="true" />

            <div id="msa-warranties" className={sectionGap}>
              <h2 className={h2}>9) Warranties; disclaimers</h2>
              <div className={blockGap}>
                <h3 className={h3}>9.1 Authority</h3>
                <p className={body}>
                  Each Party warrants it has authority to enter this Agreement.
                </p>
                <h3 className={h3}>9.2 Disclaimer</h3>
                <p className={body}>
                  EXCEPT AS EXPRESSLY STATED, THE PLATFORM IS PROVIDED &ldquo;AS
                  IS.&rdquo; PROVIDER DISCLAIMS ALL IMPLIED WARRANTIES, INCLUDING
                  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND
                  NON-INFRINGEMENT. Provider does not warrant specific ROI,
                  transfer rates, conversion rates, or revenue results.
                </p>
                <h3 className={h3}>9.3 Provider provisioned leads</h3>
                <p className={body}>
                  To the extent Customer receives leads provisioned by Provider
                  (&ldquo;Provisioned Leads&rdquo;), Customer acknowledges that
                  Provider obtains such leads—including consent to call such
                  leads—from third parties over which Provider has no authority or
                  control. Although Provider obtains the leads from reputable third
                  parties and requires those third parties to provide only leads
                  supported by adequate consent, Provider makes no guarantees or
                  warranties as to the accuracy of Provisioned Leads or to the
                  validity or sufficiency of consent obtained by third parties to
                  call Provisioned Leads. Provider shall have no liability to
                  Customer related to the validity or sufficiency of consent for use
                  of the Provisioned Leads.
                </p>
                <h3 className={h3}>9.4 Changes</h3>
                <p className={body}>
                  Provider may update features and the Platform from time to time.
                  If a change materially reduces core functionality of the purchased
                  plan, Customer may terminate and receive a prorated refund of
                  prepaid unused subscription fees (if any), as Customer&rsquo;s
                  sole remedy.
                </p>
              </div>
            </div>

            <div className={sectionDivider} role="separator" aria-hidden="true" />

            <div id="msa-liability" className={sectionGap}>
              <h2 className={h2}>10) Limitation of liability</h2>
              <div className={blockGap}>
                <h3 className={h3}>10.1 Cap</h3>
                <p className={body}>
                  EXCEPT FOR EXCLUDED CLAIMS BELOW, EACH PARTY&rsquo;S TOTAL
                  LIABILITY ARISING OUT OF OR RELATED TO THIS AGREEMENT WILL NOT
                  EXCEED THE AMOUNTS PAID OR PAYABLE BY CUSTOMER TO PROVIDER IN THE
                  TWELVE (12) MONTHS PRECEDING THE EVENT GIVING RISE TO THE CLAIM.
                </p>
                <h3 className={h3}>10.2 No consequential damages</h3>
                <p className={body}>
                  NEITHER PARTY IS LIABLE FOR INDIRECT, INCIDENTAL, SPECIAL,
                  CONSEQUENTIAL, OR PUNITIVE DAMAGES OR LOST PROFITS, EVEN IF ADVISED
                  OF THE POSSIBILITY.
                </p>
                <h3 className={h3}>10.3 Excluded claims</h3>
                <p className={body}>
                  The limitation does not apply to: (a) Customer&rsquo;s payment
                  obligations; (b) breach of confidentiality; (c)
                  infringement/misappropriation of the other Party&rsquo;s IP; (d)
                  any claim against the Provider for violations of the Laws
                  Applicable to Customer&rsquo;s Communications; and (e) claims
                  sounding in fraud or willful misconduct.
                </p>
              </div>
            </div>

            <div className={sectionDivider} role="separator" aria-hidden="true" />

            <div id="msa-indemnification" className={sectionGap}>
              <h2 className={h2}>11) Indemnification</h2>
              <div className={blockGap}>
                <h3 className={h3}>11.1 By Customer</h3>
                <p className={body}>
                  Customer will to the fullest extent possible indemnify and hold
                  harmless Provider from any and all claims, lawsuits, liability,
                  threats, subpoenas, and other types of proceedings arising from
                  (a) Customer&rsquo;s content, lead sources, consent violations, or
                  unlawful outreach; (b) Customer&rsquo;s breach of Section 3; (c)
                  actual or alleged breaches of the Laws Applicable to
                  Customer&rsquo;s Communications by the Customer; and (d)
                  Customer&rsquo;s other misuse of the Platform in violation of
                  this Agreement. Customer&rsquo;s indemnification obligations
                  pursuant to this Section include compensating Provider for the
                  attorneys&rsquo; fees Provider incurs in defending against the
                  claims, lawsuits, threats, subpoenas and other types of
                  proceedings covered by this Section.
                </p>
                <h3 className={h3}>11.2 By Provider (IP)</h3>
                <p className={body}>
                  Provider will indemnify Customer from third-party claims alleging
                  the Platform infringes a U.S. copyright, trademark, or patent, and
                  will pay awarded damages, provided Customer promptly notifies
                  Provider and allows Provider to control defense/settlement.
                  Provider may modify the Platform to avoid infringement or
                  terminate, and refund prepaid unused fees as Customer&rsquo;s sole
                  remedy.
                </p>
              </div>
            </div>

            <div className={sectionDivider} role="separator" aria-hidden="true" />

            <div id="msa-ip" className={sectionGap}>
              <h2 className={h2}>12) Intellectual property</h2>
              <p className={body}>
                Provider retains all right, title, and interest in and to the
                Platform, Documentation, and Provider IP. Customer retains all
                rights in Customer Data and Customer IP. Feedback may be used by
                Provider without restriction.
              </p>
            </div>

            <div className={sectionDivider} role="separator" aria-hidden="true" />

            <div id="msa-general" className={sectionGap}>
              <h2 className={h2}>13) General</h2>
              <div className={blockGap}>
                <h3 className={h3}>13.1 Assignment</h3>
                <p className={body}>
                  Neither Party may assign without the other&rsquo;s consent,
                  except to an affiliate or in connection with merger/sale of
                  substantially all assets.
                </p>
                <h3 className={h3}>13.2 Independent contractors</h3>
                <p className={body}>
                  Each Party agrees that the other is acting as an independent
                  contractor with respect to this Agreement, and neither Party
                  shall have the right to bind or obligate the other Party. Nothing
                  in this Agreement shall be deemed or construed to create an
                  agency, partnership, or joint venture between Provider and
                  Customer. Customer shall not represent that the Provider is acting
                  on Customer&rsquo;s behalf or as agent for the Customer.
                </p>
                <h3 className={h3}>13.3 Governing law; venue</h3>
                <p className={body}>
                  This Agreement is governed by the laws of the State of Florida,
                  without regard to its conflict of laws principles. Any disputes
                  arising out of or relating to this Agreement shall be brought
                  exclusively in the federal or state courts located in Lee County,
                  Florida, and each party consents to the personal jurisdiction of
                  such courts.
                </p>
                <h3 className={h3}>13.4 Notices</h3>
                <p className={body}>
                  Notices must be in writing and delivered to the addresses in the
                  Order Form (email allowed if specified).
                </p>
                <h3 className={h3}>13.5 Entire agreement</h3>
                <p className={body}>
                  This Agreement + Order Forms + any DPA/SOW is the entire agreement
                  and supersedes prior discussions.
                </p>
                <h3 className={h3}>13.6 Order of precedence</h3>
                <p className={body}>
                  In the event of conflict, this form takes precedence over the
                  DPA/SOW/Order Form.
                </p>
              </div>
            </div>

            <div className={sectionDivider} role="separator" aria-hidden="true" />

            <div className={sectionGap}>
              <p className={`${body} font-semibold text-[#202020]`}>
                IN WITNESS WHEREOF, the Parties have executed this Agreement as of
                the Effective Date.
              </p>
              <div className="mt-6 grid gap-8 sm:grid-cols-2">
                <div className={blockGap}>
                  <p className={`${body} font-semibold text-[#202020]`}>Provider</p>
                  <p className={body}>[Provider Legal Name]</p>
                  <p className={`${body} mt-4`}>
                    By: ________________________
                    <br />
                    Name/Title: __________________
                    <br />
                    Date: _________
                  </p>
                </div>
                <div className={blockGap}>
                  <p className={`${body} font-semibold text-[#202020]`}>Customer</p>
                  <p className={body}>[Customer Legal Name]</p>
                  <p className={`${body} mt-4`}>
                    By: ________________________
                    <br />
                    Name/Title: __________________
                    <br />
                    Date: _________
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SubscriptionAgreementContent;
