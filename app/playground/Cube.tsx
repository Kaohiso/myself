import { useRef } from "react";
import { Mesh } from "three";
import { useFrame } from "@react-three/fiber";
import { useScroll } from "@react-three/drei";
import { useTimeline } from "@/store/useScrollTimeline";
import { range } from "@/helpers/animations/math";

export default function Cube() {
  const ref = useRef<Mesh | null>(null);
  const scroll = useScroll();

  const setCubeX = useTimeline((state) => state.setCubeX);

  useFrame(() => {
    if (!ref.current) return;

    const t = scroll.offset * 2;

    // Section 0 → 2 car 2 pages
    const p = range(t, 0, 2);

    const x = 1.5 + p * -3;
    ref.current.position.x = x;

    // 🔴 État partagé avec le HTML
    setCubeX(x);
  });

  return (
    <mesh ref={ref}>
      <boxGeometry />
      <meshStandardMaterial color="#ff7a00" />
    </mesh>
  );
}
