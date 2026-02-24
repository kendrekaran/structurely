const menuItems = [
  { label: "Overview", active: true },
  { label: "How It Works", active: false },
  { label: "Use Cases", active: false },
  { label: "Pricing", active: false },
  { label: "Demo", active: false },
];

function PageMenu() {
  return (
    <div className="px-global">
    <nav className="max-w-global mx-auto w-full border-b border-[#E5E7EB] bg-white overflow-x-auto">
      <div className="flex divide-x divide-[#E5E7EB]">
        {menuItems.map((item) => (
          <button
            key={item.label}
            className={`flex flex-1 min-w-fit items-center justify-center px-[10px] py-3 text-[14px] leading-5 tracking-[-0.006em] text-center whitespace-nowrap cursor-pointer transition-colors ${
              item.active
                ? "bg-[#006FFF] text-white"
                : "bg-white text-[#646464] hover:bg-gray-50"
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>
    </nav>
    </div>
  );
}

export default PageMenu;
