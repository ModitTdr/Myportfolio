import { FaCss3, FaFigma, FaHtml5 } from "react-icons/fa6";
import { RiNextjsLine, RiReactjsFill } from "react-icons/ri";
import { SiExpress, SiNestjs, SiPostgresql, SiPrisma, SiTailwindcss } from "react-icons/si";

const SkillGrid = () => {
  const skills = [
    { name: "HTML5", icon: <FaHtml5 /> },
    { name: "CSS3", icon: <FaCss3 /> },
    { name: "Tailwind", icon: <SiTailwindcss /> },
    { name: "React", icon: <RiReactjsFill /> },
    { name: "Next.js", icon: <RiNextjsLine /> },
    { name: "Express", icon: <SiExpress /> },
    { name: "NestJs", icon: <SiNestjs /> },
    { name: "Figma", icon: <FaFigma /> },
    { name: "Prisma", icon: <SiPrisma /> },
    { name: "Postgres", icon: <SiPostgresql /> },
  ];
  return (
    <section className="flex items-start py-18 bg-neutral-950">
      <div className="container mx-auto px-4 max-w-5xl space-y-16">
        <div className="text-left md:text-center">
          <h2 className="text-4xl font-bold text-foreground tracking-tight">Technical Skills</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 border-t border-l border-neutral-800">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group relative flex flex-col items-center justify-center p-8 border-r border-b border-neutral-800 hover:bg-neutral-900/50 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-linear-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-500" />
              <div className="relative z-10 text-4xl text-muted-foreground group-hover:text-foreground group-hover:scale-110 transition-all duration-200 ease-out">
                {skill.icon}
              </div>
              <span className="relative z-10 mt-4 text-sm font-medium text-muted-foreground group-hover:text-neutral-300 transition-colors">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillGrid
