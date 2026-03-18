import { User } from "@supabase/supabase-js";

export default async function PersonalisedBanner({
  user,
}: {
  user?: User | null;
}) {
  return (
    <div className="mb-8 p-6 rounded-2xl border border-white/10 bg-white/5 relative overflow-hidden">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-[#FF6B6B]/20 border border-[#FF6B6B]/30 flex items-center justify-center text-[#FF6B6B] font-bold text-lg shrink-0">
          {(user?.user_metadata?.full_name || user?.email?.split("@")[0]).slice(
            0,
            1,
          )}
        </div>

        <div className="flex-1 min-w-0">
          <p className="font-semibold text-white text-lg leading-tight">
            Welcome back,{" "}
            {user?.user_metadata?.full_name ?? user?.email?.split("@")[0]} 👋
          </p>
          <p className="text-white/50 text-sm mt-0.5">
            You have{" "}
            <span className="text-[#FF6B6B] font-medium">
              new unread articles
            </span>{" "}
            <br />
            <span className="text-white/70">
              {" "}
              Check out your dashboard to track your progress so far
            </span>
          </p>
        </div>

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
