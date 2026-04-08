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
  individual: CellValue;
  team: CellValue;
  company: CellValue;
};

const features: Feature[] = [
  {
    name: "Platform Fee",
    individual: "$99/mo",
    team: "$499/mo",
    company: "$999/mo",
  },
  {
    name: "Action Credit Rate",
    individual: "$0.10/credit",
    team: "$0.08/credit",
    company: "$0.06/credit",
  },
  {
    name: "Leads Per Month",
    individual: "No cap",
    team: "No cap",
    company: "No cap",
  },
  {
    name: "Agents Built For You",
    individual: "2 agents",
    team: "4 agents",
    company: "Custom",
  },
  {
    name: "Unlimited Self-Built Agents",
    individual: "check",
    team: "check",
    company: "check",
  },
  {
    name: "Local Area Code Numbers",
    individual: "check",
    team: "check",
    company: "check",
  },
  {
    name: "SMS, Email & Voice",
    individual: "check",
    team: "check",
    company: "check",
  },
  {
    name: "Multi-agent Workflows",
    individual: "dash",
    team: "check",
    company: "check",
  },
  {
    name: "Live Transfer Optimization",
    individual: "dash",
    team: "check",
    company: "check",
  },
  {
    name: "Dedicated Success Manager",
    individual: "dash",
    team: "dash",
    company: "check",
  },
  {
    name: "Custom Agent Configurations",
    individual: "dash",
    team: "dash",
    company: "check",
  },
  {
    name: "Volume Credit Discounts",
    individual: "dash",
    team: "dash",
    company: "check",
  },
  {
    name: "Onboarding (one-time)",
    individual: "$1,500",
    team: "$2,000",
    company: "$2,500",
  },
];

function CheckIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.75 13.062L9.9 16.2495L17.25 7.74951"
        stroke="#006FFF"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function DashIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ opacity: 0.48 }}
    >
      <g opacity="0.48">
        <path
          d="M5 12H19"
          stroke="#646464"
          strokeWidth="1.25"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
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
        <DashIcon />
      </div>
    );
  }
  return (
    <div className="flex justify-center">
      <span className="text-[14px] leading-[20px] font-medium tracking-[-0.01em] text-[#202020]">
        {value}
      </span>
    </div>
  );
}

export default function ComparePlansSection() {
  return (
    <section id="compare-plans" className="relative z-0 ">
      <div className="px-global">
        <div className="max-w-global py-16 mx-auto flex flex-col items-center gap-3 border-x border-[#E5E7EB] px-3 md:px-0">
          <h2 data-reveal="words" className="text-center">Compare Plans</h2>
        </div>
      </div>

      <div className="px-global">
        <div className="max-w-global mx-auto border-x border-t border-[#E5E7EB]">
          <Table containerClassName="max-md:[&::-webkit-scrollbar]:hidden max-md:[scrollbar-width:none]">
            <TableHeader>
              <TableRow className="border-b-0 hover:bg-transparent">
                <TableHead className="w-[320px] min-w-[200px] border-r border-[#E5E7EB] border-b border-[#E5E7EB] bg-[#FAFAFA] px-4 py-4 align-middle text-[14px] leading-[20px] font-medium tracking-[-0.01em] text-[#202020]">
                  Feature
                </TableHead>
                <TableHead className="flex-1 min-w-[160px] border-r border-[#E5E7EB] border-b border-[#E5E7EB] bg-[#FAFAFA] py-4 text-center align-middle">
                  <div className="text-[14px] leading-[20px] font-medium tracking-[-0.01em] text-[#202020]">
                    Individual
                  </div>
                  <div className="text-[12px] leading-[24px] font-medium tracking-[-0.005em] text-[#646464]">
                    $99/mo
                  </div>
                </TableHead>
                <TableHead className="flex-1 min-w-[160px] border border-[#E5E7EB] bg-[rgba(0,111,255,0.08)] py-4 text-center align-middle">
                  <div className="text-[14px] leading-[20px] font-medium tracking-[-0.01em] text-[#202020]">
                    Team
                  </div>
                  <div className="text-[12px] leading-[24px] font-medium tracking-[-0.005em] text-[#006FFF]">
                    $499/mo
                  </div>
                </TableHead>
                <TableHead className="flex-1 min-w-[160px] border-b border-[#E5E7EB] bg-[#FAFAFA] py-4 text-center align-middle">
                  <div className="text-[14px] leading-[20px] font-medium tracking-[-0.01em] text-[#202020]">
                    Company
                  </div>
                  <div className="text-[12px] leading-[24px] font-medium tracking-[-0.005em] text-[#646464]">
                    $999/mo
                  </div>
                </TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {features.map((feature) => (
                <TableRow
                  key={feature.name}
                  className="border-b border-[#E5E7EB] bg-white hover:bg-white"
                >
                  <TableCell className="w-[320px] min-w-[200px] border-r border-[#E5E7EB] px-4 py-6 align-middle text-[14px] leading-[20px] font-medium tracking-[-0.01em] text-[#202020]">
                    {feature.name}
                  </TableCell>
                  <TableCell className="flex-1 min-w-[160px] border-r border-[#E5E7EB] py-6 align-middle">
                    <CellContent value={feature.individual} />
                  </TableCell>
                  <TableCell className="flex-1 min-w-[160px] border-r border-l border-[#E5E7EB] py-6 align-middle bg-[rgba(0,111,255,0.04)]">
                    <CellContent value={feature.team} />
                  </TableCell>
                  <TableCell className="flex-1 min-w-[160px] py-6 align-middle">
                    <CellContent value={feature.company} />
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
