import Image from "next/image";
import { JSX } from "react";

export default function Me(): JSX.Element {
  return (
    <div className="grid sm:grid-cols-2 text-center items-center sm:gap-4">
      <p>
        When I'm not creating or learning new techniques, I spend time outside,
        slowing down, finding calm in fresh air and simple walks — especially
        with my dog, who reminds me daily of the value of presence and small
        moments. This balance between exploration, learning and stillness is
        what continues to guide my work forward.
      </p>
      <div className="relative w-full aspect-square">
        <Image
          src={"/images/draw/bird.png"}
          alt="bird"
          fill
        />
      </div>
    </div>
  );
}
