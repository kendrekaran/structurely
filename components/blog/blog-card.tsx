type BlogCardProps = {
  title: string;
  description: string;
  date: string;
  image?: string;
};

function BlogCard({ title, description, date, image }: BlogCardProps) {
  return (
    <article className="group flex cursor-pointer flex-col gap-6">
      <div className="aspect-[9/5] overflow-hidden rounded-xl border border-[#E5E7EB] bg-white shadow-[0px_24px_24px_-12px_#3333330D,0px_12px_12px_-6px_#3333330D,0px_6px_6px_-3px_#3333330D,0px_3px_3px_-1.5px_#3333330D,0px_1px_1px_-0.5px_#3333330D,0px_0px_0px_1px_#00000014]">
        {image && (
          <img
            src={image}
            alt={title}
            className="h-[200px] w-[360px] object-cover transition-transform duration-300 group-hover:scale-105"
          />
        )}
      </div>
      <div className="flex flex-col gap-2 px-[16px]  border-b border-[#E5E7EB] pb-6">
        <h3 className="truncate text-[16px] leading-[26px] tracking-[-0.01em] text-[#202020] font-medium">{title}</h3>
        <p className="line-clamp-3 text-[14px] leading-[24px]">{description}</p>
      </div>
      <div className="pb-[24px] px-[16px]">
      <p className=" text-[14px] leading-[20px]">{date}</p>
      </div>
    </article>
  );
}

export default BlogCard;
