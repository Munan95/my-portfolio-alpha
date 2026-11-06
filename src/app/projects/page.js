import Image from "next/image";
import Link from "next/link";
import { FiArrowRight, FiExternalLink, FiGithub, FiCode } from "react-icons/fi";
import projects from "@/data/projects.json";

export default function Projects() {
  return (
    <div className="w-full px-6 pt-30 pb-24 text-white bg-black/30 sm:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-16 space-y-4 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            🚀 My{" "}
            <span className="bg-linear-to-r from-rose-400 to-orange-300 bg-clip-text text-transparent">
              Projects
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-[17px] leading-relaxed text-white/60">
            A showcase of my recent works — built with modern technologies and clean
            UI/UX. Explore the live demos or check the source code!
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 bg-black/2 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article
              key={p.id}
              className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#171616] shadow-sm transition-all duration-500 hover:shadow-2xl hover:shadow-rose-400/10 hover:-translate-y-1.5"
            >
              {/* Image */}
              <div className="relative h-52 w-full overflow-hidden bg-slate-800 sm:h-60">
                {/* Hover overlay with arrow */}
                <div className="absolute inset-0 z-10 flex items-end bg-linear-to-t from-black/80 via-transparent to-transparent p-6 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <Link
                    href={`/projects/${p.id}`}
                    aria-label={`View details of ${p.title}`}
                    className="translate-y-4 rounded-full bg-white/90 p-3 text-black shadow-xl transition-transform duration-500 group-hover:translate-y-0"
                  >
                    <FiArrowRight size={24} />
                  </Link>
                </div>

                <Image
                  loading="eager"
                  src={p.image}
                  alt={p.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Tech badges */}
                <div className="absolute right-4 top-4 z-20 flex flex-col gap-2">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-lg border border-white/10 bg-black/60 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-lg backdrop-blur-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col space-y-4 p-6 sm:p-8">
                <div>
                  <h2 className="text-xl font-bold tracking-tight transition-colors sm:text-2xl">
                    {p.title}
                  </h2>
                  <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-white/50 sm:text-base">
                    {p.description}
                  </p>
                </div>

                {/* Buttons */}
                <div className="mt-auto flex flex-wrap gap-3 pt-4">
                  <Link
                    href={p.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-white/90 px-4 py-2.5 text-sm font-bold text-black shadow-lg shadow-white/10 transition-all hover:opacity-90 active:scale-95"
                  >
                    <FiExternalLink size={16} /> Live
                  </Link>

                  <div className="flex w-full gap-2 sm:w-auto">
                    <Link
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Frontend source code"
                      className="flex flex-1 items-center justify-center rounded-xl border border-white/5 bg-[#232121] p-2.5 text-slate-100 shadow-sm transition-colors hover:bg-white/90 hover:text-black sm:flex-none"
                    >
                      <FiGithub size={20} />
                    </Link>
                    {p.backend && (
                      <Link
                        href={p.backend}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Backend source code"
                        className="flex flex-1 items-center justify-center rounded-xl border border-white/5 bg-[#232121] p-2.5 text-slate-100 shadow-sm transition-colors hover:bg-white/90 hover:text-black sm:flex-none"
                      >
                        <FiCode size={20} />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};