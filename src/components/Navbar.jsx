import React from "react";
import Navlink from "./Navlink";

function Navbar() {
  return (
    <div className="grid self-end gap-0 text-neutral-300 text-xl ">
      <div className="">About</div>
      <div>Contact</div>
      <div className="grid gap-1">
        <div>Work</div>
        <ul className="text-lg">
          <Navlink number={"01."} name={"Clay Canvas"} />
          <Navlink number={"02."} name={"Pomodoro Beats"} />
          <Navlink number={"03."} name={"Off-Piste"} />
          <Navlink number={"04."} name={"Mountain Weather"} />
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
