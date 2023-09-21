import React from "react";
import Layout from "../components/Layout";
import AnimatedPage from "../components/AnimatedPage";

function About() {
  const title = "About";
  return (
    <AnimatedPage>
      <Layout title={title}></Layout>
    </AnimatedPage>
  );
}

export default About;
