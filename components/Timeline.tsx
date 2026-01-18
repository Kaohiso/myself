import { useEffect, useRef, useState } from "react";

interface TimelineProps {
  startDate: string;
  endDate: string;
  title: string;
  place: string;
}

export default function Timeline({
  startDate,
  endDate,
  title,
  place,
}: TimelineProps) {
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
      className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 sm:gap-4 border-b border-b-[#FFEDE3] py-4 sm:py-5 md:py-6 px-4 sm:px-0"
    >
      {/* Colonne gauche : vient de la gauche */}
      <div
        className={`grid grid-rows-2 gap-1 transition-all duration-700 ease-out ${
          isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
        }`}
      >
        <h4 className="text-slate-800 text-base sm:text-lg md:text-xl font-medium">
          {title}
        </h4>
        <p className="italic text-slate-400 text-sm sm:text-base">
          {place}
        </p>
      </div>

      {/* Colonne droite : vient de la droite */}
      <div
        className={`transition-all duration-700 ease-out sm:text-right ${
          isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
        }`}
      >
        <p className="text-slate-600 text-sm sm:text-base whitespace-nowrap">
          {startDate} - {endDate}
        </p>
      </div>
    </div>
  );
}