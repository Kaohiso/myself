"use client";
import Image from "next/image";
import Navbar from "./Navbar";
import ArtistContent from "./ArtistContent";

const TopBar = () => {
  return (
    <header>
      <div className="absolute w-full grid grid-cols-3 px-10 items-center py-4">
        <div
          className="relative 
            w-10 h-10
            sm:w-15 sm:h-15
            md:w-20 md:h-20
            lg:w-24 lg:h-24"
        >
          <Image
            src="/images/strawhat.png"
            alt="Strawhat"
            fill
            className="object-contain"
          />
        </div>
        <ArtistContent />
        <Navbar />
      </div>
    </header>
  );
};

export default TopBar;
