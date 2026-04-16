import Badge from "@/components/_ui/badge";
import Link from "next/link";

type NewsHeroSectionProps = {
  date?: string;
  title?: string;
  description?: string;
  image?: string;
  slug?: string;
};

function NewsHeroSection({
  date = "October 11, 2024",
  title = "Maximize Your CRM Automation With AI",
  description = "In today's digital age, customers expect quick, personalized responses to their inquiries, no matter when they reach out.",
  image,
  slug,
}: NewsHeroSectionProps) {
  const articleHref = slug ? `/news/${slug}` : "#";

  return (
    <section id="news-hero" className="relative z-0">
      <div className="px-global">
        <div className="max-w-global mx-auto border-x border-[#E5E7EB]">
          <div className="flex flex-col items-center gap-4 px-6 py-10 text-center md:px-12 md:py-14">
            <Badge text="News & Insights" />
            <h1 data-reveal="words" className="max-w-[14em] text-center">
              The Latest From Structurely
            </h1>
          </div>

          <Link
            href={articleHref}
            className="flex flex-col gap-8 border-t border-[#E5E7EB] px-6 py-8 md:flex-row md:items-center md:gap-12 md:px-10 md:py-12"
          >
            <div className="flex flex-1 flex-col gap-3">
              <p className="text-[13px] leading-[20px] font-medium tracking-[-0.084px] text-[#646464]">
                {date}
              </p>
              <div className="group">
                <h2 className="max-w-[14em] text-[28px] leading-[36px] tracking-[-0.03em] transition-colors group-hover:text-[#006FFF] md:text-[32px] md:leading-[40px]">
                  {title}
                </h2>
              </div>
              <p className="max-w-[30em] text-[15px] leading-[26px] tracking-[-0.01em] text-[#646464]">
                {description}
              </p>
            </div>

            <div className="w-full flex-shrink-0 overflow-hidden rounded-xl bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.08),0_1px_1px_-0.5px_rgba(51,51,51,0.05),0_3px_3px_-1.5px_rgba(51,51,51,0.05),0_6px_6px_-3px_rgba(51,51,51,0.05),0_12px_12px_-6px_rgba(51,51,51,0.05),0_24px_24px_-12px_rgba(51,51,51,0.05)] md:w-[48%]">
              <div className="aspect-video">
                {image ? (
                  <img
                    src={image}
                    alt={title}
                    className="h-full w-full object-cover"
                  />
                ) : null}
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default NewsHeroSection;
