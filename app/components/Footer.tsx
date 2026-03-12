"use client";

import { Github, Zap, ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-[#1e2130] bg-[#08090c] py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#7c5cbf] to-[#5a3fa0] flex items-center justify-center">
                <Zap size={16} className="text-white" />
              </div>
              <span className="font-bold text-lg text-[#e8eaf0]">Wrystr</span>
            </div>
            <p className="text-[#6b7280] text-sm leading-relaxed max-w-sm">
              A cross-platform Nostr desktop client built with Tauri 2.0 + React + TypeScript.
              Named as a nod to Nostr with a wry twist.
            </p>
            <div className="flex items-center gap-3 mt-5">
              <a
                href="https://github.com/hoornet/wrystr"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-[#6b7280] hover:text-[#e8eaf0] transition-colors"
              >
                <Github size={15} />
                GitHub
              </a>
              <span className="text-[#2a2f45]">·</span>
              <a
                href="https://github.com/hoornet/wrystr/releases"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-[#6b7280] hover:text-[#e8eaf0] transition-colors"
              >
                <ExternalLink size={13} />
                Releases
              </a>
              <span className="text-[#2a2f45]">·</span>
              <a
                href="https://github.com/hoornet/wrystr/blob/main/ROADMAP.md"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[#6b7280] hover:text-[#e8eaf0] transition-colors"
              >
                Roadmap
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-[#4b5563] uppercase tracking-widest mb-4">App</h4>
            <ul className="space-y-2.5">
              {[
                { label: "Features", href: "#features" },
                { label: "Download", href: "#download" },
                { label: "Installation", href: "#install" },
                { label: "Documentation", href: "#docs" },
                { label: "Roadmap", href: "#roadmap" },
              ].map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-[#6b7280] hover:text-[#e8eaf0] transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-[#4b5563] uppercase tracking-widest mb-4">Resources</h4>
            <ul className="space-y-2.5">
              {[
                { label: "GitHub Repository", href: "https://github.com/hoornet/wrystr" },
                { label: "Issue Tracker", href: "https://github.com/hoornet/wrystr/issues" },
                { label: "Releases", href: "https://github.com/hoornet/wrystr/releases" },
                { label: "PKGBUILD (Arch)", href: "https://github.com/hoornet/wrystr/blob/main/PKGBUILD" },
                { label: "GitHub Sponsors", href: "https://github.com/sponsors/hoornet" },
                { label: "Ko-fi", href: "https://ko-fi.com/jure" },
              ].map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[#6b7280] hover:text-[#e8eaf0] transition-colors flex items-center gap-1.5"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-[#1e2130] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#4b5563]">
            MIT License — Copyright © 2026{" "}
            <a
              href="https://github.com/hoornet"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#6b7280] hover:text-[#9ca3af] transition-colors"
            >
              Jure Sršen (hoornet)
            </a>
          </p>
          <p className="text-xs text-[#4b5563]">
            Built with Tauri · React · TypeScript · NDK
          </p>
        </div>
      </div>
    </footer>
  );
}
