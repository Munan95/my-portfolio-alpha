import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const skills = [
  { name: "JavaScript" },
  { name: "React" },
  { name: "NextJS" },
  { name: "NodeJS" },
  { name: "ExpressJs" },
  { name: "TailwindCSS" },
  { name: "MongoDB" }
];

const About = () => {
  return (
    <div className="flex flex-row gap-30 justify-center items-center min-h-screen w-full pl-5 bg-black/30">

      {/* Profile Picture */}
      <div className="group relative rounded-full">

        {/* Gradient ring (stays still) */}
        <div className="relative rounded-full bg-linear-to-r from-rose-400 to-orange-300 p-2 shadow-[0_0_40px_rgba(251,113,133,0.25)] transition-shadow duration-600 group-hover:shadow-[0_0_50px_rgba(251,113,133,0.45)]">
          {/* Clips the photo so it can't spill outside the circle */}
          <div className="overflow-hidden rounded-full">
            <Image
              src="/My-photo.jpg"
              alt="my-profile"
              width={350}
              height={350}
              priority
              className="h-87.5 w-87.5 rounded-full object-cover transition-transform duration-600 group-hover:scale-105"
            />
          </div>
        </div>

      </div>

      {/* About Information */}
      <div className="flex flex-col">

        <div className="flex flex-col py-8">
          <div className="flex flex-row gap-2 text-white text-5xl font-bold">
            <span>About</span>
            <span className="text-transparent bg-clip-text bg-linear-to-r from-rose-400 to-orange-300">Me</span>
          </div>
          <div className="rounded h-1.5 w-16 bg-white"></div>
        </div>

        <div className="flex flex-row gap-2 text-[18px]">
          <span className="text-white/50">I am a passionate </span>
          <span className="underline font-bold text-white">Full-Stack Developer</span>
          <span className="text-white/50"> dedicated to building modern, scalable,</span>
        </div>
        <div><p className="text-white/50 text-[18px]">and secure web applications.</p></div>

        <div className="flex flex-row gap-3 items-center py-10 cursor-default">
          <div className="bg-[#212035] pl-5 pr-16 py-6 rounded-3xl border border-white/10 hover:-translate-y-1.5 duration-300">
            <div className="font-bold text-3xl text-sky-400">10+</div>
            <div className="text-white/60">PROJECTS DONE</div>
          </div>
          <div className="bg-amber-200/20 pl-5 pr-16 py-6 rounded-3xl border border-white/10 hover:-translate-y-1.5 duration-300">
            <div className="font-bold text-3xl text-amber-200">2+ Years</div>
            <div className="text-white/60">EXPERIENCE</div></div>
          <div className="bg-rose-300/20 pl-5 pr-16 py-6 rounded-3xl border border-white/10 hover:-translate-y-1.5 duration-300">
            <div className="font-bold text-3xl text-rose-400/80">10+</div>
            <div className="text-white/60">HAPPY CLIENTS</div>
          </div>
        </div>

        <div className="text-white/60 font-bold text-[16px]">TECHNICAL PROWESS</div>

        <div className="flex py-5">
          {/* Skills */}
          <ul className="flex items-center gap-2">
            {skills.map((l) => (
              <li key={l.name}>
                <span className="inline-block cursor-default rounded-full border border-white/10 bg-slate-800/50 px-5 py-2 text-xs font-semibold text-slate-100 transition-all duration-500 hover:scale-110 hover:bg-white hover:text-black">
                  {l.name}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-wrap items-center gap-4 py-8">
          <a
            href="/Resume_Munan_Full_Stack_Developer.pdf"
            download
            className="flex w-fit items-center gap-3 rounded-full bg-white px-10 py-4 font-semibold text-black shadow-xl shadow-white/10 transition-all hover:-translate-y-1 hover:shadow-white/20 active:scale-95"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path d="M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z" />
            </svg>
            Download CV
          </a>
          <a
            href="https://github.com/Munan95"
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-fit items-center gap-3 rounded-full border border-white/20 bg-slate-800/80 px-10 py-4 font-semibold text-slate-100 transition-all hover:-translate-y-1 hover:bg-white hover:text-black"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 496 512"
              className="text-xl"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
            </svg>
            GitHub
          </a>
        </div>

      </div>

    </div>
  )
}

export default About;