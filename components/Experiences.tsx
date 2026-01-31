import Link from "next/link";
import Image from "next/image";

type ExperiencesType = {
  link: string;
  title: string;
  date: string;
  role: string;
  description: string;
  works: string[];
  technologies: {
    name: string;
    src: string;
  }[];
};

type experiencesProp = {
  experiences: ExperiencesType[];
};

const Experiences = ({ experiences }: experiencesProp) => {
  return (
    <div className="flex flex-col gap-12 w-full">
      {experiences.map((experience: ExperiencesType) => (
        <div key={experience.title} className="w-full">
          <Link
            href={experience.link}
            className="group fadeUp flex flex-col space-y-4 w-full"
          >
            {/* Header: Title and Date */}
            <div className="space-y-1">
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-x-6 gap-y-1">
                <h2 className="text-2xl md:text-3xl font-bold group-hover:text-primary transition-colors duration-150 ease-in-out">
                  {experience.title}
                </h2>
                <p className="text-muted-foreground text-[10px] md:text-xs font-mono uppercase tracking-widest">
                  {experience.date}
                </p>
              </div>
              <p className="text-xs md:text-sm text-muted-foreground font-medium">
                {experience.role}
              </p>
            </div>

            {/* Content Body */}
            <div className="w-full max-w-2xl space-y-4">
              <div className="space-y-3 tracking-tight leading-relaxed">
                <p className="text-sm md:text-base text-neutral-300">
                  {experience.description}
                </p>
                <ul className="space-y-2">
                  {experience.works.map((work, index) => (
                    <li
                      key={index}
                      className="text-xs md:text-sm text-muted-foreground list-disc ml-4 marker:text-neutral-600"
                    >
                      {work}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Responsive Badge Container */}
              <div className="pt-2">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-[10px] md:text-xs font-semibold text-neutral-500 mr-1 uppercase tracking-tighter">
                    Tech Stack:
                  </span>
                  {experience.technologies.map(({ name }) => (
                    <span
                      key={name}
                      className="
                        inline-flex items-center px-2 py-1 
                        rounded-md text-[10px] md:text-xs font-medium 
                        bg-neutral-900/50 border border-neutral-800 text-neutral-400 
                        transition-all duration-300
                        group-hover:border-neutral-700 group-hover:text-neutral-200 group-hover:bg-neutral-900
                      "
                    >
                      {name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Experiences;
