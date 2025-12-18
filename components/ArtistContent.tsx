import { Amatic_SC } from "next/font/google";

const amaticSC = Amatic_SC({
  weight: "700",
  subsets: ["latin"],
});

export default function ArtistContent() {
  return (
    <div
      className={`${amaticSC.className} flex flex-col font-semibold text-base sm:text-xl md:text-2xl gap-1 sm:flex-row text-start`}
    >
      <p>Antoine</p>
      <p>BENTINI</p>
    </div>
  );
}
