import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";

const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "LEEK — Groceries delivered in minutes | Casablanca",
  description:
    "LEEK brings everyday essentials to your door in 15–30 minutes at the best prices in Casablanca. Download the Android app.",
  keywords: [
    "LEEK",
    "grocery delivery",
    "Casablanca",
    "Morocco",
    "dark store",
    "fast delivery",
  ],
  openGraph: {
    title: "LEEK — Groceries delivered in minutes",
    description:
      "Fresh, simple, fast grocery delivery in Casablanca. Download the LEEK app.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${lexend.variable} h-full antialiased`}>
      <body className="min-h-full font-sans">{children}</body>
    </html>
  );
}
