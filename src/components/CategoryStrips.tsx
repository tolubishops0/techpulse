"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useTransition } from "react";
import { categories } from "@/lib/db";

function useCategoryNav() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();
  const active = searchParams.get("category") || "all";

  function handleClick(cat: string) {
    const url = cat.toLowerCase() === "all" ? "/feed" : `/feed?category=${cat}`;
    startTransition(() => router.push(url));
  }

  return { active, isPending, handleClick };
}

export const CategorySidebar = () => {
  const { active, isPending, handleClick } = useCategoryNav();

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

export const CategoryStrip = () => {
  const { active, isPending, handleClick } = useCategoryNav();

  return (
    <div
      className={`lg:hidden overflow-x-auto -mx-4 px-4 pb-3 ${isPending ? "opacity-70" : ""}`}
    >
      <div className="flex items-center gap-2 w-max">
        {categories.map((cat) => {
          const isActive = active === cat;
          return (
            <button
              key={cat}
              onClick={() => handleClick(cat)}
              className={`capitalize px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                isActive
                  ? "bg-white/10 text-white"
                  : "bg-white/5 text-white/60 hover:bg-white/10 hover:text-white"
              }`}
            >
              {cat}
              {isActive && (
                <span className="ml-1.5 inline-block w-1.5 h-1.5 rounded-full bg-[#FF6B6B] align-middle" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};
