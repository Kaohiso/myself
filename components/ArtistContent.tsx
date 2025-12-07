import { Amatic_SC } from "next/font/google";

const amaticSC = Amatic_SC({
  weight: "700",
  subsets: ["latin"],
});

export default function ArtistContent() {
  return (
    <div
      className={`${amaticSC.className} flex flex-row items-center justify-center gap-2 text-2xl sm:text-3xl md:text-4xl`}
    >
      <p className="text-red-300 text-5xl sm:text-6xl md:text-8xl">&#123;</p>
      <div className="flex flex-col items-center justify-center">
        <p className="font-semibold text-xl sm:text-base md:text-4xl">
          Antoine BENTINI
        </p>
        <p className="text-red-300 text-sm sm:text-base md:text-4xl">
          Developer & Artist
        </p>
      </div>
      <p className="text-red-300 text-5xl sm:text-6xl md:text-8xl">&#125;</p>
    </div>
  );
}
