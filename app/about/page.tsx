"use client";

import Footer from "@/components/Footer";
import TopBar from "@/components/TopBar";
import dynamic from "next/dynamic";
import { JSX } from "react";
import Me from "./Me";
import Trainings from "./Trainings";
import Experiences from "./Experiences";

const PlaygroundScene = dynamic(() => import("./PlaygroundScene"), {
  ssr: false,
});

export default function PlaygroundPage(): JSX.Element {
  return (
    <>
      <TopBar absolute />

      <main>
        <section className="relative h-[200vh]">
          <div className="sticky top-0 h-screen">
            <PlaygroundScene />
          </div>
        </section>

        <section className="relative z-20 min-h-screen flex justify-center items-center">
          <div className="w-3/5">
            <Me />
            <Experiences />
            <Trainings />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}