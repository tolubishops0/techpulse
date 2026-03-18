import { Suspense } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import PersonalisedBanner from "./PersonalizedBanner";
import TrendingFeed from "./Trendingfeed";
import { Category } from "@/types";
import {
  ArticleFeedSkeleton,
  PersonalisedBannerSkeleton,
  TrendingFeedSkeleton,
} from "@/components/Skeletons";
import ArticleGrid from "@/components/ArticleGrid";
import { CategorySidebar, CategoryStrip } from "@/components/CategoryStrips";
import { getUser } from "@/lib/auth";
import { NavbarWrapper } from "@/components/NavWrapper";
import Newsletter from "./Newsletter";

export default async function FeedPage({
  searchParams,
}: {
  searchParams: { category?: string; search?: string };
}) {
  const user = await getUser();

  const resolvedSearchParams = await searchParams;
  const { category, search } = resolvedSearchParams;
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans">
      <NavbarWrapper
        showSearch={true}
        showActions
        activeLink="feed"
        user={user}
      />
      <div className="container mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
        <CategorySidebar />
        <CategoryStrip />

        <main className="flex-1 min-w-0">
          <Suspense fallback={<PersonalisedBannerSkeleton />}>
            <PersonalisedBanner user={user} />
          </Suspense>

          <Suspense fallback={<ArticleFeedSkeleton />}>
            <ArticleGrid category={category as Category} search={search} />
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

            <Newsletter />
          </div>
        </aside>
      </div>
    </div>
  );
}
