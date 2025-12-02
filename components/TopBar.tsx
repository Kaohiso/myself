"use client";
import { Amatic_SC } from "next/font/google";
import Image from "next/image";
import FloatingIcons from "./FloatingIcons";
import Navbar from "./Navbar";

const amaticSC = Amatic_SC({
  weight: "700",
  subsets: ["latin"],
});

const ArtistContent = () => (
  <div className="flex flex-row text-4xl gap-2">
    <p className="text-red-300 text-8xl">&#123;</p>
    <div className="flex flex-col items-center justify-center">
      <p className="font-semibold">Antoine BENTINI</p>
      <p className="text-red-300">Developer & Artist</p>
    </div>
    <p className="text-red-300 text-8xl">&#125;</p>
  </div>
);

export default function TopBar() {
  return (
    <header>
      <div className={`${amaticSC.className} flex justify-between items-center mx-10 my-4`}>
        <div className="relative w-[100px] h-[100px]">
          <Image
            src="/images/strawhat.png"
            alt="Strawhat"
            fill
            className="object-contain"
          />
        </div>
        <ArtistContent />
        <FloatingIcons />
      </div>
      <Navbar />
    </header>
  );
}
