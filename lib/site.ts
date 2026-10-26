/**
 * Central place to update marketing URLs and contact info.
 *
 * `NEXT_PUBLIC_APK_DOWNLOAD_URL` (optional `.env.local`):
 * - **Expo build page** (`…/builds/<uuid>`): opens [Expo](https://expo.dev); user taps **Download**
 *   there — good default while you don’t host the `.apk` yourself.
 * - **Direct artifact URL** (`…/artifacts/…` or URL ending in `.apk`): true one-tap file download
 *   from your “Download” button / QR (best for production).
 * - **Relative** e.g. `/leek-android.apk`: serve the file from `public/` on your domain.
 */
const DEFAULT_ANDROID_INSTALL_URL =
  "https://expo.dev/accounts/walidevish-org/projects/leek/builds/de0721bc-52e2-48ca-ae7a-02d89b9c8585";

export const APK_DOWNLOAD_URL =
  process.env.NEXT_PUBLIC_APK_DOWNLOAD_URL?.trim() || DEFAULT_ANDROID_INSTALL_URL;

/** Expo build page (HTML only). Optional second “build details” link in the download section. */
export const EXPO_BUILD_PAGE_URL = process.env.NEXT_PUBLIC_EXPO_BUILD_PAGE_URL?.trim() || "";

export const SITE_ORIGIN =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://leek.ma";

/** Full URL used for QR codes (must be reachable by the phone scanning it). */
export function getApkQrValue(): string {
  if (APK_DOWNLOAD_URL.startsWith("http")) return APK_DOWNLOAD_URL;
  return `${SITE_ORIGIN}${APK_DOWNLOAD_URL.startsWith("/") ? "" : "/"}${APK_DOWNLOAD_URL}`;
}

/** Expo “build details” URLs are HTML — don’t use `download`; open in a new tab. */
export function isExpoBuildDashboardUrl(url: string): boolean {
  return /expo\.dev\/accounts\/.+\/builds\//i.test(url);
}

/** Direct-ish APK links can use the `download` hint (same-origin or artifact URLs). */
export function isDirectApkStyleUrl(url: string): boolean {
  const u = url.toLowerCase();
  if (u.endsWith(".apk")) return true;
  if (u.includes("/artifacts/")) return true;
  if (url.startsWith("/") && u.includes(".apk")) return true;
  return false;
}

export type AndroidInstallAnchorProps = {
  href: string;
  download?: boolean;
  target?: string;
  rel?: string;
};

export function getAndroidInstallAnchorProps(url: string = APK_DOWNLOAD_URL): AndroidInstallAnchorProps {
  if (isExpoBuildDashboardUrl(url)) {
    return { href: url, target: "_blank", rel: "noopener noreferrer" };
  }
  if (isDirectApkStyleUrl(url)) {
    return { href: url, download: true };
  }
  return { href: url, target: "_blank", rel: "noopener noreferrer" };
}

export const CONTACT_EMAIL = "hello@leek.ma";

export const SOCIAL = {
  instagram: "https://www.instagram.com/",
  facebook: "https://www.facebook.com/",
  x: "https://twitter.com/",
} as const;
