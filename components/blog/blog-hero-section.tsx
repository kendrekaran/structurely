import Badge from "@/components/_ui/badge";

function BlogHeroSection() {
  return (
    <section id="blog-hero" className="relative z-0 ">
      <div className="px-global  ">
        <div className="max-w-global mx-auto border-x border-[#E5E7EB] py-section-md">
          <div className="flex flex-col items-center gap-4">
            <Badge text="News" />
            <h2 className="max-w-[13.6em] text-center">Structurely Blog</h2>
            <p className="max-w-[33.33em] text-center">
              AI and sales insights from the experts.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BlogHeroSection;
