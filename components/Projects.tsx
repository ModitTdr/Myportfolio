"use client"
import { X } from "lucide-react"
import ProjectCards from "./ProjectCards"
import { projects } from "@/data/projects";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <section className="min-h-screen bg-neutral-900 py-24 rounded-t-2xl z-10" data-scroll data-scroll-container data-scroll-speed=".2">
      <motion.div
        initial={{ transform: "translateY(200px)", opacity: 0 }}
        whileInView={{
          transform: "translateY(0)",
          opacity: 1
        }}
        transition={{ duration: 0.5 }}
        className="flex flex-col justify-start mx-auto container"
      >
        <h2 className="text-5xl font-bold h-18 text-center">My Projects</h2>
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

      </motion.div>
    </section >
  )
}

export default Projects
