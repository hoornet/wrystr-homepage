"use client";

import { Terminal } from "lucide-react";

const steps = [
  {
    os: "Ubuntu / Debian / Mint",
    color: "#f59e0b",
    badge: ".deb",
    steps: [
      { label: "Download the .deb package from the Download section above", cmd: null },
      { label: "Install with dpkg:", cmd: "sudo dpkg -i wrystr_*.deb" },
      { label: "Launch Wrystr from your applications menu or run:", cmd: "wrystr" },
    ],
  },
  {
    os: "Fedora / RHEL",
    color: "#3b82f6",
    badge: ".rpm",
    steps: [
      { label: "Download the .rpm package", cmd: null },
      { label: "Install with rpm:", cmd: "sudo rpm -i wrystr-*.rpm" },
      { label: "Launch:", cmd: "wrystr" },
    ],
  },
  {
    os: "openSUSE",
    color: "#22c55e",
    badge: ".rpm",
    steps: [
      { label: "Download the .rpm package", cmd: null },
      { label: "Install with zypper:", cmd: "sudo zypper install wrystr-*.rpm" },
      { label: "Launch:", cmd: "wrystr" },
    ],
  },
  {
    os: "Arch / Manjaro / EndeavourOS",
    color: "#a07dd4",
    badge: "PKGBUILD",
    steps: [
      { label: "Clone the repo:", cmd: "git clone https://github.com/hoornet/wrystr.git" },
      { label: "Build & install via makepkg:", cmd: "cd wrystr && makepkg -si" },
      { label: "Or build from source (requires Node 20+ & Rust stable):", cmd: "npm install && npm run tauri build" },
    ],
  },
  {
    os: "macOS (Apple Silicon)",
    color: "#e8eaf0",
    badge: ".dmg",
    steps: [
      { label: "Download the aarch64.dmg", cmd: null },
      { label: "Open the .dmg file and drag Wrystr.app to Applications", cmd: null },
      { label: "Launch from Launchpad or Spotlight", cmd: null },
    ],
  },
  {
    os: "Windows 10 / 11",
    color: "#38bdf8",
    badge: ".exe",
    steps: [
      { label: "Download the x64-setup.exe installer", cmd: null },
      { label: "Run the installer — if Windows SmartScreen appears, click \"More info\" → \"Run anyway\"", cmd: null },
      { label: "Launch Wrystr from the Start menu", cmd: null },
    ],
  },
];

export default function Install() {
  return (
    <section id="install" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="section-label mb-4">Installation</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-5">
            Up and running in{" "}
            <span className="gradient-text">minutes</span>
          </h2>
          <p className="text-[#9ca3af] text-lg max-w-2xl mx-auto">
            Step-by-step installation instructions for every supported platform and distribution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {steps.map((platform, i) => (
            <div key={i} className="feature-card rounded-2xl overflow-hidden">
              <div
                className="px-5 py-4 flex items-center gap-3 border-b border-[#1e2130]"
                style={{ background: `${platform.color}08` }}
              >
                <Terminal size={15} style={{ color: platform.color }} />
                <span className="font-semibold text-[#e8eaf0] text-sm">{platform.os}</span>
                <span
                  className="ml-auto text-xs font-mono px-2 py-0.5 rounded-full"
                  style={{
                    background: `${platform.color}18`,
                    border: `1px solid ${platform.color}28`,
                    color: platform.color,
                  }}
                >
                  {platform.badge}
                </span>
              </div>

              <div className="p-5 space-y-4">
                {platform.steps.map((step, j) => (
                  <div key={j} className="flex gap-3">
                    <span
                      className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold mt-0.5"
                      style={{
                        background: `${platform.color}18`,
                        border: `1px solid ${platform.color}28`,
                        color: platform.color,
                      }}
                    >
                      {j + 1}
                    </span>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-[#9ca3af] mb-1.5">{step.label}</p>
                      {step.cmd && (
                        <div className="code-block text-[#a07dd4] text-xs">
                          {step.cmd}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
