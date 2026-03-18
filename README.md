# wrystr-homepage

Marketing and download website for [Wrystr](https://github.com/hoornet/wrystr) — a cross-platform Nostr desktop client built with Tauri 2.0 + React + TypeScript.

## Stack

- **Next.js 16** (App Router, fully static output)
- **Tailwind CSS v4**
- **TypeScript**
- **lucide-react** for icons

## Sections

| Section | Description |
|---|---|
| Navbar | Fixed sticky nav with scroll blur, mobile menu |
| Hero | Full-screen hero with animated app mockup |
| Features | 12 feature cards covering all major capabilities |
| Download | Tabbed (Linux / macOS / Windows) — **live data from GitHub API** |
| Install | Step-by-step install instructions for 6 platforms |
| Docs | Tabbed sidebar documentation (Getting Started, Lightning, Relays, Keys, Shortcuts, Updates) |
| Roadmap | 4-phase roadmap (Phases 1 & 2 shipped, 3 in progress, 4 planned) |
| Support | Lightning address, GitHub Sponsors, Ko-fi, Bitcoin on-chain |
| Footer | Nav links, resource links, MIT license |

## Live Release Data

The Download section fetches the latest release automatically from the GitHub API:

```
https://api.github.com/repos/hoornet/wrystr/releases/latest
```

- Parses `tag_name` (version), `html_url` (release page), and asset download URLs by filename pattern
- Revalidates every **1 hour** — no redeploy needed when a new Wrystr version ships
- Falls back to the last known version if the API is unreachable

## Development

```bash
npm install
npm run dev       # dev server at http://localhost:3000
npm run build     # production build
npm run start     # serve production build locally
```

## Deployment

The site outputs fully static pages (ISR with 1h revalidation on the download section). It can be deployed to any static/serverless host — Netlify, Vercel, Cloudflare Pages, etc.

For **Netlify**, the `next` adapter handles ISR automatically via Netlify Functions.

## Changelog

See [CHANGELOG.md](./CHANGELOG.md) for a full history of changes to this site.

## License

MIT — part of the [Wrystr](https://github.com/hoornet/wrystr) project by [Jure Sršen (hoornet)](https://github.com/hoornet).
