"use client";

import {
  Zap,
  Shield,
  Users,
  MessageSquare,
  RefreshCw,
  Search,
  Keyboard,
  Database,
  Radio,
  FileText,
  Bell,
  Wallet,
} from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Identity & Accounts",
    desc: "In-app key generation with nsec backup. Multi-account switcher with OS keychain integration — stored in macOS Keychain, Windows Credential Manager, or Linux Secret Service.",
    tags: ["Multi-account", "OS Keychain", "nsec/npub"],
    color: "#7c5cbf",
  },
  {
    icon: Zap,
    title: "Lightning & Zaps",
    desc: "Per-account NWC wallet connections. Send zaps with amount presets or custom amounts, view zap history, and see ⚡ counts live on every note.",
    tags: ["NIP-47", "NIP-57", "NWC Wizard"],
    color: "#f59e0b",
  },
  {
    icon: MessageSquare,
    title: "Feed & Content",
    desc: "Global and following feeds with live relay connections. Compose notes, inline replies, full thread view, reactions, repost, mute, and direct messages.",
    tags: ["NIP-25", "NIP-18", "NIP-51"],
    color: "#06b6d4",
  },
  {
    icon: FileText,
    title: "Long-form Writing",
    desc: "Full NIP-23 article editor with title, tags, cover image, and auto-save. A clean in-app reader with zap-author support. First-class for writers.",
    tags: ["NIP-23", "Auto-save", "Reader"],
    color: "#10b981",
  },
  {
    icon: Radio,
    title: "Relay Management",
    desc: "Add/remove relays with live connection status. NIP-65 outbox model reads kind 10002 relay lists so you see notes from people who publish to their own relays.",
    tags: ["NIP-65", "Outbox", "Live status"],
    color: "#8b5cf6",
  },
  {
    icon: Bell,
    title: "Notifications & DMs",
    desc: "Mentions view with unread badge. Direct Messages (NIP-04) with conversation list, thread view, per-message decryption, and unread conversation badges.",
    tags: ["NIP-04", "Unread badges", "DMs"],
    color: "#ef4444",
  },
  {
    icon: Keyboard,
    title: "Keyboard Shortcuts",
    desc: "Navigate at the speed of thought. Press n to compose, / to search, j/k to navigate the feed, Esc to go back, and ? to open the help overlay.",
    tags: ["n  /  j  k", "Esc", "? overlay"],
    color: "#a07dd4",
  },
  {
    icon: Database,
    title: "SQLite Cache",
    desc: "Feed loads instantly from local cache on startup. Profiles cached for immediate avatar display. No waiting around — everything snappy from first launch.",
    tags: ["Instant load", "Offline cache", "Fast"],
    color: "#14b8a6",
  },
  {
    icon: Search,
    title: "Full-text Search",
    desc: "NIP-50 full-text search, #hashtag search, and people search with inline follow. Find anything on Nostr without leaving the app.",
    tags: ["NIP-50", "#hashtag", "People search"],
    color: "#3b82f6",
  },
  {
    icon: RefreshCw,
    title: "Auto-updater",
    desc: "An \"Update & restart\" banner appears automatically when a new version is available. Stay current without manually checking releases.",
    tags: ["Auto-update", "latest.json"],
    color: "#22c55e",
  },
  {
    icon: Users,
    title: "Note Rendering",
    desc: "Images, video, inline mentions, hashtags, quoted note preview cards, nostr:naddr1… link interception, and njump.me link handling all built in.",
    tags: ["Media", "Quotes", "Links"],
    color: "#f97316",
  },
  {
    icon: Wallet,
    title: "System Tray",
    desc: "Close button minimizes to tray instead of quitting. Collapsible sidebar with icon-only mode. Everything designed to feel like a first-class desktop citizen.",
    tags: ["System tray", "Native feel"],
    color: "#ec4899",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-28 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="section-label mb-4">Why Wrystr</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-5">
            Everything you need to{" "}
            <span className="gradient-text">live on Nostr</span>
          </h2>
          <p className="text-[#9ca3af] text-lg max-w-2xl mx-auto">
            Built from the ground up as a real desktop app — not a browser wrapper. Every feature
            is crafted with intention, depth, and native UX in mind.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <div key={i} className="feature-card rounded-2xl p-6">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: `${f.color}18`, border: `1px solid ${f.color}30` }}
                >
                  <Icon size={20} style={{ color: f.color }} />
                </div>
                <h3 className="font-semibold text-[#e8eaf0] mb-2 text-base">{f.title}</h3>
                <p className="text-[#9ca3af] text-sm leading-relaxed mb-4">{f.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {f.tags.map((tag, j) => (
                    <span key={j} className="tag font-mono">{tag}</span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
