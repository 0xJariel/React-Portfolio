import React from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

function Layout({ children, title }) {
  return (
    <motion.div
      // onHoverStart={{ y: "80px" }}
      // initial={{ y: "100%" }}
      // animate={{ y: "50px" }}
      className="absolute grid top-0 bottom-0 right-0 left-0 lg:left-72 bg-transparent w-screen h-screen text-black"
    >
      <div className="p-10 popup w-11/12 bg-gray-500  mt-52 rounded-t-3xl lg:mx-0 lg:w-9/12 mx-auto ">
        <div className="heading text-4xl flex justify-between">
          <div>{title}</div>
          <Link to={"/"}>X</Link>
        </div>
        {children}
      </div>
    </motion.div>
  );
}

export default Layout;
