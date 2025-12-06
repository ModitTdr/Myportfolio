import Link from "next/link"
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
    src: string
  }[];
}
type experiencesProp = {
  experiences: ExperiencesType[]
}

const Experiences = ({ experiences }: experiencesProp) => {
  return (
    <>
      {
        experiences.map((experience: ExperiencesType) => (
          <div key={experience.title}>
            <Link href={experience.link} className="group fadeUp space-y-3">
              <div>
                <div className="flex flex-wrap items-baseline gap-x-6">
                  <h2 className="text-3xl font-bold group-hover:text-primary duration-150 ease-in-out">{experience.title}</h2>
                  <p className="text-muted-foreground text-xs">{experience.date}</p>
                </div>
                <p className="text-xs text-muted-foreground">{experience.role}</p>
              </div>
              <div className="text-justify max-w-xs space-y-4">
                <div className="space-y-2 tracking-tight leading-5">
                  <p>{experience.description}</p>
                  <ul>
                    {
                      experience.works.map((work, index) => (
                        <li key={index} className="text-xs text-muted-foreground list-disc ml-2">{work}</li>
                      ))
                    }
                  </ul>
                </div>
                <div className="flex gap-2 items-center">
                  <p className="font-medium">Technologies Used:</p>
                  {
                    experience.technologies.map(({ name, src }) => (
                      <div className="flex gap-1.5" key={name}>
                        {
                          name === 'figma' ? (
                            <Image src={src} width={15} height={15} alt={name} />
                          ) : (
                            <Image src={src} width={24} height={24} alt={name} />
                          )
                        }
                      </div>
                    ))
                  }
                </div>
              </div>
            </Link>
          </div>
        ))
      }
    </>
  )
}

export default Experiences
