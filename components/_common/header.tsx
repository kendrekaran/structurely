"use client";

import Button from "@/components/_ui/button";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "How it works", href: "/how-it-works" },
  { label: "Use Cases", href: "/use-cases" },
  { label: "Pricing", href: "/pricing" },
];

const companyLinks = [
  { label: "About", href: "/about" },
  { label: "News", href: "/blog" },
  { label: "Help Center", href: "/help-center" },
];

export default function Header() {
  const pathname = usePathname();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileCompanyOpen, setMobileCompanyOpen] = useState(false);

  const isCompanyActive = companyLinks.some((l) => l.href === pathname);

  return (
    <header className="sticky top-0 z-50 w-full bg-white">
      <div className="px-global border-b border-[#E5E7EB]">
        <div className="max-w-global mx-auto flex items-center gap-8 py-[20px]">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/assets/common/heading-logo.svg"
              alt="Structurely"
              width={115}
              height={24}
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden flex-1 items-center justify-center gap-1 lg:flex">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className="px-[10px] py-1 text-[14px] leading-[20px] tracking-[-0.084px] transition-colors"
                  style={{ color: isActive ? "#202020" : "#646464" }}
                >
                  {link.label}
                </Link>
              );
            })}

            <div
              className="group relative py-2"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button
                className="flex cursor-pointer items-center gap-1 py-1 pl-[10px] text-[14px] leading-[20px] tracking-[-0.084px] transition-colors"
                style={{
                  color:
                    isCompanyActive || dropdownOpen ? "#202020" : "#646464",
                }}
              >
                Company
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={`transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
                >
                  <path
                    d="M4 6L8 10L12 6"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              {dropdownOpen && (
                <div className="absolute top-full left-0 z-50 min-w-[152px] pt-2">
                  <div className="overflow-hidden rounded-[10px] border border-[#E4E4E7] bg-white shadow-[0px_4px_16px_0px_rgba(0,0,0,0.08)]">
                    {companyLinks.map((link, index) => (
                      <Link
                        key={link.label}
                        href={link.href}
                        onClick={() => setDropdownOpen(false)}
                        className={`block px-4 py-3 text-[14px] leading-[20px] tracking-[-0.084px] text-[#202020] transition-colors hover:bg-[#F7F7F8] ${
                          index !== companyLinks.length - 1
                            ? "border-b border-[#E4E4E7]"
                            : ""
                        }`}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden flex-shrink-0 lg:flex">
            <Button variant="outline" size="md">
              Request Demo
            </Button>
          </div>

          {/* Mobile Right: CTA + Hamburger */}
          <div className="flex flex-1 items-center justify-end gap-3 lg:hidden">
            <Button variant="outline" size="md" className="max-w-[139px]">
              Request Demo
            </Button>
            <button
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="flex h-[40px] w-[40px] flex-shrink-0 items-center justify-center rounded-[12px] bg-white"
              style={{
                boxShadow:
                  "0px 24px 24px -12px #3333330D, 0px 12px 12px -6px #3333330D, 0px 6px 6px -3px #3333330D, 0px 3px 3px -1.5px #3333330D, 0px 1px 1px -0.5px #3333330D, 0px 0px 0px 1px #00000014",
              }}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 2L16 16M16 2L2 16"
                    stroke="#646464"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              ) : (
                <Image
                  src="/assets/common/menu-bar.svg"
                  alt="Menu"
                  width={24}
                  height={24}
                />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="px-global border-b border-[#E5E7EB] bg-white lg:hidden">
          <div className="max-w-global mx-auto flex flex-col py-4">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="border-b border-[#F3F4F6] px-3 py-3 text-[14px] leading-[20px] tracking-[-0.084px] transition-colors last:border-b-0"
                  style={{ color: isActive ? "#202020" : "#646464" }}
                >
                  {link.label}
                </Link>
              );
            })}

            {/* Company accordion */}
            <button
              onClick={() => setMobileCompanyOpen((prev) => !prev)}
              className="flex items-center justify-between border-b border-[#F3F4F6] px-3 py-3 text-[14px] leading-[20px] tracking-[-0.084px] transition-colors"
              style={{
                color:
                  isCompanyActive || mobileCompanyOpen ? "#202020" : "#646464",
              }}
            >
              Company
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={`transition-transform duration-200 ${mobileCompanyOpen ? "rotate-180" : ""}`}
              >
                <path
                  d="M4 6L8 10L12 6"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {mobileCompanyOpen && (
              <div className="flex flex-col pl-4">
                {companyLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.label}
                      href={link.href}
                      onClick={() => {
                        setMobileMenuOpen(false);
                        setMobileCompanyOpen(false);
                      }}
                      className="border-b border-[#F3F4F6] px-3 py-3 text-[14px] leading-[20px] tracking-[-0.084px] transition-colors last:border-b-0"
                      style={{ color: isActive ? "#202020" : "#646464" }}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
