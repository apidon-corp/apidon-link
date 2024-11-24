import { Metadata } from "next";
import React from "react";

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

export default function page() {
  return (
    <div className="w-full h-screen flex flex-auto justify-center items-center">
      <text className="text-center">
        You will be directed to Apidon App in a few seconds.
      </text>
    </div>
  );
}
