import React from "react";
import { LiaGithubAlt, LiaGithub } from "react-icons/lia";
function SideLinks() {
  return (
    <div>
      <a className="flex gap-2 text-xl" href="https://github.com/0xJariel">
        Github <LiaGithub size={28} />
      </a>
    </div>
  );
}

export default SideLinks;
