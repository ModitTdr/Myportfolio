import Navbar from "@/components/Navbar";
import Experiences from "@/components/Experiences";
import { experiences } from "@/data/experiences";
import Projects from "@/components/Projects";
import SmoothScroll from "@/components/SmoothScroll";
import HeroSection from "@/components/HeroSection";
import Marquee from "@/components/Marquee";
import SkillGrid from "@/components/SkillGrid";

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
          <SkillGrid />
        </div>

        {/* Experiences */}
        <div className="px-4 sm:px-12 my-16">
          <section className="flex flex-col items-center justify-center">
            <div className="relative space-y-16 pl-4">
              <h2 className='text-4xl font-bold text-center'>Experiences</h2>
              <div className="flex gap-5 items-center">
                <div className="w-px h-[600px] bg-muted-foreground top-[15%] fadeUp" />
                <div className="space-y-8">
                  <Experiences experiences={experiences} />
                </div>
                {/* line */}
              </div>
            </div>
          </section>
        </div >

      </div >
    </>
  );
}
