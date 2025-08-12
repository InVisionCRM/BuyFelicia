import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Geist_Mono } from "next/font/google";
import { Barrio, Hachi_Maru_Pop, Playpen_Sans_Hebrew, Zain, Fontdiner_Swanky } from "next/font/google";
import "./globals.css";

const interSans = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const barrio = Barrio({
  variable: "--font-barrio",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const hachiMaruPop = Hachi_Maru_Pop({
  variable: "--font-hachi",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const playpenSansHebrew = Playpen_Sans_Hebrew({
  variable: "--font-playpen",
  subsets: ["latin"],
  weight: "variable",
  display: "swap",
});

const zain = Zain({
  variable: "--font-zain",
  subsets: ["latin"],
  weight: "700",
  display: "swap",
});

const fontdinerSwanky = Fontdiner_Swanky({
  variable: "--font-fontdiner-swanky",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "BuyFelicia - Revolutionary Memecoin Platform",
  description:
    "Join the BuyFelicia revolution! A cutting-edge memecoin platform bringing fun and innovation to the cryptocurrency space.",
  keywords: ["memecoin", "cryptocurrency", "DeFi", "blockchain", "BuyFelicia"],
  authors: [{ name: "BuyFelicia Team" }],
  openGraph: {
    title: "BuyFelicia - Revolutionary Memecoin Platform",
    description:
      "Join the BuyFelicia revolution! A cutting-edge memecoin platform bringing fun and innovation to the cryptocurrency space.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "BuyFelicia - Revolutionary Memecoin Platform",
    description:
      "Join the BuyFelicia revolution! A cutting-edge memecoin platform bringing fun and innovation to the cryptocurrency space.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${interSans.variable} ${geistMono.variable} ${barrio.variable} ${hachiMaruPop.variable} ${playpenSansHebrew.variable} ${zain.variable} ${fontdinerSwanky.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
