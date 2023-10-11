import React from "react";
import ProjectLayout from "../components/ProjectLayout";
import youwhen2 from "../assets/youwhen2.png";
import { SiVite } from "react-icons/si";

function YouWhen() {
  const stack = ["React", "Tailwind"];
  return (
    <ProjectLayout
      title={"YouWhen"}
      img={youwhen2}
      summary={
        "A simple youtube analyzer. Add up to 4 of your favorite Youtubers to see what days of the week they post and what time of the day they upload their videos"
      }
      link={"https://tube-trends-eyz6fsi76-0xjariels-projects.vercel.app"}
      code={"https://github.com/0xJariel/tube-trends"}
      techStack={stack}
    />
  );
}

export default YouWhen;
