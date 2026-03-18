import { ArticleCard } from "@/components/ArticleCard";
import { Category } from "@/types";
import { getArticles } from "../lib/queries";

type Props = {
  category?: Category;
  search?: string;
};

export default async function ArticleGrid({ category, search }: Props) {
  console.log({ category, search });
  const articles = await getArticles(category, search);

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
