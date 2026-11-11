import type { Metadata } from "next";
import MarkdownPage from "@/components/MarkdownPage";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Read the Wallet Buddy Terms of Service.",
};

export default function Page() {
  return <MarkdownPage slug="terms" />;
}
