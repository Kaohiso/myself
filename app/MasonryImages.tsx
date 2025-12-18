import Image from "next/image";
import fs from "fs";
import path from "path";

export default function MasonryGrid() {
  const imagesDir = path.join(process.cwd(), "public/images/gallery");
  const files = fs.readdirSync(imagesDir);

  const images = files
    .filter((f) => /\.(jpg|jpeg|png|webp|gif)$/i.test(f))
    .map((f) => `/images/gallery/${f}`);

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
