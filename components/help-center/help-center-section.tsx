import React from "react";

const categories = [
  {
    title: "Call AI",
    description: "A step-by-step guide to Structurely's Call AI Agents",
    articles: 10,
    bg: "bg-white",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.832 16.568C14.0385 16.6628 14.2712 16.6845 14.4917 16.6294C14.7122 16.5744 14.9073 16.4458 15.045 16.265L15.4 15.8C15.5863 15.5516 15.8279 15.35 16.1056 15.2111C16.3833 15.0723 16.6895 15 17 15H20C20.5304 15 21.0391 15.2107 21.4142 15.5858C21.7893 15.9609 22 16.4696 22 17V20C22 20.5304 21.7893 21.0391 21.4142 21.4142C21.0391 21.7893 20.5304 22 20 22C15.2261 22 10.6477 20.1036 7.27208 16.7279C3.89642 13.3523 2 8.7739 2 4C2 3.46957 2.21071 2.96086 2.58579 2.58579C2.96086 2.21071 3.46957 2 4 2H7C7.53043 2 8.03914 2.21071 8.41421 2.58579C8.78929 2.96086 9 3.46957 9 4V7C9 7.31049 8.92771 7.61672 8.78885 7.89443C8.65 8.17214 8.44839 8.41371 8.2 8.6L7.732 8.951C7.54842 9.09118 7.41902 9.29059 7.36579 9.51535C7.31256 9.74012 7.33878 9.97638 7.44 10.184C8.80668 12.9599 11.0544 15.2048 13.832 16.568Z" stroke="#006FFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Text AI",
    description: "A step-by-step guide to Structurely's Call AI Agents",
    articles: 8,
    bg: "bg-[#FAFAFA]",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 22C5.46957 22 4.96086 21.7893 4.58579 21.4142C4.21071 21.0391 4 20.5304 4 20V4C4 3.46957 4.21071 2.96086 4.58579 2.58579C4.96086 2.21072 5.46957 2 6 2H14C14.3166 1.99949 14.6301 2.06161 14.9225 2.18277C15.215 2.30394 15.4806 2.48176 15.704 2.706L19.292 6.294C19.5168 6.51751 19.6952 6.78335 19.8167 7.07616C19.9382 7.36898 20.0005 7.68297 20 8V20C20 20.5304 19.7893 21.0391 19.4142 21.4142C19.0391 21.7893 18.5304 22 18 22H6Z" stroke="#006FFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14 2V7C14 7.26522 14.1054 7.51957 14.2929 7.70711C14.4804 7.89464 14.7348 8 15 8H20" stroke="#006FFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M10 9H8" stroke="#006FFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16 13H8" stroke="#006FFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16 17H8" stroke="#006FFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Appointment Scheduling + Live Transfer Availability",
    description: "Specify when your AI assistant and your human team will be available",
    articles: 5,
    bg: "bg-[#FAFAFA]",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 2H14" stroke="#006FFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 14L15 11" stroke="#006FFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 22C16.4183 22 20 18.4183 20 14C20 9.58172 16.4183 6 12 6C7.58172 6 4 9.58172 4 14C4 18.4183 7.58172 22 12 22Z" stroke="#006FFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "FAQ's",
    description: "Frequently Asked Questions",
    articles: 45,
    bg: "bg-white",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2.99194 16.3417C3.13897 16.7126 3.17171 17.119 3.08594 17.5087L2.02094 20.7987C1.98662 20.9655 1.99549 21.1384 2.04671 21.3008C2.09793 21.4633 2.1898 21.61 2.3136 21.727C2.43741 21.844 2.58904 21.9274 2.75413 21.9693C2.91923 22.0113 3.0923 22.0104 3.25694 21.9667L6.66994 20.9687C7.03765 20.8958 7.41846 20.9276 7.76894 21.0607C9.90432 22.0579 12.3233 22.2689 14.5991 21.6564C16.8749 21.0439 18.8612 19.6473 20.2076 17.7131C21.5541 15.7788 22.1741 13.4311 21.9582 11.0842C21.7424 8.73738 20.7046 6.54216 19.028 4.88589C17.3514 3.22962 15.1436 2.21873 12.7943 2.03159C10.445 1.84445 8.10507 2.49308 6.18738 3.86303C4.26968 5.23299 2.89747 7.23624 2.31283 9.51933C1.72819 11.8024 1.9687 14.2186 2.99194 16.3417Z" stroke="#006FFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9.09009 8.99959C9.32519 8.33126 9.78924 7.7677 10.4 7.40873C11.0108 7.04975 11.729 6.91853 12.4273 7.0383C13.1255 7.15808 13.7589 7.52112 14.2152 8.06312C14.6714 8.60512 14.9211 9.29112 14.9201 9.99959C14.9201 11.9996 11.9201 12.9996 11.9201 12.9996" stroke="#006FFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 17H12.01" stroke="#006FFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

function CategoryCard({ category }: { category: typeof categories[0] }) {
  return (
    <div className={`flex flex-col items-center justify-center gap-6 px-12 py-8 ${category.bg}`}>
      <div className="flex items-center gap-2 rounded-[10px] bg-white px-3 py-2 shadow-[0_0_0_1px_rgba(0,0,0,0.08),0_1px_1px_-0.5px_rgba(51,51,51,0.05),0_3px_3px_-1.5px_rgba(51,51,51,0.05),0_6px_6px_-3px_rgba(51,51,51,0.05),0_12px_12px_-6px_rgba(51,51,51,0.05),0_24px_24px_-12px_rgba(51,51,51,0.05)]">
        {category.icon}
      </div>
      <div className="flex w-full flex-col items-start gap-1">
        <span className="w-full text-center text-[16px] leading-[24px] tracking-[-0.096px] text-[#202020]">
          {category.title}
        </span>
        <span className="w-full text-center text-[14px] leading-[20px] tracking-[-0.084px] text-[#646464]">
          {category.description}
        </span>
      </div>
      <div className="flex items-center justify-center gap-1 rounded-lg bg-white px-4 py-2 shadow-[0_0_0_1px_rgba(0,0,0,0.08),0_1px_1px_-0.5px_rgba(51,51,51,0.05),0_3px_3px_-1.5px_rgba(51,51,51,0.05),0_6px_6px_-3px_rgba(51,51,51,0.05),0_12px_12px_-6px_rgba(51,51,51,0.05),0_24px_24px_-12px_rgba(51,51,51,0.05)]">
        <span className="text-[14px] leading-[20px] tracking-[-0.084px] text-[#646464]">
          {category.articles} articles
        </span>
      </div>
    </div>
  );
}

export default function HelpCenterSection() {
  return (
    <section id="help-center" className="relative z-0 border-b border-[#E5E7EB]">
      <div className="flex flex-col items-center px-6 py-16 md:px-24 md:py-16">
        <div className="flex w-full max-w-[46.375em] flex-col items-center gap-4 text-center">
          <h2 className="max-w-[13.5em]">
            Advice and answers from the{" "}
            <span className="text-[#006FFF]">Structurely</span> Team
          </h2>
          <p className="max-w-[600px] text-center text-[18px] leading-[28px] tracking-[-0.18px] text-[#646464]">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
        </div>
      </div>

      <div className="border-t border-[#E5E7EB]">
        <div className="grid grid-cols-1 sm:grid-cols-2 divide-y divide-[#E5E7EB]">
          <div className="divide-y divide-[#E5E7EB] sm:divide-y-0 sm:col-span-2 grid grid-cols-1 sm:grid-cols-2 border-b border-[#E5E7EB]">
            <div className="sm:border-r border-[#E5E7EB]">
              <CategoryCard category={categories[0]} />
            </div>
            <div>
              <CategoryCard category={categories[1]} />
            </div>
          </div>
          <div className="sm:col-span-2 grid grid-cols-1 sm:grid-cols-2">
            <div className="sm:border-r border-[#E5E7EB]">
              <CategoryCard category={categories[2]} />
            </div>
            <div>
              <CategoryCard category={categories[3]} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
