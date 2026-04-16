import Link from "next/link";

const body =
  "text-[16px] leading-[26px] font-medium tracking-[-0.16px] text-[#646464] break-words [overflow-wrap:anywhere]";
const listPlain =
  "text-[16px] leading-[26px] font-medium tracking-[-0.16px] text-[#202020] list-none flex flex-col break-words [overflow-wrap:anywhere]";
const listBulleted =
  "text-[16px] leading-[26px] font-medium tracking-[-0.16px] text-[#646464] list-disc list-outside pl-5 space-y-1 marker:text-[#646464] break-words [overflow-wrap:anywhere]";
const listNumbered =
  "text-[16px] leading-[26px] font-medium tracking-[-0.16px] text-[#646464] list-decimal list-outside pl-5 space-y-1 marker:text-[#646464] break-words [overflow-wrap:anywhere]";
const listLowerAlpha =
  "text-[16px] leading-[26px] font-medium tracking-[-0.16px] text-[#646464] list-[lower-alpha] list-outside pl-5 space-y-1 marker:text-[#646464] break-words [overflow-wrap:anywhere]";
const listLowerRoman =
  "text-[16px] leading-[26px] font-medium tracking-[-0.16px] text-[#646464] list-[lower-roman] list-outside pl-5 space-y-1 marker:text-[#646464] break-words [overflow-wrap:anywhere]";
const h2 =
  "text-[20px] leading-[28px] font-semibold tracking-[-0.03px] text-[#202020]";
const h3 =
  "text-[18px] leading-[26px] font-semibold tracking-[-0.36px] text-[#202020]";
const sectionGap = "flex flex-col gap-4 mt-4";
const blockGap = "flex flex-col gap-2";
const sectionDivider = "w-full border-t border-[#E5E7EB]";

function TermsOfUseContent() {
  return (
    <section id="terms-of-use" className="relative z-0 w-full min-w-0">
      <div className="px-global">
        <div className="max-w-global mx-auto flex w-full min-w-0 flex-col border-x border-[#E5E7EB] px-3 py-8 sm:px-2">
          <div className="mx-auto flex w-full min-w-0 max-w-[744px] flex-col gap-4">
            <p className="text-[14px] leading-[20px] font-medium tracking-[-0.084px] text-[#646464]">
              Legal Policies
            </p>

            <h1 className="text-[36px] leading-[44px] font-medium tracking-[-1.08px] text-[#202020]">
              Terms of Use
            </h1>

            <div className={blockGap}>
              <h3 className={`${h3} font-semibold uppercase`}>
                Please read the following terms and conditions carefully.
              </h3>
              <p className={body}>
                Reinform, Inc. d/b/a Structurely (&ldquo;Structurely,&rdquo;
                &ldquo;we,&rdquo; or &ldquo;us&rdquo;), require that all visitors
                to the Web sites operated by Structurely at{" "}
                <a
                  href="https://www.structurely.com"
                  className="underline text-[#646464]"
                >
                  www.structurely.com
                </a>{" "}
                (the &ldquo;Site&rdquo;) adhere to the following terms and
                conditions of use. By accessing and using the Site, you agree,
                on your own behalf and on behalf of any corporation or other
                legal entity that you represent or for which you access the Site
                (your &ldquo;Company&rdquo;), to be bound by and comply with the
                following terms and conditions of use (these &ldquo;Terms&rdquo;)
                and to comply with all applicable laws and regulations. If you
                do not agree to these Terms, you are not authorized to use the
                Site.
              </p>
            </div>


            <div id="changes" className={sectionGap}>
              <h2 className={h2}>
                1. Changes to these terms and the Site
              </h2>
              <div className={blockGap}>
                <p className={body}>
                  We may change these Terms at any time, and all such changes are
                  effective immediately upon notice, which we may give by any
                  means, including, but not limited to, by posting a revised
                  version of these Terms or other notice on the Site. You should
                  view these Terms often to stay informed of changes that may
                  affect you. Your use of the Site constitutes your continuing
                  agreement to be bound by these Terms, as they are amended from
                  time to time. We expressly reserve the right to make any
                  changes that we deem appropriate from time to time to the Site
                  or to any information, text, data, databases, graphics, images,
                  sound recordings, video material, audio clips, logos, software,
                  features, services, and other materials within the Site (all
                  such materials, and any compilation, collection, or arrangement
                  thereof, the &ldquo;Content&rdquo;).
                </p>
              </div>
            </div>

            <div className={sectionDivider} role="separator" aria-hidden="true" />

            <div id="license" className={sectionGap}>
              <h2 className={h2}>2. License to access and use the Site</h2>
              <div className={blockGap}>
                <p className={body}>
                  <span>
                    1. YOU MAY ACCESS AND USE THIS SITE ONLY IF YOU ARE OVER THE AGE
                    OF 18, AND ONLY FOR YOUR PERSONAL USE (OR, IF ACCESSING THE
                    SITE ON BEHALF OF A COMPANY, ONLY YOUR COMPANY&rsquo;S OWN
                    INTERNAL USE).
                  </span>{" "}
                  Any other access to or use of the Site or the Content
                  constitutes a violation of these Terms and may violate
                  applicable copyright, trademark, or other laws. We make no
                  representation that the Site or Content is appropriate or
                  available for use in locations other than the United States. If
                  you choose to access this Site from locations other than in the
                  United States, you do so at your own initiative, at your own
                  risk, and are responsible for complying with applicable local
                  laws.
                </p>
                <p className={body}>
                  2. You may not access, use, or copy any portion of the Site or of
                  the Content through the use of bots, spiders, scrapers, web
                  crawlers, indexing agents, or other automated devices or
                  mechanisms. You agree not to remove or modify any copyright
                  notice or trademark legend, author attribution, or other notice
                  placed on or contained within any of the Content. Except as
                  expressly authorized by us in writing, in no event will you
                  reproduce, redistribute, duplicate, copy, sell, resell, or
                  exploit for any commercial purpose any portion of the Site or
                  the Content or any access to or use of the Site or the Content.
                </p>
                <p className={body}>
                  3. You represent and agree that all information that you provide to
                  us in connection with your access to and use of the Site is
                  true, accurate, and complete to the best of your knowledge and
                  belief.
                </p>
              </div>
            </div>

            <div className={sectionDivider} role="separator" aria-hidden="true" />

            <div id="privacy-policy-reference" className={sectionGap}>
              <h2 className={h2}>3. Privacy Policy</h2>
              <div className={blockGap}>
                <p className={body}>
                  Information that you provide to us or that we collect about you
                  and your Company through your access to and use of the Site is
                  subject to our{" "}
                  <Link
                    href="/privacy-policy"
                    className="underline text-[#646464]"
                  >
                    Privacy Policy
                  </Link>
                  , the terms of which are hereby incorporated by reference into
                  these Terms. We encourage you to read and become familiar with
                  our Privacy Policy.
                </p>
              </div>
            </div>

            <div className={sectionDivider} role="separator" aria-hidden="true" />

            <div id="intellectual-property" className={sectionGap}>
              <h2 className={h2}>4. Intellectual Property</h2>
              <div className={blockGap}>
                <p className={body}>
                  You understand and agree that we own, or (where applicable) we
                  have licensed from third parties, all right, title, and
                  interest in and to the Site and all of the Content. You
                  acknowledge and agree that the Content constitutes valuable
                  proprietary information that is protected by applicable
                  intellectual property and other proprietary rights, laws, and
                  treaties of the United States and other countries, and that you
                  acquire no ownership interest by accessing or using the Site or
                  the Content. Such intellectual property and proprietary rights
                  may include, but are not limited to, copyrights, trademarks and
                  service marks, trade dress, and trade secrets, and all such
                  rights are the property of Structurely or its licensors and
                  content providers.
                </p>
              </div>
            </div>

            <div className={sectionDivider} role="separator" aria-hidden="true" />

            <div id="copyright-policy" className={sectionGap}>
              <h2 className={h2}>5. Copyright Policy</h2>
              <div className={blockGap}>
                <p className={body}>
                  If you believe in good faith that any Content has been used in a
                  way that constitutes copyright infringement, you may forward the
                  following to us at Copyright Agent, Reinform, Inc. d/b/a
                  Structurely, 525 Kellogg Ave, #408, Ames, IA 50010,{" "}
                  <a
                    href="mailto:info@structurely.com"
                    className="underline text-[#646464]"
                  >
                    info@structurely.com
                  </a>
                  : (i) your contact information, including your name, address,
                  telephone number, and email address; (ii) identification and
                  description of each copyrighted work that you claim has been
                  infringed; (iii) the exact URL or location of the material that
                  you claim is infringing; (iv) a statement by you that you have a
                  good faith belief that the disputed use is not authorized by the
                  copyright owner, its agent, or the law; (v) an electronic or
                  physical signature of the person authorized to act on behalf of
                  the owner of the copyright interest; and (vi) a statement by you,
                  made under penalty of perjury, that the information in your
                  notice is accurate and that you are the copyright owner or are
                  authorized to act on behalf of the copyright owners.
                </p>
              </div>
            </div>

            <div className={sectionDivider} role="separator" aria-hidden="true" />

            <div id="termination" className={sectionGap}>
              <h2 className={h2}>6. Termination of Access</h2>
              <div className={blockGap}>
                <p className={body}>
                  Structurely reserves the right, in its sole discretion, to
                  terminate your access to all or part of the Site, without notice
                  or liability, for any reason, including, but not limited to: (a)
                  the unauthorized use of any username or password; or (b) the
                  breach of any agreement between you and Structurely,
                  including, without limitation, these Terms. Following any such
                  termination of access, you will continue to be bound hereunder to
                  the fullest extent applicable.
                </p>
                <p className={body}>
                  Upon being notified that your access is terminated, you must
                  destroy any materials you have obtained from the Site. You may
                  not access the Site after your access is terminated without our
                  written approval. After terminating your access, Structurely will
                  retain all rights, including all intellectual property rights,
                  proprietary rights, and licenses retained in these Terms, and
                  the limitations upon your use and treatment of Content will
                  remain in full force.
                </p>
              </div>
            </div>

            <div className={sectionDivider} role="separator" aria-hidden="true" />

            <div id="user-conduct" className={sectionGap}>
              <h2 className={h2}>7. User Conduct</h2>
              <div className={blockGap}>
                <p className={body}>
                  In connection with your access and use of the Site and that of
                  any person authorized by you to access and use the Site, you are
                  responsible for complying with all applicable laws, regulations,
                  and policies of all relevant jurisdictions, including all
                  applicable local rules regarding online conduct. Not in
                  limitation of the previous sentence, in connection with your use
                  of the Site, neither you nor the Company may cause or permit any
                  person to do any of the following:
                </p>
                <ol className={listNumbered}>
                  <li>
                    use the Site or Content for any unlawful purpose;
                  </li>
                  <li>
                    use the Site to post or transmit any material that contains
                    any viruses, Trojan horses, worms, time bombs, cancelbots,
                    malware, adware, or other computer programming routines that
                    may damage, interfere with, surreptitiously intercept, or
                    expropriate any system, data, or personal information;
                  </li>
                  <li>
                    impose an unreasonably or disproportionately large load on the
                    Site or otherwise interfere with or inhibit any other user of
                    this Site from using or enjoying the Site;
                  </li>
                  <li>
                    use the Site to post or transmit any unlawful, fraudulent,
                    libelous, defamatory, obscene, pornographic, profane,
                    threatening, abusive, hateful, offensive, harassing, or
                    otherwise objectionable information of any kind;
                  </li>
                  <li>
                    use the Site to post or transmit any information which is
                    invasive of another&rsquo;s privacy or publicity rights or that
                    otherwise violates or infringes in any way upon the rights of
                    others; and
                  </li>
                  <li>
                    use the Site to post or transmit any advertisements,
                    solicitations, chain letters, pyramid schemes, investment
                    opportunities or schemes, or other unsolicited commercial
                    communication; and
                  </li>
                  <li>
                    use the Site to contact others in violation of the Telephone
                    Consumer Protection Act (&ldquo;TCPA&rdquo;), 47 U.S.C. § 227,
                    Federal Communications Commission regulations implementing the
                    TCPA, including 47 C.F.R. § 64.1200(c)-(d), Do Not Call
                    regulations, and similar state rules prohibiting certain calls
                    or other types of outreaches, privacy laws, Do-Not-Call
                    obligations, consent requirements, and recording laws
                    (one-party/two-party consent) as applicable (together,
                    &ldquo;Laws Applicable to Customer&rsquo;s
                    Communications&rdquo;).
                  </li>
                </ol>
              </div>
            </div>

            <div className={sectionDivider} role="separator" aria-hidden="true" />

            <div id="submissions" className={sectionGap}>
              <h2 className={h2}>8. Submissions</h2>
              <div className={blockGap}>
                <p className={body}>
                  By disclosing or offering any information to us, including
                  comments, computer files, documents, graphics, suggestions,
                  ideas, or other information (each, a &ldquo;Submission&rdquo;),
                  either through your use of the Site or otherwise, you authorize
                  Structurely to make such copies thereof as we deem necessary,
                  including to facilitate the posting and storage of the Submission
                  on the Site. By making a Submission, you automatically grant, and
                  you represent and warrant that you have the right to grant, to
                  Structurely an irrevocable, perpetual, non-exclusive,
                  transferable, royalty-free, worldwide license to use, copy,
                  publicly perform, publicly display, reformat, translate, excerpt
                  (in whole or in part) and distribute such Submission for any
                  purpose, commercial, advertising, or otherwise, on or in
                  connection with the Site or the promotion thereof, to prepare
                  derivative works of, or incorporate into other works, such
                  Submission, and to grant and authorize sublicenses of the
                  foregoing.
                </p>
                <p className={body}>
                  By making a Submission, you represent that you have all requisite
                  rights to, and are authorized to disclose, all of the
                  information contained in the Submission. You are fully
                  responsible for any Submission you make and for the legality,
                  reliability, appropriateness, and originality thereof.
                </p>
              </div>
            </div>

            <div className={sectionDivider} role="separator" aria-hidden="true" />

            <div id="security" className={sectionGap}>
              <h2 className={h2}>9. Security</h2>
              <div className={blockGap}>
                <p className={body}>
                  Structurely takes such commercially reasonable measures as it
                  deems appropriate to secure and protect information transmitted
                  to and from the Site. Nevertheless, we cannot and do not
                  guarantee that any such transmissions are or will be totally
                  secure. You are responsible for maintaining the confidentiality
                  of any information about you, including any username and any
                  password used in connection with your use of the Site. You agree
                  to notify Structurely immediately if you discover loss or access
                  to such information by another party not under your control and
                  supervision. Structurely will not be liable for any loss or damage
                  arising from the unauthorized use of your username or password.
                </p>
              </div>
            </div>

            <div className={sectionDivider} role="separator" aria-hidden="true" />

            <div id="hyperlinks" className={sectionGap}>
              <h2 className={h2}>10. Hyperlinks</h2>
              <div className={blockGap}>
                <p className={body}>
                  This Site may include hyperlinks to other websites which are not
                  maintained by Structurely. We are not responsible for the content
                  of such external websites and we make no representations
                  whatsoever concerning the content or accuracy of, opinions
                  expressed in, or other links provided by such websites. The
                  inclusion of any hyperlink to external websites does not imply
                  endorsement by Structurely of those websites or any products or
                  services referred to therein. The terms of service and privacy
                  policies applicable to external websites may be different from
                  those applicable to our Site. If you decide to access any
                  external website through a link within our Site, you do so
                  entirely at your own risk, and Structurely will have no liability
                  for any loss or damage arising from your access or use of any
                  external website. Since Structurely is not responsible for the
                  availability of these websites, or their contents, you should
                  direct any concerns regarding an external website to the
                  administrator of that website. You agree that you will bring no
                  suit or claim against us arising from or based upon any such use
                  of external websites. Hyperlinks to other websites that are
                  provided on the Site are not intended to imply that: (a) we are
                  affiliated or associated with any external website; or (b) any
                  linked site is authorized to use any of our trademarks, trade
                  names, logos, or copyrights.
                </p>
              </div>
            </div>

            <div className={sectionDivider} role="separator" aria-hidden="true" />

            <div id="disclaimer" className={sectionGap}>
              <h2 className={h2}>11. Disclaimer</h2>
              <div className={blockGap}>
                <p className={body}>
                  THE USE OF THIS SITE BY YOU AND YOUR COMPANY IS AT YOUR AND ITS
                  SOLE RISK. ACCORDINGLY, THE SITE AND THE CONTENT ARE PROVIDED
                  &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE,&rdquo; WITHOUT
                  WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, INCLUDING
                  WITHOUT LIMITATION ANY IMPLIED WARRANTIES OF MERCHANTABILITY,
                  FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NONINFRINGEMENT, AND
                  ALL SUCH WARRANTIES ARE EXPRESSLY DISCLAIMED AND EXCLUDED, TO THE
                  FULLEST EXTENT PERMITTED BY LAW. SPECIFICALLY, STRUCTURELY AND
                  CONTENT-PROVIDERS DO NOT WARRANT THAT: (a) THE USE OF THIS SITE
                  OR ANY THIRD PARTY WEBSITE WILL BE UNINTERRUPTED OR ERROR-FREE;
                  (b) THE USE OF THIS SITE OR ANY SUCH THIRD PARTY WEBSITE WILL
                  ALLOW YOU TO OBTAIN ANY PARTICULAR RESULTS WHATSOEVER; (c) THE
                  CONTENT OR ANY INFORMATION, SERVICE OR MERCHANDISE PROVIDED
                  THROUGH THIS SITE OR ANY THIRD PARTY WEBSITE ARE OR WILL BE
                  ACCURATE, CURRENT, COMPLETE, RELIABLE, OR OF ANY PARTICULAR
                  VALUE OR QUALITY; (d) ANY DEFECTS IN THE SITE OR IN THE CONTENT
                  WILL BE CORRECTED; OR (e) THE SITE AND THE CONTENT ARE FREE OF
                  VIRUSES OR OTHER DISABLING DEVICES OR HARMFUL COMPONENTS.
                </p>
              </div>
            </div>

            <div className={sectionDivider} role="separator" aria-hidden="true" />

            <div id="limitation-of-liability" className={sectionGap}>
              <h2 className={h2}>12. Limitation of Liability</h2>
              <div className={blockGap}>
                <p className={body}>
                  In no event will Structurely, its contractors, suppliers,
                  content-providers, and other similar entities, and the officers,
                  directors, employees, representatives, and agents of each of
                  the foregoing (collectively, our &ldquo;Representatives&rdquo;),
                  be liable to you, your Company, or any third party for any
                  losses or damages, alleged under any legal theory, arising out of
                  or in connection with: (a) your use of, or reliance on, the Site
                  or the Content; (b) our performance of or failure to perform our
                  obligations in connection with these Terms; (c) the defamatory,
                  offensive, or illegal conduct of other users of the Site or of
                  third parties; or (d) your purchase or use of any goods or
                  services provided by third parties.
                </p>
                <p className={body}>
                  Under no circumstances will Structurely or our Representatives
                  be liable to you, your Company, or any third party for any
                  indirect, consequential, incidental, punitive, special, or
                  similar damages or costs (including, but not limited to, lost
                  profits or data, loss of goodwill, loss of or damage to property,
                  loss of use, business interruption, and claims of third parties)
                  arising out of or in connection with these Terms or the use of
                  the Site or the Content, or the transmission of information to
                  or from the Site over the Internet, even if we were advised,
                  knew, or should have known of the possibility of such damages or
                  costs. In a jurisdiction that does not allow the exclusion or
                  limitation of liability for certain damages, the liability of
                  Structurely and the Representatives will be limited in
                  accordance with these Terms to the extent permitted by law.
                </p>
                <p className={body}>
                  Without limiting any of the foregoing, if Structurely or any of
                  the Representatives are found liable to you or to any third party
                  as a result of any claims or other matters arising under or in
                  connection with these Terms, the Site, or your use of the Site,
                  the maximum liability for all such claims and other matters will
                  not exceed $100 in any calendar year.
                </p>
              </div>
            </div>

            <div className={sectionDivider} role="separator" aria-hidden="true" />

            <div id="waiver-and-release" className={sectionGap}>
              <h2 className={h2}>13. Waiver and Release</h2>
              <div className={blockGap}>
                <p className={body}>
                  You fully and forever waive, release, and discharge Structurely
                  and each of its Representatives from any and all claims,
                  damages, demands, rights of action or causes of action, present or
                  future, known or unknown, anticipated or unanticipated,
                  resulting from or arising out of the Site.
                </p>
              </div>
            </div>

            <div className={sectionDivider} role="separator" aria-hidden="true" />

            <div id="indemnification" className={sectionGap}>
              <h2 className={h2}>14. Indemnification</h2>
              <div className={blockGap}>
                <p className={body}>
                  You agree to defend, indemnify and hold harmless Structurely, and
                  our officers, directors, employees, representatives, and agents,
                  from and against all claims, demands, suits, or other
                  proceedings, and all resulting loss, damage, liability, cost, and
                  expense (including reasonable attorneys&rsquo; fees), arising
                  out of: (a) content, data, or information that you submit, post
                  to, or transmit through the Site, including, but not limited to,
                  as a result of your use of demonstration features on the
                  Structurely Site; (b) your access to and use of
                  the Content, the Site, and other materials, products, and
                  services available on or through the Site and Structurely; (c)
                  your violation of these Terms; (d) your violation of any rights
                  of any third party; (e) your website; and (f) any unauthorized
                  use of a username, password, or account number. We reserve, and
                  you grant to us, the right to assume the exclusive defense and
                  control of any matter subject to indemnification by you
                  hereunder.
                </p>
              </div>
            </div>

            <div className={sectionDivider} role="separator" aria-hidden="true" />

            <div id="arbitration" className={sectionGap}>
              <h2 className={h2}>15. Disputes Subject to Binding Arbitration</h2>
              <div className={blockGap}>
                <p className={body}>
                  These Terms will be construed and enforced in accordance with
                  the laws of the State of Iowa, without regard to the conflicts
                  of law provisions thereof. You expressly agree that any claim or
                  controversy arising out of or related to the Terms, the Site, or
                  the Content shall be settled by binding arbitration to be held in
                  Chicago, Illinois, before a single arbitrator, in accordance with
                  the commercial arbitration rules of the American Arbitration
                  Association. Any dispute relating to the validity or scope of
                  this Agreement, as well as other aspects of arbitrability of the
                  dispute between the parties, shall be resolved by the arbitrator.
                  Any such claim or controversy shall be arbitrated on an
                  individual basis and shall not be consolidated with a claim of
                  any other party. Each party shall bear its own costs relating to
                  such arbitration, and the parties shall equally share the
                  arbitrator&rsquo;s fees. Judgment on any award resulting from
                  such arbitration may be entered in any court having jurisdiction.
                  You further agree and expressly consent to the exercise of
                  personal jurisdiction in the courts of the State of Illinois for
                  the enforcement of this arbitration agreement and of any such
                  award. The foregoing shall not preclude Structurely from seeking
                  any injunctive relief in any court of competent jurisdiction for
                  protection of Structurely&rsquo;s intellectual property rights.
                </p>
              </div>
            </div>

            <div className={sectionDivider} role="separator" aria-hidden="true" />

            <div id="third-party-services" className={sectionGap}>
              <h2 className={h2}>16. Third-Party Services</h2>
              <div className={blockGap}>
                <p className={body}>
                  Our website utilizes various third-party services to enhance user
                  experience, including Google reCAPTCHA. Google reCAPTCHA is used
                  to protect our site from spam and abuse. By using our site, you
                  agree to the collection and processing of data by Google as
                  described in their{" "}
                  <a
                    href="https://policies.google.com/privacy"
                    className="underline text-[#646464]"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Privacy Policy
                  </a>{" "}
                  and{" "}
                  <a
                    href="https://policies.google.com/terms"
                    className="underline text-[#646464]"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Terms of Service
                  </a>
                  .
                </p>
              </div>
            </div>

            <div className={sectionDivider} role="separator" aria-hidden="true" />

            <div id="miscellaneous" className={sectionGap}>
              <h2 className={h2}>17. Miscellaneous</h2>
              <div className={blockGap}>
                <ol className={listNumbered}>
                  <li>
                    These Terms and the Privacy Policy (as each may be revised and
                    amended from time to time according to their respective terms)
                    collectively constitute the entire agreement with respect to your
                    access to and use of the Site and the Content.
                  </li>
                  <li>
                    Our electronically or otherwise properly stored copy of these
                    Terms will be deemed to be the true, complete, valid, authentic,
                    and enforceable copy, and you agree that you will not contest the
                    admissibility or enforceability of our copy of these Terms in
                    connection with any action or proceeding arising out of or
                    relating to these Terms.
                  </li>
                  <li>
                    Any provisions of these Terms that are reasonably inferable to
                    have been intended to survive termination (including, but not
                    limited to, any provisions regarding limitation of our liability
                    or indemnification) will continue in effect beyond any such
                    termination of access to this Site.
                  </li>
                  <li>
                    These Terms do not confer any rights, remedies, or benefits upon
                    any person other than you.
                  </li>
                  <li>
                    We may assign our rights and duties under these Terms at any time
                    to any third party without notice. You may not assign these Terms
                    without our prior written consent.
                  </li>
                  <li>
                    Our waiver of any breach of these Terms will not be a waiver of
                    any preceding or subsequent breach thereof.
                  </li>
                  <li>
                    If any provision of these Terms is held to be invalid or
                    unenforceable, that provision will be stricken and will not affect
                    the validity and enforceability of any remaining provisions.
                  </li>
                  <li>
                    Possible evidence of use of the Site for illegal purposes will be
                    provided to law enforcement authorities.
                  </li>
                  <li>
                    Discontinuation of use of this Site is your sole right and remedy
                    for any dissatisfaction with the Site or any of the Content.
                  </li>
                </ol>
              </div>
            </div>

            <div className={sectionDivider} role="separator" aria-hidden="true" />

            <div id="other-agreements" className={sectionGap}>
              <h2 className={h2}>18. Other Agreements</h2>
              <div className={blockGap}>
                <p className={body}>
                  If you have entered into a separate written agreement with
                  Structurely with respect to your use of the Site or any Content,
                  that agreement will supersede these Terms to the extent they are
                  in conflict.
                </p>
              </div>
            </div>

            <div className={sectionDivider} role="separator" aria-hidden="true" />

            <div id="questions" className={sectionGap}>
              <h2 className={h2}>19. Questions and pre-dispute resolution</h2>
              <div className={blockGap}>
                <p className={body}>
                  Please contact us with any questions regarding the Site or these
                  Terms at: Reinform, Inc. d/b/a Structurely, 525 Kellogg Ave, #408,
                  Ames, IA 50010{" "}
                  <a
                    href="mailto:info@structurely.com"
                    className="underline text-[#646464]"
                  >
                    info@structurely.com
                  </a>
                </p>
                <p className={body}>
                  Contacting Structurely as provided in this Paragraph 19, and
                  allowing Structurely an opportunity to resolve the dispute within
                  30 calendar days is a condition precedent to initiation of any
                  formal dispute with Structurely.
                </p>
              </div>
            </div>

            <div className={sectionDivider} role="separator" aria-hidden="true" />

            <div id="independent-contractors" className={sectionGap}>
              <h2 className={h2}>20. Independent contractors</h2>
              <div className={blockGap}>
                <p className={body}>
                  Each Party agrees that the other is acting as an independent
                  contractor with respect to this Agreement, and neither Party shall
                  have the right to bind or obligate the other Party. Nothing in
                  this Agreement shall be deemed or construed to create an agency,
                  partnership, or joint venture between Structurely and Customer.
                </p>
              </div>
            </div>

            <div className={sectionDivider} role="separator" aria-hidden="true" />

            <div id="acknowledgement" className={sectionGap}>
              <h2 className={h2}>21. Acknowledgement</h2>
              <div className={blockGap}>
                <p className={body}>
                  BY ACCESSING AND USING THE SITE, YOU AGREE TO BE BOUND BY THESE
                  TERMS AND THE PRIVACY POLICY.
                </p>
              </div>
            </div>

            <div className={sectionDivider} role="separator" aria-hidden="true" />

            <div id="supplemental-terms" className={sectionGap}>
              <h2 className="text-[24px] leading-[32px] font-semibold tracking-[-0.03px] text-[#202020]">
                Supplemental Terms for Business Customers
              </h2>
              <div className={blockGap}>
                <p className={body}>
                  In combination with the above Terms of Use, these Supplemental
                  Terms for Business Customers shall constitute the
                  &ldquo;Agreement&rdquo; between Reinform, Inc. d/b/a Structurely
                  and Customer for use of Structurely&rsquo;s services. Structurely
                  and Customer hereby agree to all of the provisions of this
                  Agreement.
                </p>
              </div>
              <ol className={`${listNumbered} mt-4 space-y-6`}>
                <li id="supplemental-user-terms" className="pl-0">
                  <span className="font-medium uppercase tracking-[-0.36px] ">
                    User terms of use
                  </span>
                  <ol className={`${listLowerAlpha} mt-2`}>
                    <li>
                      The above Terms of Use are hereby incorporated by reference
                      into this Agreement and form an integral part of the
                      Agreement.
                    </li>
                  </ol>
                </li>
                <li id="supplemental-pricing" className="pl-0">
                  <span className="font-medium uppercase tracking-[-0.36px]">
                    Pricing
                  </span>
                  <ol className={`${listLowerAlpha} mt-2`}>
                    <li>
                      <span className="block">
                        Subscription options for Structurely&rsquo;s services are as
                        follows:
                      </span>
                      <ol className={`${listLowerRoman} mt-2`}>
                        <li>
                          Bundle: $949 per month for up to 500 leads per month
                        </li>
                        <li>
                          Enterprise Bundle: $1,799 per month for up to 1000 leads
                          per month
                        </li>
                        <li>
                          Franchise: For pricing information, please contact us via
                          our site at{" "}
                          <Link
                            href="/contact"
                            className="underline text-[#646464]"
                          >
                            www.structurely.com/contact
                          </Link>{" "}
                          or e-mail us at{" "}
                          <a
                            href="mailto:info@structurely.com"
                            className="underline text-[#646464]"
                          >
                            info@structurely.com
                          </a>
                        </li>
                      </ol>
                    </li>
                  </ol>
                </li>
                <li id="supplemental-compliance" className="pl-0">
                  <span className="font-medium uppercase tracking-[-0.36px] ">
                    Compliance and Twilio pass along costs
                  </span>
                  <ol className={`${listLowerAlpha} mt-2`}>
                    <li>
                      <span className="block">
                        Compliance and Twilio pass along costs are as follows:
                      </span>
                      <ol className={`${listLowerRoman} mt-2`}>
                        <li>
                          Standard Bundle: $20 one-time setup fee + $88 monthly
                        </li>
                        <li>
                          Pro Bundle: $20 one-time setup fee + $148 monthly
                        </li>
                        <li>
                          Enterprise Bundle: $20 one-time set up fee + $278 monthly
                        </li>
                      </ol>
                    </li>
                  </ol>
                </li>
              </ol>
            </div>

            <div className={sectionDivider} role="separator" aria-hidden="true" />

            <div id="supplemental-term" className={sectionGap}>
              <h2 className="text-[24px] leading-[32px] font-semibold tracking-[-0.03px] text-[#202020]">Term</h2>
              <div className={blockGap}>
                <p className={body}>
                  The term of this Agreement shall begin on the date Customer
                  selects and begins paying for a subscription and shall
                  automatically renew quarterly unless otherwise terminated.
                </p>
              </div>
            </div>

            <div className={sectionDivider} role="separator" aria-hidden="true" />

            <div id="supplemental-termination" className={sectionGap}>
              <h2 className="text-[24px] leading-[32px] font-semibold tracking-[-0.03px] text-[#202020]">Termination</h2>
              <div className={blockGap}>
                <p className={body}>
                  <span>Without Cause -</span> Either party may terminate this
                  Agreement at any time and for any reason.
                </p>
                <p className={body}>
                  <span>Breach -</span> Either party shall have the right to
                  terminate this Agreement upon written notice if the other party
                  has breached a material term of this Agreement and has not cured
                  such breach within thirty (30) days of receipt of notice from the
                  non-breaching party specifying the breach.
                </p>
                <p className={body}>
                  <span>Payments -</span> All payments due hereunder are payable
                  in advance of the period to which they apply. Structurely shall
                  have the right to suspend or terminate access to the services, at
                  its sole option, with or without notice to Customer if any
                  payment is delinquent by more than sixty (60) days.
                </p>
               
              </div>
            </div>

            <div id="supplemental-effect-termination" className={sectionGap}>
              <h2 className="text-[24px] leading-[32px] font-semibold tracking-[-0.03px] text-[#202020]">
                Effect of Termination
              </h2>
              <div className={blockGap}>
                <p className={body}>
                  Neither Structurely nor its suppliers shall be liable to Customer
                  or any third party for suspension or termination of
                  Customer&rsquo;s access to, or right to use, the services under
                  this Agreement, provided such suspension or termination was done
                  in good faith. Customer shall owe and pay the balance due for the
                  services up to the date of termination.
                </p>
                <p className={body}>
                  Commensurate therewith, Structurely shall issue a pro rata refund
                  of any unused prepaid amounts, as applicable. Upon the effective
                  date of termination of this Agreement for any reason, Customer
                  and its authorized users&rsquo; access to the services shall
                  terminate and Customer shall cease accessing and using the
                  services immediately.
                </p>
              </div>
            </div>

            <div className={sectionDivider} role="separator" aria-hidden="true" />

            <div id="supplemental-scripts" className={sectionGap}>
              <h2 className="text-[24px] leading-[32px] font-semibold tracking-[-0.03px] text-[#202020]">Conversational Script Ownership</h2>
              <div className={blockGap}>
                <p className={body}>
                  Structurely acknowledges that all conversational scripts developed
                  in accordance with the Agreement between Structurely and Customer
                  are the sole property of Customer.
                </p>
              </div>
            </div>

            <div className={sectionDivider} role="separator" aria-hidden="true" />

            <div id="supplemental-representations" className={sectionGap}>
              <h2 className="text-[24px] leading-[32px] font-semibold tracking-[-0.03px] text-[#202020]">Customer&rsquo;s Representations</h2>
              <div className={blockGap}>
                <p className={body}>
                  Customer hereby represents that, in connection with
                  Customer&rsquo;s use of the Site and the services, Customer will
                  comply with all applicable laws and regulations, including the
                  Telephone Consumer Protection Act, 47 U.S.C. § 227
                  (&ldquo;TCPA&rdquo;), Federal Communications Commission regulations
                  implementing the TCPA, including 47 C.F.R. § 64.1200(c)-(d), Do
                  Not Call regulations, and similar state rules prohibiting certain
                  calls or other types of outreaches, privacy laws, Do-Not-Call
                  obligations, consent requirements, and recording laws
                  (one-party/two-party consent) as applicable (together, &ldquo;Laws
                  Applicable to Customer&rsquo;s Communications&rdquo;). Structurely
                  reserves the right to terminate Customer&rsquo;s use of the
                  services without notice or liability, in the event it learns of
                  any noncompliance with the Laws Applicable to Customer&rsquo;s
                  Communications.
                </p>
              </div>
            </div>

            <div className={sectionDivider} role="separator" aria-hidden="true" />

            <div id="supplemental-warranty" className={sectionGap}>
              <h2 className="text-[24px] leading-[32px] font-semibold tracking-[-0.03px] text-[#202020]">Warranty</h2>
              <div className={blockGap}>
                <p className={body}>
                  Neither Structurely nor its suppliers or licensors warrant that
                  Customer&rsquo;s use of the services will be uninterrupted or that
                  the services will be error-free. Both parties acknowledge that
                  software has inherent limitations, and Structurely does not
                  warrant that the services will meet Customer&rsquo;s requirements.
                  EXCEPT AS SET FORTH IN THIS AGREEMENT, TO THE MAXIMUM EXTENT
                  PERMITTED BY LAW, THERE ARE NO WARRANTIES OR CONDITIONS (WHETHER
                  IMPLIED OR ARISING BY STATUTE OR OTHERWISE IN LAW OR FROM A
                  COURSE OF DEALING OR USAGE OF TRADE) FOR THE SERVICES AND/OR ANY
                  DATA TRANSMITTED THROUGH THEM. STRUCTURELY AND ITS SUPPLIERS,
                  LICENSORS, AND PROVIDERS EXPRESSLY DISCLAIM ALL EXPRESS, STATUTORY,
                  OR IMPLIED WARRANTIES AND CONDITIONS, INCLUDING, WITHOUT
                  LIMITATION, THE CONDITIONS OR WARRANTIES OF MERCHANTABILITY,
                  FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
                </p>
                <p className={body}>
                  Customer represents that, in using the Site, including the
                  demonstration feature of the Site, the phone numbers entered by
                  Customer are accurate and any communications to those numbers are
                  made with the requisite degree of consent by the ultimate
                  recipient required by law.
                </p>
              </div>
            </div>

            <div className={sectionDivider} role="separator" aria-hidden="true" />

            <div id="supplemental-indemnification" className={sectionGap}>
              <h2 className="text-[24px] leading-[32px] font-semibold tracking-[-0.03px] text-[#202020]">
                Indemnification
              </h2>
              <div className={blockGap}>
                <p className={body}>
                  Customer shall defend, indemnify and hold harmless Structurely,
                  and its officers, directors, employees, representatives, and
                  agents, from and against all claims, demands, suits, or other
                  proceedings, and all resulting loss, damage, liability, cost, and
                  expense (including reasonable attorneys&rsquo; fees), arising from
                  Customer&rsquo;s breach of any warranties, representations, or
                  agreements made by Customer herein, and Customer&rsquo;s breach of
                  applicable laws and regulations, including the Telephone Consumer
                  Protection Act and other Laws Applicable to Customer&rsquo;s
                  Communications.
                </p>
              </div>
            </div>

            <div className={sectionDivider} role="separator" aria-hidden="true" />

            <div id="supplemental-limitation" className={sectionGap}>
              <h2 className="text-[24px] leading-[32px] font-semibold tracking-[-0.03px] text-[#202020]">
                Limitation of Liability
              </h2>
              <div className={blockGap}>
                <p className={`${body} font-medium text-[#202020]`}>
                  Limitation on Direct Damages.
                </p>
                <p className={body}>
                  In no event will Structurely, its contractors, suppliers, and
                  other similar entities, and the officers, directors, employees,
                  representatives, and agents of each of the foregoing be liable
                  to Customer or any third party for any losses or damages,
                  alleged under any legal theory, arising out of or in connection
                  with this Agreement, including but not limited to,
                  Customer&rsquo;s breach of representations as set forth in these
                  terms, including but not limited to, with respect to
                  Customer&rsquo;s compliance with the Telephone Consumer Protection
                  Act.
                </p>
                <p className={body}>
                  <span className="font-medium text-[#202020]">
                    Waiver of Consequential Damages.
                  </span>{" "}
                  IN NO EVENT WILL STRUCTURELY BE LIABLE TO CUSTOMER FOR ANY
                  INDIRECT, EXEMPLARY, SPECIAL, PUNITIVE, OR CONSEQUENTIAL DAMAGES,
                  INCLUDING, WITHOUT LIMITATION, LOSS OF PROFITS, WITHOUT REGARD TO
                  WHETHER SUCH CLAIM IS BASED IN CONTRACT, TORT (INCLUDING, WITHOUT
                  LIMITATION, NEGLIGENCE), PRODUCT LIABILITY, OR OTHERWISE, EVEN IF
                  CUSTOMER HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
                </p>
              </div>
            </div>

            <div className={sectionDivider} role="separator" aria-hidden="true" />

            <div id="supplemental-liability-exceptions" className={sectionGap}>
              <h2 className="text-[24px] leading-[32px] font-semibold tracking-[-0.03px] text-[#202020]">
                9. Exceptions to Limitation of Liability
              </h2>
              <p className={body}>
                The Limitations of Liability set forth in this Section 8 shall not
                apply to losses or damages due to Structurely&rsquo;s gross
                negligence, willful misconduct, or fraud.
              </p>
            </div>

            <div className={sectionDivider} role="separator" aria-hidden="true" />

            <div id="supplemental-governing-law" className={sectionGap}>
              <h2 className="text-[24px] leading-[32px] font-semibold tracking-[-0.03px] text-[#202020]">
                10. Governing Law; Venue
              </h2>
              <p className={body}>
                This Agreement is governed by the laws of the State of Florida,
                without regard to its conflict of laws principles. Any disputes
                arising out of or relating to this Agreement shall be brought
                exclusively in the federal or state courts located in Lee County,
                Florida, and each party consents to the personal jurisdiction of
                such courts.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TermsOfUseContent;
