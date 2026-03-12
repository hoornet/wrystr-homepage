import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Wrystr — Nostr Desktop Client",
  description:
    "A cross-platform Nostr desktop client built with Tauri 2.0 + React + TypeScript. Polished UI, deep Lightning integration, and first-class support for long-form writing.",
  keywords: ["nostr", "desktop", "client", "lightning", "bitcoin", "tauri", "wrystr"],
  authors: [{ name: "Jure Sršen", url: "https://github.com/hoornet" }],
  openGraph: {
    title: "Wrystr — Nostr Desktop Client",
    description:
      "Cross-platform Nostr desktop client for Mac, Windows & Linux. Deep Lightning integration, multi-relay management, and a UI that actually feels native.",
    type: "website",
    url: "https://wrystr.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wrystr — Nostr Desktop Client",
    description:
      "Cross-platform Nostr desktop client for Mac, Windows & Linux. Built with Tauri + React + NDK.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#08090c] text-[#e8eaf0]`}
      >
        {children}
      </body>
    </html>
  );
}
