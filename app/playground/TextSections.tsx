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
      <aside className="relative w-screen h-screen">
        <div className="absolute top-1/2 left-50 transform -translate-x-1/2 -translate-y-1/2">
          <h1 style={{ opacity: leftOpacity }}>Left</h1>
        </div>
      </aside>

      {/* Zone droite */}
      <aside className="relative w-screen h-screen">
        <div className="absolute top-1/2 right-50 transform -translate-x-1/2 -translate-y-1/2">
          <h1 style={{ opacity: rightOpacity }}>Right</h1>
        </div>
      </aside>
    </section>
  );
}
