"use client";

import React, { useState } from "react";
import { Stay22Emblem } from "./Stay22Emblem";
import { X, MessageSquare } from "lucide-react";

export function Stay22ChatWidget() {
  const [bubbleOpen, setBubbleOpen] = useState(true);
  const [chatModalOpen, setChatModalOpen] = useState(false);

  return (
    <aside
      aria-label="Support and Chat"
      className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 pointer-events-auto select-none"
    >
      {/* Speech Bubble Tooltip matching Stay22 screenshot 2 */}
      {bubbleOpen && (
        <div className="relative bg-white text-[#262222] rounded-2xl px-5 py-3.5 shadow-2xl border border-black/5 max-w-[280px] animate-in fade-in slide-in-from-bottom-2 duration-300">
          {/* Top Protruding Stay22 Emblem Badge */}
          <div className="absolute -top-3.5 right-6 w-8 h-8 rounded-full bg-[#ffb200] shadow-md flex items-center justify-center">
            <Stay22Emblem className="w-5 h-5 text-[#262222]" />
          </div>

          <div className="flex items-start justify-between gap-3 pr-4 pt-1">
            <p className="text-xs sm:text-sm font-semibold leading-tight text-[#262222]">
              Need a hand? We&apos;re here to help
              <span className="inline-block ml-1">👋</span>
            </p>
            <button
              type="button"
              onClick={() => setBubbleOpen(false)}
              className="text-black/40 hover:text-black transition-colors -mr-1 -mt-1 p-1"
              aria-label="Dismiss message"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Little speech bubble arrow pointing to the button below */}
          <div className="absolute -bottom-1.5 right-8 w-3 h-3 bg-white transform rotate-45 border-r border-b border-black/5" />
        </div>
      )}

      {/* Floating Yellow Round Chat Button */}
      <button
        type="button"
        onClick={() => setChatModalOpen(!chatModalOpen)}
        className="w-14 h-14 rounded-full bg-[#ffb200] text-[#262222] shadow-2xl flex items-center justify-center hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
        aria-label="Open chat"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 text-[#262222]"
        >
          <path
            d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2Z"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {/* Interactive Chat Dialog */}
      {chatModalOpen && (
        <div className="fixed bottom-24 right-6 w-[360px] bg-white rounded-2xl shadow-2xl border border-black/10 overflow-hidden flex flex-col z-50">
          <div className="bg-[#ffb200] p-4 flex items-center justify-between text-[#262222]">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-full bg-[#262222] text-[#ffb200] flex items-center justify-center">
                <Stay22Emblem className="w-4 h-4 text-[#ffb200]" />
              </div>
              <div>
                <h4 className="font-bold text-sm leading-tight">Stay22 Support</h4>
                <p className="text-[11px] opacity-80">Typically replies in minutes</p>
              </div>
            </div>
            <button
              onClick={() => setChatModalOpen(false)}
              className="p-1 hover:bg-black/10 rounded-full"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="p-4 space-y-3 bg-[#faf7f4] h-64 overflow-y-auto text-xs">
            <div className="bg-white p-3 rounded-xl shadow-sm border border-black/5 max-w-[85%]">
              Hey there! 👋 Welcome to Stay22. How can we help boost your travel revenue today?
            </div>
            <div className="bg-[#ffb200]/20 p-2.5 rounded-lg border border-[#ffb200]/40 text-[11px]">
              Tip: You can book a demo directly or explore our products (Nova, Spark, Lift).
            </div>
          </div>

          <div className="p-3 border-t border-black/5 bg-white flex gap-2">
            <input
              type="text"
              placeholder="Write a message..."
              className="flex-1 bg-black/5 rounded-full px-4 py-2 text-xs outline-none focus:ring-1 focus:ring-[#ffb200]"
            />
            <button className="bg-[#ffb200] text-[#262222] font-bold text-xs px-3.5 py-2 rounded-full hover:bg-[#ffa000]">
              Send
            </button>
          </div>
        </div>
      )}
    </aside>
  );
}
