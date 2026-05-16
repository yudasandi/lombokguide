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
  title: "LombokGuide | Explore The Beauty Of Lombok",
  description:
    "Discover beaches, mountains, waterfalls, and unforgettable local experiences in Lombok with trusted local guides.",
    verification: {
  google: "Ue78BtCj92_IGh-7viTtnYlY9Rocj3WwGGS8IAM_qDw",
},
    
  keywords: [
    "Lombok tour",
    "Lombok travel",
    "Gili Islands",
    "Mount Rinjani",
    "Lombok snorkeling",
    "Lombok guide",
    "Lombok trip",
    "Indonesia travel",
  ],
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
