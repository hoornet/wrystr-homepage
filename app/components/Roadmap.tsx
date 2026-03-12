"use client";

import { CheckCircle2, Circle, Clock } from "lucide-react";

const phases = [
  {
    phase: "Phase 1",
    title: "Core Foundation",
    status: "done",
    items: [
      "In-app key generation & OS keychain",
      "Multi-account switcher",
      "Global & following feeds",
      "Compose, reply, thread view",
      "Relay management",
      "SQLite note + profile cache",
      "System tray & collapsible sidebar",
    ],
  },
  {
    phase: "Phase 2",
    title: "Engagement & Reach",
    status: "done",
    items: [
      "Feed reply context (↩ replying to @name)",
      "NIP-65 outbox model",
      "Notifications view with unread badge",
      "DM unread badges",
      "Keyboard shortcuts (n / j k / Esc / ?)",
      "Image paste in compose",
      "Per-account Lightning wallet (NWC)",
      "Zap history (Received & Sent)",
      "Auto-updater",
    ],
  },
  {
    phase: "Phase 3",
    title: "Privacy & Polish",
    status: "current",
    items: [
      "NIP-17 DMs (gift wrap) — proper sender/recipient privacy",
      "Image lightbox — click to expand full-size",
      "Bookmark list (NIP-51 kind 10003)",
      "Follow suggestions & discovery",
      "UI polish pass",
    ],
  },
  {
    phase: "Phase 4",
    title: "Power Features",
    status: "upcoming",
    items: [
      "Video/audio support",
      "Communities (NIP-72)",
      "Live events (NIP-53)",
      "Marketplace & classifieds",
      "Plugin / extension system",
    ],
  },
];

const statusConfig = {
  done: { icon: CheckCircle2, color: "#22c55e", label: "Shipped" },
  current: { icon: Clock, color: "#f59e0b", label: "In progress" },
  upcoming: { icon: Circle, color: "#4b5563", label: "Planned" },
};

export default function Roadmap() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div
        className="absolute left-1/2 top-0 -translate-x-1/2 w-px h-full opacity-20"
        style={{ background: "linear-gradient(to bottom, transparent, #7c5cbf, transparent)" }}
      />

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-14">
          <p className="section-label mb-4">Roadmap</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-5">
            What&apos;s being built
          </h2>
          <p className="text-[#9ca3af] text-lg max-w-xl mx-auto">
            Wrystr is under active development. Here&apos;s a look at what&apos;s shipped and what&apos;s coming next.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {phases.map((phase, i) => {
            const { icon: StatusIcon, color, label } = statusConfig[phase.status as keyof typeof statusConfig];
            return (
              <div
                key={i}
                className="feature-card rounded-2xl p-6"
                style={
                  phase.status === "current"
                    ? { borderColor: "rgba(245,158,11,0.3)", background: "rgba(245,158,11,0.04)" }
                    : {}
                }
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <p className="text-xs font-semibold text-[#6b7280] uppercase tracking-widest mb-1">
                      {phase.phase}
                    </p>
                    <h3 className="font-bold text-[#e8eaf0] text-lg">{phase.title}</h3>
                  </div>
                  <div
                    className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium"
                    style={{
                      background: `${color}15`,
                      border: `1px solid ${color}30`,
                      color,
                    }}
                  >
                    <StatusIcon size={11} />
                    {label}
                  </div>
                </div>

                <ul className="space-y-2">
                  {phase.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2.5 text-sm">
                      <span
                        className="mt-1 flex-shrink-0"
                        style={{ color: phase.status === "done" ? "#22c55e" : phase.status === "current" ? "#f59e0b" : "#4b5563" }}
                      >
                        {phase.status === "done" ? "✓" : phase.status === "current" ? "◎" : "○"}
                      </span>
                      <span
                        className={
                          phase.status === "done"
                            ? "text-[#6b7280]"
                            : phase.status === "current"
                            ? "text-[#d1a832]"
                            : "text-[#4b5563]"
                        }
                      >
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="mt-8 text-center">
          <a
            href="https://github.com/hoornet/wrystr/blob/main/ROADMAP.md"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-[#a07dd4] hover:text-[#c4a0f0] transition-colors"
          >
            View full ROADMAP.md on GitHub →
          </a>
        </div>
      </div>
    </section>
  );
}
