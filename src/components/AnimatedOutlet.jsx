import { AnimatePresence } from "framer-motion";
import React from "react";
import { Outlet, useLocation } from "react-router-dom";

function AnimatedOutlet() {
  const location = useLocation();
  return (
    <AnimatePresence mode="await">
      <Outlet key={location.pathname} location={location} />
    </AnimatePresence>
  );
}

export default AnimatedOutlet;
