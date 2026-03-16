import { getArticles } from "@/lib/actions";
import { ArticleCard } from "@/components/ArticleCard";
import { Category } from "@/types";

type Props = {
  category?: Category;
};

export default async function ArticleGrid({ category }: Props) {
  const articles = await getArticles(category);

  if (articles.length === 0) {
    return (
      <p className="col-span-full text-center py-20 text-white/50 bg-red-600/10 rounded-xl border border-red-600/20">
        No articles found for{" "}
        <span className="text-white font-semibold capitalize">{category}</span>
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {articles.map((article) => (
        <ArticleCard key={article.slug} {...article} />
      ))}
    </div>
  );
}
