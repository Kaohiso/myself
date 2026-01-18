import { useScrollStore } from "@/store/useScrollTimeline";
import { clamp } from "@/helpers/animations/math";
import { JSX } from "react";

export default function TextSections(): JSX.Element {
  const cubeX = useScrollStore((state) => state.cubeX);
  const scrollProgress = useScrollStore((state) => state.scrollProgress);

  const progress = clamp((1.5 - cubeX) / 3, 0, 1);
  const leftOpacity = clamp(1 - progress * 2, 0, 1);
  const rightOpacity = clamp((progress - 0.5) / 0.5, 0, 1);

  const translateY = scrollProgress * 100;

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-0 absolute inset-0 pointer-events-none z-10 px-4 sm:px-6 md:px-8">
      {/* Zone gauche */}
      <aside
        className="w-full md:w-4/5 lg:w-3/4 xl:w-2/3 flex items-center justify-center text-center mx-auto"
        style={{ transform: `translateY(${-translateY}vh)` }}
      >
        <p 
          className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-relaxed" 
          style={{ opacity: leftOpacity }}
        >
          After completing a foundation in software development and later
          expanding into UX and front-end practices, my path gradually began
          to shift back toward the artistic world that had always lived
          quietly in the background of my life. What started as a technical
          journey slowly unfolded into something more personal: the
          rediscovery of a passion that had shaped my childhood — creating
          worlds, characters and atmospheres, both in 2D and 3D.
        </p>
      </aside>

      {/* Zone droite */}
      <aside
        className="w-full md:w-4/5 lg:w-3/4 xl:w-2/3 flex items-center justify-center text-center mx-auto"
        style={{ transform: `translateY(${-translateY + 100}vh)` }}
      >
        <p 
          className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-relaxed" 
          style={{ opacity: rightOpacity }}
        >
          Over time, this creative pull became impossible to ignore. I began
          merging what I had learned through development with a renewed
          commitment to visual expression, shaping a practice that lives
          between imagination, design and digital craft. Today, my focus is to
          build a body of work that explores how ideas evolve when given
          space, patience and curiosity — whether through illustration,
          modeling, or the quiet process of giving form to something that
          didn't exist before.
        </p>
      </aside>
    </section>
  );
}