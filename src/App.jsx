import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import SideLinks from "./components/SideLinks";
import { loadFull } from "tsparticles";
import ParticlesBG from "./components/ParticlesBg";
import AnimatedOutlet from "./components/AnimatedOutlet";

export default function App() {
  async function loadParticles(main) {
    await loadFull(main);
  }

  return (
    <>
      <ParticlesBG />
      <AnimatedOutlet />
      <div className="p-12 pb-20 grid h-screen text-white font-serif fixed z-0 w-full">
        <div className="md:flex justify-between ">
          <Header />
          <SideLinks />
        </div>
        <Navbar />
      </div>
    </>
  );
}
