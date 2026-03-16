"use client";

import { categories } from "@/lib/db";
import { useRouter } from "next/navigation";

export function CategoryStrip({
  categories,
  getActive,
  active,
}: {
  active: string;
  categories: string[];
  getActive: (cat: string) => void;
}) {
  return (
    <div className="flex items-center gap-3 w-max mx-auto">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => getActive(cat)}
          className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
            active === cat
              ? "bg-[#FF6B6B] text-white"
              : "bg-white/5 text-white/70 hover:bg-white/10 hover:text-white"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}

export const CategorySidebar = () => {
  const router = useRouter();

  function handleClick(cat: string) {
    if (cat === "All") {
      router.push("/feed");
    } else {
      router.push(`/feed?category=${cat}`);
    }
  }

  return (
    <aside className="hidden lg:block w-64 shrink-0">
      <div className="sticky top-24">
        <h2 className="text-sm font-semibold text-white/50 uppercase tracking-wider mb-4">
          Categories
        </h2>
        <nav className="flex flex-col gap-1">
          {categories.map((cat, i) => (
            <button
              onClick={() => handleClick(cat.replace(" ", ""))}
              key={cat}
              className={`flex items-center justify-between px-3 py-2 rounded-lg text-sm text-left transition-colors ${
                i === 0
                  ? "bg-white/10 text-white font-medium"
                  : "text-white/60 hover:bg-white/5 hover:text-white"
              }`}
            >
              <span>{cat}</span>
              {i === 0 && (
                <div className="w-1.5 h-1.5 rounded-full bg-[#FF6B6B]" />
              )}
            </button>
          ))}
        </nav>
      </div>
    </aside>
  );
};
