type BlogCardProps = {
  title: string;
  description: string;
  date: string;
  image?: string;
};

function BlogCard({ title, description, date, image }: BlogCardProps) {
  return (
    <article className="group flex cursor-pointer flex-col">
      <div className="px-2 pt-2">
        <div className="h-[200px] overflow-hidden rounded-xl bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.08),0_1px_1px_-0.5px_rgba(51,51,51,0.05),0_3px_3px_-1.5px_rgba(51,51,51,0.05),0_6px_6px_-3px_rgba(51,51,51,0.05),0_12px_12px_-6px_rgba(51,51,51,0.05),0_24px_24px_-12px_rgba(51,51,51,0.05)]">
          {image && (
            <img
              src={image}
              alt={title}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          )}
        </div>
      </div>
      <div className="flex flex-col divide-y divide-[#E5E7EB]">
        <div className="flex flex-col gap-2 p-6">
          <h3 className="text-[16px] leading-[26px] font-medium tracking-[-0.01em] line-clamp-1">{title}</h3>
          <p className="line-clamp-3">{description}</p>
        </div>
        <div className="p-6">
          <p>{date}</p>
        </div>
      </div>
    </article>
  );
}

export default BlogCard;
