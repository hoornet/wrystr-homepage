"use client";

import { useState } from "react";
import { Download, Terminal, Apple, Monitor, Package, ExternalLink, AlertTriangle } from "lucide-react";

export type PlatformDownload = {
  label: string;
  desc: string;
  url: string;
  note: string | null;
};

export type PlatformData = {
  id: string;
  icon: "terminal" | "apple" | "monitor";
  label: string;
  color: string;
  subtitle: string;
  downloads: PlatformDownload[];
  install: { distro: string; cmd: string }[];
  warning?: string;
};

const iconMap = { terminal: Terminal, apple: Apple, monitor: Monitor };

export default function DownloadClient({
  platforms,
  version,
  releaseUrl,
}: {
  platforms: PlatformData[];
  version: string;
  releaseUrl: string;
}) {
  const [active, setActive] = useState("linux");
  const platform = platforms.find((p) => p.id === active)!;
  const Icon = iconMap[platform.icon];

  return (
    <section id="download" className="py-28 px-6 relative">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(ellipse 800px 400px at 50% 50%, rgba(124,92,191,0.07) 0%, transparent 70%)",
        }}
      />
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-14">
          <p className="section-label mb-4">Get Wrystr</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-5">
            Download for your{" "}
            <span className="gradient-text">platform</span>
          </h2>
          <p className="text-[#9ca3af] text-lg">
            Version{" "}
            <span className="text-[#a07dd4] font-mono font-semibold">
              {version}
            </span>{" "}
            — free, open-source, MIT licensed
          </p>
        </div>

        <div className="flex items-center justify-center gap-3 mb-10">
          {platforms.map((p) => {
            const PIcon = iconMap[p.icon];
            const isActive = p.id === active;
            return (
              <button
                key={p.id}
                onClick={() => setActive(p.id)}
                className={`flex items-center gap-2.5 px-5 py-2.5 rounded-xl border text-sm font-medium transition-all ${
                  isActive
                    ? "tab-active"
                    : "border-[#1e2130] text-[#6b7280] hover:border-[#2a2f45] hover:text-[#9ca3af]"
                }`}
              >
                <PIcon size={16} />
                {p.label}
              </button>
            );
          })}
        </div>

        <div className="download-card rounded-2xl overflow-hidden">
          <div
            className="px-8 py-6 flex items-center gap-4 border-b border-[#1e2130]"
            style={{ background: `${platform.color}09` }}
          >
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center"
              style={{
                background: `${platform.color}18`,
                border: `1px solid ${platform.color}30`,
              }}
            >
              <Icon size={22} style={{ color: platform.color }} />
            </div>
            <div>
              <h3 className="font-bold text-[#e8eaf0] text-lg">{platform.label}</h3>
              <p className="text-[#6b7280] text-sm">{platform.subtitle}</p>
            </div>
            <a
              href={releaseUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-auto flex items-center gap-1.5 text-xs text-[#6b7280] hover:text-[#9ca3af] transition-colors"
            >
              All releases <ExternalLink size={12} />
            </a>
          </div>

          <div className="p-8">
            {platform.warning && (
              <div className="flex gap-3 p-4 rounded-xl bg-[#f59e0b]/08 border border-[#f59e0b]/20 mb-6">
                <AlertTriangle size={16} className="text-[#f59e0b] flex-shrink-0 mt-0.5" />
                <p className="text-sm text-[#d1a832]">{platform.warning}</p>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-8">
              {platform.downloads.map((dl, i) => (
                <a
                  key={i}
                  href={dl.url}
                  target={dl.note ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  className="group flex flex-col gap-2 p-4 rounded-xl border border-[#1e2130] hover:border-[#7c5cbf]/50 hover:bg-[#7c5cbf]/05 transition-all"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-sm font-bold text-[#a07dd4]">{dl.label}</span>
                    <Download
                      size={15}
                      className="text-[#4b5563] group-hover:text-[#a07dd4] transition-colors"
                    />
                  </div>
                  <p className="text-xs text-[#6b7280]">{dl.desc}</p>
                  {dl.note && (
                    <p className="text-xs text-[#a07dd4] mt-1">{dl.note}</p>
                  )}
                </a>
              ))}
            </div>

            <div>
              <div className="flex items-center gap-2 mb-3">
                <Terminal size={14} className="text-[#6b7280]" />
                <span className="text-xs text-[#6b7280] uppercase tracking-widest font-semibold">
                  Install commands
                </span>
              </div>
              <div className="grid gap-3">
                {platform.install.map((item, i) => (
                  <div key={i}>
                    <p className="text-xs text-[#6b7280] mb-1.5 font-medium">{item.distro}</p>
                    <div className="code-block">
                      {item.cmd.split("\n").map((line, j) => (
                        <div
                          key={j}
                          className={line.startsWith("#") ? "text-[#4b5563]" : "text-[#a07dd4]"}
                        >
                          {line}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex items-center justify-center gap-2 text-sm text-[#6b7280]">
          <Package size={14} />
          <span>Looking for a previous version or source code?</span>
          <a
            href="https://github.com/hoornet/wrystr/releases"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#a07dd4] hover:underline inline-flex items-center gap-1"
          >
            All releases on GitHub <ExternalLink size={12} />
          </a>
        </div>
      </div>
    </section>
  );
}
