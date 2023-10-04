import furnittoImg from "../assets/furnitto.png";
import React from "react";
import ProjectLayout from "../components/ProjectLayout";

function ClayCanvas() {
  return (
    <ProjectLayout
      title={"Clay Canvas"}
      img={furnittoImg}
      summary={
        "A React front end shop with modern routing for selling my future home made pottery collection. The site features a modern shopping cart and dynamic description pages"
      }
      link={"https://e-commerce-bps1tepqi-0xjariels-projects.vercel.app/"}
      code={"https://github.com/0xJariel/e-commerce"}
    />
  );
}

export default ClayCanvas;
