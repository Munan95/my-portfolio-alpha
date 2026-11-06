import {
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiPrisma,
  SiNodedotjs,
  SiExpress,
  SiRedux,
  SiPostgresql,
  SiMongodb,
  SiMongoose,
  SiFirebase,
} from "react-icons/si";

const skills = [
  { name: "Javascript", level: "Advanced", icon: SiJavascript, color: "#f7df1e" },
  { name: "React", level: "Advanced", icon: SiReact, color: "#61dafb" },
  { name: "NextJS", level: "Advanced", icon: SiNextdotjs, color: "currentColor" },
  { name: "Tailwind CSS", level: "Advanced", icon: SiTailwindcss, color: "#06b6d4" },
  { name: "NodeJS", level: "Advanced", icon: SiNodedotjs, color: "#339933" },
  { name: "ExpressJS", level: "Advanced", icon: SiExpress, color: "#828282" },
  { name: "Postgresql", level: "Intermediate", icon: SiPostgresql, color: "#4169e1" },
  { name: "MongoDB", level: "Advanced", icon: SiMongodb, color: "#47a248" },
  { name: "Mongoose", level: "Intermediate", icon: SiMongoose, color: "#880000" },
  { name: "Firebase", level: "Intermediate", icon: SiFirebase, color: "#ffca28" },
];

export default function Skills() {
  return (
    <section className="relative overflow-hidden w-full bg-black/10 px-6 py-20 text-white transition-colors duration-500 sm:px-12 lg:px-20">

      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            My{" "}
            <span className="bg-linear-to-l from-rose-400 to-orange-300 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          <div className="mx-auto mt-4 h-1.5 w-24 rounded-full bg-white" />
          <p className="mx-auto mt-6 max-w-xl text-[17px] text-white/60">
            I specialize in the modern web ecosystem, focusing on performance,
            scalability, and clean code.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 bg-black/2">
          {skills.map(({ name, level, icon: Icon, color }) => (
            <div
              key={name}
              className="group relative flex flex-col items-center justify-center gap-4 rounded-2xl border border-white/5 bg-[#171616] p-6 backdrop-blur-sm transition-all hover:border-white/20 hover:bg-white/10 hover:shadow-xl hover:shadow-purple-500/5 hover:scale-105 duration-200"
            >
              {/* Colored glow on hover */}
              <div
                className="absolute inset-0 -z-10 rounded-2xl opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-20"
                style={{ backgroundColor: color === "currentColor" ? "#888" : color }}
              />

              {/* Icon */}
              <div
                className="text-5xl transition-transform duration-300 group-hover:scale-110" 
                style={{ color }}
              >
                <Icon />
              </div>

              {/* Text */}
              <div className="text-center">
                <h3 className="text-sm font-bold tracking-wide sm:text-base">{name}</h3>
                <span className="text-[10px] font-bold uppercase tracking-widest text-white/50">
                  {level}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};