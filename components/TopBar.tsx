"use client";
import Image from "next/image";
import FloatingIcons from "./FloatingIcons";
import Navbar from "./Navbar";
import ArtistContent from "./ArtistContent";

export default function TopBar() {
  return (
    <header>
      <div className="grid grid-cols-[4rem_auto_4rem] justify-stretch mx-10 items-center my-4">
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
        <FloatingIcons />
      </div>
      <Navbar />
    </header>
  );
}
