type BlogCardProps = {
  title: string;
  description: string;
  date: string;
  image?: string;
};

function BlogCard({ title, description, date, image }: BlogCardProps) {
  return (
    <article className="flex flex-col gap-4 cursor-pointer group">
      <div className="w-full aspect-[4/3] border border-[#E5E7EB] rounded-xl bg-white overflow-hidden shadow-[0px_2px_8px_0px_rgba(0,0,0,0.04)]">
        {image && (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        )}
      </div>
      <div className="flex flex-col gap-2 pb-6 border-b border-[#E5E7EB]">
        <h3 className="truncate">{title}</h3>
        <p className="text-[14px] leading-[24px] line-clamp-3">{description}</p>
        <p className="text-[14px] leading-[20px] mt-3">{date}</p>
      </div>
    </article>
  );
}

export default BlogCard;
