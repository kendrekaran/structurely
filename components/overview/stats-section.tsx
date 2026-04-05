const stats = [
  { value: "10", label: "Years in business", highlight: false },
  { value: "400M", label: "Human fine-tuned conversations", highlight: true },
  { value: "61.1%", label: "AI conversion rate", highlight: false },
];

function StatsSection() {
  return (
    <div className="px-global">
      <section className="max-w-global mx-auto border-x py-6 border-[#E5E7EB]">
        <div className="flex divide-x divide-[#E5E7EB] border-y border-[#E5E7EB] bg-white">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-1 flex-col items-center gap-3 px-6 py-10 md:px-10"
            >
              <span
                className={`text-center text-5xl font-medium leading-[1.125] tracking-[-0.03em] ${
                  stat.highlight ? "text-[#006FFF]" : "text-[#202020]"
                }`}
              >
                {stat.value}
              </span>
              <p className="text-center text-base font-medium leading-6 tracking-[-0.03em] text-[#646464]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default StatsSection;
