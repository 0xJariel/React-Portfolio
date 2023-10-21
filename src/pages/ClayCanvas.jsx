import furnittoImg from "../assets/furnitto.png";
import React from "react";
import ProjectLayout from "../components/ProjectLayout";

function ClayCanvas() {
  const stack = ["Tailwind", "ReactJs"];
  return (
    <ProjectLayout
      title={"Clay Canvas"}
      img={furnittoImg}
      summary={"A front end demo of a shopping site built with reactjs"}
      link={"https://e-commerce-sooty-zeta.vercel.app/"}
      code={"https://github.com/0xJariel/e-commerce"}
      techStack={stack}
    />
  );
}

export default ClayCanvas;
