import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/_ui/table";

type CellValue = "check" | "dash" | string;

type Feature = {
  name: string;
  starter: CellValue;
  growth: CellValue;
  scale: CellValue;
  enterprise: CellValue;
};

const features: Feature[] = [
  {
    name: "Action Credits / mo",
    starter: "20,000",
    growth: "60,000",
    scale: "120,000",
    enterprise: "Unlimited",
  },
  {
    name: "Overage Rate",
    starter: "$0.10",
    growth: "$0.09",
    scale: "$0.08",
    enterprise: "Custom",
  },
  {
    name: "SMS, Email & Voice",
    starter: "check",
    growth: "check",
    scale: "check",
    enterprise: "check",
  },
  {
    name: "Pre-built Mortgage Agent",
    starter: "check",
    growth: "check",
    scale: "check",
    enterprise: "check",
  },
  {
    name: "Salesforce Integration",
    starter: "check",
    growth: "check",
    scale: "check",
    enterprise: "check",
  },
  {
    name: "Multi-agent Workflows",
    starter: "dash",
    growth: "check",
    scale: "check",
    enterprise: "check",
  },
  {
    name: "Advanced Campaign Management",
    starter: "dash",
    growth: "check",
    scale: "check",
    enterprise: "check",
  },
  {
    name: "Custom Agent Configurations",
    starter: "dash",
    growth: "dash",
    scale: "check",
    enterprise: "check",
  },
  {
    name: "Dedicated Success Manager",
    starter: "dash",
    growth: "dash",
    scale: "check",
    enterprise: "check",
  },
  {
    name: "Custom AI Agents & Voices",
    starter: "dash",
    growth: "dash",
    scale: "dash",
    enterprise: "check",
  },
  {
    name: "Fine-tuned LLM",
    starter: "dash",
    growth: "dash",
    scale: "dash",
    enterprise: "check",
  },
  {
    name: "Dedicated AI Training Team",
    starter: "dash",
    growth: "dash",
    scale: "dash",
    enterprise: "check",
  },
];

function CheckIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 8L6.5 11.5L13 5"
        stroke="#006FFF"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CellContent({ value }: { value: CellValue }) {
  if (value === "check") {
    return (
      <div className="flex justify-center">
        <CheckIcon />
      </div>
    );
  }
  if (value === "dash") {
    return (
      <div className="flex justify-center">
        <span className="">—</span>
      </div>
    );
  }
  return (
    <div className="flex justify-center">
      <span className="text-[13px] leading-5">{value}</span>
    </div>
  );
}

export default function ComparePlansSection() {
  return (
    <section
      id="compare-plans"
      className="relative z-0 border-t border-[#E5E7EB] bg-white"
    >
      <div className="px-global py-section-md">
        <div className="max-w-global mx-auto flex flex-col items-center gap-4">
          <h2 className="text-center">Compare Plans</h2>
          <p className="max-w-[28em] text-center">
            Turn your pipeline into closed loans — without hiring
          </p>
        </div>
      </div>

      <div className="px-global pb-section-md">
        <div className="max-w-global mx-auto">
          <Table>
            <TableHeader>
              <TableRow className="border-b border-[#E5E7EB] hover:bg-transparent">
                <TableHead className="w-[32%] py-4 text-[13px] font-medium text-[#202020]" />
                <TableHead className="py-4 text-center text-[13px] font-medium text-[#202020]">
                  Starter
                </TableHead>
                <TableHead className="bg-[#EEF5FF] py-4 text-center text-[13px] font-medium text-[#202020]">
                  Growth
                </TableHead>
                <TableHead className="py-4 text-center text-[13px] font-medium text-[#202020]">
                  Scale
                </TableHead>
                <TableHead className="py-4 text-center text-[13px] font-medium text-[#202020]">
                  Enterprise
                </TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {features.map((feature) => (
                <TableRow
                  key={feature.name}
                  className="border-b border-[#E5E7EB] hover:bg-transparent"
                >
                  <TableCell className="py-4 text-[13px] leading-5 font-normal text-[#202020]">
                    {feature.name}
                  </TableCell>
                  <TableCell className="py-4">
                    <CellContent value={feature.starter} />
                  </TableCell>
                  <TableCell className="bg-[#EEF5FF] py-4">
                    <CellContent value={feature.growth} />
                  </TableCell>
                  <TableCell className="py-4">
                    <CellContent value={feature.scale} />
                  </TableCell>
                  <TableCell className="py-4">
                    <CellContent value={feature.enterprise} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  );
}
