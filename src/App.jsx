import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import SideLinks from "./components/SideLinks";

function App() {
  return (
    <div className="p-8 grid grid-cols-8 grid-rows-2 h-screen">
      <Header className="col-span-4" />
      <SideLinks className="col-span-4" />
      <Navbar className="grid self-end" />
    </div>
  );
}

export default App;
