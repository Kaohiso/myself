import TopBar from "@/components/TopBar";
import Image from "next/image";
import Footer from "@/components/Footer";
import Me from "./Me";
import Trainings from "./Trainings";
import Experiences from "./Experiences";

export default function About() {
  return (
    <main>
      <TopBar />
      <section className="mx-auto mb-8 flex flex-col items-center">
        <div className="w-4/5">
          <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
            <Image
              alt="Me"
              src="/images/me.jpg"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw,
             (max-width: 1200px) 75vw,
             50vw"
            />
          </div>
        </div>
        <div className="w-3/5">
          <Me />
          <Trainings />
          <Experiences />
        </div>
      </section>
      <Footer />
    </main>
  );
}
