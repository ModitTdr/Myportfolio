import Navbar from "@/components/Navbar";
import Experiences from "@/components/Experiences";
import { experiences } from "@/data/experiences";
import Projects from "@/components/Projects";
import SmoothScroll from "@/components/SmoothScroll";
import HeroSection from "@/components/HeroSection";
import Marquee from "@/components/Marquee";

export default function Home() {
  return (
    <>
      <SmoothScroll />
      <div className="space-y-14">
        <section className="flex flex-col min-h-screen container mx-auto pgLoadTransition">
          <Navbar />
          <HeroSection />
        </section>

        <div className="-space-y-5">
          <Projects />
          <Marquee />
        </div>

        {/* Experiences */}
        <div className="px-4 sm:px-12 min-h-screen">
          <section className="flex flex-col items-center justify-center">
            <div className="relative space-y-24 pl-4">
              <h2 className='text-4xl font-bold text-center'>Experiences</h2>
              <Experiences experiences={experiences} />
              {/* line */}
              <div className="w-px h-[635px] bg-muted-foreground absolute left-0 top-[15%] fadeUp" />
            </div>
          </section>
        </div >

      </div >
    </>
  );
}
