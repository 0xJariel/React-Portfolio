import React from "react";

function Navbar() {
  return (
    <div>
      <div>About</div>
      <div>Contact</div>
      <div>
        <div>Work</div>
        <ul>
          <li>
            <div className="number">01</div>
            <div className="title">The Clay Canvas</div>
          </li>
          <li>Pomodoro Beats</li>
          <li>Off-Piste</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
