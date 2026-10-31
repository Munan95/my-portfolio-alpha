import Image from "next/image";
import Link from "next/link";
import About from "./about/page";
import Projects from "./projects/page";
import Blogs from "./blogs/page";
import Contact from "./contact/page";
import { JavaScriptIcon } from "@/components/icon";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans bg-black pt-5">
      <main className="flex flex-1 w-full flex-row items-center justify-between py-32 pl-25 pr-60 bg-black sm:items-start">
        
        {/* Profile Information */}
        <div className="flex flex-col text-white w-130">
          <p className="text-6xl font-bold py-6">Hi, I'm Munan</p>
          
          <p className="flex flex-row gap-2.5 items-center text-2xl py-2">
            <span className="text-white/60">a Full Stack Developer |</span>
            <span><JavaScriptIcon className="h-7 w-7 text-amber-400" /></span>
          </p>

          <p className="text-white/60 text-lg py-3">I build modern, scalable, and user-friendly web applications with a passion for clean code and great UX.</p>
          
          <div className="flex flex-row gap-3 text-base py-7">

            <Link
              href="/projects"
              target=""
              rel="noopener noreferrer"
              aria-label="Github"
              className="group flex flex-row items-center justify-center gap-1 rounded-full bg-white px-7 py-3 text-black shadow-md transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl active:scale-95"
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
        <div className="rounded-full">
          <Image 
            src="/My-Photo.jpg" 
            alt="my-profile"
            width={350}
            height={350}
            priority
            className="h-87.5 w-87.5 rounded-full border-4 border-amber-100/70 object-cover"
          />
        </div>

      </main>
      <About />
      <Projects />
      <Blogs />
      <Contact />
    </div>
  );
}
