
import Link from "next/link";
import { Facebook, Github, Linkedin } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="flex items-center flex-1 px-4 sm:px-12" data-scroll data-scroll-container data-scroll-speed="-.6">
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
      </div>
    </div>
  )
}

export default HeroSection
