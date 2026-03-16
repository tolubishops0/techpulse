import React from "react";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Heart, MessageSquare } from "lucide-react";
import { Article } from "@/types";

export function ArticleCard({
  image,
  category,
  title,
  excerpt,
  author_initials,
  date,
  read_time,
  like_count,
  comment_count,
}: Article) {
  return (
    <article className="flex flex-col gap-3 group cursor-pointer">
      <div className="aspect-[16/9] rounded-xl overflow-hidden border border-white/10 relative bg-white/5">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3">
          <Badge className={`bg-[#FF6B6B] text-white border-0`}>
            {category}
          </Badge>
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <h3 className="font-bold text-lg leading-tight text-white group-hover:text-[#FF6B6B] transition-colors line-clamp-2">
          {title}
        </h3>
        {excerpt && (
          <p className="text-sm text-white/50 line-clamp-2">{excerpt}</p>
        )}
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center gap-2">
            <Avatar className="w-5 h-5">
              <AvatarFallback className="bg-white/10 text-[10px] text-white">
                {author_initials}
              </AvatarFallback>
            </Avatar>
            <span className="text-xs text-white/50">{date}</span>
            <span className="text-xs text-white/30">·</span>
            <span className="text-xs text-white/50">{read_time}</span>
          </div>
          <div className="flex items-center gap-3 text-xs text-white/40">
            <span className="flex items-center gap-1">
              <Heart className="w-3 h-3" /> {like_count}
            </span>
            {comment_count !== undefined && (
              <span className="flex items-center gap-1">
                <MessageSquare className="w-3 h-3" /> {comment_count}
              </span>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
