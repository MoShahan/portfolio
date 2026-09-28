import { Fraunces, IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";

import type { Metadata } from "next";
import "./globals.css";

const sans = IBM_Plex_Sans({
  variable: "--font-sans-family",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const serif = Fraunces({
  variable: "--font-serif-family",
  subsets: ["latin"],
  weight: ["500", "600"],
});

const mono = IBM_Plex_Mono({
  variable: "--font-mono-family",
  subsets: ["latin"],
  weight: ["400", "500"],
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
