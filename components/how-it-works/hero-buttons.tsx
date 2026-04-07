import Button from "@/components/_ui/button";
import { div } from "motion/react-client";
import Link from "next/link";

export default function HeroButtons() {
  return (
    <div className="px-global">
        <div className=" max-w-global border-b mx-auto border-x border-[#E5E7EB]">
            <div className="flex flex-col items-center justify-center gap-4 md:flex-row py-[24px] ">
            <Link href="/demo">
                <Button variant="primary" size="md"  >
                <span className="w-[164px] text-left">Try the Live Demo</span>
                </Button>
            </Link>
            <Button variant="secondary" size="md" className="text-foreground">
                Schedule a Guided Demo
            </Button>
            </div>
        </div>
    </div>
  );
}
