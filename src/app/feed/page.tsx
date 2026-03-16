import { Suspense } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import PersonalisedBanner from "./PersonalizedBanner";
import TrendingFeed from "./Trendingfeed";
import { Navbar } from "@/components/NavBar";
import { CategorySidebar } from "@/components/CategoryStrips";
import { Category } from "@/types";
import {
  ArticleFeedSkeleton,
  PersonalisedBannerSkeleton,
  TrendingFeedSkeleton,
} from "@/components/Skeletons";
import ArticleGrid from "@/components/ArticleGrid";
import { getUser } from "@/lib/auth";

export default async function FeedPage({
  searchParams,
}: {
  searchParams: { category?: string };
}) {
  const user = await getUser();

  const resolvedSearchParams = await searchParams;
  const { category } = resolvedSearchParams;
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans">
      <Navbar
        showSearch={true}
        showActions
        activeLink="feed"
        user={user?.email}
      />
      <div className="container mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
        <CategorySidebar />

        <main className="flex-1 min-w-0">
          <Suspense fallback={<PersonalisedBannerSkeleton />}>
            <PersonalisedBanner />
          </Suspense>

          <Suspense fallback={<ArticleFeedSkeleton />}>
            <ArticleGrid category={category as Category} />
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
