"use client"
import { FaCss3, FaFigma, FaHtml5 } from "react-icons/fa6"
import { SiExpress, SiPostgresql, SiPrisma, SiShadcnui, SiTailwindcss } from "react-icons/si"
import { RiNextjsLine, RiReactjsFill } from "react-icons/ri";
import { motion } from "framer-motion";

const Marquee = () => {
  const icons = [
    <FaHtml5 className="size-12 mr-24" key="html" />,
    <FaCss3 className="size-12 mr-24" key="css" />,
    <SiTailwindcss className="size-12 mr-24" key="tailwind" />,
    <RiReactjsFill className="size-12 mr-24" key="react" />,
    <RiNextjsLine className="size-12 mr-24" key="next" />,
    <FaFigma className="size-12 mr-24" key="figma" />,
    <SiShadcnui className="size-10 mr-24" key="shadcn" />,
    <SiExpress className="size-12 mr-24" key="express" />,
    <SiPrisma className="size-11 mr-24" key="prisma" />,
    <SiPostgresql className="size-12 mr-24" key="postgres" />
  ];

  return (
    <div className="border-y py-8 relative overflow-hidden">
      <div className="absolute left-0 top-0 h-full w-[6vw] bg-gradient-to-r from-background to-transparent z-10" />

      <div className="flex items-center">
        <motion.div
          initial={{ x: "0%" }}
          animate={{ x: "-100%" }}
          transition={{ duration: 15, ease: "linear", repeat: Infinity }}
          className="flex items-center shrink-0"
        >
          {icons}
        </motion.div>
        <motion.div
          initial={{ x: "0%" }}
          animate={{ x: "-100%" }}
          transition={{ duration: 15, ease: "linear", repeat: Infinity }}
          className="flex items-center shrink-0"
        >
          {icons}
        </motion.div>
      </div>

      <div className="absolute right-0 top-0 h-full w-[6vw] bg-gradient-to-l from-background to-transparent z-10" />
    </div>
  )
}

export default Marquee
