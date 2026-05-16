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
  title: "LombokGuide | Explore Lombok Paradise",
  description:
    "Discover beaches, mountains, waterfalls, and unforgettable Lombok experiences with trusted local guides.",

  openGraph: {
    title: "LombokGuide",
    description:
      "Explore Lombok Paradise with unforgettable tours and local experiences.",
    url: "https://lombokguide.vercel.app",
    siteName: "LombokGuide",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};
