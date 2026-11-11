import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { siteName } from "@/lib/site";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: {
    default: siteName,
    template: `${siteName} | %s`,
  },
  description: "Wallet Buddy is a personal finance app for iOS.",
  applicationName: siteName,
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="flex min-h-screen flex-col bg-white font-sans text-navy-900 antialiased">
        <Header />
        <main className="flex-1">
          <div className="mx-auto max-w-3xl px-5 py-12 sm:px-8 sm:py-16">{children}</div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
