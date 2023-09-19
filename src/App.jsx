import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import SideLinks from "./components/SideLinks";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import ParticlesBG from "./components/ParticlesBg";

function App() {
  async function loadParticles(main) {
    await loadFull(main);
  }
  return (
    <>
      <ParticlesBG />
      <div className="p-10 grid h-screen text-white font-serif">
        <div className="flex justify-between">
          <Header />
          <SideLinks />
        </div>
        <Navbar />
      </div>
    </>
  );
}

export default App;
