"use client";

import { Canvas } from "@react-three/fiber";
import { ScrollControls } from "@react-three/drei";
import Scene from "./Scene";

function PlaygroundScene() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} />

      <ScrollControls pages={3} damping={0.15}>
        <Scene />
      </ScrollControls>
    </Canvas>
  );
}

export default function PlaygroundPage() {
  return (
    <main className="relative h-screen w-screen overflow-hidden">
      {/* HTML */}
      <section className="relative z-10 h-full grid grid-cols-2 pointer-events-none">
        <div className="flex items-center justify-center">
          <h1 className="text-5xl font-bold">Breach style</h1>
        </div>
        <div />
      </section>

      {/* 3D */}
      <div className="absolute inset-0 z-0">
        <PlaygroundScene />
      </div>
    </main>
  );
}
