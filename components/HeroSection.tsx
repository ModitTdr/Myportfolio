"use client"
import Link from "next/link";
import { Facebook, Github, Linkedin } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react";

const HeroSection = () => {
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.65]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.2]);

  return (
    <section
      ref={ref}
      className="flex items-center flex-1 px-4 sm:px-12" data-scroll data-scroll-container data-scroll-speed="-.6"
    >
      {/* Hero */}
      <motion.div
        style={{
          scale,
          opacity
        }}
        className="space-y-3"
      >
        <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold">
          Hello I&apos;m <br />
          <span className="text-primary">Modit Tuladhar</span>
        </h1>
        <hr className="text-muted-foreground" />
        <p className="font-semibold text-muted-foreground">
          I&apos;m a Frontend Developer from Nepal, seeking to
          contribute, learn and grow and making my way to become a complete full stack developer.
        </p>

        <div className="sm:hidden flex gap-4">
          <Link href="https://github.com/ModitTdr" >
            <Github
              className="text-indigo-400"
            />
          </Link>
          <Link href="https://www.linkedin.com/in/modittuladhar" >
            <Linkedin
              className="text-blue-300"
            />
          </Link>
          <Link href="https://www.facebook.com/modit.tuladhar">
            <Facebook
              className="text-blue-400"
            />
          </Link>
        </div>

        <button className="border bg-primary md:bg-transparent shadow-xl text-black md:text-primary rounded-sm px-8 py-3 text-md cursor-pointer relative overflow-hidden group z-0 font-semibold mt-6 border-primary not-dark:text-black not-dark:border-black">
          <a
            href="/CV.pdf"
            download="CV.pdf"
          >
            <p className="transition-all duration-400 ease-in-out group-hover:text-black relative z-10">Download CV</p>
            <div
              className="absolute h-full w-full left-0 -bottom-full bg-primary rounded-4xl transition-all duration-400 ease-in-out 
            group-hover:bottom-0 group-hover:rounded-none z-0"
            />
          </a>
        </button>
      </motion.div>
    </section>
  )
}

export default HeroSection
