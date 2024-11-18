import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Apidon • Make Every Event Unique",
  description: "Make Every Event Unique",
  icons: [
    {
      media: "(prefers-color-scheme: light)",
      url: "/logo.png",
      href: "/logo.png",
    },
    {
      media: "(prefers-color-scheme: dark)",
      url: "/logo.png",
      href: "/logo.png",
    },
  ],
  openGraph: {
    title: "Apidon • Make Every Event Unique",
    description: "Make Every Event Unique",
    url: "https://apidon.com",
    siteName: "Apidon",
    images: [
      {
        url: "https://apidon.com/images/og.png",
      },
    ],
    locale: "en-US",
    type: "website",
  },
};

export default function Home() {
  return (
    <div className="w-full h-screen flex flex-auto justify-center items-center">
      <text>Hello from Apidon-Link (Test)</text>
    </div>
  );
}
