 "use client";

import Image from "next/image";
import Button from "@/components/_ui/button";
import { useState } from "react";

type NewsShareSectionProps = {
  title: string;
};

function NewsShareSection({ title }: NewsShareSectionProps) {
  const [copied, setCopied] = useState(false);

  const shareUrl =
    typeof window !== "undefined" ? window.location.href : "";

  const handleShareToX = () => {
    const text = encodeURIComponent(title);
    const url = encodeURIComponent(shareUrl);
    window.open(
      `https://twitter.com/intent/tweet?text=${text}&url=${url}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  const handleShareToLinkedIn = () => {
    const url = encodeURIComponent(shareUrl);
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title,
          url: shareUrl,
        });
        return;
      } catch {
        // Fall through to clipboard for dismissed dialogs/errors.
      }
    }
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // No-op: keep silent if clipboard is blocked.
    }
  };

  return (
    <section id="news-share" className="relative z-0">
      <div className="px-global">
        <div className="max-w-global mx-auto border-x border-y border-[#E5E7EB] py-6">
          <div className="flex flex-col items-center gap-3 px-6 lg:px-12">
            <p className="text-heading text-[16px] leading-[26px] font-medium tracking-[-0.01em] text-center">Share this</p>
            <div className="flex items-center gap-3">
              <Button
                variant="secondary"
                size="sm"
                className="!w-auto !justify-center !px-4 !py-2"
                aria-label="Share on X"
                onClick={handleShareToX}
              >
                <Image
                  src="/assets/news/socials/x.svg"
                  alt="X"
                  width={20}
                  height={20}
                />
              </Button>
              <Button
                variant="secondary"
                size="sm"
                className="!w-auto !justify-center !px-4 !py-2"
                aria-label="Share on LinkedIn"
                onClick={handleShareToLinkedIn}
              >
                <Image
                  src="/assets/news/socials/linkedin.svg"
                  alt="LinkedIn"
                  width={20}
                  height={20}
                />
              </Button>
              <Button
                variant="secondary"
                size="sm"
                className="!w-auto !justify-center !px-4 !py-2"
                aria-label={copied ? "Link copied" : "Share"}
                onClick={handleNativeShare}
              >
                <Image
                  src="/assets/news/socials/share.svg"
                  alt="Share"
                  width={20}
                  height={20}
                />
              </Button>
            </div>
            {copied ? (
              <p className="text-[12px] leading-[16px] text-[#646464]">
                Link copied to clipboard
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewsShareSection;
