import Image from "next/image";

const structurelyFeatures = [
  "CRM-native automation",
  "AI calling, texting, emailing",
  "Real-time qualification + routing",
  "AI auto dialer",
];

const switchFeatures = [
  "Mortgage-native qualification logic",
  "Real borrower conversations",
  "Intelligent routing to loan officers",
  "Designed for capacity, not chaos",
];

function CircleCheckIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="10" cy="10" r="9.25" stroke="#006FFF" strokeWidth="1.5" />
      <path
        d="M6.5 10L8.75 12.25L13.5 7.5"
        stroke="#006FFF"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.75 9H14.25"
        stroke="#006FFF"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 3.75L14.25 9L9 14.25"
        stroke="#006FFF"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

interface ProductCardProps {
  name: string;
  description: string;
  features: string[];
  ctaLabel: string;
  muted?: boolean;
}

function ProductCard({
  name,
  description,
  features,
  ctaLabel,
  muted = false,
}: ProductCardProps) {
  return (
    <div
      className={`flex flex-col divide-y divide-[#E5E7EB] ${muted ? "bg-[#FAFAFA]" : "bg-white"}`}
    >
      <div className="flex min-h-[161px] flex-col gap-[16px] px-6 py-8 md:px-8">
        <h3 className="sm:text-[20px] md:text-[20px] leading-[28px] tracking-[-0.02em]">{name}</h3>
        <p className="max-w-[20em] text-[16px] leading-[26px] tracking-[-0.01em]">
          {description}
        </p>
      </div>

      <div className="flex flex-col divide-y divide-[#E5E7EB]">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`flex items-center gap-3 px-6 py-6 md:px-8 ${muted ? "bg-white" : "bg-[#FAFAFA]"}`}
          >
            <Image
              src="/assets/common/verification.svg"
              alt="circle check"
              width={20}
              height={20}
            />
            <span className="text-[14px] leading-[24px] tracking-[-0.01em] text-[#202020]">
              {feature}
            </span>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between px-6 py-8 md:px-8">
        <span className="text-[14px] leading-[20px]  tracking-[-0.01em] text-[#202020]">
          {ctaLabel}
        </span>
        <ArrowRightIcon />
      </div>
    </div>
  );
}

function ProductsSection() {
  return (
    <section id="products" className="relative z-0 border-b border-[#E5E7EB]">
      <div className="px-global">
        <div className="max-w-global mx-auto border-x border-[#E5E7EB]">
          <div className="flex flex-col items-center gap-4 border-b border-[#E5E7EB] px-6 py-12 md:px-24 md:py-16">
            <h2 className="text-center">Our Products</h2>
            <p className="text-center">Built on a proven AI platform.</p>
          </div>

          <div className="grid grid-cols-1 divide-y divide-[#E5E7EB] md:grid-cols-2 md:divide-x md:divide-y-0">
            <ProductCard
              name="Structurely AI 3"
              description="Built for high-volume teams that need structured AI follow-up inside their CRM."
              features={structurelyFeatures}
              ctaLabel="Learn About Structurely AI 3"
            />
            <ProductCard
              name="Switch AI"
              description="Purpose-built for mortgage."
              features={switchFeatures}
              ctaLabel="Learn About Switch AI"
              muted
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductsSection;
