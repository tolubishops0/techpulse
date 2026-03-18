"use client";
import React, { useState, useTransition } from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Bell, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { signOut } from "@/lib/auth";
import { User } from "@supabase/supabase-js";
import { useRouter, useSearchParams } from "next/navigation";
import { Loader } from "lucide-react";
import { NotificationBell } from "./NotificationBell";
import ClickAwayListener from "react-click-away-listener";

interface NavbarProps {
  showSearch?: boolean;
  showActions?: boolean;
  activeLink?: "feed" | "about" | "faq" | "home";
  user?: User | null;
}

export function Navbar({
  showSearch = false,
  showActions = true,
  activeLink,
  user,
}: NavbarProps) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();
  const [search, setSearch] = useState(searchParams.get("search") || "");
  function handleSearch(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key !== "Enter") return;
    const value = e.currentTarget.value.trim();
    startTransition(() => {
      if (value) {
        router.push(`/feed?search=${value}`);
      } else {
        router.push("/feed");
      }
    });
  }
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#0a0a0a]/90 backdrop-blur-md">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <a href="/">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded bg-[#FF6B6B] flex items-center justify-center font-bold text-[#0a0a0a]">
              TP
            </div>
            <span className="font-bold text-xl tracking-tight text-white hidden sm:inline-block">
              TechPulse
            </span>
          </div>
        </a>

        {showSearch && (
          <div className="flex-1 max-w-md mx-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
              <Input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={handleSearch}
                placeholder="Search articles, tags, authors..."
                className="w-full bg-white/5 border-white/10 pl-9 rounded-full text-white focus-visible:ring-[#FF6B6B]"
              />
              <div className="absolute right-2 top-1/2 -translate-y-1/2">
                {isPending && (
                  <Loader className="w-4 h-4 text-white/40 animate-spin" />
                )}
                {search && !isPending && (
                  <p
                    onClick={() => {
                      setSearch("");
                      startTransition(() => router.push("/feed"));
                    }}
                    className="text-white/40 mr-2 cursor-pointer"
                  >
                    x
                  </p>
                )}
              </div>
            </div>
          </div>
        )}

        {!showSearch && (
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-white/70">
            {(["home", "feed", "about", "faq"] as const).map((link) => (
              <a
                key={link}
                href={link === "home" ? "/" : `/${link}`}
                className={`capitalize transition-colors ${activeLink === link ? "text-[#FF6B6B]" : "hover:text-white"}`}
              >
                {link}
              </a>
            ))}
          </nav>
        )}

        {showActions && (
          <div className="flex items-center gap-4">
            <NotificationBell />

            <div className="relative group">
              <Avatar
                onClick={() => setOpen(!open)}
                className="w-8 h-8 border border-white/10 cursor-pointer"
              >
                <AvatarFallback className="bg-white/10 text-lg text-whit uppercase">
                  {user ? user?.user_metadata?.full_name?.slice(0, 1) : "G"}
                </AvatarFallback>
              </Avatar>
              {user && open && (
                <ClickAwayListener onClickAway={() => setOpen(false)}>
                  <div className="absolute right-0 top-10 w-48 bg-[#111] border border-white/10 rounded-xl p-1 z-50 cursor-pointer">
                    <a
                      href="/dashboard"
                      className="block px-3 py-2 text-sm text-white/70 hover:text-white hover:bg-white/5 rounded-lg"
                    >
                      Dashboard
                    </a>
                    <button
                      onClick={() => signOut()}
                      className="w-full text-left px-3 py-2 text-sm text-red-400 hover:bg-white/5 rounded-lg"
                    >
                      Sign out
                    </button>
                  </div>
                </ClickAwayListener>
              )}
            </div>
          </div>
        )}

        {!showActions && (
          <div className="flex items-center gap-4">
            {!user && (
              <Button
                variant="ghost"
                asChild
                className="hidden md:inline-flex text-white hover:text-white hover:bg-white/10"
              >
                <a href="/login">Sign In</a>
              </Button>
            )}
            <Button className="bg-[#FF6B6B] text-white hover:bg-[#FF6B6B]/90 border-0">
              Subscribe
            </Button>
          </div>
        )}
      </div>
    </header>
  );
}

// https://github.com/tolubishops0/techpulse
