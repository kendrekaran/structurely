import Link from "next/link";

type BlogDetailsHeroSectionProps = {
  title: string;
  intro: string;
  description: string;
  image?: string;
};

function BlogDetailsHeroSection({
  title,
  intro,
  description,
  image,
}: BlogDetailsHeroSectionProps) {
  return (
    <section id="blog-details-hero" className="relative z-0">
      <div className="px-global">
        <div className="max-w-global py-[32px]  mx-auto border-x border-[#E5E7EB]">
          <div className="flex flex-col items-stretch justify-center gap-8  lg:flex-row    ">
            <div className="flex flex-col gap-4 lg:max-w-[32.25em]">
              <Link
                href="/blog"
                className="text-foreground flex w-fit items-center gap-1 text-[14px] leading-[20px] tracking-[-0.084px]"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.00016 12.6663L3.3335 7.99967L8.00016 3.33301"
                    stroke="#646464"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12.6668 8H3.3335"
                    stroke="#646464"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Back to News
              </Link>

              <h1 className="text-heading text-[36px] leading-[44px] font-medium tracking-[-0.03em] max-w-[13.6em]">{title}</h1>

              <div className="flex flex-col gap-2">
                <p className="text-heading">{intro}</p>
                <p>{description}</p>
              </div>
            </div>

            <div className="min-h-[220px] flex-1 overflow-hidden rounded-xl bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.08),0_1px_1px_-0.5px_rgba(51,51,51,0.05),0_3px_3px_-1.5px_rgba(51,51,51,0.05),0_6px_6px_-3px_rgba(51,51,51,0.05),0_12px_12px_-6px_rgba(51,51,51,0.05),0_24px_24px_-12px_rgba(51,51,51,0.05)] lg:max-w-[33.25em]">
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
      </div>
    </section>
  );
}

export default BlogDetailsHeroSection;
