"use client";

import { Canvas } from "@react-three/fiber";
import Scene from "./Scene";
import TextSections from "./TextSections";
import { JSX, useEffect } from "react";
import { useScrollStore } from "@/store/useScrollTimeline";

export default function PlaygroundScene(): JSX.Element {
  const setScrollProgress = useScrollStore((state) => state.setScrollProgress);

  useEffect(() => {
    const handleScroll = (): void => {
      const viewportHeight = window.innerHeight;
      const scrollY = window.scrollY;

      // Progression sur 1 viewport (ajuste selon tes besoins)
      // Si tu veux plus lent, augmente le diviseur (ex: viewportHeight * 1.5)
      const progress = Math.min(scrollY / viewportHeight, 1);

      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Init

    return () => window.removeEventListener("scroll", handleScroll);
  }, [setScrollProgress]);

  return (
    <>
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <Scene />
      </Canvas>
      <TextSections />
    </>
  );
}
