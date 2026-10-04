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
  title: "Arthur Volpato | Software & Cybersecurity",
  description:
    "Arthur Volpato’s portfolio: software, systems and cybersecurity. Career interests in Blue Team, Red Team, Purple Team and Security Engineering.",
  openGraph: {
    title: "Arthur Volpato | Software & Cybersecurity",
    description:
      "Software, systems and cybersecurity projects. Continuous learning and a career path across cyber defense, authorized offensive security and Security Engineering.",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
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
