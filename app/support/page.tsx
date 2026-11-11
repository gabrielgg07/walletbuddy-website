import type { Metadata } from "next";
import MarkdownPage from "@/components/MarkdownPage";

export const metadata: Metadata = {
  title: "Support",
  description: "Get help with Wallet Buddy, find answers to common questions, and contact support.",
};

export default function Page() {
  return <MarkdownPage slug="support" />;
}
