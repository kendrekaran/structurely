const stats = [
  { value: "10", label: "Years in business", highlight: false },
  { value: "400M", label: "Human fine-tuned conversations", highlight: true },
  { value: "61.1%", label: "AI conversion rate", highlight: false },
];

function StatsSection() {
  return (
    <div className="px-global">
      <section className="max-w-global mx-auto border-x border-[#E5E7EB] md:py-6">
        <div className="grid grid-cols-1 divide-y divide-[#E5E7EB] border-y border-[#E5E7EB] bg-white sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-1 flex-col items-center gap-3 px-6 py-6 md:px-10 md:py-10"
            >
              <h2
                className={`text-center  ${
                  stat.highlight ? "text-[#006FFF]" : "text-[#202020]"
                }`}
              >
                {stat.value}
              </h2>
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
