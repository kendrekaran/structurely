type NewsHeroSectionProps = {
  date?: string;
  title?: string;
  description?: string;
  image?: string;
};

function NewsHeroSection({
  date = "October 11, 2024",
  title = "Maximiz Your CRM Automation With A",
  description = "In today's digital age, customers expect quick, personalized responses to their inquiries, no matter when they reach out.",
  image,
}: NewsHeroSectionProps) {
  return (
    <section id="news-hero" className="relative z-0">
      <div className="px-global">
        <div className="max-w-global py-[40px] md:p-6  mx-auto border-x border-[#E5E7EB]">
          <div className="flex  flex-col  items-center gap-[24px] md:gap-[16px] text-center">
            <p className="text-[14px] leading-[20px] tracking-[-0.084px] text-[var(--Subtext)]">
              {date}
            </p>
            <div className="flex flex-col items-center gap-2.5 md:gap-2 px-6">
              <h2 data-reveal="words" className="max-w-[23.6em] text-center  text-[36px] leading-[44px] font-medium tracking-[-0.03em]">{title}</h2>
              <p className="max-w-[34.33em] text-[#202020] text-[16px]  leading-[26px]  tracking-[-0.01em] text-center">{description}</p>
            </div>
          </div>

          <div className="mt-[24px] mx-3 md:mt-4 aspect-video px-3 md:px-0 overflow-hidden rounded-xl bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.08),0_1px_1px_-0.5px_rgba(51,51,51,0.05),0_3px_3px_-1.5px_rgba(51,51,51,0.05),0_6px_6px_-3px_rgba(51,51,51,0.05),0_12px_12px_-6px_rgba(51,51,51,0.05),0_24px_24px_-12px_rgba(51,51,51,0.05)]">
            {image && (
              <img
                src={image}
                alt={title}
                className="h-full w-full object-cover"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewsHeroSection;
