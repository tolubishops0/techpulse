// app/components/PersonalisedBanner.tsx
// Async Server Component — runs on the server, streams in via Suspense (PPR)
// No "use client" — this is intentional

async function getPersonalisedData() {
  // Simulate a slow personalised fetch (e.g. from your DB or user API)
  // Replace this with your real data source
  await new Promise((resolve) => setTimeout(resolve, 1500));

  return {
    name: "Alex",
    recommendedTopic: "Partial Prerendering",
    unreadCount: 4,
  };
}

export default async function PersonalisedBanner() {
  const { name, recommendedTopic, unreadCount } = await getPersonalisedData();

  return (
    <div className="mb-8 p-6 rounded-2xl border border-white/10 bg-white/5 relative overflow-hidden">
      <div className="absolute top-2 right-2 text-[10px] text-white/30 uppercase tracking-widest font-mono">
        PPR — streamed
      </div>

      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-[#FF6B6B]/20 border border-[#FF6B6B]/30 flex items-center justify-center text-[#FF6B6B] font-bold text-lg shrink-0">
          {name[0]}
        </div>

        {/* Text */}
        <div className="flex-1 min-w-0">
          <p className="font-semibold text-white text-lg leading-tight">
            Welcome back, {name}
          </p>
          <p className="text-white/50 text-sm mt-0.5">
            You have{" "}
            <span className="text-[#FF6B6B] font-medium">
              {unreadCount} unread articles
            </span>{" "}
            · Based on your interests:{" "}
            <span className="text-white/70">{recommendedTopic}</span>
          </p>
        </div>

        {/* CTA */}
        <a
          href="/dashboard"
          className="shrink-0 text-xs px-4 py-2 rounded-lg border border-white/10 text-white/60 hover:bg-white/5 hover:text-white transition-colors"
        >
          View dashboard
        </a>
      </div>
    </div>
  );
}
