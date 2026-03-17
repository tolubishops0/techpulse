"use client";

import { useEffect } from "react";
import { trackReading } from "@/lib/actions";

interface Props {
  articleId: string;
  userId?: string;
}

export function ReadingTracker({ articleId, userId }: Props) {
  useEffect(() => {
    if (!userId) return;

    window.addEventListener("scroll", () => {
      const progress = Math.round(
        (window.scrollY / document.body.scrollHeight) * 100,
      );
      trackReading(articleId, progress);
    });
    trackReading(articleId, 100);
  }, [articleId, userId]);

  return null;
}
