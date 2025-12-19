import { useRef } from "react";
import { Mesh } from "three";
import { useFrame } from "@react-three/fiber";
import { range } from "@/helpers/animations/math";
import { useScrollStore } from "@/store/useScrollTimeline";

export default function Cube() {
  const ref = useRef<Mesh>(null);
  const scrollProgress = useScrollStore((state) => state.scrollProgress);
  const setCubeX = useScrollStore((state) => state.setCubeX);

  useFrame(() => {
    if (!ref.current) return;

    // Convertir le scroll (0→1) en valeur similaire à ton ancien système (0→2)
    const t = scrollProgress * 2;

    // Section 0 → 2 (équivalent à tes 2 pages)
    const p = range(t, 0, 2);

    // Translation de droite (1.5) vers gauche (-1.5)
    const x = 1.5 + p * -3;
    ref.current.position.x = x;

    // Rotation optionnelle
    ref.current.rotation.y = p * 1.5;

    // Partager la position avec le store
    setCubeX(x);
  });

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />

      <mesh ref={ref}>
        <boxGeometry />
        <meshStandardMaterial color="#ff7a00" />
      </mesh>
    </>
  );
}
