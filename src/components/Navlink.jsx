import React from "react";

function Navlink({ number, name }) {
  return (
    <li className="flex gap-2 pl-3">
      <div className="flex number font-mono text-neutral-500 text-sm self-center">
        {number}
      </div>
      <div className="title">{name}</div>
    </li>
  );
}

export default Navlink;
