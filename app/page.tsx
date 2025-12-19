import TopBar from "@/components/TopBar";
import MasonryImages from "./MasonryImages";
import Footer from "@/components/Footer";
import fs from "fs";
import path from "path";

export default function Home() {
  const imagesDir = path.join(process.cwd(), "public/images/gallery");
  const files = fs.readdirSync(imagesDir);

  const images = files
    .filter((f) => /\.(jpg|jpeg|png|webp|gif)$/i.test(f))
    .map((f) => `/images/gallery/${f}`);

  console.log(images)
  return (
    <main className="flex flex-col">
      <TopBar />
      <MasonryImages images={images} />
      <Footer />
    </main>
  );
}
