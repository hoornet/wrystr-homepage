# Changelog

All notable changes to the **wrystr-homepage** are documented here.

Format follows [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

---

## [Unreleased]

---

## [1.0.0] — 2026-03-12

### Added
- Initial release of the Wrystr homepage
- **Navbar** — fixed sticky nav with scroll blur effect, mobile hamburger menu, Download CTA
- **Hero** — full-screen hero section with animated glow, version badge, floating app screenshot mockup
- **Features** — 12 feature cards (Identity & Accounts, Lightning & Zaps, Feed & Content, Long-form Writing, Relay Management, Notifications & DMs, Keyboard Shortcuts, SQLite Cache, Full-text Search, Auto-updater, Note Rendering, System Tray)
- **Download** — tabbed download section (Linux / macOS / Windows) with live version data fetched from the GitHub Releases API; revalidates every hour
- **Install** — step-by-step installation instructions for 6 platforms (Ubuntu/Debian, Fedora, openSUSE, Arch/Manjaro, macOS, Windows)
- **Docs** — tabbed sidebar documentation covering Getting Started, Lightning & Zaps, Relay Management, Keys & Security, Keyboard Shortcuts, and Auto-updater
- **Roadmap** — 4-phase roadmap (Phases 1 & 2 shipped, Phase 3 in progress, Phase 4 planned)
- **Support** — Lightning address, GitHub Sponsors, Ko-fi, and Bitcoin on-chain donation options with copy buttons
- **Footer** — site navigation, resource links, MIT license, tech stack credits
- Dark theme with purple (`#7c5cbf`) and amber (`#f59e0b`) accents, grid background, animated glows
- `suppressHydrationWarning` on `<html>` to silence Dark Reader browser extension false positives
- Proper SEO metadata (title, description, Open Graph, Twitter card)

### Technical
- Next.js 16 App Router + Tailwind CSS v4 + TypeScript
- `Download.tsx` is an async server component; `DownloadClient.tsx` handles client-side tab state
- GitHub API fetch with `next: { revalidate: 3600 }` — no redeploy needed on new Wrystr releases
- Graceful fallback to last known version (`v0.2.6`) if GitHub API is unreachable
- Zero TypeScript errors, clean production build
