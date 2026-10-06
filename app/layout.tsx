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
  title: "Abhilash Potegaonkar | Frontend Developer | React & Next.js",
  description:
    "Frontend Developer with 3+ years of experience building scalable React, Next.js, TypeScript, ERP and SaaS applications.",
  keywords: [
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "ERP",
    "SaaS",
    "Pune",
  ],
  openGraph: {
    title: "Abhilash Potegaonkar | Frontend Developer | React & Next.js",
    description:
      "Frontend Developer with 3+ years of experience building scalable React, Next.js, TypeScript, ERP and SaaS applications.",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abhilash Potegaonkar | Frontend Developer | React & Next.js",
    description:
      "Frontend Developer with 3+ years of experience building scalable React, Next.js, TypeScript, ERP and SaaS applications.",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
