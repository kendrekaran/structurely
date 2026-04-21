import type { PortableTextBlock, VideoBlock } from "@/data/dummy-news";

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
  content?: Array<PortableTextBlock | VideoBlock>;
};

/** Extract a YouTube video ID from a URL or return the raw value if it already looks like an ID. */
function extractYouTubeId(urlOrId: string): string {
  try {
    const u = new URL(urlOrId);
    // youtu.be short links
    if (u.hostname === "youtu.be") return u.pathname.slice(1);
    // youtube.com/watch?v=...
    const v = u.searchParams.get("v");
    if (v) return v;
    // youtube.com/embed/... or youtube.com/shorts/...
    const parts = u.pathname.split("/").filter(Boolean);
    const embedIdx = parts.indexOf("embed");
    if (embedIdx !== -1 && parts[embedIdx + 1]) return parts[embedIdx + 1];
    const shortsIdx = parts.indexOf("shorts");
    if (shortsIdx !== -1 && parts[shortsIdx + 1]) return parts[shortsIdx + 1];
  } catch {
    // Not a URL — assume it's already a video ID
  }
  return urlOrId;
}

/** Extract a Vimeo video ID from a URL or return the raw value if it looks like an ID. */
function extractVimeoId(urlOrId: string): string {
  try {
    const u = new URL(urlOrId);
    // vimeo.com/123456789 or player.vimeo.com/video/123456789
    const parts = u.pathname.split("/").filter(Boolean);
    // Last numeric segment
    for (let i = parts.length - 1; i >= 0; i--) {
      if (/^\d+$/.test(parts[i])) return parts[i];
    }
  } catch {
    // Not a URL — assume it's already a video ID
  }
  return urlOrId;
}

function renderVideoBlock(block: VideoBlock, index: number) {
  const key = block._key ?? `video-${index}`;

  if (block.videoType === "native") {
    return (
      <figure key={key} className="flex flex-col gap-2">
        <div className="overflow-hidden rounded-xl bg-black shadow-[0_0_0_1px_rgba(0,0,0,0.08)]">
          <video
            src={block.url}
            controls
            playsInline
            className="aspect-video w-full"
            aria-label={block.caption ?? "Embedded video"}
          />
        </div>
        {block.caption && (
          <figcaption className="text-center text-[13px] leading-[20px] text-[#646464]">
            {block.caption}
          </figcaption>
        )}
      </figure>
    );
  }

  if (block.videoType === "youtube") {
    const videoId = extractYouTubeId(block.url);
    const embedUrl = `https://www.youtube-nocookie.com/embed/${videoId}`;
    return (
      <figure key={key} className="flex flex-col gap-2">
        <div className="overflow-hidden rounded-xl shadow-[0_0_0_1px_rgba(0,0,0,0.08)]">
          <iframe
            src={embedUrl}
            title={block.caption ?? "YouTube video"}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="aspect-video w-full border-0"
            loading="lazy"
          />
        </div>
        {block.caption && (
          <figcaption className="text-center text-[13px] leading-[20px] text-[#646464]">
            {block.caption}
          </figcaption>
        )}
      </figure>
    );
  }

  if (block.videoType === "vimeo") {
    const videoId = extractVimeoId(block.url);
    const embedUrl = `https://player.vimeo.com/video/${videoId}?dnt=1`;
    return (
      <figure key={key} className="flex flex-col gap-2">
        <div className="overflow-hidden rounded-xl shadow-[0_0_0_1px_rgba(0,0,0,0.08)]">
          <iframe
            src={embedUrl}
            title={block.caption ?? "Vimeo video"}
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            className="aspect-video w-full border-0"
            loading="lazy"
          />
        </div>
        {block.caption && (
          <figcaption className="text-center text-[13px] leading-[20px] text-[#646464]">
            {block.caption}
          </figcaption>
        )}
      </figure>
    );
  }

  return null;
}

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
    <p
      key={block._key ?? index}
      className="text-[16px] leading-[26px] tracking-[-0.01em] text-[#202020]"
    >
      {text}
    </p>
  );
}

function renderContentBlock(
  block: PortableTextBlock | VideoBlock,
  index: number,
) {
  if (block._type === "videoEmbed") {
    return renderVideoBlock(block, index);
  }
  return renderPortableBlock(block, index);
}

function NewsContentSection({ blocks = [], content }: NewsContentSectionProps) {
  const hasContent = content && content.length > 0;
  const nodes = hasContent
    ? content.map((block, index) => renderContentBlock(block, index))
    : blocks.map((block, index) => {
        if (block.type === "divider") {
          return (
            <hr
              key={index}
              className="border-t border-[#E5E7EB] md:my-[16px]"
            />
          );
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
              <span className="font-medium text-[--Base]">{block.label}</span>
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
          <div className="mx-auto flex w-full flex-col gap-6 px-3 pt-6 pb-[64px] md:gap-[32px] md:px-6 md:pt-0 lg:max-w-[744px] lg:px-12">
            <hr className="hidden border-t border-[#E5E7EB] md:block" />
            {nodes}
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewsContentSection;
