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
    <div ref={divRef} className="flex justify-between items-center border-b border-b-[#FFEDE3] py-4">
      {/* Colonne gauche : vient de la gauche (translate-x négatif au départ) */}
      <div
        className={`grid grid-rows-2 transition-all duration-700 ease-out ${
          isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
        }`}
      >
        <h4 className="text-slate-800">{title}</h4>
        <p className="italic text-slate-400">{place}</p>
      </div>

      {/* Colonne droite : vient de la droite (translate-x positif au départ) */}
      <div
        className={`transition-all duration-700 ease-out ${
          isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
        }`}
      >
        <p className="text-slate-600">
          {startDate} - {endDate}
        </p>
      </div>
    </div>
  );
}