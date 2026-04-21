import Badge from "@/components/_ui/badge";
import { BrandVideoPlayer } from "@/components/_ui/brand-video-player";

function AutomateVideoSection() {
  return (
    <section id="automate-video" className="relative z-0">
      <div className="px-global">
        <div className="max-w-global mx-auto border-x border-[#E5E7EB]">
          <div className="flex flex-col items-center border-b border-[#E5E7EB] px-4 py-4 md:px-24 md:py-16">
            <div className="flex w-full max-w-[40.375em] flex-col items-center gap-4">
              <Badge text="Automate your sales process" />
              <h2 data-reveal="words" className="max-w-[11.5em] text-center">
                Focus on the{" "}
                <span className="text-[#006FFF]">most valuable</span>{" "}
                opportunities.
              </h2>
            </div>
          </div>
          <div className="bg-white">
            <BrandVideoPlayer
              src="/videos/promo.mp4"
              title="Promo video: automate your sales process"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AutomateVideoSection;
