import React from "react";
import { Navbar } from "@/components/NavBar";
import { CategoryBadge } from "@/components/CategoryBadge";
import { LikeButton } from "@/components/LikeButton";
import { CommentSection } from "@/components/CommentSection";
import { UserAvatar } from "@/components/UserAvatar";
import { Button } from "@/components/ui/button";
import { Share2, BookmarkPlus } from "lucide-react";

export default function ArticlePage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-[#FF6B6B]/30 pb-20">
      <Navbar showSearch={false} showActions activeLink="feed" />

      <main className="max-w-3xl mx-auto px-4 pt-10">
        <div className="mb-6">
          <CategoryBadge category="Web Dev" />
        </div>

        <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-[1.1] mb-6">
          React 19 RC is here: What you need to know about the new compiler
        </h1>

        <div className="flex items-center justify-between py-6 border-y border-white/10 mb-8">
          <div className="flex items-center gap-3">
            <UserAvatar name="Marcus Webb" size="md" />
            <div className="flex flex-col">
              <span className="font-medium text-sm">Marcus Webb</span>
              <span className="text-xs text-white/50">Published Mar 12, 2026 · 8 min read</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="h-8 w-8 text-white/60 hover:text-white rounded-full hover:bg-white/10">
              <Share2 className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8 text-white/60 hover:text-white rounded-full hover:bg-white/10">
              <BookmarkPlus className="w-4 h-4" />
            </Button>
          </div>
        </div>

        <div className="aspect-[2/1] w-full rounded-xl overflow-hidden mb-10 border border-white/10">
          <img src="/__mockup/images/article-web.png" alt="React 19" className="w-full h-full object-cover" />
        </div>

        <article className="prose prose-invert prose-p:text-white/80 prose-p:leading-relaxed prose-headings:font-bold prose-headings:tracking-tight max-w-none">
          <p className="text-xl text-white/90 font-light leading-relaxed mb-8">
            The long-awaited React 19 Release Candidate is finally available. After months of experimentation in the canary channel, the core team has stabilized the APIs that will define the next era of React development.
          </p>

          <p className="mb-6">
            Perhaps the most anticipated feature is the React Compiler (formerly known as React Forget). For years, developers have struggled with manually memoizing values using <code>useMemo</code> and <code>useCallback</code> to prevent unnecessary re-renders. The new compiler aims to automate this entirely.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-6 text-white">The End of Manual Memoization</h2>

          <p className="mb-6">
            Under the hood, the React Compiler analyzes your JavaScript and understands the rules of React. It automatically inserts the equivalent of useMemo and useCallback where needed, ensuring your UI updates only when the underlying state changes.
          </p>

          <div className="my-8 rounded-lg overflow-hidden border border-white/10 bg-[#0d0d0d]">
            <div className="flex items-center px-4 py-2 border-b border-white/5 bg-white/5 text-xs text-white/40 font-mono">
              <span className="flex gap-1.5 mr-4">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/40" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/40" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/40" />
              </span>
              components/ExpensiveChart.jsx
            </div>
            <pre className="p-4 text-sm font-mono overflow-x-auto text-white/80">
              <code className="block"><span className="text-blue-400">export function</span> <span className="text-yellow-200">ExpensiveChart</span>{"({ data, theme }) {"}</code>
              <code className="block text-white/40 line-through decoration-red-500/50">{"  // const processedData = useMemo(() => processChart(data), [data]);"}</code>
              <code className="block mt-2">{"  "}<span className="text-purple-400">const</span>{" processedData = "}<span className="text-blue-200">processChart</span>{"(data);"}</code>
              <code className="block mt-2">{"  "}<span className="text-purple-400">return</span>{" <"}<span className="text-emerald-300">ChartRenderer</span>{" data={processedData} theme={theme} />;"}  </code>
              <code className="block">{"}"}</code>
            </pre>
          </div>

          <blockquote className="border-l-4 border-[#FF6B6B] pl-6 py-2 my-8 italic text-white/70 bg-white/5 rounded-r-lg">
            "We want React developers to focus on building features, not fine-tuning performance primitives."
            <footer className="text-sm not-italic mt-2 text-white/40">— React Core Team</footer>
          </blockquote>

          <p className="mb-6">
            Beyond the compiler, React 19 introduces Actions, which dramatically simplify data mutations and form submissions. The new <code>useActionState</code> hook provides a unified way to handle pending states and optimistic updates.
          </p>
        </article>

        {/* Like Button */}
        <div className="flex items-center justify-center gap-4 py-12 my-12 border-y border-white/10">
          <LikeButton initialCount={247} />
        </div>

        {/* Comment Section */}
        <CommentSection />
      </main>
    </div>
  );
}