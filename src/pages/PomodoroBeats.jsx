import React from "react";
import ProjectLayout from "../components/ProjectLayout";
import pomodoroimg from "../assets/pomodorobeats.png";

function YouWhen() {
  const stack = ["NodeJs", "ExpressJs", "React", "Styled Components"];
  return (
    <ProjectLayout
      title={"Pomodoro Beats"}
      summary={
        "A full stack application converted into a chrome extension that is both a pomodoro timer and a spotify player. It offers some of the best study-music playlists and also lets you choose from any of your own."
      }
      img={pomodoroimg}
      link={""}
      code={"https://github.com/0xJariel/pomodoro"}
      techStack={stack}
    />
  );
}

export default YouWhen;
