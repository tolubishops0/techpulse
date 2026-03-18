import { redirect } from "next/navigation";
import { formatDate } from "@/lib/utils";
import { getUser } from "@/lib/auth";
import { BookOpen, Bookmark, MessageSquare, Clock } from "lucide-react";
import { getDashboardData } from "../../lib/queries";
import { NavbarWrapper } from "@/components/NavWrapper";
import Bookmarks from "@/components/Bookmarks";

export default async function DashboardPage() {
  const user = await getUser();
  if (!user) redirect("/login");

  const { bookmarks, commentCount, history } = await getDashboardData(user.id);
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans">
      <NavbarWrapper user={user} showActions />
      <main className="container mx-auto px-4 py-10 max-w-5xl">
        <header className="mb-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Welcome back,{" "}
            {user?.user_metadata?.full_name ?? user?.email?.split("@")[0]} 👋
          </h1>
          <p className="text-white/50">
            Here's what's been happening in your world.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {[
            {
              icon: <BookOpen className="w-4 h-4" />,
              label: "Articles Read",
              value: history.length,
            },
            {
              icon: <Bookmark className="w-4 h-4" />,
              label: "Bookmarks Saved",
              value: bookmarks.length,
            },
            {
              icon: <MessageSquare className="w-4 h-4" />,
              label: "Comments Posted",
              value: commentCount,
            },
          ].map((stat) => (
            <div
              key={stat.label}
              className="p-6 rounded-xl bg-white/5 border border-white/10 flex flex-col gap-2"
            >
              <div className="flex items-center gap-2 text-white/50 mb-2">
                {stat.icon}
                <span className="text-sm font-medium">{stat.label}</span>
              </div>
              <div className="text-4xl font-bold text-[#FF6B6B]">
                {stat.value}
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 xl:gap-12">
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold flex items-center gap-2">
                <Bookmark className="w-5 h-5 text-[#FF6B6B]" /> Bookmarks
              </h2>
              {/* {bookmarks.length > 5 && (
                <a href="/bookmarks" className="text-sm text-white">
                  View all
                </a>
              )} */}
            </div>
            <Bookmarks bookmarks={bookmarks} />
          </div>

          <div>
            <h2 className="text-xl font-bold flex items-center gap-2 mb-6">
              <Clock className="w-5 h-5 text-blue-400" /> Reading History
            </h2>
            <div className="flex flex-col gap-6 relative before:absolute before:inset-y-0 before:left-2 before:w-px before:bg-white/10 ml-2">
              {history.length === 0 ? (
                <p className="text-white/40 text-sm pl-8">
                  No reading history yet
                </p>
              ) : (
                history.map((item: any) => (
                  <div key={item.id} className="relative pl-8">
                    <div
                      className={`absolute left-[5px] top-1.5 w-2 h-2 rounded-full -translate-x-1/2 ${
                        item.progress === 100
                          ? "bg-white/40"
                          : "bg-[#FF6B6B] shadow-[0_0_8px_rgba(255,107,107,0.5)]"
                      }`}
                    />
                    <div className="flex flex-col gap-1">
                      <h4 className="text-sm font-medium leading-tight text-white/90 truncate">
                        {item.articles?.title}
                      </h4>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-white/40">
                          {formatDate(item.updated_at)}
                        </span>
                        {item.progress < 100 && (
                          <span className="text-[10px] text-[#FF6B6B]">
                            {item.progress}% read
                          </span>
                        )}
                      </div>
                      {item.progress < 100 && (
                        <div className="w-full h-1 bg-white/10 rounded-full mt-1 overflow-hidden">
                          <div
                            className="h-full bg-[#FF6B6B]"
                            style={{ width: `${item.progress}%` }}
                          />
                        </div>
                      )}
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
