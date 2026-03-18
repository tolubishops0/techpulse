"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Share2, BookmarkPlus, BookmarkCheck, Check } from "lucide-react";
import { toggleBookmark } from "@/lib/actions";
import { User } from "@supabase/supabase-js";
import { toast } from "sonner";

interface ArticleActionsProps {
  articleId: string;
  user?: User | null;
  initialBookmarked?: boolean;
}

export function ArticleActions({
  articleId,
  user,
  initialBookmarked = false,
}: ArticleActionsProps) {
  const [bookmarked, setBookmarked] = useState(initialBookmarked);
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    await navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleBookmark = async () => {
    if (!user) {
      window.location.href = "/login";
      return;
    }

    setBookmarked((prev) => !prev);

    const result = await toggleBookmark(articleId);

    if (result?.error) {
      setBookmarked((prev) => !prev); // revert
      toast.error("Something went wrong");
      return;
    }

    toast.success(bookmarked ? "Bookmark removed" : "Bookmarked!");
  };

  return (
    <div className="flex items-center gap-2">
      {/* Share button */}
      <Button
        variant="ghost"
        size="icon"
        onClick={handleShare}
        className="h-8 w-8 text-white/60 hover:text-white rounded-full hover:bg-white/10"
        title={copied ? "Copied!" : "Share article"}
      >
        {copied ? (
          <Check className="w-4 h-4 text-green-400" />
        ) : (
          <Share2 className="w-4 h-4" />
        )}
      </Button>

      {/* Bookmark button */}
      <Button
        variant="ghost"
        size="icon"
        onClick={handleBookmark}
        className={`h-8 w-8 rounded-full hover:bg-white/10 transition-colors ${
          bookmarked ? "text-[#FF6B6B]" : "text-white/60 hover:text-white"
        }`}
        title={bookmarked ? "Remove bookmark" : "Bookmark article"}
      >
        {bookmarked ? (
          <BookmarkCheck className="w-4 h-4 fill-[#FF6B6B]" />
        ) : (
          <BookmarkPlus className="w-4 h-4" />
        )}
      </Button>
    </div>
  );
}
