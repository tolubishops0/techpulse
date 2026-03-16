"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useTransition } from "react";
import { categories } from "@/lib/db";

export const CategorySidebar = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();

  const active = searchParams.get("category") || "all";

  function handleClick(cat: string) {
    const url = cat.toLowerCase() === "all" ? "/feed" : `/feed?category=${cat}`;

    startTransition(() => {
      router.push(url);
    });
  }

  return (
    <aside
      className={`hidden lg:block w-64 shrink-0 ${isPending ? "opacity-70" : ""}`}
    >
      <nav className="flex flex-col gap-1">
        {categories.map((cat) => {
          const isActive = active === cat;

          return (
            <button
              onClick={() => handleClick(cat)}
              key={cat}
              className={`capitalize flex items-center justify-between px-3 py-2 rounded-lg text-sm text-left transition-colors ${
                isActive
                  ? "bg-white/10 text-white font-medium"
                  : "text-white/60 hover:bg-white/5 hover:text-white cursor-pointer"
              }`}
            >
              <span>{cat}</span>
              {isActive && (
                <div className="w-1.5 h-1.5 rounded-full bg-[#FF6B6B]" />
              )}
            </button>
          );
        })}
      </nav>
    </aside>
  );
};
