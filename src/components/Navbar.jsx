"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/blogs", label: "Blogs" },
  { href: "/contact", label: "Contact" },
];

function MoonIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
    </svg>
  );
}

function SunIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </svg>
  );
}

export default function Navbar() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    // sticky wrapper: stays pinned to the top while scrolling
    <header className="sticky top-0 z-50 bg-black px-4 pt-12 sm:px-6">
      <nav
        className="mx-auto flex h-17.5 max-w-350 items-center justify-between rounded-full
                   border border-[#272e44] bg-[#161c2c]/90 px-9 backdrop-blur-md"
      >
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold tracking-tight text-amber-100">
          MUNAN.
        </Link>

        {/* Links (centered on desktop, hidden on small screens) */}
        <ul className="hidden items-center gap-11 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="text-[15px] text-white transition-colors hover:text-amber-100">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Theme toggle */}
        <button
          type="button"
          onClick={() => setDark((d) => !d)}
          aria-label="Toggle theme"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-[#2c2c2c]
                     bg-[#1e1e1e] text-amber-100 transition-colors hover:bg-[#262626]
                     focus-visible:outline-2 focus-visible:outline-amber-100"
        >
          {dark ? <MoonIcon /> : <SunIcon />}
        </button>
      </nav>
    </header>
  );
};