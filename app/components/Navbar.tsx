"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Github, Zap, Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#features", label: "Features" },
    { href: "#download", label: "Download" },
    { href: "#install", label: "Install" },
    { href: "#docs", label: "Docs" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#08090c]/90 backdrop-blur-md border-b border-[#1e2130]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#7c5cbf] to-[#5a3fa0] flex items-center justify-center">
            <Zap size={16} className="text-white" />
          </div>
          <span className="font-bold text-lg tracking-tight text-[#e8eaf0]">
            Wrystr
          </span>
        </Link>

        <ul className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="px-4 py-2 rounded-md text-sm text-[#9ca3af] hover:text-[#e8eaf0] hover:bg-white/5 transition-colors"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://github.com/hoornet/wrystr"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-[#9ca3af] hover:text-[#e8eaf0] transition-colors"
          >
            <Github size={16} />
            GitHub
          </a>
          <a
            href="#download"
            className="btn-primary px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2"
          >
            <Zap size={14} />
            Download
          </a>
        </div>

        <button
          className="md:hidden text-[#9ca3af] hover:text-[#e8eaf0] transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="md:hidden bg-[#0f1117] border-b border-[#1e2130] px-6 py-4 flex flex-col gap-3">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-[#9ca3af] hover:text-[#e8eaf0] py-2 text-sm transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <a
            href="https://github.com/hoornet/wrystr"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-[#9ca3af] hover:text-[#e8eaf0] py-2 transition-colors"
          >
            <Github size={15} /> GitHub
          </a>
          <a
            href="#download"
            className="btn-primary px-4 py-2 rounded-lg text-sm font-medium text-center"
            onClick={() => setMobileOpen(false)}
          >
            Download
          </a>
        </div>
      )}
    </header>
  );
}
