// app/components/TrendingFeed.tsx
// Async Server Component — runs on the server, streams in via Suspense (PPR)
// No "use client" — this is intentional

type TrendingArticle = {
  id: number;
  title: string;
  category: string;
  views: string;
};

async function getTrendingArticles(): Promise<TrendingArticle[]> {
  // Simulate a slow trending fetch (e.g. analytics DB query)
  // Replace with your real data source
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return [
    {
      id: 1,
      title: "Next.js 15 Introduces Partial Prerendering",
      category: "Web Dev",
      views: "24k views",
    },
    {
      id: 2,
      title: "Anthropic releases Claude 3.5 Sonnet",
      category: "AI",
      views: "18k views",
    },
    {
      id: 3,
      title: "Zero-day vulnerability found in popular npm package",
      category: "Security",
      views: "15k views",
    },
    {
      id: 4,
      title: "The hidden costs of serverless",
      category: "Cloud",
      views: "9k views",
    },
  ];
}

const categoryColors: Record<string, string> = {
  AI: "text-purple-400 bg-purple-400/10",
  "Web Dev": "text-blue-400 bg-blue-400/10",
  Security: "text-red-400 bg-red-400/10",
  Cloud: "text-sky-400 bg-sky-400/10",
  "Open Source": "text-green-400 bg-green-400/10",
  Tools: "text-yellow-400 bg-yellow-400/10",
  Hardware: "text-orange-400 bg-orange-400/10",
};

export default async function TrendingFeed() {
  const articles = await getTrendingArticles();

  return (
    <div className="flex flex-col gap-3 relative">
      {/* Optional: label so you can see it working during dev */}
      <div className="absolute top-0 right-0 text-[10px] text-white/30 uppercase tracking-widest font-mono">
        PPR — streamed
      </div>

      {articles.map((article) => {
        const colorClass =
          categoryColors[article.category] ?? "text-white/40 bg-white/5";
        return (
          <a
            key={article.id}
            href={`/articles/${article.id}`}
            className="flex gap-3 items-start p-3 rounded-lg border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/10 transition-colors group"
          >
            <span className="text-xl font-bold text-white/20 italic w-5 shrink-0 leading-tight">
              {article.id}
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
                  {article.views}
                </span>
              </div>
            </div>
          </a>
        );
      })}
    </div>
  );
}
