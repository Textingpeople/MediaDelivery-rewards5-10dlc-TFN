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

const title = "RewardRise — Team Recognition Platform";
const description =
  "RewardRise helps teams celebrate wins big and small with continuous peer and manager recognition.";

export const metadata: Metadata = {
  metadataBase: new URL("https://getrewardrise.com"),
  title,
  description,
  keywords:
    "employee recognition, peer recognition, team celebrations, workplace culture, continuous recognition",
  openGraph: {
    title,
    description,
    url: "https://getrewardrise.com",
    siteName: "RewardRise",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title,
    description,
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
