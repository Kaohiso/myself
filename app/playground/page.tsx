"use client";

import TopBar from "@/components/TopBar";
import dynamic from "next/dynamic";

const PlaygroundScene = dynamic(() => import("./PlaygroundScene"), {
  ssr: false,
});

export default function PlaygroundPage() {
  return (
    <>
      <TopBar />
      <main className="h-screen w-screen">
        <PlaygroundScene />
      </main>
    </>
  );
}
