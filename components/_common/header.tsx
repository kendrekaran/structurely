"use client";

import Button from "@/components/_ui/button";
import { cn } from "@/lib/utils";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "How it works", href: "/how-it-works" },
  { label: "Use cases", href: "/use-cases" },
  { label: "Pricing", href: "/pricing" },
];

const companyLinks = [
  { label: "About", href: "/about" },
  // { label: "Partners", href: "/partners" },
  { label: "News", href: "/blog" },
  // { label: "Help Center", href: "/help-center" },
];

const mobileMenuShadow = {
  boxShadow:
    "0px 24px 24px -12px #3333330D, 0px 12px 12px -6px #3333330D, 0px 6px 6px -3px #3333330D, 0px 3px 3px -1.5px #3333330D, 0px 1px 1px -0.5px #3333330D, 0px 0px 0px 1px #00000014",
};

export default function Header() {
  const pathname = usePathname();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isCompanyActive = companyLinks.some((l) => l.href === pathname);

  const handleMenuToggle = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#FAFAFA]">
      <div className="px-global border-b border-[#E5E7EB]">
        <div className="max-w-global mx-auto flex items-center gap-8 py-[20px]">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/assets/common/heading-logo.svg"
              alt="Structurely"
              width={115}
              height={24}
              className="h-auto w-[115px] lg:hidden"
            />
            <Image
              src="/assets/common/heading-logo.svg"
              alt="Structurely"
              width={115}
              height={24}
              className="hidden lg:block"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden flex-1 items-center justify-center gap-2 lg:flex">
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
            <Link href="/demo">
              <Button
                variant="outline"
                size="md"
                className="tracking-0 text-[14px]! leading-[20px]"
              >
                Request Demo
              </Button>
            </Link>
          </div>

          {/* Mobile Right: CTA + Hamburger */}
          <div className="flex flex-1 items-center justify-end gap-3 lg:hidden">
            <Link href="/demo">
              <Button
                variant="outline"
                size="md"
                className="max-w-[139px] text-center"
              >
                Request Demo
              </Button>
            </Link>
            <MobileMenuButton
              isMenuOpen={mobileMenuOpen}
              onToggle={handleMenuToggle}
            />
          </div>
        </div>
      </div>

      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </header>
  );
}

function MobileMenuButton({
  isMenuOpen,
  onToggle,
}: {
  isMenuOpen: boolean;
  onToggle: () => void;
}) {
  const line1Ref = useRef<HTMLDivElement>(null);
  const line2Ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const menuTL = useRef<ReturnType<typeof gsap.timeline> | null>(null);

  useGSAP(
    () => {
      if (!line1Ref.current || !line2Ref.current) return;

      menuTL.current = gsap.timeline({
        paused: true,
        defaults: { ease: "power2.inOut" },
      });

      menuTL.current
        .to(line1Ref.current, { y: 0, duration: 0.18 })
        .to(line2Ref.current, { y: 0, duration: 0.18 }, "<")
        .to(line1Ref.current, { y: 0, rotation: 225, duration: 0.4 })
        .to(line2Ref.current, { y: 0, rotation: -45, duration: 0.28 }, "<");
    },
    { scope: containerRef },
  );

  useGSAP(
    () => {
      if (!menuTL.current) return;
      if (isMenuOpen) {
        menuTL.current.play();
      } else {
        menuTL.current.reverse();
      }
    },
    { dependencies: [isMenuOpen] },
  );

  return (
    <button
      type="button"
      onClick={onToggle}
      className="relative flex h-[40px] w-[40px] flex-shrink-0 items-center justify-center rounded-[12px] bg-white"
      style={mobileMenuShadow}
      aria-label={isMenuOpen ? "Close menu" : "Open menu"}
    >
      <div
        ref={containerRef}
        className="absolute top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center gap-2.5"
      >
        <Image
          src="/assets/common/menu-bar.svg"
          alt="Menu"
          width={24}
          height={24}
        />
      </div>
    </button>
  );
}

function MobileMenu({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      className={cn(
        "fixed inset-0 z-[60] flex flex-col border-b bg-[#FAFAFA] transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] lg:hidden",
        !isOpen && "-translate-y-full",
      )}
    >
      {/* Overlay Header */}
      <div className="flex flex-col gap-5 border-b border-[#E5E7EB] px-6 py-6">
        <div className="flex items-center justify-between">
          <Link href="/" onClick={onClose}>
            <Image
              src="/assets/common/heading-logo.svg"
              alt="Structurely"
              width={115}
              height={24}
              className="h-auto w-[115px] lg:hidden"
            />
            <Image
              src="/assets/common/heading-logo.svg"
              className="hidden h-[24px] w-[115px] lg:block"
              alt="Structurely"
              width={115}
              height={24}
            />
          </Link>
          <button
            type="button"
            onClick={onClose}
            className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-[12px] bg-white"
            style={mobileMenuShadow}
            aria-label="Close menu"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.4585 6.45801L13.5418 13.5413M13.5418 6.45801L6.4585 13.5413"
                stroke="#646464"
                strokeWidth="1.25"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
        <Link href="/demo">
          <Button
            variant="outline"
            size="md"
            className="flex w-full justify-center rounded-[10px] border-[#006FFF] text-center text-[#006FFF]"
          >
            Request Demo
          </Button>
        </Link>
      </div>

      {/* Nav Links with reveal animation */}
      <nav className="flex flex-col divide-y divide-[#E5E7EB]">
        {navLinks.map((link) => (
          <div key={link.label} className="overflow-hidden">
            <div className="nav-reveal">
              <Link
                href={link.href}
                onClick={onClose}
                className="flex items-center justify-between px-6 py-4 text-[16px] leading-[24px] tracking-[-0.176px] text-[#202020]"
              >
                {link.label}
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.6665 4.79199L16.8748 10.0003L11.6665 15.2087"
                    stroke="#646464"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16.25 10H3.125"
                    stroke="#646464"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
          </div>
        ))}
        <div className="hidden px-6 py-3 md:block">
          <p className="text-[12px] font-medium tracking-[-0.02em] text-[#646464]">
            Company
          </p>
        </div>
        {companyLinks.map((link) => (
          <div key={link.label} className="overflow-hidden">
            <div className="nav-reveal">
              <Link
                href={link.href}
                onClick={onClose}
                className="flex items-center justify-between px-6 py-4 text-[16px] leading-[24px] tracking-[-0.176px] text-[#202020]"
              >
                {link.label}
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.6665 4.79199L16.8748 10.0003L11.6665 15.2087"
                    stroke="#646464"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16.25 10H3.125"
                    stroke="#646464"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
          </div>
        ))}
      </nav>
    </div>
  );
}
