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
    <nav className="max-w-global mx-auto w-full border-x border-b border-[#E5E7EB] bg-white overflow-x-auto">
      <div className="flex divide-x divide-[#E5E7EB]">
        {menuItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className={`flex flex-1 min-w-fit items-center justify-center px-[10px] py-3 text-[14px] leading-5 tracking-[-0.006em] text-center whitespace-nowrap cursor-pointer transition-colors ${
              isActive(item.href)
                ? "bg-[#006FFF] text-white"
                : "bg-white text-[#646464] hover:bg-gray-50"
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
