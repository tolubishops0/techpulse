"use client";

import { useState } from "react";
import { CategoryStrip } from "./CategoryStrips";
import { ArticleCard } from "./ArticleCard";
import { allArticles, categories } from "@/lib/db";

export function ArticleGrid() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? allArticles
      : allArticles.filter((a) => a.category === activeCategory);

  return (
    <>
      <section className="mb-16 -mx-4 px-4 overflow-x-auto pb-4">
        <CategoryStrip
          categories={categories}
          active={activeCategory}
          getActive={(item) => setActiveCategory(item)}
        />
      </section>

      <section>
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold tracking-tight">
            Latest Stories
            <span className="ml-3 text-base font-normal text-white/40">
              {filtered.length} article{filtered.length !== 1 ? "s" : ""}
            </span>
          </h2>
          <a href="/feed" className="text-sm text-[#FF6B6B] hover:underline">
            View all
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filtered.slice(0, 3).map((article) => (
            <ArticleCard key={article.slug} {...article} />
          ))}
        </div>
      </section>
    </>
  );
}
