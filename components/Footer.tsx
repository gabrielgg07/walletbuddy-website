import Link from "next/link";
import { contactEmail, navLinks, siteName } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-5 py-8 text-sm text-slate-600 sm:px-8 md:flex-row md:items-center md:justify-between">
        <p>© 2026 {siteName}</p>

        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-navy-900">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <p>
          Contact:{" "}
          <a
            href={`mailto:${contactEmail}`}
            className="font-medium text-brand-700 hover:text-brand-800"
          >
            {contactEmail}
          </a>
        </p>
      </div>
    </footer>
  );
}
