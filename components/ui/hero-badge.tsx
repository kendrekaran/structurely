function HeroBadge({ text }: { text: string }) {
    return (
      <div className="inline-flex items-center justify-center gap-1 px-4 py-2 rounded-lg bg-[#FAFAFA] shadow-[0_0_0_1px_rgba(0,0,0,0.08)] overflow-hidden">
        <span className="text-[#646464] text-center font-medium text-[12px] leading-4">
          {text}
        </span>
      </div>
    );
  }
  
  export default HeroBadge;
  