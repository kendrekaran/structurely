"use client";

import Button from "@/components/_ui/button";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "Products", href: "#" },
  { label: "Blog", href: "#" },
  { label: "Company", href: "#" },
];

export default function Header() {
  return (
    <header className="w-full border-b border-[#E4E4E7] bg-white">
      <div className="px-global">
        <div className="max-w-global mx-auto flex h-[60px] items-center gap-8">
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/assets/common/header-logo.svg"
              alt="logo"
              width={136}
              height={24}
            />
          </Link>

          <nav className="flex flex-1 items-center justify-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-[10px] py-1 text-[14px] leading-[20px] tracking-[-0.084px] text-[#646464] transition-colors hover:text-[#202020]"
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
