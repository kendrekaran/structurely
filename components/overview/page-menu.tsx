"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
  { label: "Overview", href: "/overview" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Use Cases", href: "/use-cases" },
  { label: "Pricing", href: "/pricing" },
  { label: "Demo", href: "/demo" },
];

function PageMenu() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/overview") {
      return pathname === "/overview";
    }
    return pathname.startsWith(href);
  };

  return (
    <div className="px-global">
      <nav className="max-w-global mx-auto w-full overflow-x-auto border-x border-b border-[#E5E7EB] bg-white">
        <div className="flex divide-x divide-[#E5E7EB]">
          {menuItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`flex min-w-fit flex-1 cursor-pointer items-center justify-center px-[10px] py-3 text-center text-[14px] leading-5 tracking-[-0.006em] whitespace-nowrap transition-colors ${
                isActive(item.href)
                  ? "bg-[#4B7BFF] text-white"
                  : "bg-white hover:bg-gray-50"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
}

export default PageMenu;
