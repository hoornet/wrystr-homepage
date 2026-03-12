"use client";

import { ArrowDown, Github, Zap, Star } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden grid-bg pt-16">
      <div className="hero-glow top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      <div className="hero-glow top-0 right-0 opacity-40" style={{ transform: "translate(30%, -30%)" }} />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0f1117] border border-[#1e2130] text-xs text-[#9ca3af] mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-[#7c5cbf] pulse-dot" />
          v0.2.4 — Latest release available
          <a
            href="https://github.com/hoornet/wrystr/releases"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#a07dd4] hover:underline ml-1"
          >
            See changelog ↗
          </a>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.05]">
          The Nostr client the{" "}
          <br className="hidden md:block" />
          <span className="gradient-text">ecosystem deserves</span>
        </h1>

        <p className="text-lg md:text-xl text-[#9ca3af] max-w-2xl mx-auto mb-10 leading-relaxed">
          A cross-platform desktop Nostr client built with Tauri 2.0 + React. Polished native UI,
          deep Lightning integration, long-form writing, and everything you need to live on Nostr.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a
            href="#download"
            className="btn-primary px-7 py-3.5 rounded-xl text-base font-semibold flex items-center gap-2.5 w-full sm:w-auto justify-center"
          >
            <Zap size={18} />
            Download Free
          </a>
          <a
            href="https://github.com/hoornet/wrystr"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary px-7 py-3.5 rounded-xl text-base font-semibold flex items-center gap-2.5 w-full sm:w-auto justify-center"
          >
            <Github size={18} />
            View on GitHub
          </a>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-[#6b7280]">
          <div className="flex items-center gap-2">
            <span className="w-4 h-4 rounded-full bg-[#0f1117] border border-[#1e2130] flex items-center justify-center text-[10px]">✓</span>
            Mac, Windows & Linux
          </div>
          <div className="flex items-center gap-2">
            <span className="w-4 h-4 rounded-full bg-[#0f1117] border border-[#1e2130] flex items-center justify-center text-[10px]">✓</span>
            Free & open source (MIT)
          </div>
          <div className="flex items-center gap-2">
            <span className="w-4 h-4 rounded-full bg-[#0f1117] border border-[#1e2130] flex items-center justify-center text-[10px]">✓</span>
            No account required
          </div>
          <div className="flex items-center gap-2">
            <Star size={14} className="text-[#f59e0b]" />
            Star us on GitHub
          </div>
        </div>
      </div>

      <div className="relative z-10 mt-20 max-w-5xl mx-auto px-6 w-full">
        <AppScreenshot />
      </div>

      <a
        href="#features"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#6b7280] hover:text-[#9ca3af] transition-colors flex flex-col items-center gap-1 text-xs"
      >
        <span>Explore</span>
        <ArrowDown size={16} className="animate-bounce" />
      </a>
    </section>
  );
}

function AppScreenshot() {
  return (
    <div className="float-anim">
      <div
        className="relative rounded-2xl overflow-hidden glow-purple"
        style={{
          background: "linear-gradient(145deg, #0f1117 0%, #0a0b10 100%)",
          border: "1px solid #1e2130",
        }}
      >
        <div className="flex items-center gap-2 px-4 py-3 border-b border-[#1e2130]">
          <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
          <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
          <span className="w-3 h-3 rounded-full bg-[#28c840]" />
          <span className="ml-3 text-xs text-[#4b5563] font-mono">Wrystr — v0.2.4</span>
        </div>

        <div className="flex h-[420px] md:h-[500px]">
          <div className="w-14 border-r border-[#1e2130] flex flex-col items-center py-4 gap-5">
            {[
              { icon: "⚡", active: false },
              { icon: "🏠", active: true },
              { icon: "🔔", active: false },
              { icon: "✉️", active: false },
              { icon: "🔍", active: false },
            ].map((item, i) => (
              <div
                key={i}
                className={`w-9 h-9 rounded-lg flex items-center justify-center text-base cursor-pointer transition-colors ${
                  item.active
                    ? "bg-[#7c5cbf]/20 ring-1 ring-[#7c5cbf]/40"
                    : "hover:bg-white/5"
                }`}
              >
                {item.icon}
              </div>
            ))}
          </div>

          <div className="flex-1 flex flex-col overflow-hidden">
            <div className="px-4 py-3 border-b border-[#1e2130] flex items-center justify-between">
              <div className="flex gap-3">
                <span className="text-sm text-[#a07dd4] border-b-2 border-[#7c5cbf] pb-2 font-medium">Following</span>
                <span className="text-sm text-[#6b7280] pb-2">Global</span>
              </div>
              <button className="btn-primary px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5">
                <span>+</span> Note
              </button>
            </div>

            <div className="flex-1 overflow-hidden p-3 flex flex-col gap-3">
              {[
                {
                  name: "alice@nostr.dev",
                  handle: "@alice",
                  time: "2m",
                  content: "Just finished reading a great long-form article on Nostr. The protocol keeps surprising me. #nostr #decentralized",
                  zaps: "⚡ 4,200",
                  reactions: "❤️ 12",
                  avatar: "A",
                },
                {
                  name: "bob@primal.net",
                  handle: "@bob",
                  time: "8m",
                  content: "Wrystr's keyboard shortcuts are incredibly useful. Press ? to see the help overlay. Ships with real native UX.",
                  zaps: "⚡ 1,800",
                  reactions: "❤️ 7",
                  avatar: "B",
                },
                {
                  name: "satoshi@nostrich.app",
                  handle: "@satoshi",
                  time: "15m",
                  content: "Multi-relay management with NIP-65 outbox is a game changer for feed quality. Building for the future.",
                  zaps: "⚡ 21,000",
                  reactions: "❤️ 34",
                  avatar: "S",
                },
              ].map((post, i) => (
                <div key={i} className="flex gap-3 p-3 rounded-xl bg-white/[0.02] border border-[#1e2130] hover:border-[#2a2f45] transition-colors">
                  <div className="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center text-xs font-bold text-white bg-gradient-to-br from-[#7c5cbf] to-[#5a3fa0]">
                    {post.avatar}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline gap-2 mb-1">
                      <span className="text-xs font-semibold text-[#e8eaf0] truncate">{post.name}</span>
                      <span className="text-[10px] text-[#6b7280]">{post.handle}</span>
                      <span className="text-[10px] text-[#4b5563] ml-auto flex-shrink-0">{post.time}</span>
                    </div>
                    <p className="text-xs text-[#9ca3af] leading-relaxed line-clamp-2">{post.content}</p>
                    <div className="flex items-center gap-3 mt-2 text-[10px] text-[#6b7280]">
                      <span>{post.zaps}</span>
                      <span>{post.reactions}</span>
                      <span>↩ Reply</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
