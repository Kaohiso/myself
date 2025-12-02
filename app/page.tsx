import TopBar from "@/components/TopBar";
import MasonryImages from "./MasonryImages";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col">
      <TopBar />
      <MasonryImages />
      <Footer />
    </main>
  );
}
