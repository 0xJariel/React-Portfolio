import React from "react";
import Layout from "../components/AnimatedLayout";
import { motion } from "framer-motion";
import { useLocation, useOutletContext } from "react-router-dom";

function About() {
  const title = "Welcome!";

  return (
    <Layout title={title}>
      <div className="grid md:p-16 gap-8 text-2xl font-light sm:p-2">
        <p className="">
          I'm Jariel, a full-stack developer with a passion for creating web
          applications using JavaScript and Node.js. Welcome to my corner of the
          internet!
        </p>
        <p className="">
          My web development journey began with curiosity and determination. The
          Odin Project was my guide, teaching HTML, CSS, Javascript, React and
          Node.js with hands-on projects and a supportive community. I
          specialize in full-stack web development, creating seamless user
          experiences.
        </p>
        <p className="text-2xl">
          My tech stack includes:
          <ul>
            <li> Front-End: HTML, CSS, JavaScript, React</li>
            <li>Back-End: Node.js, Express.js, Next.js</li>
            <li>Database: MongoDB, MySQL</li>
            <li>Version Control: Git</li>
            <li>Deployment: AWS, Netlify, Cloudflare Pages</li>
          </ul>
        </p>
        <p>
          I'm passionate about solving real-world problems through technology.
          Whether it's building a web app that simplifies daily tasks or
          creating a platform that connects people, I believe that well-crafted
          software can optimize and improve people’s lives.
        </p>
      </div>
    </Layout>
  );
}

export default About;
