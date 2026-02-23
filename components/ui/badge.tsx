function Badge({ text }: { text: string }) {
  return (
    <div className="inline-flex items-center justify-center gap-1 px-4 py-2 rounded-lg bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.08),0_1px_1px_-0.5px_rgba(51,51,51,0.05),0_3px_3px_-1.5px_rgba(51,51,51,0.05),0_6px_6px_-3px_rgba(51,51,51,0.05),0_12px_12px_-6px_rgba(51,51,51,0.05),0_24px_24px_-12px_rgba(51,51,51,0.05)] overflow-hidden">
      <span className="text-[#646464] text-center font-medium text-[12px] leading-4">
        {text}
      </span>
    </div>
  );
}

export default Badge;
