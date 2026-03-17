"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { User } from "@supabase/supabase-js";
import { addComment, getComments } from "@/lib/actions";

interface DBComment {
  id: string;
  user_id: string;
  user_email: string;
  full_name: string;
  text: string;
  created_at: string;
}

interface CommentSectionProps {
  user?: User | null;
  articleId: string;
}

export function CommentSection({ user, articleId }: CommentSectionProps) {
  const [comments, setComments] = useState<DBComment[]>([]);
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchComments() {
      const data = await getComments(articleId);
      setComments(data);
      setLoading(false);
    }
    fetchComments();
  }, [articleId]);

  const handleSubmit = async () => {
    if (!value.trim()) return;
    if (!user) {
      window.location.href = "/login";
      return;
    }
    const full_name =
      user.user_metadata?.full_name ??
      user.user_metadata?.user_name ??
      user.email?.split("@")[0];
    const result = await addComment(articleId, value.trim());
    if (result?.error) return;
    setComments([
      {
        id: crypto.randomUUID(),
        user_id: user?.id,
        full_name,
        user_email: user?.email ?? "you",
        text: value.trim(),
        created_at: new Date().toISOString(),
      },
      ...comments,
    ]);
    setValue("");
  };

  function formatTime(dateString: string) {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  }

  return (
    <section>
      <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-white">
        Comments{" "}
        <span className="text-sm font-normal text-white/40">
          ({comments.length})
        </span>
      </h3>

      <div className="flex gap-4 mb-10">
        <Avatar className="w-8 h-8 shrink-0">
          <AvatarFallback className="bg-white/10 text-xs text-white uppercase">
            {user?.user_metadata?.full_name?.slice(0, 1) ?? "?"}
          </AvatarFallback>
        </Avatar>

        {!user ? (
          <div className="flex-1 p-4 rounded-lg border border-white/10 bg-white/5 text-center">
            <p className="text-white/50 text-sm mb-3">
              Sign in to leave a comment
            </p>
            <a
              href="/login"
              className="px-4 py-2 bg-[#FF6B6B] text-white rounded-lg text-sm hover:bg-[#FF6B6B]/90"
            >
              Sign in
            </a>
          </div>
        ) : (
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
                disabled={!value}
                className="bg-white text-black hover:bg-white/90 text-sm h-8"
              >
                Post Comment
              </Button>
            </div>
          </div>
        )}
      </div>

      {loading ? (
        <p className="text-white/40 text-sm">Loading comments...</p>
      ) : comments.length === 0 ? (
        <p className="text-white/40 text-sm">No comments yet — be the first!</p>
      ) : (
        <div className="space-y-6">
          {comments.map((comment) => {
            const isUser = user?.id === comment?.user_id;
            return (
              <div key={comment.id} className="flex gap-4">
                <Avatar className="w-8 h-8 shrink-0">
                  <AvatarFallback className="bg-white/10 text-xs text-white uppercase">
                    {comment.full_name?.slice(0, 1)}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="font-medium text-sm text-white">
                      {comment.full_name}
                    </span>
                    <span className="text-xs text-white/40">
                      {isUser && "(You)"}
                    </span>
                    <span className="text-xs text-white/40">
                      {formatTime(comment.created_at)}
                    </span>
                  </div>
                  <p className="text-sm text-white/70 leading-relaxed">
                    {comment.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
}
