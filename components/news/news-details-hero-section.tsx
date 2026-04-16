import Link from "next/link";

type NewsDetailsHeroSectionProps = {
  title: string;
  intro: string;
  description: string;
  image?: string;
};

function NewsDetailsHeroSection({
  title,
  intro,
  description,
  image,
}: NewsDetailsHeroSectionProps) {
  return (
    <section id="news-details-hero" className="relative z-0">
      <div className="px-global">
        <div className="max-w-global mx-auto w-full flex flex-col items-center justify-center border-x border-[#E5E7EB]  gap-8 pt-10 md:pt-8 px-3 md:px-12 pb-0">
          <div className="flex flex-col items-left justify-center  gap-4 md:px-6 max-w-[744px]">
            <Link
              href="/news"
              className="flex w-fit items-center gap-1 md:px-6 text-[14px] leading-[20px] tracking-[-0.084px] text-[var(--Subtext)]"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.00065 12.6666L3.33398 7.99992L8.00065 3.33325"
                  stroke="#646464"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12.6673 8H3.33398"
                  stroke="#646464"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Back to News
            </Link>

            <div className="w-full min-h-[360px] rounded-xl overflow-hidden bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.08),0_1px_1px_-0.5px_rgba(51,51,51,0.05),0_3px_3px_-1.5px_rgba(51,51,51,0.05),0_6px_6px_-3px_rgba(51,51,51,0.05),0_12px_12px_-6px_rgba(51,51,51,0.05),0_24px_24px_-12px_rgba(51,51,51,0.05)] md:hidden">
              {image && (
                <img
                  src={image}
                  alt={title}
                  className="h-full w-full object-cover"
                />
              )}
            </div>

            <h1
              data-reveal="words"
              className="font-medium tracking-[-0.03em] md:px-6 max-w-[744px]"
            >
              {title}
            </h1>

            <div className="flex flex-col gap-2 md:px-6">
              <p className="font-medium">{intro}</p>
              <p className="text-[var(--Subtext)]">{description}</p>
            </div>
          </div>

          <div className="hidden w-full min-h-[360px] md:min-h-[360px] rounded-xl overflow-hidden bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.08),0_1px_1px_-0.5px_rgba(51,51,51,0.05),0_3px_3px_-1.5px_rgba(51,51,51,0.05),0_6px_6px_-3px_rgba(51,51,51,0.05),0_12px_12px_-6px_rgba(51,51,51,0.05),0_24px_24px_-12px_rgba(51,51,51,0.05)] md:block">
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

export default NewsDetailsHeroSection;
