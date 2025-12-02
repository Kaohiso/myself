"use client";
import Image from "next/image";
import Masonry from "react-masonry-css";

const images = [
  "/images/abby.jpeg",
  "/images/hollow.jpeg",
  "/images/cute-fox.jpeg",
  "/images/anime-fox.jpeg",
];

const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  700: 2,
  500: 1,
};

export default function MasonryGrid() {
  return (
    <div className="w-[80%] mx-auto mb-4">
      <Masonry breakpointCols={breakpointColumnsObj} className="flex gap-4">
        {images.map((src, index) => (
          <div key={index}>
            <Image
              src={src}
              alt={`Image ${index + 1}`}
              width={500}
              height={500}
              priority={index < 4}
            />
          </div>
        ))}
      </Masonry>
    </div>
  );
}
