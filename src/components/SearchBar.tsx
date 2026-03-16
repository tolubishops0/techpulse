"use client";

import React, { useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface SearchBarProps {
  placeholder?: string;
  onSearch?: (value: string) => void;
}

export function SearchBar({
  placeholder = "Search articles, tags, authors...",
  onSearch,
}: SearchBarProps) {
  const [value, setValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    onSearch?.(e.target.value);
  };

  return (
    <div className="relative w-full">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40 pointer-events-none" />
      <Input
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        className="w-full bg-white/5 border-white/10 pl-9 rounded-full text-white placeholder:text-white/40 focus-visible:ring-[#FF6B6B]"
      />
    </div>
  );
}