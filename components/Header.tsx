"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks, siteName } from "@/lib/site";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-x-6 gap-y-3 px-5 py-4 sm:px-8">
        <Link href="/" className="flex items-center gap-2.5 text-navy-900">
          <span
            aria-hidden="true"
            className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-600 text-sm font-bold text-white"
          >
            W
          </span>
          <span className="text-lg font-semibold tracking-tight">{siteName}</span>
        </Link>

        <nav aria-label="Main">
          <ul className="flex items-center gap-1 text-sm font-medium">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className={
                      active
                        ? "rounded-md bg-brand-50 px-3 py-2 text-brand-700"
                        : "rounded-md px-3 py-2 text-slate-600 hover:bg-slate-100 hover:text-navy-900"
                    }
                  >
                    {link.short}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
