import Image from "next/image";
import Button from "@/components/_ui/button";

function BlogShareSection() {
  return (
    <section id="blog-share" className="relative z-0">
      <div className="px-global">
        <div className="max-w-global mx-auto border-x border-y border-[#E5E7EB] py-6">
          <div className="flex flex-col items-center gap-3 px-6 lg:px-12">
            <p className="text-heading text-center">Share this</p>
            <div className="flex items-center gap-3">
              <Button
                variant="secondary"
                size="sm"
                className="!w-auto !justify-center !px-4 !py-2"
                aria-label="Share on X"
              >
                <Image
                  src="/assets/blog/socials/x.svg"
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
              >
                <Image
                  src="/assets/blog/socials/linkedin.svg"
                  alt="LinkedIn"
                  width={20}
                  height={20}
                />
              </Button>
              <Button
                variant="secondary"
                size="sm"
                className="!w-auto !justify-center !px-4 !py-2"
                aria-label="Share"
              >
                <Image
                  src="/assets/blog/socials/share.svg"
                  alt="Share"
                  width={20}
                  height={20}
                />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BlogShareSection;
