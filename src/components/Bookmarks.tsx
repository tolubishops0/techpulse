"use client";
import { Trash2 } from "lucide-react";
import React, { useState } from "react";
import { CategoryBadge } from "./CategoryBadge";
import { Button } from "./ui/button";
import { removeBookmark } from "@/lib/actions";
import { BookmarkItem } from "@/types";

function Bookmarks({ bookmarks: initial }: { bookmarks: BookmarkItem[] }) {
  const [bookmarks, setBookmarks] = useState<BookmarkItem[]>(initial ?? []);

  const handleRemove = async (articleId: string) => {
    const prev = bookmarks;

    setBookmarks((curr) => curr.filter((b) => b.article_id !== articleId));

    try {
      await removeBookmark(articleId);
    } catch (err) {
      setBookmarks(prev);
    }
  };

  if (!bookmarks || bookmarks.length === 0) {
    return (
      <p className="text-white/40 text-sm">
        No bookmarks yet —{" "}
        <a href="/feed" className="text-[#FF6B6B] hover:underline">
          browse articles
        </a>
      </p>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      {bookmarks.map((item) => (
        <div
          key={item.id}
          className="group flex gap-4 p-3 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-colors"
        >
          <div className="w-24 h-20 rounded-lg overflow-hidden shrink-0 bg-white/10">
            <img
              src={item.articles?.image ?? "/images/article-ai.png"}
              alt={item.articles?.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center flex-1 py-1">
            <div className="mb-2">
              <CategoryBadge category={item.articles?.category} size="sm" />
            </div>
            <a href={`/feed/article/${item.articles?.slug}`}>
              <h3 className="font-bold text-sm leading-tight group-hover:text-[#FF6B6B] transition-colors">
                {item.articles?.title}
              </h3>
            </a>
          </div>
          <div className="flex items-center px-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => handleRemove(item.article_id)}
              className="h-8 w-8 text-white/30 hover:text-[#FF6B6B] hover:bg-[#FF6B6B]/10 rounded-full opacity-0 group-hover:opacity-100 transition-all"
            >
              <Trash2 className="w-4 h-4" />
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Bookmarks;
