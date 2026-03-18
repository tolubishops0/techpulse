import { categoryColors } from "@/lib/db";
import { getTrendingArticles } from "../../lib/queries";

type TrendingArticle = {
  id: number;
  title: string;
  category: string;
  views: number;
  slug: string;
};

async function getTrending(): Promise<TrendingArticle[]> {
  const trending_article = await getTrendingArticles();
  return trending_article;
}

export default async function TrendingFeed() {
  const articles = await getTrending();

  return (
    <div className="flex flex-col gap-3 relative">
      {articles.map((article, index) => {
        const colorClass =
          categoryColors[article.category] ?? "text-white/40 bg-white/5";
        return (
          <a
            key={article.id}
            href={`/feed/article/${article.slug}`}
            className="flex gap-3 items-start p-3 rounded-lg border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/10 transition-colors group"
          >
            <span className="text-xl font-bold text-white/20 italic w-5 shrink-0 leading-tight">
              {index}
            </span>
            <div className="flex-1 min-w-0">
              <p className="text-sm text-white/80 group-hover:text-white transition-colors leading-snug line-clamp-2">
                {article.title}
              </p>
              <div className="flex items-center gap-2 mt-2">
                <span
                  className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${colorClass}`}
                >
                  {article.category}
                </span>
                <span className="text-[10px] text-white/30">
                  {article.views >= 1000
                    ? `${(article.views / 1000).toFixed(0)}k views`
                    : `${article.views} views`}
                </span>
              </div>
            </div>
          </a>
        );
      })}
    </div>
  );
}
