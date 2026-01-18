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
      },
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
      className={`grid grid-cols-1 md:grid-cols-2 text-center items-center gap-6 md:gap-8 lg:gap-12 px-4 sm:px-0 transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed order-2 md:order-1">
        When I'm not creating or learning new techniques, I spend time outside,
        slowing down, finding calm in fresh air and simple walks — especially
        with my dog, who reminds me daily of the value of presence and small
        moments. This balance between exploration, learning and stillness is
        what continues to guide my work forward.
      </p>
      <div className="relative w-full aspect-square max-w-md mx-auto order-1 md:order-2">
        <Image
          src={"/images/draw/bird.png"}
          alt="bird"
          fill
          className="object-contain"
        />
      </div>
    </div>
  );
}
