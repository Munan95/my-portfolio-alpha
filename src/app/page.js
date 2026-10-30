import Image from "next/image";
import About from "./about/page";
import Projects from "./projects/page";
import Blogs from "./blogs/page";
import Contact from "./contact/page";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans bg-white dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div></div>
      </main>
      <About />
      <Projects />
      <Blogs />
      <Contact />
    </div>
  );
}
