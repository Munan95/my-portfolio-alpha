import Image from "next/image";
import About from "./about/page";
import Projects from "./projects/page";
import Blogs from "./blogs/page";
import Contact from "./contact/page";
import { Rocket } from "lucide-react";
import { MailPlus } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans bg-black">
      <main className="flex flex-1 w-full flex-row items-center justify-between py-32 pl-25 pr-60 bg-black sm:items-start">
        
        {/* Profile Information */}
        <div className="flex flex-col text-white w-130">
          <p className="text-5xl font-bold py-3">Hi, I'm Munan</p>
          <p className="text-2xl py-3">a Full Stack Developer</p>
          <p className="text-lg py-3">I build modern, scalable, and user-friendly web applications with a passion for clean code and great UX.</p>
          <div className="flex flex-row gap-3 text-base">
            <button className="flex flex-row gap-0.5 justify-center items-center text-black bg-white px-7 py-3 rounded-4xl"><span className="text-rose-700"><Rocket size={20} strokeWidth={1} /></span><span>Get Startet</span></button>
            <button className="flex flex-row gap-1 justify-center items-center border-2 border-white hover:bg-white hover:text-black px-7 py-3 rounded-4xl"><span className="text-rose-700"><MailPlus size={20} strokeWidth={1} /></span><span>Contact Me</span></button>
          </div>
        </div>

        {/* Profile Picture */}
        <div className="rounded-full">
          <Image 
            src="/my-pic.jpg" 
            alt="my-profile"
            width={350}
            height={350}
            priority
            className="h-87.5 w-87.5 rounded-full border-5 border-amber-100/70 object-cover"
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
