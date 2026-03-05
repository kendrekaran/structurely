type ContentBlock =
  | {
      type: "paragraph";
      segments: { text: string; variant?: "primary" | "bold" }[];
    }
  | { type: "heading"; text: string }
  | { type: "labeled-paragraph"; label: string; text: string }
  | { type: "divider" };

type BlogContentSectionProps = {
  blocks: ContentBlock[];
};

function BlogContentSection({ blocks }: BlogContentSectionProps) {
  return (
    <section id="blog-content" className="relative z-0">
      <div className="px-global">
        <div className="max-w-global mx-auto border-x border-[#E5E7EB]">
        
          <div className=" mx-auto flex w-full flex-col mb-[64px] gap-[32px] px-6 lg:max-w-[744.0000000000028px] lg:px-12">
          <hr className="border-t border-[#E5E7EB] " />
            {blocks.map((block, index) => {
              if (block.type === "divider") {
                return <hr key={index} className="border-t border-[#E5E7EB] my-[16px]" />;
              }

              if (block.type === "heading") {
                return (
                  <h2 key={index} className="text-heading text-[36px] leading-[44px] font-medium tracking-[-0.03em] ">
                    {block.text}
                  </h2>
                );
              }

              if (block.type === "paragraph") {
                return (
                  <p key={index}>
                    {block.segments.map((seg, i) => {
                      if (seg.variant === "primary") {
                        return (
                          <span key={i} className="text-[--Primary]">
                            {seg.text}
                          </span>
                        );
                      }
                      if (seg.variant === "bold") {
                        return (
                          <span key={i} className="font-medium text-[--Base]">
                            {seg.text}
                          </span>
                        );
                      }
                      return <span key={i}>{seg.text}</span>;
                    })}
                  </p>
                );
              }

              if (block.type === "labeled-paragraph") {
                return (
                  <p key={index}>
                    <span className="font-medium text-[--Base]">
                      {block.label}
                    </span>
                    {"\n"}
                    {block.text}
                  </p>
                );
              }

              return null;
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default BlogContentSection;
