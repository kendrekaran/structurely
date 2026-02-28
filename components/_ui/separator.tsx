import { cn } from "@/lib/utils";

interface SeparatorProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export default function Separator({ className, ...props }: SeparatorProps) {
  return (
    <div
      className={cn("border-t border-dashed border-[#E5E7EB]", className)}
      {...props}
    >
      <div className="px-global">
        <div className="max-w-global relative mx-auto">
          <div className="absolute bottom-0 w-full border-t border-[#E5E7EB]" />
        </div>
      </div>
    </div>
  );
}
