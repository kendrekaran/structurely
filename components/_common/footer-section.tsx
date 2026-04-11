import Image from "next/image";
import Link from "next/link";

const primaryNavLinks = [
  { label: "How it works", href: "/how-it-works" },
  { label: "Use cases", href: "/use-cases" },
  { label: "Pricing", href: "/pricing" },
  // { label: "News", href: "/blog" },
  { label: "About", href: "/about" },
] as const;

const accountLinks = [
  {
    label: "Login",
    href: "https://accounts.structurely.com/",
    external: true,
  },
  { label: "Privacy policy", href: "/privacy-policy", external: false },
  { label: "Terms of use", href: "/terms-of-use", external: false },
  {
    label: "Contact sales",
    href: "/partners#partners-contact",
    external: false,
  },
] as const;

const linkClassName =
  "py-[6px] text-[14px] leading-[20px] font-medium tracking-[-0.084px] text-[#646464] transition-colors hover:text-[#202020]";

export default function FooterSection() {
  return (
    <footer id="footer" className="relative z-0">
      <div className="px-global">
        <div className="max-w-global mx-auto border-x border-t border-[#E5E7EB] bg-[#F8F8F8]">
          <div className="flex flex-col gap-10 px-6 py-10 sm:px-8 md:px-12 lg:gap-12 lg:py-16">
            <Link
              href="/"
              className="flex w-fit items-center gap-3 self-start transition-opacity hover:opacity-90"
            >
              <Image
                src="/assets/common/heading-logo.svg"
                alt="Structurely"
                width={115}
                height={24}
                className="h-auto w-[115px]"
              />
            </Link>

            <div className="flex w-full min-w-0 flex-col gap-10 md:flex-row md:justify-between md:gap-12">
              <div className="flex min-w-0 flex-col gap-8">
                <div className="flex flex-col gap-1">
                  <span className="text-[14px] leading-[20px] font-semibold text-[#202020]">
                    Headquarters
                  </span>
                  <span className="text-[14px] leading-[20px] font-medium tracking-[-0.084px] wrap-break-word text-[#646464]">
                    2655 N Airport Rd #60439
                    <br />
                    Ft. Myers, FL 33907
                  </span>
                </div>

                <div className="flex flex-col gap-1">
                  <span className="text-[14px] leading-[20px] font-semibold text-[#202020]">
                    Sales
                  </span>
                  <a
                    href="mailto:sales@structurely.com"
                    className="w-fit max-w-full break-all text-[14px] leading-[20px] font-medium tracking-[-0.084px] text-[#646464] transition-colors hover:text-[#202020]"
                  >
                    sales@structurely.com
                  </a>
                </div>

                <div className="flex flex-col gap-1">
                  <span className="text-[14px] leading-[20px] font-semibold text-[#202020]">
                    Support
                  </span>
                  <a
                    href="mailto:help@structurely.com"
                    className="w-fit max-w-full break-all text-[14px] leading-[20px] font-medium tracking-[-0.084px] text-[#646464] transition-colors hover:text-[#202020]"
                  >
                    help@structurely.com
                  </a>
                </div>
              </div>

              <div className="grid w-full min-w-0 grid-cols-2 gap-x-6 gap-y-1 sm:gap-x-10 md:flex md:w-auto md:shrink-0 md:gap-8">
                <nav aria-label="Primary" className="flex min-w-0 flex-col gap-1 md:w-[140px]">
                  {primaryNavLinks.map((link) => (
                    <Link key={link.href} href={link.href} className={linkClassName}>
                      {link.label}
                    </Link>
                  ))}
                </nav>

                <nav
                  aria-label="Account and legal"
                  className="flex min-w-0 flex-col gap-1 md:w-[140px]"
                >
                  {accountLinks.map((link) =>
                    link.external ? (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={linkClassName}
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link key={link.href} href={link.href} className={linkClassName}>
                        {link.label}
                      </Link>
                    ),
                  )}
                </nav>
              </div>
            </div>
          </div>

          <div className="border-t border-[#E5E7EB] px-6 py-5 sm:px-8 md:px-12">
            <span className="block text-center text-[12px] leading-[16px] font-medium text-[#646464] sm:text-left">
              © 2026 Structurely. All rights reserved.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
