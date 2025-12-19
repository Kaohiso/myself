import Image from "next/image";
import { JSX, useEffect, useRef, useState } from "react";

export default function Me(): JSX.Element {
  const [isVisible, setIsVisible] = useState(false);
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.5,
        rootMargin: "0px",
      }
    );

    if (divRef.current) {
      observer.observe(divRef.current);
    }

    return () => {
      if (divRef.current) {
        observer.unobserve(divRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={divRef}
      className={`grid sm:grid-cols-2 text-center items-center sm:gap-4 transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <p>
        When I'm not creating or learning new techniques, I spend time outside,
        slowing down, finding calm in fresh air and simple walks — especially
        with my dog, who reminds me daily of the value of presence and small
        moments. This balance between exploration, learning and stillness is
        what continues to guide my work forward.
      </p>
      <div className="relative w-full aspect-square">
        <Image src={"/images/draw/bird.png"} alt="bird" fill />
      </div>
    </div>
  );
}
