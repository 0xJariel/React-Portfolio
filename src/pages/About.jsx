import React from "react";
import Layout from "../components/AnimatedLayout";
import { motion } from "framer-motion";
import { useLocation, useOutletContext } from "react-router-dom";

function About() {
  const title = "Let's work together!";

  return (
    <Layout title={title}>
      I'm a lifelong learner who kickstarted my coding journey with The Odin
      Project. Through it, I've mastered web development languages like HTML,
      CSS, and JavaScript. The project's structure gave me a strong foundation,
      but my insatiable curiosity drives me to constantly learn and innovate.
    </Layout>
  );
}

export default About;
