import { Suspense } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArticleCard } from "@/components/ArticleCard";

import PersonalisedBanner from "./PersonalizedBanner";
import TrendingFeed from "./Trendingfeed";
import { Navbar } from "@/components/NavBar";
import { CategorySidebar } from "@/components/CategoryStrips";
import { getArticles } from "@/lib/actions";
import { Article, Category, FeedPageProps } from "@/types";
import {
  ArticleFeedSkeleton,
  PersonalisedBannerSkeleton,
  TrendingFeedSkeleton,
} from "@/components/Skeletons";

export default async function FeedPage({ searchParams }: FeedPageProps) {
  const category = searchParams.category;
  const articles: Article[] = (await getArticles(
    category as Category,
  )) as unknown as Article[];
  console.log({ articles });
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans">
      <Navbar showSearch={true} showActions activeLink="feed" />
      <div className="container mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
        <CategorySidebar />

        <main className="flex-1 min-w-0">
          <Suspense fallback={<PersonalisedBannerSkeleton />}>
            <PersonalisedBanner />
          </Suspense>

          <Suspense fallback={<ArticleFeedSkeleton />}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {articles?.map((article) => (
                <ArticleCard key={article.slug} {...article} />
              ))}
            </div>
          </Suspense>
        </main>

        <aside className="hidden xl:block w-72 shrink-0">
          <div className="sticky top-24">
            <h2 className="text-sm font-semibold text-white/50 uppercase tracking-wider mb-4">
              Trending Now
            </h2>

            <Suspense fallback={<TrendingFeedSkeleton />}>
              <TrendingFeed />
            </Suspense>

            <div className="mt-8 p-4 rounded-xl bg-gradient-to-br from-[#FF6B6B]/20 to-transparent border border-[#FF6B6B]/20">
              <h3 className="font-bold mb-2">Subscribe to TechPulse</h3>
              <p className="text-xs text-white/60 mb-4">
                Get the latest developer news straight to your inbox.
              </p>
              <div className="flex gap-2">
                <Input
                  placeholder="Email address"
                  className="h-8 text-xs bg-black/50 border-white/10"
                />
                <Button
                  size="sm"
                  className="h-8 bg-[#FF6B6B] hover:bg-[#FF6B6B]/90 text-white text-xs"
                >
                  Join
                </Button>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
