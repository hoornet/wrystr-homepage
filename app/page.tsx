import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Download from "./components/Download";
import Install from "./components/Install";
import Docs from "./components/Docs";
import Roadmap from "./components/Roadmap";
import Support from "./components/Support";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#08090c] text-[#e8eaf0]">
      <Navbar />
      <Hero />
      <Features />
      <Download />
      <Install />
      <Docs />
      <div id="roadmap">
        <Roadmap />
      </div>
      <Support />
      <Footer />
    </main>
  );
}
