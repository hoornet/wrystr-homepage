import DownloadClient, { PlatformData } from "./DownloadClient";

type GithubAsset = { name: string; browser_download_url: string };

type GithubRelease = {
  tag_name: string;
  html_url: string;
  assets: GithubAsset[];
};

function findAsset(assets: GithubAsset[], pattern: RegExp) {
  return assets.find((a) => pattern.test(a.name))?.browser_download_url ?? "#";
}

export default async function DownloadSection() {
  let version = "v0.2.6";
  let releaseUrl = "https://github.com/hoornet/wrystr/releases/latest";
  let debUrl = "#";
  let rpmUrl = "#";
  let dmgUrl = "#";
  let exeUrl = "#";

  try {
    const res = await fetch(
      "https://api.github.com/repos/hoornet/wrystr/releases/latest",
      {
        headers: { Accept: "application/vnd.github+json" },
        next: { revalidate: 3600 },
      }
    );
    if (res.ok) {
      const data: GithubRelease = await res.json();
      version = data.tag_name;
      releaseUrl = data.html_url;
      debUrl = findAsset(data.assets, /\.deb$/);
      rpmUrl = findAsset(data.assets, /\.rpm$/);
      dmgUrl = findAsset(data.assets, /aarch64\.dmg$/);
      exeUrl = findAsset(data.assets, /x64-setup\.exe$/);
    }
  } catch {
    // fall through to defaults
  }

  const platforms: PlatformData[] = [
    {
      id: "linux",
      icon: "terminal",
      label: "Linux",
      color: "#f59e0b",
      subtitle: "Ubuntu, Debian, Fedora, Arch & more",
      downloads: [
        { label: ".deb", desc: "Ubuntu · Debian · Mint · Pop!_OS", url: debUrl, note: null },
        { label: ".rpm", desc: "Fedora · openSUSE · RHEL", url: rpmUrl, note: null },
        {
          label: "PKGBUILD",
          desc: "Arch Linux · Manjaro · EndeavourOS",
          url: "https://github.com/hoornet/wrystr/blob/main/PKGBUILD",
          note: "View PKGBUILD in repo →",
        },
      ],
      install: [
        { distro: "Ubuntu / Debian", cmd: "sudo dpkg -i wrystr_*.deb" },
        { distro: "Fedora", cmd: "sudo rpm -i wrystr-*.rpm" },
        { distro: "openSUSE", cmd: "sudo zypper install wrystr-*.rpm" },
        { distro: "Arch / Manjaro", cmd: "# See PKGBUILD in repo\nnpm run tauri build" },
      ],
    },
    {
      id: "macos",
      icon: "apple",
      label: "macOS",
      color: "#a07dd4",
      subtitle: "Apple Silicon (M1, M2, M3, M4)",
      downloads: [
        { label: ".dmg", desc: "Apple Silicon — macOS 12+", url: dmgUrl, note: null },
      ],
      install: [
        { distro: "Apple Silicon", cmd: "# Download .dmg, open it\n# Drag Wrystr.app to Applications" },
      ],
    },
    {
      id: "windows",
      icon: "monitor",
      label: "Windows",
      color: "#3b82f6",
      subtitle: "Windows 10 & 11 (x64)",
      downloads: [
        { label: ".exe", desc: "Windows 10 / 11 — x64 Installer", url: exeUrl, note: null },
      ],
      install: [
        { distro: "Windows 10/11", cmd: "# Run the .exe installer\n# Click \"More info → Run anyway\"\n# if SmartScreen warning appears" },
      ],
      warning:
        'The installer is not yet code-signed. Windows SmartScreen will show an "Unknown publisher" warning — click "More info → Run anyway" to proceed.',
    },
  ];

  return (
    <DownloadClient platforms={platforms} version={version} releaseUrl={releaseUrl} />
  );
}
