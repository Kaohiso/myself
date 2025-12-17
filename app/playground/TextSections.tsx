import { useTimeline } from "@/store/useScrollTimeline";
import { clamp } from "@/helpers/animations/math";

export default function TextSections() {
  const cubeX = useTimeline((state) => state.cubeX);

  const progress = clamp((1.5 - cubeX) / 3, 0, 1);

  const leftOpacity = clamp(1 - progress * 1.2, 0, 1);

  const rightOpacity = clamp((progress - 0.5) / 0.5, 0, 1);

  return (
    <section className="fixed inset-0 pointer-events-none text-8xl">
      {/* Zone gauche */}
      <aside className="flex items-center w-screen h-screen ">
        <div className="text-center w-1/3 ml-30">
          <h1 style={{ opacity: leftOpacity }}>Imagine being jobless</h1>
        </div>
      </aside>

      {/* Zone droite */}
      <aside className="flex items-center justify-end w-screen h-screen ">
        <div className="text-center w-1/3 mr-30">
          <h1 style={{ opacity: rightOpacity }}>even though you know how to do that</h1>
        </div>
      </aside>
    </section>
  );
}
