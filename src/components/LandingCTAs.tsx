"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/lib/supabase/client";

export function LandingCTA() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      setUser(data.user);
      setLoading(false);
    });
  }, []);

  if (loading)
    return (
      <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
        <div className="h-12 w-40 rounded-lg bg-white/5 animate-pulse" />
        <div className="h-12 w-32 rounded-lg bg-white/5 animate-pulse" />
      </div>
    );

  if (user)
    return (
      <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
        <Button
          asChild
          size="lg"
          className="bg-[#FF6B6B] text-white hover:bg-[#FF6B6B]/90 h-12 px-8 text-base"
        >
          <a href="/feed">Read Latest News</a>
        </Button>
        <Button
          asChild
          size="lg"
          variant="outlinen"
          className="h-12 px-8 text-base border-white/20 hover:bg-white/10 hover:text-white"
        >
          <a href="/dashboard">My Dashboard</a>
        </Button>
      </div>
    );
  //   console.log({ user });
  return (
    <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
      <Button
        asChild
        size="lg"
        className="bg-[#FF6B6B] text-white hover:bg-[#FF6B6B]/90 h-12 px-8 text-base"
      >
        <a href="/feed">Read Latest News</a>
      </Button>
      <Button
        asChild
        size="lg"
        variant="outlinen"
        className="h-12 px-8 text-base border-white/20 hover:bg-white/10 hover:text-white"
      >
        <a href="/login">Sign In</a>
      </Button>
    </div>
  );
}
