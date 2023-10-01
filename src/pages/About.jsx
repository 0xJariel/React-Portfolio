import React from "react";
import Layout from "../components/AnimatedLayout";
import { motion } from "framer-motion";
import { useLocation, useOutletContext } from "react-router-dom";

function About() {
  const title = "Hello!";

  return (
    <Layout title={title}>
      <div className="grid p-14 gap-4 text-2xl font-serif">
        <p className="">
          I'm Jariel, a full-stack developer with a passion for creating web
          applications using JavaScript and Node.js. Welcome to my corner of the
          internet!
        </p>
        <p className="">
          My journey into the world of web development started with a simple
          curiosity and a determination to learn. The Odin Project became my
          virtual mentor, guiding me through the intricacies of web development,
          from the basics of HTML and CSS to the dynamic world of JavaScript. It
          provided me with hands-on projects, coding challenges, and a
          supportive community that helped me grow as a developer. My focus as a
          developer is on full-stack web development. I enjoy building both the
          front-end and back-end components of web applications to create
          seamless user experiences.
        </p>
        <p className="">
          My tech stack includes:
          <ul>
            <li> Front-End: HTML, CSS, JavaScript, React</li>
            <li>Back-End: Node.js, Express.js,Next.js</li>
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
