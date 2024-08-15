import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Apidon",
  description:
    "Join Apidon to connect with your idols, buy exclusive digital collectibles, and showcase your fandom in a vibrant social community.",
  openGraph: {
    title: "Apidon",
    description:
      "Join Apidon to connect with your idols, buy exclusive digital collectibles, and showcase your fandom in a vibrant social community.",
    type: "website",
    images: ["./icon.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Apidon",
    description:
      "Join Apidon to connect with your idols, buy exclusive digital collectibles, and showcase your fandom in a vibrant social community.",
    images: ["./icon.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta name="apple-itunes-app" content="app-id=6557064412" />

      <body className={inter.className}>{children}</body>
    </html>
  );
}
