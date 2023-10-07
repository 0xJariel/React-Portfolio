import React from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { BiX } from "react-icons/bi";

function Layout({ children, title }) {
  return (
    <motion.div
      initial={{ y: 500, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
      exit={{ x: 100, opacity: 0 }}
      className="absolute grid top-0 bottom-0 right-0 md:left-52 text-white z-50 "
    >
      <div className="p-10 popup bg-stone-800  mt-52 rounded-3xl mx-auto md:w-10/12 min-h-4/6">
        <div className="heading text-4xl flex justify-between">
          <div className="font-serif">{title}</div>
          <Link to={"/"}>
            <BiX />
          </Link>
        </div>
        {children}
      </div>
    </motion.div>
  );
}

export default Layout;
