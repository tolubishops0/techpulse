"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import { User } from "@supabase/supabase-js";
import { toggleLike } from "@/lib/actions";

interface LikeButtonProps {
  initialCount?: number;
  initialLiked?: boolean;
  user?: User | null;
  articleId: string;
}

export function LikeButton({
  initialCount = 247,
  initialLiked = false,
  user,
  articleId,
}: LikeButtonProps) {
  const [liked, setLiked] = useState(initialLiked);
  const [count, setCount] = useState(initialCount);

  const handleToggle = async () => {
    if (!user) {
      window.location.href = "/login";
      return;
    }
    setLiked((prev) => !prev);
    setCount((prev) => (liked ? prev - 1 : prev + 1));
    await toggleLike(articleId, !liked);
  };

  return (
    <Button
      variant="outline"
      size="lg"
      onClick={handleToggle}
      className={`rounded-full h-12 px-6 border-white/10 transition-all ${
        liked
          ? "bg-[#FF6B6B]/10 border-[#FF6B6B]/50 text-[#FF6B6B]"
          : "bg-transparent text-white hover:bg-white/5"
      }`}
    >
      <Heart
        className={`w-5 h-5 mr-2 transition-all ${liked ? "fill-[#FF6B6B] text-[#FF6B6B]" : ""}`}
      />
      {count} {count === 1 ? "like" : "likes"}
    </Button>
  );
}
