import React from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Bell, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface NavbarProps {
  showSearch?: boolean;
  showActions?: boolean;
  activeLink?: "feed" | "about" | "faq" | "home";
}

export function Navbar({
  showSearch = false,
  showActions = true,
  activeLink,
}: NavbarProps) {
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
                placeholder="Search articles, tags, authors..."
                className="w-full bg-white/5 border-white/10 pl-9 rounded-full text-white focus-visible:ring-[#FF6B6B]"
              />
            </div>
          </div>
        )}

        {!showSearch && (
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-white/70">
            {(["home", "feed", "about", "faq"] as const).map((link) => (
              <a
                key={link}
                href={`/${link}`}
                className={`capitalize transition-colors ${activeLink === link ? "text-[#FF6B6B]" : "hover:text-white"}`}
              >
                {link}
              </a>
            ))}
          </nav>
        )}

        {showActions && (
          <div className="flex items-center gap-4">
            <button className="relative p-2 text-white/70 hover:text-white transition-colors">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-[#FF6B6B]"></span>
            </button>
            <Avatar className="w-8 h-8 border border-white/10 cursor-pointer">
              <AvatarFallback className="bg-white/10 text-xs text-white">
                AL
              </AvatarFallback>
            </Avatar>
          </div>
        )}

        {!showActions && (
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              className="hidden md:inline-flex text-white hover:text-white hover:bg-white/10"
            >
              Sign In
            </Button>
            <Button className="bg-[#FF6B6B] text-white hover:bg-[#FF6B6B]/90 border-0">
              Subscribe
            </Button>
          </div>
        )}
      </div>
    </header>
  );
}
