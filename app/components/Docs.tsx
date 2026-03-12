"use client";

import { useState } from "react";
import { BookOpen, Key, Zap, Radio, Keyboard, RefreshCw, ChevronRight } from "lucide-react";

const docs = [
  {
    id: "getting-started",
    icon: BookOpen,
    title: "Getting Started",
    color: "#7c5cbf",
    content: [
      {
        heading: "First launch",
        body: "After installing Wrystr, launch the app. You'll be greeted by the onboarding screen where you can either generate a new keypair or log in with an existing nsec or npub.",
      },
      {
        heading: "Generate a new account",
        body: "Click \"Create new account\" to generate a fresh keypair. Wrystr will display your nsec (private key) — write it down and store it safely. You won't see it again without going to Settings.",
      },
      {
        heading: "Log in with existing nsec",
        body: "Paste your nsec directly into the login field for full read/write access. Or use npub for a read-only view. Your key is stored in the OS keychain — not plain text on disk.",
      },
      {
        heading: "Add more accounts",
        body: "Open the account switcher in the sidebar footer and click \"Add account\". You can generate a new keypair or log in with another nsec. Switch instantly at any time.",
      },
    ],
  },
  {
    id: "lightning",
    icon: Zap,
    title: "Lightning & Zaps",
    color: "#f59e0b",
    content: [
      {
        heading: "Setting up a wallet",
        body: "Go to Settings → Lightning Wallet. The NWC setup wizard will guide you through connecting Alby Hub, Alby Extension, Mutiny, or Phoenix. Each account stores its own wallet connection.",
      },
      {
        heading: "Sending a zap",
        body: "Click the ⚡ button on any note. Select a preset amount or enter a custom one, add an optional comment, and confirm. Zaps are sent via NWC (NIP-47) + NIP-57.",
      },
      {
        heading: "Zap history",
        body: "Navigate to the Lightning section in the sidebar. The \"Received\" and \"Sent\" tabs show your complete zap history with amounts, counterparts, and comments.",
      },
      {
        heading: "Zap counts",
        body: "Every note shows live ⚡ sats received. Counts update in real-time as your relay connections receive zap receipts.",
      },
    ],
  },
  {
    id: "relays",
    icon: Radio,
    title: "Relay Management",
    color: "#06b6d4",
    content: [
      {
        heading: "Adding relays",
        body: "Go to Settings → Relays. Enter a relay URL (e.g. wss://relay.damus.io) and click Add. Each relay shows a live connection status indicator.",
      },
      {
        heading: "NIP-65 outbox model",
        body: "Wrystr reads kind 10002 relay lists from the people you follow. This means you receive their notes even if they only publish to their own relays — not just the ones you have in common.",
      },
      {
        heading: "Publish your relay list",
        body: "In Settings → Relays, click \"Publish relay list to Nostr\" to broadcast your kind 10002 event. This helps others following you receive your notes via outbox.",
      },
    ],
  },
  {
    id: "keys",
    icon: Key,
    title: "Keys & Security",
    color: "#10b981",
    content: [
      {
        heading: "OS keychain storage",
        body: "Wrystr never stores your nsec in a plain text file. It uses macOS Keychain, Windows Credential Manager, or Linux Secret Service depending on your OS. Sessions survive restarts.",
      },
      {
        heading: "View your nsec",
        body: "Go to Settings → Account and reveal your nsec at any time. Keep it backed up offline — it's the only way to recover your identity if you lose access to your device.",
      },
      {
        heading: "Read-only mode",
        body: "Log in with an npub to browse your feed without signing anything. Compose, zap, and reply are disabled in read-only mode.",
      },
    ],
  },
  {
    id: "shortcuts",
    icon: Keyboard,
    title: "Keyboard Shortcuts",
    color: "#a07dd4",
    content: [
      {
        heading: "Navigation",
        body: "Use j / k to move up and down through the feed. Press Enter to open a note's thread. Press Esc to go back to the previous view.",
      },
      {
        heading: "Compose & Search",
        body: "Press n anywhere to open the compose modal and write a new note. Press / to focus the search bar and start a search immediately.",
      },
      {
        heading: "Help overlay",
        body: "Press ? at any time to open the keyboard shortcuts help overlay. All shortcuts are listed with their descriptions.",
      },
    ],
  },
  {
    id: "updates",
    icon: RefreshCw,
    title: "Auto-updater",
    color: "#22c55e",
    content: [
      {
        heading: "Automatic update detection",
        body: "Wrystr checks for new releases on startup. When a newer version is available, a banner appears at the top of the window with an \"Update & restart\" button.",
      },
      {
        heading: "Manual update",
        body: "If you prefer, you can always download the latest version manually from the GitHub releases page and install it over the existing one.",
      },
      {
        heading: "Release cadence",
        body: "Wrystr follows a regular release cadence with focused feature phases. Check the ROADMAP.md on GitHub for what's coming in the next phase.",
      },
    ],
  },
];

export default function Docs() {
  const [activeDoc, setActiveDoc] = useState("getting-started");
  const doc = docs.find((d) => d.id === activeDoc)!;
  const DocIcon = doc.icon;

  return (
    <section id="docs" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="section-label mb-4">Documentation</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-5">
            Everything you need to{" "}
            <span className="gradient-text">know</span>
          </h2>
          <p className="text-[#9ca3af] text-lg max-w-2xl mx-auto">
            Quick-start guides and reference docs for Wrystr's key features.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          <nav className="lg:w-60 flex-shrink-0">
            <ul className="flex flex-row lg:flex-col gap-1 overflow-x-auto lg:overflow-x-visible pb-2 lg:pb-0">
              {docs.map((d) => {
                const DIcon = d.icon;
                const isActive = d.id === activeDoc;
                return (
                  <li key={d.id} className="flex-shrink-0 lg:flex-shrink">
                    <button
                      onClick={() => setActiveDoc(d.id)}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all text-left ${
                        isActive
                          ? "bg-[#7c5cbf]/12 text-[#a07dd4] border border-[#7c5cbf]/30"
                          : "text-[#6b7280] hover:text-[#9ca3af] hover:bg-white/[0.03] border border-transparent"
                      }`}
                    >
                      <DIcon size={15} style={{ color: isActive ? "#a07dd4" : "#6b7280" }} />
                      <span className="hidden lg:block">{d.title}</span>
                      <span className="lg:hidden whitespace-nowrap">{d.title}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex-1 download-card rounded-2xl overflow-hidden">
            <div
              className="px-8 py-6 flex items-center gap-4 border-b border-[#1e2130]"
              style={{ background: `${doc.color}09` }}
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center"
                style={{ background: `${doc.color}18`, border: `1px solid ${doc.color}30` }}
              >
                <DocIcon size={20} style={{ color: doc.color }} />
              </div>
              <h3 className="text-xl font-bold text-[#e8eaf0]">{doc.title}</h3>
            </div>

            <div className="p-8 space-y-6">
              {doc.content.map((section, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <ChevronRight size={14} style={{ color: doc.color }} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#e8eaf0] mb-2">{section.heading}</h4>
                    <p className="text-[#9ca3af] text-sm leading-relaxed">{section.body}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="px-8 pb-6">
              <a
                href="https://github.com/hoornet/wrystr/blob/main/README.md"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-[#a07dd4] hover:text-[#c4a0f0] transition-colors"
              >
                <BookOpen size={14} />
                Read the full README on GitHub →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
