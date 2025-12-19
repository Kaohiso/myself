"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function MasonryGrid({ images }: { images: string[] }) {
  const [visibleImages, setVisibleImages] = useState<Set<number>>(new Set());
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = imageRefs.current.map((ref, index) => {
      if (!ref) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleImages((prev) => new Set(prev).add(index));
          }
        },
        {
          threshold: 0.1, // Déclenche dès que 10% de l'image est visible
          rootMargin: "50px", // Commence l'animation un peu avant
        }
      );

      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer?.disconnect());
    };
  }, [images.length]);

  return (
    <div className="w-[80%] mx-auto">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((src, index) => (
          <div
            key={index}
            ref={(el) => {
              imageRefs.current[index] = el;
            }}
            className={`aspect-square relative transition-all duration-700 ease-out ${
              visibleImages.has(index)
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <Image
              src={src}
              alt={`Image ${index + 1}`}
              fill
              className="object-contain"
              priority={index < 4}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
