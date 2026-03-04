import HeroBadge from "@/components/_ui/hero-badge";
import Badge from "../_ui/badge";

const features = [
  {
    title: "Instant Engagement",
    description: "Calls, texts, and emails within seconds — 24/7.",
  },
  {
    title: "Real Conversations",
    description: "Dynamic questioning, objection handling, natural dialogue.",
  },
  {
    title: "Intelligent Qualification",
    description:
      "Structured logic evaluates readiness and intent in real time.",
  },
  {
    title: "Automated Follow-Up",
    description:
      "Persistent multi-touch sequences powered by AI — including outbound dialing.",
  },
];

function StructuredSystemSection() {
  return (
    <div className="px-global">
      <section
        id="structured-system"
        className="max-w-global relative mx-auto flex flex-col items-start border-x border-b-2 border-[#E5E7EB] border-b-[#006FFF]"
      >
        <div className="py-section-md flex flex-col items-center justify-center gap-3 self-stretch px-6 md:px-24">
          <div className="flex w-full max-w-[46.375em] flex-col items-center justify-center gap-4">
            <Badge text="What AI 3 Does" />
            <h2 className="max-w-[11.08em] text-center tracking-[-0.03em]">
              A <span className="text-[#006FFF]">Structured</span> System for
              Engagement
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 self-stretch border-t border-[#E5E7EB] sm:grid-cols-2">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={[
                "flex flex-col items-center border-[#E5E7EB]",
                index % 2 === 0 ? "sm:border-r" : "",
                index < features.length - 2 ? "border-b" : "",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              <div className="self-stretch p-1">
                <div className="flex h-[240px] items-center justify-center overflow-hidden rounded-md bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.08)]">
                  <span className="text-[16px] leading-6 tracking-[-0.01em]">
                    Graphic
                  </span>
                </div>
              </div>
              <div className="flex flex-col items-center gap-2 self-stretch px-6 py-10">
                <h3 className="text-center">{feature.title}</h3>
                <p className="max-w-[22.28em] text-center text-[14px] leading-5 md:text-[14px]">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default StructuredSystemSection;
