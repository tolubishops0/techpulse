"use client";

import React, { useState } from "react";
import { Bell, BookOpen, MessageSquare, CheckCircle2, Heart } from "lucide-react";

const notifications = [
  {
    icon: <MessageSquare className="w-4 h-4 text-[#FF6B6B]" />,
    text: "Sarah replied to your comment on React 19 RC",
    time: "2m ago",
    unread: true,
  },
  {
    icon: <BookOpen className="w-4 h-4 text-blue-400" />,
    text: "New article matches your interests: Vite 6 architecture",
    time: "1h ago",
    unread: false,
  },
  {
    icon: <CheckCircle2 className="w-4 h-4 text-emerald-400" />,
    text: "System update: Dark mode contrasts have been improved",
    time: "1d ago",
    unread: false,
  },
  {
    icon: <Heart className="w-4 h-4 text-[#FF6B6B]" />,
    text: "Marcus liked your comment on Next.js 15",
    time: "2d ago",
    unread: false,
  },
];

export function NotificationBell() {
  const [open, setOpen] = useState(false);
  const unreadCount = notifications.filter((n) => n.unread).length;

  return (
    <div className="relative">
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="relative p-2 text-white/70 hover:text-white transition-colors"
        aria-label="Notifications"
      >
        <Bell className="w-5 h-5" />
        {unreadCount > 0 && (
          <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-[#FF6B6B]" />
        )}
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-2 w-80 rounded-xl border border-white/10 bg-[#121212] shadow-2xl overflow-hidden z-50">
          <div className="p-3 border-b border-white/10 flex justify-between items-center bg-white/5">
            <span className="font-semibold text-sm text-white">Notifications</span>
            <button className="text-xs text-[#FF6B6B] hover:underline">Mark all read</button>
          </div>
          <div className="max-h-[320px] overflow-y-auto divide-y divide-white/5">
            {notifications.map((n, i) => (
              <div
                key={i}
                className={`p-3 flex gap-3 cursor-pointer hover:bg-white/5 transition-colors ${n.unread ? "bg-[#FF6B6B]/5" : ""}`}
              >
                <div className="mt-0.5 shrink-0">{n.icon}</div>
                <div>
                  <p className={`text-sm leading-tight ${n.unread ? "text-white/90" : "text-white/70"}`}>
                    {n.text}
                  </p>
                  <span className={`text-xs mt-1 block ${n.unread ? "text-[#FF6B6B]" : "text-white/40"}`}>
                    {n.time}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
