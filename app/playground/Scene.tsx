import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import Cube from "./Cube";

export default function Scene() {
  const scroll = useScroll();

  useFrame(() => {
    // valeur 0 → 1
    const t = scroll.offset;
    // console.log(t)
  });

  return <Cube />;
}
