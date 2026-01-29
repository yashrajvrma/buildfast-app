import type { Metadata } from "next";
import { Geist, Geist_Mono, DM_Sans } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.buildfast.shop"),
  title: {
    default: "Buildfast - NextJS SaaS Boilerplate | Ship Your Product Fast",
    template: "%s | Buildfast",
  },
  description:
    "Launch your SaaS, AI tool, or web app faster with Buildfast. The complete NextJS boilerplate with authentication, payments, database, and more. Start making money online today.",
  keywords: [
    // Core product keywords
    "nextjs boilerplate",
    "nextjs starter template",
    "nextjs saas boilerplate",
    "nextjs 14 boilerplate",
    "nextjs typescript template",

    // SaaS-related
    "saas starter kit",
    "saas boilerplate",
    "saas template",
    "indie hacker tools",
    "startup boilerplate",

    // AI/Tech tools
    "ai tool template",
    "ai saas starter",
    "web app starter",
    "fullstack template",
    "react boilerplate",

    // Feature-based
    "stripe integration template",
    "supabase starter",
    "authentication boilerplate",
    "nextauth template",

    // Action-oriented
    "ship fast",
    "build saas fast",
    "launch startup quickly",
    "mvp builder",
    "rapid prototyping",

    // Developer-focused
    "typescript boilerplate",
    "tailwind starter",
    "modern web stack",
    "developer tools",
  ],
  authors: [{ name: "Buildfast", url: "https://www.buildfast.shop" }],
  creator: "Buildfast",
  publisher: "Buildfast",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.buildfast.shop",
    title: "Buildfast - NextJS SaaS Boilerplate | Ship Your Product Fast",
    description:
      "Launch your SaaS, AI tool, or web app faster with Buildfast. The complete NextJS boilerplate with authentication, payments, database, and more.",
    siteName: "Buildfast",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Buildfast - NextJS SaaS Boilerplate",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Buildfast - NextJS SaaS Boilerplate | Ship Your Product Fast",
    description:
      "Launch your SaaS, AI tool, or web app faster with Buildfast. The complete NextJS boilerplate with authentication, payments, database, and more.",
    creator: "@yashrajvrma",
    images: ["/opengraph-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  alternates: {
    canonical: "https://www.buildfast.shop",
  },
  verification: {
    google: "R6Nq97Z1aVYbiZ6qrqclFYK6OVUFK0rnmnKNj9hxTw4", // google search console code
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          async
          crossOrigin="anonymous"
          src="https://tweakcn.com/live-preview.min.js"
        />
      </head>
      <body
        className={`${dmSans.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Analytics />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
