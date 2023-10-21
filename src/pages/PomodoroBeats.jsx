import React from "react";
import ProjectLayout from "../components/ProjectLayout";
import pomodoroimg from "../assets/pomodorobeats.png";

function YouWhen() {
  const stack = ["NodeJs", "ExpressJs", "React", "Styled Components"];
  return (
    <ProjectLayout
      title={"Pomodoro Beats"}
      summary={
        "A Pomodoro timer that can play music from several predefined playlists and any in your own spotify account"
      }
      img={pomodoroimg}
      link={""}
      code={"https://github.com/0xJariel/pomodoro"}
      techStack={stack}
    />
  );
}

export default YouWhen;
