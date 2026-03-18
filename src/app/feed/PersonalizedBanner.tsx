import { User } from "@supabase/supabase-js";

export default async function PersonalisedBanner({
  user,
}: {
  user?: User | null;
}) {
  if (!user) {
    return (
      <div className="mb-8 p-6 rounded-2xl border border-white/10 bg-white/5">
        <div className="flex items-center gap-4">
          <div className="flex-1">
            <p className="font-semibold text-white text-lg">
              Welcome to TechPulse 👋
            </p>
            <p className="text-white/50 text-sm mt-0.5">
              <a href="/login" className="text-[#FF6B6B] hover:underline">
                Sign in
              </a>{" "}
              to get a personalised feed and track your reading.
            </p>
          </div>
          <a
            href="/login"
            className="shrink-0 text-xs px-4 py-2 rounded-lg bg-[#FF6B6B] text-white hover:bg-[#FF6B6B]/90"
          >
            Sign in
          </a>
        </div>
      </div>
    );
  }
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
