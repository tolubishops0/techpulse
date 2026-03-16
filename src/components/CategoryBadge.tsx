import React from "react";
import { Badge } from "@/components/ui/badge";

type Category =
  | "AI"
  | "Web Dev"
  | "Open Source"
  | "Cloud"
  | "Security"
  | "Tools"
  | "Hardware"
  | string;

const categoryColors: Record<string, string> = {
  AI: "bg-[#FF6B6B] hover:bg-[#FF6B6B]",
  "Web Dev": "bg-blue-500 hover:bg-blue-500",
  "Open Source": "bg-violet-500 hover:bg-violet-500",
  Cloud: "bg-emerald-500 hover:bg-emerald-500",
  Security: "bg-purple-500 hover:bg-purple-500",
  Tools: "bg-amber-500 hover:bg-amber-500",
  Hardware: "bg-cyan-500 hover:bg-cyan-500",
};

interface CategoryBadgeProps {
  category: Category;
  size?: "sm" | "md";
}

export function CategoryBadge({ category, size = "md" }: CategoryBadgeProps) {
  const colorClass =
    categoryColors[category] ?? "bg-white/20 hover:bg-white/20";

  return (
    <Badge
      className={`${colorClass} text-white border-0 ${size === "sm" ? "text-[10px] px-1.5 py-0 h-4" : ""}`}
    >
      {category}
    </Badge>
  );
}
