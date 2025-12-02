import Link from "next/link";

interface ProjectCardProp {
  link: string;
  title: string;
  description: string;
  logo: string;
  background: string;
  textColor: string;
  technologies: {
    name: string;
    src: string;
  }[];
}[];

const ProjectCards = ({ project }: { project: ProjectCardProp }) => {
  const { link, title, description, logo, background, textColor, technologies } = project;
  return (
    <Link href={link} className="space-y-4 cursor-pointer">
      <div
        className={`min-h-[250px] min-w-[200px] md:h-[400px] md:w-[400px] rounded-xs flex justify-center items-center border ${background} shadow-[0_0px_12px_rgba(0,0,0,0.1)] 
        hover:shadow-white/40 duration-200 ease-in-out group`}
      >
        {
          logo ? (
            <img src={logo} width={140} height={140} alt={`${title} logo`} className="" />
          ) : (
            <p className={`text-3xl font-bold text-${textColor}`}>{title}</p>
          )

        }
      </div>
      <div className="space-y-2">
        <h2 className='text-3xl font-bold'>{title}</h2>
        <p className="text-sm text-muted-foreground max-w-xs md:max-w-sm">{description}</p>
      </div>
    </Link >
  )
}

export default ProjectCards
