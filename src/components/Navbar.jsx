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
    <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
    </svg>
  );
};

function SunIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </svg>
  );
};

function MenuIcon({ open }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {open ? (
        <path d="M18 6L6 18M6 6l12 12" />
      ) : (
        <path d="M4 6h16M4 12h16M4 18h16" />
      )}
    </svg>
  );
};

export default function Navbar() {
  const [dark, setDark] = useState(true);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <div className="relative">

      <div className="absolute -top-2 -left-2 -z-10 h-30 w-30 rounded-full bg-white/90 blur-[150px]" />

      {/* Fixed : stays pinned to the top while scrolling */}
      <header className="fixed top-2 inset-x-4 md:top-5 md:inset-x-8 lg:top-7 lg:inset-x-16 h-16 max-w-7xl mx-auto rounded-full bg-background/80 dark:bg-black/50 backdrop-blur-md border border-white/10 shadow-md z-50 transition-all">
        <nav
          className="flex h-full items-center justify-between px-7 md:px-8">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold tracking-tight text-rose-400">
            MUNAN.
          </Link>

          {/* Links (centered on desktop, hidden on small screens) */}
          <ul className="hidden items-center gap-6 md:flex">
            {links.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="flex items-center text-sm text-white transition-colors rounded-md p-2.25 hover:bg-[#171717b5]">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right side: theme toggle + mobile menu button */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setDark((d) => !d)}
              aria-label="Toggle theme"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#2c2c2c]
               bg-[#1e1e1e] text-rose-400 transition-colors hover:bg-[#262626]
               focus-visible:outline-2 focus-visible:outline-rose-400"
            >
              {dark ? <MoonIcon /> : <SunIcon />}
            </button>

            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              aria-label="Toggle menu"
              aria-expanded={open}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#2c2c2c]
               bg-[#1e1e1e] text-white transition-colors hover:bg-[#262626] md:hidden"
            >
              <MenuIcon open={open} />
            </button>
          </div>

        </nav>

        {/* Mobile dropdown */}
        {open && (
          <ul className="absolute inset-x-0 top-full mt-2 flex flex-col gap-1 rounded-3xl border border-white/10 bg-black/80 p-3 shadow-xl backdrop-blur-md md:hidden">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-4 py-3 text-sm text-white transition-colors hover:bg-white/10"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        )}

      </header>
      
    </div>
  );
};