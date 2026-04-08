import Button from "@/components/_ui/button";
import { div } from "motion/react-client";
import Link from "next/link";

export default function HeroButtons() {
  return (
    <div className="px-global">
        <div className=" max-w-global border-b mx-auto border-x border-[#E5E7EB]">
            <div className="flex flex-col items-center px-[12px] justify-center gap-4 md:flex-row py-[24px] ">
            <Link href="/demo" className="w-full md:w-auto">
                <Button variant="primary" size="md" className="w-full md:w-auto px-[12px] md:px-5"  >
                <span className="block w-full md:w-[164px] text-center md:text-left">Try the Live Demo</span>
                </Button>
            </Link>
            <Button variant="secondary" size="md" className="text-foreground w-full md:w-auto">
                <span className="block w-full text-center md:text-left">Schedule a Guided Demo</span>
            </Button>
            </div>
        </div>
    </div>
  );
}
