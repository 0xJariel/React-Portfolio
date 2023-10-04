import React from "react";
import ProjectLayout from "../components/ProjectLayout";
import pomodoroimg from "../assets/pomodorobeats.png";

function YouWhen() {
  return (
    <ProjectLayout
      title={"Pomodoro Beats"}
      summary={
        "A chrome extension that is both a pomodoro timer and a spotify player. It offers some of the best study music playlists and also lets you choose from any of your own."
      }
      img={pomodoroimg}
      link={""}
      code={"https://github.com/0xJariel/pomodoro"}
    />
  );
}

export default YouWhen;
