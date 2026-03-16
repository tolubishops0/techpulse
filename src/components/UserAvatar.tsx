import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface UserAvatarProps {
  name: string;
  imageUrl?: string;
  size?: "sm" | "md" | "lg";
}

const sizeClasses = {
  sm: "w-6 h-6",
  md: "w-8 h-8",
  lg: "w-12 h-12",
};

const textClasses = {
  sm: "text-[10px]",
  md: "text-xs",
  lg: "text-base",
};

function getInitials(name: string): string {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

export function UserAvatar({ name, imageUrl, size = "md" }: UserAvatarProps) {
  return (
    <Avatar className={`${sizeClasses[size]} border border-white/10`}>
      {imageUrl && <AvatarImage src={imageUrl} alt={name} />}
      <AvatarFallback className={`bg-white/10 text-white ${textClasses[size]}`}>
        {getInitials(name)}
      </AvatarFallback>
    </Avatar>
  );
}