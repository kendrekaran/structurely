function BlogPagination() {
  const pages = [1, 2, 3, "...", 10];
  const activePage = 2;

  return (
    <section id="blog-pagination" className="relative z-0 ">
      <div className="px-global">
        <div className="max-w-global mx-auto border-x bg-white border-y border-[#E5E7EB]">
          <div className="flex items-center justify-center gap-3 md:gap-0 py-3">
            <button className="flex items-center justify-center p-[6px_8px] cursor-pointer">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.99984 15.8327L4.1665 9.99935L9.99984 4.16602" stroke="#646464" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M15.8332 10H4.1665" stroke="#646464" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            {pages.map((page, idx) => (
              <button
                key={idx}
                className={`flex items-center justify-center px-2 py-[6px] text-[14px] leading-[20px] tracking-[-0.01em] cursor-pointer ${
                  page === activePage ? "text-[#006FFF]" : "text-[#646464]"
                }`}
              >
                {page}
              </button>
            ))}

            <button className="flex items-center justify-center p-[6px_8px] cursor-pointer">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.1665 10H15.8332" stroke="#202020" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M10 4.16602L15.8333 9.99935L10 15.8327" stroke="#202020" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BlogPagination;
