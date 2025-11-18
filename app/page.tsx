import Navbar from "@/components/Navbar";
import Link from "next/link";
import Experiences from "@/components/Experiences";
import { experiences } from "@/data/experiences";
import { X } from "lucide-react";
import ProjectCards from "@/components/ProjectCards";
import { projects } from "@/data/projects";

export default function Home() {
  return (
    <div className="space-y-14">
      <section className="flex flex-col min-h-screen container mx-auto pgLoadTransition">
        <Navbar />
        <div className="flex items-center flex-1 px-4 sm:px-12">
          {/* Hero */}
          <div className="space-y-3">
            <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold">
              Hello I'm <br />
              <span className="text-primary">Modit Tuladhar</span>
            </h1>
            <hr className="text-muted-foreground" />
            <p className="font-semibold text-muted-foreground">
              I'm a Frontend Developer seeking to
              contribute, learn and grow.
            </p>
          </div>
        </div>
      </section>

      {/* projects */}
      <main className="flex flex-col justify-start min-h-screen container mx-auto" >
        <h2 className="text-4xl font-bold h-14 text-center">My Projects</h2>
        <div className=" flex items-center gap-6 sm:gap-12 justify-center">
          <div className="w-[30%] h-0.5 bg-muted-foreground/70" />
          <X className="text-muted-foreground" />
          <div className="w-[30%] h-0.5 bg-muted-foreground/70" />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center my-14 gap-8">
          {
            projects.map((project) => (
              <ProjectCards project={project} key={project.title} />
            ))
          }
        </div>
      </main >

      {/* Experiences */}
      <div className="px-4 sm:px-12 min-h-screen">
        <section className="flex flex-col items-center justify-center">
          <div className="relative space-y-24 pl-4">
            <h2 className='text-4xl font-bold text-center'>Experiences</h2>
            <Experiences experiences={experiences} />
            {/* line */}
            <div className="w-px h-[540px] bg-muted-foreground absolute left-0 top-[15%] fadeUp" />
          </div>
        </section>
      </div >

    </div >
  );
}
