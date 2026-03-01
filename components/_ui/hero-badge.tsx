function HeroBadge({ text }: { text: string }) {
  return (
    <div className="inline-flex items-center justify-center gap-1 overflow-hidden rounded-lg bg-[#FAFAFA] px-4 py-2 shadow-[0_0_0_1px_rgba(0,0,0,0.08)]">
      <span className="text-center text-[12px] leading-4 font-medium">
        {text}
      </span>
    </div>
  );
}

export default HeroBadge;
