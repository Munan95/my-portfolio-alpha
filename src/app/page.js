import Image from "next/image";
import Link from "next/link";
import About from "./about/page";
import Projects from "./projects/page";
import Contact from "./contact/page";
import { JavaScriptIcon } from "@/components/icon";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans pt-32 lg:pt-40">

      <div className="relative overflow-hidden flex flex-1 w-full flex-col items-center justify-between gap-12 px-6 pt-12 pb-20 sm:px-12 lg:flex-row lg:pt-30 lg:pb-42 lg:pl-25 lg:pr-60 sm:items-start">

        <div className="-top-2 -left-2 -z-10 h-30 w-30 rounded-full bg-white/90 blur-[150px]" />
        <div className="absolute -bottom-2 -right-2 -z-10 h-30 w-30 rounded-full overflow-hidden bg-white/30 blur-[140px]" />
        
        {/* Profile Information */}
        <div className="flex flex-col text-white w-full lg:w-130">
          <p className="flex flex-row flex-wrap gap-2 text-4xl sm:text-6xl font-bold py-6"><span>Hi, I'm</span><span className="text-transparent bg-clip-text bg-linear-to-r from-rose-400 to-orange-300">Munan</span></p>
          
          <p className="flex flex-row flex-wrap gap-2.5 items-center text-xl sm:text-2xl py-2">
            <span className="text-white/60">a Full Stack Developer |</span>
            <span><JavaScriptIcon className="h-7 w-7 text-amber-400" /></span>
          </p>

          <p className="text-white/60 text-lg py-3">I build modern, scalable, and user-friendly web applications with a passion for clean code and great UX.</p>
          
          <div className="flex flex-row flex-wrap gap-3 text-base py-7">

            <Link
              href="/projects"
              target=""
              rel="noopener noreferrer"
              aria-label="Github"
              className="group flex flex-row items-center justify-center gap-1 rounded-full bg-white px-7 py-3 text-black shadow-lg transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-xl active:scale-95"
            >
              <span className="font-medium transition-colors duration-300">
                🚀 Get Started
              </span>
            </Link>

            <Link
              href="/contact"
              target=""
              rel="noopener noreferrer"
              aria-label="Github"
              className="group flex flex-row items-center justify-center gap-1 rounded-4xl border-2 border-white px-7 py-3 transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-white hover:text-black hover:shadow-lg active:scale-95"
            >
              <span className="transition-colors duration-300">
                📩 Contact Me
              </span>
            </Link>

          </div>
        </div>

        {/* Profile Picture */}
        <div className="group relative hidden rounded-full lg:block">

          {/* Expanding ring */}
          <span className="pointer-events-none absolute inset-0 rounded-full border-6 border-rose-100/30 animate-[ring-expand_1s_ease-out_infinite]" />

          {/* Gradient ring (stays still) */}
          <div className="relative rounded-full bg-linear-to-r from-rose-400 to-orange-300 p-1">
            {/* Clips the photo so it can't spill outside the circle */}
            <div className="overflow-hidden rounded-full">
              <Image
                src="/My-photo.jpg"
                alt="my-profile"
                width={350}
                height={350}
                priority
                className="h-87.5 w-87.5 rounded-full transition-transform duration-600 object-cover group-hover:scale-105"
              />
            </div>
          </div>

        </div>

      </div>

      <div id="about" className="w-full scroll-mt-24"><About /></div>
      <div id="skills" className="w-full scroll-mt-24"><Skills /></div>
      <div id="projects" className="w-full scroll-mt-24"><Projects /></div>
      <div id="contact" className="w-full scroll-mt-24"><Contact /></div>

    </div>
  );
};