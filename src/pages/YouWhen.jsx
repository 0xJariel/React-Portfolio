import React from "react";
import ProjectLayout from "../components/ProjectLayout";
import youwhen2 from "../assets/youwhen2.png";

function YouWhen() {
  return (
    <ProjectLayout
      title={"YouWhen"}
      img={youwhen2}
      summary={
        "A simple youtube analyzer. Add upto 4 of your favorite youtubers to see what days of the week they post and what time of the day they upload their videos"
      }
      link={"https://tube-trends-eyz6fsi76-0xjariels-projects.vercel.app"}
      code={"https://github.com/0xJariel/e-commerce"}
    />
  );
}

export default YouWhen;
