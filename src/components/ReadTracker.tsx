"use client";

import { useEffect, useRef } from "react";
import { trackReading } from "@/lib/actions";

interface Props {
  articleId: string;
  userId?: string;
}

export function ReadingTracker({ articleId, userId }: Props) {
  const lastProgress = useRef(0);

  useEffect(() => {
    if (!userId) return;

    trackReading(articleId, 0);

    const handleScroll = () => {
      const progress = Math.round(
        (window.scrollY / (document.body.scrollHeight - window.innerHeight)) *
          100,
      );

      if (progress - lastProgress.current >= 10) {
        lastProgress.current = progress;
        trackReading(articleId, Math.min(progress, 100));
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [articleId, userId]);

  return null;
}
