"use client";
import Image from "next/image";
import Navbar from "./Navbar";
import ArtistContent from "./ArtistContent";

const TopBar = ({ absolute }: { absolute?: boolean }) => {
  return (
    <header>
      <div
        className={`${
          absolute ? "absolute" : ""
        } w-full grid grid-cols-3 px-10 items-center py-4 z-20`}
      >
        <ArtistContent />
        <Navbar />
      </div>
    </header>
  );
};

export default TopBar;
