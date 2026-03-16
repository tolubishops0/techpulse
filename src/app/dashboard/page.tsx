import React from "react";
import { CategoryBadge } from "@/components/CategoryBadge";
import { UserAvatar } from "@/components/UserAvatar";
import { NotificationBell } from "@/components/NotificationBell";
import { Button } from "@/components/ui/button";
import { BookOpen, Bookmark, MessageSquare, Trash2, Clock } from "lucide-react";
import { Navbar } from "@/components/NavBar";

const bookmarks = [
  {
    title: "Building an AI-powered code reviewer",
    category: "AI" as const,
    img: "/images/article-ai.png",
  },
  {
    title: "The modern CSS architecture guide",
    category: "Web Dev" as const,
    img: "/images/article-web.png",
  },
  {
    title: "Securing your cloud infrastructure in 2026",
    category: "Security" as const,
    img: "/images/article-security.png",
  },
];

const history = [
  { title: "React 19 RC is here", time: "2 hours ago", progress: 100 },
  {
    title: "Next.js 15 Introduces Partial Prerendering",
    time: "Yesterday",
    progress: 60,
  },
  {
    title: "Zero-day vulnerability found in npm",
    time: "2 days ago",
    progress: 100,
  },
  {
    title: "Anthropic releases Claude 3.5 Sonnet",
    time: "Last week",
    progress: 30,
  },
  { title: "The hidden costs of serverless", time: "Last week", progress: 100 },
];

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans">
      {/* Custom Navbar with NotificationBell + UserAvatar */}
      <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#0a0a0a]/90 backdrop-blur-md">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded bg-[#FF6B6B] flex items-center justify-center font-bold text-[#0a0a0a]">
              TP
            </div>
            <span className="font-bold text-xl tracking-tight hidden sm:inline-block">
              TechPulse
            </span>
          </div>
          <div className="flex items-center gap-2">
            <NotificationBell />
            <UserAvatar name="Alex Lee" />
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-10 max-w-5xl">
        {/* Welcome Header */}
        <header className="mb-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Welcome back, Alex 👋
          </h1>
          <p className="text-white/50">
            Here's what's been happening in your world.
          </p>
        </header>

        {/* Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {[
            {
              icon: <BookOpen className="w-4 h-4" />,
              label: "Articles Read",
              value: 142,
            },
            {
              icon: <Bookmark className="w-4 h-4" />,
              label: "Bookmarks Saved",
              value: 28,
            },
            {
              icon: <MessageSquare className="w-4 h-4" />,
              label: "Comments Posted",
              value: 17,
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
          {/* Bookmarks */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold flex items-center gap-2">
                <Bookmark className="w-5 h-5 text-[#FF6B6B]" /> Bookmarks
              </h2>
              <a
                href="#"
                className="text-sm text-white/50 hover:text-white transition-colors"
              >
                View all
              </a>
            </div>
            <div className="flex flex-col gap-4">
              {bookmarks.map((item, i) => (
                <div
                  key={i}
                  className="group flex gap-4 p-3 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-colors"
                >
                  <div className="w-24 h-20 rounded-lg overflow-hidden shrink-0 bg-white/10">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col justify-center flex-1 py-1">
                    <div className="mb-2">
                      <CategoryBadge category={item.category} size="sm" />
                    </div>
                    <h3 className="font-bold text-sm leading-tight group-hover:text-[#FF6B6B] transition-colors">
                      {item.title}
                    </h3>
                  </div>
                  <div className="flex items-center px-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 text-white/30 hover:text-[#FF6B6B] hover:bg-[#FF6B6B]/10 rounded-full opacity-0 group-hover:opacity-100 transition-all"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Reading History */}
          <div>
            <h2 className="text-xl font-bold flex items-center gap-2 mb-6">
              <Clock className="w-5 h-5 text-blue-400" /> Reading History
            </h2>
            <div className="flex flex-col gap-6 relative before:absolute before:inset-y-0 before:left-2 before:w-px before:bg-white/10 ml-2">
              {history.map((item, i) => (
                <div key={i} className="relative pl-8">
                  <div
                    className={`absolute left-[5px] top-1.5 w-2 h-2 rounded-full -translate-x-1/2 ${item.progress === 100 ? "bg-white/40" : "bg-[#FF6B6B] shadow-[0_0_8px_rgba(255,107,107,0.5)]"}`}
                  />
                  <div className="flex flex-col gap-1">
                    <h4 className="text-sm font-medium leading-tight text-white/90 truncate">
                      {item.title}
                    </h4>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-white/40">{item.time}</span>
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
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
