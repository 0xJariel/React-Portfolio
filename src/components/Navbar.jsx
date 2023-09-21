import React from "react";
import Navlink from "./Navlink";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="grid self-end gap-0 text-neutral-300 text-xl ">
      <Link to={"/about"} className="">
        About
      </Link>
      <Link to={"/contact"}>Contact</Link>
      <div className="grid gap-1">
        <div>Work</div>
        <ul className="text-lg">
          <Link to={"clay-canvas"}>
            <Navlink number={"01."} name={"Clay Canvas"} />
          </Link>
          <Link to={"pomodoro-beats"}>
            <Navlink number={"02."} name={"Pomodoro Beats"} />
          </Link>
          <Navlink number={"03."} name={"Off-Piste"} />
          <Navlink number={"04."} name={"Mountain Weather"} />
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
