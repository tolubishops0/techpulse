import { Skeleton } from "./ui/skeleton";

export function PersonalisedBannerSkeleton() {
  return (
    <div className="mb-8 p-6 rounded-2xl border border-white/10 bg-white/5">
      <div className="flex items-center gap-4">
        <Skeleton className="w-12 h-12 rounded-full bg-white/10 shrink-0" />
        <div className="flex-1 space-y-2">
          <Skeleton className="h-5 w-40 bg-white/10" />
          <Skeleton className="h-4 w-64 bg-white/10" />
        </div>
        <Skeleton className="h-8 w-28 rounded-lg bg-white/10 shrink-0" />
      </div>
    </div>
  );
}

export function TrendingFeedSkeleton() {
  return (
    <div className="flex flex-col gap-3">
      {[1, 2, 3, 4].map((i) => (
        <div
          key={i}
          className="flex gap-3 items-start p-3 rounded-lg border border-white/5 bg-white/[0.02]"
        >
          <span className="text-xl font-bold text-white/20 italic">{i}</span>
          <div className="flex-1 space-y-2">
            <Skeleton className="h-4 w-full bg-white/10" />
            <Skeleton className="h-3 w-4/5 bg-white/10" />
            <Skeleton className="h-2 w-1/3 bg-white/5" />
          </div>
        </div>
      ))}
    </div>
  );
}

export function ArticleFeedSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[1, 2, 3].map((i) => (
        <div key={i} className="flex flex-col gap-3">
          {/* Image Container Skeleton */}
          <div className="aspect-[16/9] rounded-xl overflow-hidden border border-white/10 relative bg-white/5">
            <Skeleton className="w-full h-full bg-white/10" />
            {/* Badge Placeholder */}
            <div className="absolute top-3 left-3">
              <Skeleton className="h-5 w-16 rounded-full bg-white/20" />
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            {/* Title Skeleton - matches line-clamp-2 */}
            <Skeleton className="h-5 w-full bg-white/10" />
            <Skeleton className="h-5 w-2/3 bg-white/10" />

            {/* Excerpt Skeleton */}
            <div className="mt-1 space-y-1.5">
              <Skeleton className="h-3 w-full bg-white/5" />
              <Skeleton className="h-3 w-4/5 bg-white/5" />
            </div>

            {/* Footer Skeleton */}
            <div className="flex items-center justify-between mt-2">
              <div className="flex items-center gap-2">
                {/* Avatar Skeleton */}
                <Skeleton className="w-5 h-5 rounded-full bg-white/10" />
                {/* Meta text (date, read time) */}
                <Skeleton className="h-3 w-24 bg-white/5" />
              </div>

              {/* Stats Skeleton (Like/Comment) */}
              <div className="flex items-center gap-3">
                <Skeleton className="h-3 w-8 bg-white/5" />
                <Skeleton className="h-3 w-8 bg-white/5" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
