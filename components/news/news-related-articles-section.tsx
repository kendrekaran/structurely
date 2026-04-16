import NewsCard from "@/components/news/news-card";

type RelatedArticle = {
  title: string;
  description: string;
  date: string;
  image?: string;
  slug?: string;
};

type NewsRelatedArticlesSectionProps = {
  articles: RelatedArticle[];
};

function NewsRelatedArticlesSection({
  articles,
}: NewsRelatedArticlesSectionProps) {
  return (
    <section id="related-articles" className="relative z-0">
      <div className="px-global">
        <div className="max-w-global border-b mx-auto border-x border-[#E5E7EB]">
          <div className="py-[32px] flex flex-col items-center px-6 lg:px-12">
            <h2 data-reveal="words" className="max-w-[10em] text-center">Related articles</h2>
          </div>
          <div className="border-t border-[#E5E7EB]">
            <div className="grid grid-cols-1 divide-y divide-[#E5E7EB] lg:grid-cols-3 lg:divide-x lg:divide-y-0">
              {articles.map((article, index) => (
                <NewsCard
                  key={article.slug ?? index}
                  title={article.title}
                  description={article.description}
                  date={article.date}
                  image={article.image}
                  slug={article.slug}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewsRelatedArticlesSection;
