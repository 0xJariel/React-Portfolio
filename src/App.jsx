import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import SideLinks from "./components/SideLinks";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import ParticlesBG from "./components/ParticlesBg";
import { Outlet } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation();

  async function loadParticles(main) {
    await loadFull(main);
  }
  return (
    <>
      <ParticlesBG />
      <AnimatePresence mode="await">
        <Outlet key={location.pathname} location={location} />
      </AnimatePresence>
      <div className="p-12 grid h-screen text-white font-serif">
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
