import type { PortableTextBlock } from "@/data/dummy-news";

type ContentBlock =
  | {
      type: "paragraph";
      segments: { text: string; variant?: "primary" | "bold" }[];
    }
  | { type: "heading"; text: string }
  | { type: "labeled-paragraph"; label: string; text: string }
  | { type: "divider" };

type NewsContentSectionProps = {
  /** Legacy block format (paragraphs, headings, dividers). */
  blocks?: ContentBlock[];
  /** Sanity-style portable text; when provided, this is rendered instead of blocks. */
  content?: PortableTextBlock[];
};

function renderPortableBlock(block: PortableTextBlock, index: number) {
  const text = block.children?.map((c) => c.text).join("") ?? "";
  if (block.style === "h2") {
    return (
      <h2
        key={block._key ?? index}
        className="text-heading text-[28px] leading-[36px] font-medium tracking-[-0.02em] md:text-[36px] md:leading-[44px] md:tracking-[-0.03em]"
      >
        {text}
      </h2>
    );
  }
  if (block.style === "h3") {
    return (
      <h3
        key={block._key ?? index}
        className="text-heading mt-6 text-[24px] leading-[32px] font-medium tracking-[-0.02em]"
      >
        {text}
      </h3>
    );
  }
  return (
    <p key={block._key ?? index} className="text-[#202020] text-[16px] leading-[26px] tracking-[-0.01em]">
      {text}
    </p>
  );
}

function NewsContentSection({ blocks = [], content }: NewsContentSectionProps) {
  const hasContent = content && content.length > 0;
  const nodes = hasContent
    ? content.map((block, index) => renderPortableBlock(block, index))
    : blocks.map((block, index) => {
              if (block.type === "divider") {
                return <hr key={index} className="border-t border-[#E5E7EB] md:my-[16px]" />;
              }

              if (block.type === "heading") {
                return (
                  <h2
                    key={index}
                    className="text-heading text-[28px] leading-[36px] font-medium tracking-[-0.02em] md:text-[36px] md:leading-[44px] md:tracking-[-0.03em]"
                  >
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
            });
  return (
    <section id="news-content" className="relative z-0">
      <div className="px-global">
        <div className="max-w-global mx-auto border-x border-[#E5E7EB]">
          <div className="mx-auto flex w-full flex-col mb-[64px] gap-6 md:gap-[32px] pt-6 md:pt-0 px-3 md:px-6 lg:max-w-[744px] lg:px-12">
            <hr className="hidden md:block border-t border-[#E5E7EB]" />
            {nodes}
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewsContentSection;
