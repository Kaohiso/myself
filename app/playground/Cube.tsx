import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useScroll } from "@react-three/drei";
import { Mesh } from "three";
import { translateX } from "@/lib/animations/translate";

export default function Cube() {
  const ref = useRef<Mesh | null>(null);
  const scroll = useScroll();

  useFrame(({ clock }) => {
    if (!ref.current) return;

    const scrollT = scroll.offset;
    const c = clock.elapsedTime;

    // Animation d'entrée
    const introProgress = Math.min(c / 1, 1);
    ref.current.position.y = 3 - introProgress * 3;

    // Rotation horizontale
    ref.current.rotation.y = scrollT * Math.PI * 0.5;

    translateX(ref.current, 1.5, -3, scrollT);
  });

  return (
    <mesh ref={ref}>
      <boxGeometry />
      <meshStandardMaterial color="#ff7a00" />
    </mesh>
  );
}
