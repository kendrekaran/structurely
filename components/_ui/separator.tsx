import { cn } from "@/lib/utils";

interface SeparatorProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export default function Separator({ className, ...props }: SeparatorProps) {
  return (
    <div
      className={cn(
        "relative flex items-center justify-center border-t border-dashed border-[#E5E7EB]",
        className,
      )}
      {...props}
    >
      <div className="max-w-global absolute bottom-0 mx-auto w-full border-t-1 border-[#E5E7EB]" />
    </div>
  );
}
