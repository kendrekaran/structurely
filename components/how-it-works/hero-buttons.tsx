import Button from "@/components/_ui/button";
import Link from "next/link";

export default function HeroButtons() {
  return (
    <div className="px-global">
        <div className=" max-w-global md:border-b mx-auto border-x border-[#E5E7EB]">
            <div className="flex flex-col items-center px-[12px] justify-center gap-4 md:flex-row pt-6 md:py-[24px] ">
            <Link href="/demo" className="w-full md:w-auto">
                <Button variant="primary" size="md" className="w-full md:w-auto justify-center px-[12px] md:px-5 [&>span]:justify-center md:[&>span]:justify-between"  >
                <span className="block md:w-[164px] text-center md:text-left">Try the Live Demo</span>
                </Button>
            </Link>
            <Link href="https://calendly.com/structurely-sales/schedule-demo" target="_blank">
              <Button variant="secondary" size="md" className="text-foreground w-full md:w-auto">
                  <span className="block w-full text-center md:text-left">Schedule a Guided Demo</span>
              </Button>
            </Link>
            </div>
        </div>
    </div>
  );
}
