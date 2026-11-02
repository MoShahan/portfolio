import localFont from "next/font/local";

import type { Metadata } from "next";
import "./globals.css";

const sans = localFont({
  src: [
    {
      path: "../fonts/ibm-plex-sans-400.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/ibm-plex-sans-500.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/ibm-plex-sans-600.woff2",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-sans-family",
  display: "swap",
});

const serif = localFont({
  src: [
    { path: "../fonts/fraunces-500.woff2", weight: "500", style: "normal" },
    { path: "../fonts/fraunces-600.woff2", weight: "600", style: "normal" },
  ],
  variable: "--font-serif-family",
  display: "swap",
});

const mono = localFont({
  src: [
    {
      path: "../fonts/ibm-plex-mono-400.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/ibm-plex-mono-500.woff2",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-mono-family",
  display: "swap",
});

const title = "Mohammed Shahan - Frontend Engineer";
const description =
  "Frontend engineer with 4 years of experience building React, TypeScript, and Next.js interfaces. Open to frontend and full-stack (frontend-focus) roles.";

const siteUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  authors: [{ name: "Mohammed Shahan" }],
  keywords: [
    "Mohammed Shahan",
    "Frontend Engineer",
    "React",
    "TypeScript",
    "Next.js",
    "Bangalore",
  ],
  openGraph: {
    title,
    description,
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary",
    title,
    description,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${serif.variable} ${mono.variable} h-full antialiased`}
    >
      <body className="relative min-h-full bg-background font-sans text-text">
        {children}
      </body>
    </html>
  );
}
