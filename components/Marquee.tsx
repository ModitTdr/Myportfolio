"use client"
import { FaCss3, FaFigma, FaHtml5 } from "react-icons/fa6"
import { SiExpress, SiPostgresql, SiPrisma, SiShadcnui, SiTailwindcss } from "react-icons/si"
import { RiNextjsLine, RiReactjsFill } from "react-icons/ri";

import { motion } from "framer-motion";

const Marquee = () => {
  return (
    <div className="border-y py-8 relative overflow-hidden" >
      <div className="absolute left-5 top-0 h-full w-[6vw] bg-background blur-md z-10" />
      <div className="absolute inset-0 w-[6vw] bg-background z-10" />

      <div className="flex items-center">
        <motion.div
          initial={{ x: "0%" }}
          animate={{ x: "-100%" }}
          transition={{ duration: 15, ease: "linear", repeat: Infinity }}
          className="icons flex items-center text-[5vw] mx-auto gap-24 pr-14"
        >
          <FaHtml5 />
          <FaCss3 />
          <SiTailwindcss />
          <RiReactjsFill />
          <RiNextjsLine />
          <FaFigma className="size-12" />
          <SiShadcnui className="size-10" />
          <SiExpress />
          <SiPrisma className="size-11" />
          <SiPostgresql className="size-12" />
        </motion.div>

        <motion.div
          initial={{ x: "0%" }}
          animate={{ x: "-100%" }}
          transition={{ duration: 15, ease: "linear", repeat: Infinity }}
          className="icons flex items-center text-[5vw] mx-auto gap-24"
        >
          <FaHtml5 />
          <FaCss3 />
          <SiTailwindcss />
          <RiReactjsFill />
          <RiNextjsLine />
          <FaFigma className="size-12" />
          <SiShadcnui className="size-10" />
          <SiExpress />
          <SiPrisma className="size-11" />
          <SiPostgresql className="size-12" />
        </motion.div>

      </div>

      <div className="absolute right-5 top-0 h-full w-[6vw] bg-background blur-md z-10" />
      <div className="absolute right-0 top-0 h-full w-[6vw] bg-background z-10" />
    </div >
  )
}

export default Marquee
