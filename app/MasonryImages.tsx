import Image from "next/image";

export default function MasonryGrid() {
  const images = [
    "/images/list/abby.jpeg",
    "/images/list/hollow.jpeg",
    "/images/list/cute-fox.jpeg",
    "/images/list/anime-fox.jpeg",
    "/images/list/hidden-cat.jpeg",
  ];

  return (
    <div className="w-[80%] mx-auto">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((src, index) => (
          <div key={index} className="aspect-square relative">
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
