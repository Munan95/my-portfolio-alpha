import Link from "next/link";
import Plink from "@/data/links.json";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

const icons = {
  github: (
    <path d="M12 .5A11.5 11.5 0 0 0 .5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2c-3.2.7-3.9-1.4-3.9-1.4-.5-1.3-1.3-1.7-1.3-1.7-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 1.8 2.7 1.3 3.3 1 .1-.7.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.2 1.2a11 11 0 0 1 5.8 0c2.2-1.5 3.2-1.2 3.2-1.2.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.4-2.7 5.4-5.3 5.7.4.4.8 1.1.8 2.2v3.2c0 .3.2.7.8.6A11.5 11.5 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5z" />
  ),
  linkedin: (
    <path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zM8.3 18H5.7V9.7h2.6V18zM7 8.6a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM18.3 18h-2.6v-4c0-1 0-2.2-1.4-2.2s-1.6 1-1.6 2.1V18h-2.6V9.7h2.5v1.1c.4-.7 1.2-1.3 2.5-1.3 2.7 0 3.2 1.8 3.2 4.1V18z" />
  ),
  twitter: (
    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
  ),
};

const socials = [
  { href: `${Plink.Github}`, label: "GitHub", icon: "github" },
  { href: `${Plink.Linkedin}`, label: "LinkedIn", icon: "linkedin" },
  { href: `${Plink.Twitter}`, label: "Twitter", icon: "twitter" },
];

export default function Footer() {
  return (
    <footer className="relative bg-[#030202] text-white">
      {/* thin amber glow along the top edge */}
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-amber-100/60 to-transparent" />

      <div className="mx-auto max-w-384 px-6 pb-8 pt-12 sm:pt-20">
        <div className="flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-center">
          {/* Brand */}
          <div>
            <Link href="/" className="text-[28px] font-bold italic tracking-tight">
              <span className="text-transparent bg-clip-text bg-linear-to-r from-rose-400 to-orange-300">Munan</span><span className="text-amber-200">.</span>
            </Link>
            <p className="mt-1 text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
              Full stack developer • Building scalable web apps
            </p>
          </div>

          {/* Links */}
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-3 sm:gap-x-9">
            {links.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-[15px] transition-colors hover:text-amber-200">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Socials */}
          <div className="flex items-center gap-4">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10
                           bg-[#0d1426] text-slate-200 transition-colors hover:border-amber-100/50 hover:text-amber-200"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  {icons[s.icon]}
                </svg>
              </a>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col gap-3 border-t border-white/[0.07] pt-9 text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Munan. All rights reserved.</p>
          {/* <p>© {new Date().getFullYear()} Munan. All rights reserved.</p> */}
          <p className="flex items-center gap-1.5">
            Made with <span className="text-red-500">❤</span> by
            <span className="ml-1 text-white">Munan</span>
          </p>
        </div>
      </div>
    </footer>
  );
};