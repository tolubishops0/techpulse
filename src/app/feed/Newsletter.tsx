"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { collectEmail } from "@/lib/actions";
import React, { useState } from "react";
import { toast } from "sonner";

function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = async () => {
    if (!email.trim()) {
      toast.error("Please enter your email");
      return;
    }

    try {
      const res = await collectEmail(email);

      if (res?.error) {
        toast.error(res.error);
        return;
      }

      toast.success("You're subscribed! Welcome to TechPulse 🎉");
      setEmail("");
    } catch {
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <div>
      <div className="mt-8 p-4 rounded-xl bg-gradient-to-br from-[#FF6B6B]/20 to-transparent border border-[#FF6B6B]/20">
        <h3 className="font-bold mb-2">Subscribe to TechPulse</h3>
        <p className="text-xs text-white/60 mb-4">
          Get the latest developer news straight to your inbox.
        </p>
        <div className="flex gap-2">
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email address"
            className="h-8 text-xs bg-black/50 border-white/10"
          />
          <Button
            disabled={!email}
            onClick={handleSubmit}
            size="sm"
            className="h-8 bg-[#FF6B6B] hover:bg-[#FF6B6B]/90 text-white text-xs"
          >
            Join
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
