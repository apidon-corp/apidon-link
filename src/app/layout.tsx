import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Apidon-Link",
  description: "Apidon-Link-Dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta name="apple-itunes-app" content="app-id=6596419959" />

      <body className={inter.className}>{children}</body>
    </html>
  );
}
