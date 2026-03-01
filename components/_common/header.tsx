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
  { label: "Help Center", href: "#" },
];

export default function Header() {
  const pathname = usePathname();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const isCompanyActive = companyLinks.some((l) => l.href === pathname);

  return (
    <header className="w-full bg-white">
      <div className="px-global">
        <div className="max-w-global mx-auto flex h-[60px] items-center gap-8">
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/assets/common/header-logo.svg"
              alt="Structurely"
              width={115}
              height={24}
            />
          </Link>

          <nav className="flex flex-1 items-center justify-center gap-1">
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
              className="relative group py-2"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button
                className="flex items-center gap-1 py-1 pl-[10px] text-[14px] leading-[20px] tracking-[-0.084px] transition-colors cursor-pointer"
                style={{ color: isCompanyActive || dropdownOpen ? "#202020" : "#646464" }}
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
                  <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

              {dropdownOpen && (
                <div className="absolute top-full left-0 z-50 pt-2 min-w-[152px]">
                  <div className="rounded-[10px] border border-[#E4E4E7] bg-white shadow-[0px_4px_16px_0px_rgba(0,0,0,0.08)] overflow-hidden">
                    {companyLinks.map((link, index) => (
                      <Link
                        key={link.label}
                        href={link.href}
                        onClick={() => setDropdownOpen(false)}
                        className={`block px-4 py-3 text-[14px] leading-[20px] tracking-[-0.084px] text-[#202020] hover:bg-[#F7F7F8] transition-colors ${
                          index !== companyLinks.length - 1 ? "border-b border-[#E4E4E7]" : ""
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

          <div className="flex-shrink-0">
            <Button variant="outline" size="md">
              Request Demo
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
