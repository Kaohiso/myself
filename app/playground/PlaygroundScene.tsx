"use client";

import { Canvas } from "@react-three/fiber";
import { Scroll, ScrollControls } from "@react-three/drei";
import Scene from "./Scene";
import TextSections from "./TextSections";

export default function PlaygroundScene() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
      <ScrollControls pages={2} damping={0.15}>
        {/* HTML synchronisé */}
        <Scroll html>
          <TextSections />
        </Scroll>

        {/* 3D */}
        <Scene />
      </ScrollControls>
    </Canvas>
  );
}
