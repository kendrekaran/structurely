import Link from "next/link";
import Image from "next/image";

const navColumns = [
  {
    title: "How it works",
    links: [
      { label: "Call AI", href: "#" },
      { label: "Text AI", href: "#" },
      { label: "Email AI", href: "#" },
      { label: "Appointment setting", href: "#" },
      { label: "Live phone transfers", href: "#" },
      { label: "Reporting", href: "#" },
      { label: "Script customization", href: "#" },
    ],
  },
  {
    title: "Why Structurely",
    links: [
      { label: "Our customers", href: "#" },
      { label: "Partners", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "#" },
      { label: "A2P compliance", href: "#" },
      { label: "Media", href: "#" },
      { label: "Help center", href: "#" },
      { label: "Glossary", href: "#" },
    ],
  },
  {
    title: "Account",
    links: [
      { label: "Pricing", href: "#" },
      { label: "Login", href: "#" },
      { label: "Privacy policy", href: "/privacy-policy" },
      { label: "Terms of use", href: "/terms-of-use" },
      { label: "Contact sales", href: "#" },
    ],
  },
];

export default function FooterSection() {
  return (
    <footer id="footer" className="relative z-0">
      <div className="px-global">
        <div className="max-w-global mx-auto border-x border-t border-[#E5E7EB]">
          <div className="flex flex-col lg:flex-row">
            <div className="flex w-full flex-col gap-8 border-b-2 border-[#006FFF] bg-white px-6 pt-8 pb-8 sm:px-8 md:px-12 lg:max-w-[290px] lg:min-w-[280px] lg:pt-16 lg:pr-24 lg:pb-16">
              <Image
                src="/assets/common/heading-logo.svg"
                alt="Structurely"
                width={92}
                height={24}
              />

              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-1">
                  <span className="text-[14px] leading-[20px] font-medium text-[#202020]">
                    Headquarters
                  </span>
                  <span className="text-[14px] leading-[20px] font-medium tracking-[-0.084px] text-[#646464]">
                    525 Kellogg Ave Unit 408, Ames, IA 50010
                  </span>
                </div>

                <div className="flex flex-col items-start gap-6">
                  <div className="flex flex-1 flex-col gap-1">
                    <span className="text-[14px] leading-[20px] font-medium text-[#202020]">
                      Sales
                    </span>
                    <span className="text-[14px] leading-[20px] font-medium tracking-[-0.084px] text-[#646464]">
                      (810) 498-2498
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col gap-1">
                    <span className="text-[14px] leading-[20px] font-medium text-[#202020]">
                      Support
                    </span>
                    <span className="text-[14px] leading-[20px] font-medium tracking-[-0.084px] text-[#646464]">
                      help@structurely.com
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid flex-1 grid-cols-2 place-items-stretch gap-8 border-[#E5E7EB] px-6 py-10 sm:px-8 md:px-12 lg:grid-cols-4 lg:gap-12 lg:border-l lg:py-16">
              {navColumns.map((col) => (
                <div key={col.title} className="flex min-w-0 flex-col gap-2">
                  <div className="py-[6px]">
                    <span className="text-[14px] leading-[20px] font-medium text-[#202020]">
                      {col.title}
                    </span>
                  </div>
                  <div className="flex flex-col gap-1">
                    {col.links.map((link) => (
                      <Link
                        key={link.label}
                        href={link.href}
                        className="py-[6px] text-[14px] leading-[20px] font-medium tracking-[-0.084px] text-[#646464] transition-colors hover:text-[#202020]"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4 border-t border-[#E5E7EB] px-6 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-8 md:px-12">
            <span className="text-center text-[12px] leading-[16px] font-medium text-[#646464] sm:text-left">
              © 2026 Structurely. All rights reserved.
            </span>

            <div className="flex items-center justify-center gap-4 sm:justify-start">
              <Link
                href="#"
                aria-label="Facebook"
                className="text-[#646464] transition-colors hover:text-[#202020]"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.3334 9.99984C18.3334 5.39752 14.6024 1.6665 10.0001 1.6665C5.39776 1.6665 1.66675 5.39752 1.66675 9.99984C1.66675 13.9081 4.35686 17.1876 7.98678 18.0882V12.5466H6.26687V9.99984H7.98678V8.90259C7.98678 6.06604 9.27008 4.75261 12.0534 4.75261C12.5803 4.75261 13.49 4.85585 13.8637 4.9591V7.26604C13.6668 7.24614 13.3233 7.23595 12.9002 7.23595C11.5335 7.23595 11.0067 7.75261 11.0067 9.09934V9.99984H13.7303L13.2637 12.5462H11.0104V18.2729C15.1365 17.7731 18.3334 14.2598 18.3334 9.99984Z"
                    fill="#646464"
                  />
                </svg>
              </Link>

              <Link
                href="#"
                aria-label="Instagram"
                className="text-[#646464] transition-colors hover:text-[#202020]"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.99992 3.50994C12.1137 3.50994 12.3641 3.51785 13.199 3.556C13.7008 3.56205 14.198 3.65432 14.6686 3.82876C15.0125 3.95568 15.3236 4.15808 15.579 4.42107C15.842 4.67646 16.0444 4.98756 16.1713 5.33149C16.3458 5.80212 16.438 6.29923 16.4441 6.80111C16.4823 7.63595 16.4902 7.88641 16.4902 10.0002C16.4902 12.1139 16.4823 12.3643 16.4441 13.1992C16.438 13.7011 16.3458 14.1982 16.1713 14.6688C16.0396 15.0103 15.8378 15.3205 15.579 15.5792C15.3203 15.8381 15.0101 16.0398 14.6686 16.1716C14.198 16.346 13.7008 16.4382 13.199 16.4443C12.3641 16.4825 12.1137 16.4904 9.99992 16.4904C7.88617 16.4904 7.63571 16.4825 6.80087 16.4443C6.29874 16.4383 5.80139 16.3461 5.33053 16.1716C4.98686 16.0446 4.67602 15.8422 4.42083 15.5792C4.15784 15.3238 3.95544 15.0127 3.82852 14.6688C3.65408 14.1982 3.56181 13.7011 3.55575 13.1992C3.51761 12.3643 3.50969 12.1139 3.50969 10.0002C3.50969 7.88641 3.51761 7.63595 3.55575 6.80111C3.56181 6.29923 3.65408 5.80212 3.82852 5.33149C3.95544 4.98756 4.15784 4.67646 4.42083 4.42107C4.67622 4.15808 4.98732 3.95568 5.33124 3.82876C5.80188 3.65432 6.29899 3.56205 6.80087 3.556C7.63571 3.51785 7.88617 3.50994 9.99992 3.50994ZM9.99992 2.0835C7.85019 2.0835 7.58029 2.09285 6.73609 2.131C6.07938 2.1441 5.42964 2.26845 4.8145 2.49876C4.286 2.69775 3.8073 3.00967 3.41181 3.41278C3.00905 3.80813 2.69738 4.28657 2.49852 4.81475C2.26845 5.42993 2.14434 6.07966 2.13147 6.73634C2.09189 7.58054 2.08325 7.85043 2.08325 10.0002C2.08325 12.1499 2.09261 12.4198 2.13147 13.264C2.14434 13.9207 2.26869 14.5704 2.49876 15.1856C2.69775 15.7141 3.00967 16.1928 3.41278 16.5883C3.80813 16.991 4.28657 17.3027 4.8145 17.5016C5.42993 17.7317 6.07966 17.8558 6.73634 17.8687C7.58054 17.9082 7.85043 17.9169 10.0002 17.9169C12.1499 17.9169 12.4198 17.9075 13.264 17.8687C13.9207 17.8558 14.5704 17.7314 15.1856 17.5016C15.7141 17.3027 16.1928 16.991 16.5883 16.5879C16.991 16.1925 17.3027 15.7141 17.5016 15.1862C17.7317 14.5707 17.8558 13.921 17.8687 13.2643C17.9082 12.4201 17.9169 12.1502 17.9169 10.0005C17.9169 7.85075 17.9075 7.58086 17.8687 6.73666C17.8558 6.07994 17.7314 5.43021 17.5016 4.81506C17.3027 4.28657 16.991 3.80784 16.5879 3.41234C16.1925 3.00958 15.7141 2.6979 15.1862 2.49905C14.5707 2.26897 13.921 2.14487 13.2643 2.13199C12.4198 2.09242 12.1499 2.0835 9.99992 2.0835Z"
                    fill="#646464"
                  />
                  <path
                    d="M10.0001 5.94629C7.76272 5.94629 5.94629 7.76272 5.94629 10.0001C5.94629 12.2375 7.76272 14.054 10.0001 14.054C12.2375 14.054 14.054 12.2375 14.054 10.0001C14.054 7.76272 12.2375 5.94629 10.0001 5.94629ZM10.0001 12.6251C8.55024 12.6251 7.37524 11.4501 7.37524 10.0001C7.37524 8.5502 8.55024 7.37519 10.0001 7.37519C11.4501 7.37519 12.6251 8.5502 12.6251 10.0001C12.6251 11.4501 11.4501 12.6251 10.0001 12.6251Z"
                    fill="#646464"
                  />
                  <path
                    d="M14.2163 6.72441C14.7455 6.72441 15.1746 6.29536 15.1746 5.76611C15.1746 5.23686 14.7455 4.80781 14.2163 4.80781C13.687 4.80781 13.258 5.23686 13.258 5.76611C13.258 6.29536 13.687 6.72441 14.2163 6.72441Z"
                    fill="#646464"
                  />
                </svg>
              </Link>

              <Link
                href="#"
                aria-label="YouTube"
                className="text-[#646464] transition-colors hover:text-[#202020]"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16.8369 3.33964C17.5903 3.57286 18.1824 4.25755 18.3841 5.1288C18.7485 6.70639 18.75 9.99984 18.75 9.99984C18.75 9.99984 18.75 13.2933 18.3841 14.8709C18.1824 15.7422 17.5903 16.4268 16.8369 16.66C15.4727 17.0832 10 17.0832 10 17.0832C10 17.0832 4.52728 17.0832 3.16307 16.66C2.40966 16.4268 1.81758 15.7422 1.6159 14.8709C1.25 13.2933 1.25 9.99984 1.25 9.99984C1.25 9.99984 1.25 6.70639 1.6159 5.1288C1.81758 4.25755 2.40966 3.57286 3.16307 3.33964C4.52728 2.9165 10 2.9165 10 2.9165C10 2.9165 15.4727 2.9165 16.8369 3.33964ZM12.9278 10.0001L8.16487 12.7498L8.16487 7.25038L12.9278 10.0001Z"
                    fill="#646464"
                  />
                </svg>
              </Link>

              <Link
                href="#"
                aria-label="Twitter"
                className="text-[#646464] transition-colors hover:text-[#202020]"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.5 5.23003C16.9484 5.48065 16.3558 5.64999 15.7329 5.72653C16.3683 5.33637 16.8559 4.71727 17.0858 3.98031C16.4913 4.34201 15.8326 4.60483 15.1317 4.74572C14.5701 4.13339 13.7708 3.75 12.8856 3.75C11.1865 3.75 9.8084 5.16297 9.8084 6.9065C9.8084 7.15306 9.8362 7.39284 9.88767 7.6245C7.32912 7.49242 5.06254 6.23591 3.54444 4.32711C3.28019 4.79449 3.12825 5.33637 3.12825 5.91349C3.12825 7.0081 3.67194 7.97469 4.49705 8.54029C3.99234 8.52335 3.51801 8.38178 3.10315 8.14539V8.18603C3.10315 9.71486 4.16344 10.9903 5.57187 11.2802C5.31291 11.352 5.0414 11.3899 4.76129 11.3899C4.56311 11.3899 4.36955 11.371 4.18193 11.3344C4.57368 12.5875 5.70995 13.5006 7.05695 13.525C6.00326 14.3717 4.67608 14.8763 3.23461 14.8763C2.98621 14.8763 2.74113 14.8614 2.5 14.8323C3.86219 15.7284 5.47939 16.25 7.21681 16.25C12.8783 16.25 15.9733 11.4421 15.9733 7.27227C15.9733 7.1368 15.97 6.99997 15.9641 6.8645C16.5652 6.4188 17.0871 5.86404 17.4987 5.23206L17.5 5.23003Z"
                    fill="#646464"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
