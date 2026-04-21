import Link from "next/link";
import { buildNewsListingHref } from "@/lib/news-listing-url";

type NewsPaginationProps = {
  currentPage: number;
  totalPages: number;
  category: string;
  searchQuery: string;
};

function NewsPagination({
  currentPage,
  totalPages,
  category,
  searchQuery,
}: NewsPaginationProps) {
  if (totalPages <= 1) {
    return null;
  }

  const q = searchQuery.trim();
  const cat = category && category !== "All" ? category : undefined;

  const hrefForPage = (page: number) =>
    buildNewsListingHref({
      category: cat,
      q: q || undefined,
      page: page > 1 ? page : undefined,
    });

  const pages: (number | "gap")[] = (() => {
    if (totalPages <= 9) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }
    const set = new Set<number>([
      1,
      totalPages,
      currentPage,
      currentPage - 1,
      currentPage + 1,
    ]);
    const sorted = [...set].filter((n) => n >= 1 && n <= totalPages).sort((a, b) => a - b);
    const out: (number | "gap")[] = [];
    for (let i = 0; i < sorted.length; i++) {
      const n = sorted[i]!;
      if (i > 0 && n - sorted[i - 1]! > 1) out.push("gap");
      out.push(n);
    }
    return out;
  })();

  return (
    <section id="news-pagination" className="relative z-0">
      <div className="px-global">
        <div className="max-w-global mx-auto border-x border-y border-[#E5E7EB] bg-white">
          <div className="flex flex-wrap items-center justify-center gap-2 py-3 md:gap-1">
            {currentPage > 1 ? (
              <Link
                href={hrefForPage(currentPage - 1)}
                className="flex items-center justify-center p-2"
                aria-label="Previous page"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.99984 15.8327L4.1665 9.99935L9.99984 4.16602"
                    stroke="#646464"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M15.8332 10H4.1665"
                    stroke="#646464"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            ) : (
              <span className="flex cursor-not-allowed items-center justify-center p-2 opacity-40">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.99984 15.8327L4.1665 9.99935L9.99984 4.16602"
                    stroke="#646464"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M15.8332 10H4.1665"
                    stroke="#646464"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            )}

            {pages.map((item, idx) =>
              item === "gap" ? (
                <span
                  key={`gap-${idx}`}
                  className="px-1 text-[14px] leading-[20px] tracking-[-0.01em] text-[#646464]"
                >
                  …
                </span>
              ) : (
                <Link
                  key={item}
                  href={hrefForPage(item)}
                  className={`flex min-w-[36px] items-center justify-center px-2 py-[6px] text-[14px] leading-[20px] tracking-[-0.01em] ${
                    item === currentPage
                      ? "font-medium text-[#006FFF]"
                      : "text-[#646464] hover:text-[#202020]"
                  }`}
                >
                  {item}
                </Link>
              ),
            )}

            {currentPage < totalPages ? (
              <Link
                href={hrefForPage(currentPage + 1)}
                className="flex items-center justify-center p-2"
                aria-label="Next page"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.1665 10H15.8332"
                    stroke="#202020"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10 4.16602L15.8333 9.99935L10 15.8327"
                    stroke="#202020"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            ) : (
              <span className="flex cursor-not-allowed items-center justify-center p-2 opacity-40">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.1665 10H15.8332"
                    stroke="#202020"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10 4.16602L15.8333 9.99935L10 15.8327"
                    stroke="#202020"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewsPagination;
