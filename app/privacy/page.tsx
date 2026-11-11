import type { Metadata } from "next";
import MarkdownPage from "@/components/MarkdownPage";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Read the Wallet Buddy Privacy Policy.",
};

export default function Page() {
  return <MarkdownPage slug="privacy" />;
}
