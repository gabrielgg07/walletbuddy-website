import { redirect } from "next/navigation";

// Temporary: send visitors to Support until a landing page exists.
// To build a homepage, replace this file with your own page component.
export default function Home() {
  redirect("/support");
}
