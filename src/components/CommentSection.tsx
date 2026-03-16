"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface Comment {
  name: string;
  initials: string;
  time: string;
  text: string;
}

const defaultComments: Comment[] = [
  {
    name: "David Kim",
    initials: "DK",
    time: "2 hours ago",
    text: "The compiler is going to save us so many review comments about missing dependency array items. Cannot wait to adopt this.",
  },
  {
    name: "Elena Rostova",
    initials: "ER",
    time: "5 hours ago",
    text: "I'm curious how the compiler handles complex object references that mutate outside the React lifecycle. Have they published the full spec yet?",
  },
  {
    name: "James Wilson",
    initials: "JW",
    time: "1 day ago",
    text: "Actions look exactly like what Remix has been doing, which is a good thing. Standardizing this into React core makes the whole ecosystem stronger.",
  },
];

interface CommentSectionProps {
  initialComments?: Comment[];
}

export function CommentSection({ initialComments = defaultComments }: CommentSectionProps) {
  const [comments, setComments] = useState(initialComments);
  const [value, setValue] = useState("");

  const handleSubmit = () => {
    if (!value.trim()) return;
    setComments([
      { name: "You", initials: "AL", time: "Just now", text: value.trim() },
      ...comments,
    ]);
    setValue("");
  };

  return (
    <section>
      <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-white">
        Comments <span className="text-sm font-normal text-white/40">({comments.length})</span>
      </h3>

      <div className="flex gap-4 mb-10">
        <Avatar className="w-8 h-8 shrink-0">
          <AvatarFallback className="bg-white/10 text-xs text-white">AL</AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <textarea
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-sm text-white focus:outline-none focus:ring-1 focus:ring-[#FF6B6B] min-h-[100px] resize-y placeholder:text-white/30"
            placeholder="Share your thoughts..."
          />
          <div className="flex justify-end mt-2">
            <Button
              onClick={handleSubmit}
              className="bg-white text-black hover:bg-white/90 text-sm h-8"
            >
              Post Comment
            </Button>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        {comments.map((comment, i) => (
          <div key={i} className="flex gap-4">
            <Avatar className="w-8 h-8 shrink-0">
              <AvatarFallback className="bg-white/10 text-xs text-white">{comment.initials}</AvatarFallback>
            </Avatar>
            <div>
              <div className="flex items-baseline gap-2 mb-1">
                <span className="font-medium text-sm text-white">{comment.name}</span>
                <span className="text-xs text-white/40">{comment.time}</span>
              </div>
              <p className="text-sm text-white/70 leading-relaxed">{comment.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
