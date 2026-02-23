"use client";

import Button from "@/components/ui/button";
import Image from "next/image";

const navLinks = [
  { label: "Products", href: "#" },
  { label: "Blog", href: "#" },
  { label: "Company", href: "#" },
];

export default function Header() {
  return (
    <header className="w-full bg-white border-b border-[#E4E4E7]">
      <div className="px-global">
        <div className="max-w-global mx-auto  flex items-center h-[60px] gap-8">
          <div className="flex-shrink-0">
            <Image src="/assets/common/header-logo.svg" alt="logo" width={136} height={24} />
          </div>

          <nav className="flex-1 flex justify-center items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-[10px] py-1 text-[14px] leading-[20px] tracking-[-0.084px] text-[#646464] hover:text-[#202020] transition-colors"
              >
                {link.label}
              </a>
            ))}
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
