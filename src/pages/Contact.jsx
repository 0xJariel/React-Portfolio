import React from "react";
import Layout from "../components/Layout";
import AnimatedPage from "../components/AnimatedPage";

function Contact() {
  const title = "Contact me!";
  return (
    <AnimatedPage>
      <Layout title={title}></Layout>
    </AnimatedPage>
  );
}

export default Contact;
