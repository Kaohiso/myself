import TopBar from "@/components/TopBar";
import Masonry from "@/components/MasonryImages";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col">
      <TopBar />
      <Masonry />
      <Footer />
    </main>
  );
}
