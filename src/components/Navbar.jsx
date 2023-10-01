import React, { useState } from "react";
import Navlink from "./Navlink";
import { Link } from "react-router-dom";

function Navbar() {
  const [isLinkVisible, setIsLinkVisible] = useState(false);
  return (
    <div className="sticky grid self-end text-neutral-300 text-lg ">
      <Link to={"/about"} className="">
        About
      </Link>
      <Link to={"/contact"}>Contact</Link>
      <div className="grid ">
        <div className="text-neutral-500">Works</div>
        <ul className="">
          <Link to={"clay-canvas"}>
            <Navlink number={"01."} name={"Clay Canvas"} />
          </Link>
          <Link to={"pomodoro-beats"}>
            <Navlink number={"02."} name={"Pomodoro Beats"} />
          </Link>
          <Link to={"youwhen"}>
            <Navlink number={"03."} name={"YouWhen"} />
          </Link>
          {/* <Navlink number={"04."} name={"Mountain Weather"} /> */}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
