import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import ClayCanvas from "./pages/ClayCanvas.jsx";
import PomodoroBeats from "./pages/PomodoroBeats.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      // { index: true, element: <Layout /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "clay-canvas", element: <ClayCanvas /> },
      { path: "pomodoro-beats", element: <PomodoroBeats /> },
    ],
    errorElement: <Error />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
