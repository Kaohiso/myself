"use client";

import { useEffect, useState } from "react";
import ArtistContent from "./ArtistContent";

export default function Loader({ onFinish }: { onFinish: () => void }) {
  const [count, setCount] = useState(0);
  const [isLeaving, setIsLeaving] = useState(false);

  useEffect(() => {
    let current = 0;
    let isCancelled = false;

    const step = () => {
      if (isCancelled) return;

      current += 1;
      setCount(current);

      // ----- Vitesse progressive -----
      // delay va aller de 20ms → 60ms → 20ms selon easing
      let delay;

      if (current <= 15) {
        // 0 → 15% : ralentit → accélère
        const t = current / 15; // 0 → 1
        delay = 80 - t * 60; // 80 → 20
      } else if (current >= 85) {
        // 85 → 100% : accélère → ralentit
        const t = (current - 85) / 15; // 0 → 1
        delay = 20 + t * 150; // 20 → 80
      } else {
        // zone centrale rapide
        delay = 20;
      }

      if (current < 100) {
        setTimeout(step, delay);
      } else {
        setTimeout(() => {
          setIsLeaving(true);
          setTimeout(onFinish, 800);
        }, 300);
      }
    };

    step();

    return () => {
      isCancelled = true;
    };
  }, [onFinish]);

  return (
    <div
      className={`
        fixed inset-0 bg-[#0c0c0c] z-9999 flex items-center justify-center
        transform transition-transform duration-800 ease-in-out
        ${isLeaving ? "-translate-y-full" : ""}
      `}
    >
      <div className="text-center text-white">
        <ArtistContent />

        <div className="mt-6 text-[2rem] font-light">{count}%</div>
      </div>
    </div>
  );
}
