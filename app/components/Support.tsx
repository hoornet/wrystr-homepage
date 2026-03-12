"use client";

import { Heart, Github, Coffee, Zap, Copy, Check } from "lucide-react";
import { useState } from "react";

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="ml-auto p-1.5 rounded-md text-[#6b7280] hover:text-[#a07dd4] hover:bg-[#7c5cbf]/10 transition-colors flex-shrink-0"
    >
      {copied ? <Check size={14} className="text-[#22c55e]" /> : <Copy size={14} />}
    </button>
  );
}

export default function Support() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <p className="section-label mb-4">Support the Project</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-5">
            Keep Wrystr{" "}
            <span className="gradient-text">alive & growing</span>
          </h2>
          <p className="text-[#9ca3af] text-lg max-w-xl mx-auto">
            Wrystr is free and open-source. If it&apos;s useful to you, consider supporting the developer.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <a
            href="https://getalby.com"
            target="_blank"
            rel="noopener noreferrer"
            className="feature-card rounded-2xl p-6 group"
          >
            <div className="w-11 h-11 rounded-xl bg-[#f59e0b]/15 border border-[#f59e0b]/25 flex items-center justify-center mb-4">
              <Zap size={20} className="text-[#f59e0b]" />
            </div>
            <h3 className="font-bold text-[#e8eaf0] mb-2">Zap via Lightning</h3>
            <p className="text-[#6b7280] text-sm mb-4">
              Send a Lightning zap directly to the developer&apos;s address.
            </p>
            <div className="flex items-center gap-2 p-3 rounded-lg bg-[#0a0b0f] border border-[#1e2130]">
              <code className="text-xs text-[#a07dd4] truncate flex-1 font-mono">harpos@getalby.com</code>
              <CopyButton text="harpos@getalby.com" />
            </div>
          </a>

          <a
            href="https://github.com/sponsors/hoornet"
            target="_blank"
            rel="noopener noreferrer"
            className="feature-card rounded-2xl p-6 group"
          >
            <div className="w-11 h-11 rounded-xl bg-[#7c5cbf]/15 border border-[#7c5cbf]/25 flex items-center justify-center mb-4">
              <Github size={20} className="text-[#a07dd4]" />
            </div>
            <h3 className="font-bold text-[#e8eaf0] mb-2">GitHub Sponsors</h3>
            <p className="text-[#6b7280] text-sm mb-4">
              Become a sponsor on GitHub and support ongoing development.
            </p>
            <div className="flex items-center gap-2 text-sm text-[#a07dd4] group-hover:text-[#c4a0f0] transition-colors">
              github.com/sponsors/hoornet →
            </div>
          </a>

          <a
            href="https://ko-fi.com/jure"
            target="_blank"
            rel="noopener noreferrer"
            className="feature-card rounded-2xl p-6 group"
          >
            <div className="w-11 h-11 rounded-xl bg-[#ef4444]/12 border border-[#ef4444]/20 flex items-center justify-center mb-4">
              <Coffee size={20} className="text-[#ef4444]" />
            </div>
            <h3 className="font-bold text-[#e8eaf0] mb-2">Buy a Coffee</h3>
            <p className="text-[#6b7280] text-sm mb-4">
              Support via Ko-fi — a simple one-time or recurring donation.
            </p>
            <div className="flex items-center gap-2 text-sm text-[#a07dd4] group-hover:text-[#c4a0f0] transition-colors">
              ko-fi.com/jure →
            </div>
          </a>
        </div>

        <div className="mt-8 p-6 rounded-2xl border border-[#1e2130] bg-[#0f1117]">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-9 h-9 rounded-lg bg-[#f59e0b]/12 border border-[#f59e0b]/20 flex items-center justify-center">
              <Heart size={16} className="text-[#f59e0b]" />
            </div>
            <h3 className="font-semibold text-[#e8eaf0]">Bitcoin on-chain</h3>
          </div>
          <div className="flex items-center gap-2 p-3 rounded-lg bg-[#0a0b0f] border border-[#1e2130]">
            <code className="text-xs text-[#a07dd4] font-mono break-all flex-1">
              bc1qcgaupf80j28ca537xjlcs9dm9s03khezjs7crp
            </code>
            <CopyButton text="bc1qcgaupf80j28ca537xjlcs9dm9s03khezjs7crp" />
          </div>
        </div>
      </div>
    </section>
  );
}
