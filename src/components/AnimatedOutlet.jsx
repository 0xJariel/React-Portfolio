import { AnimatePresence } from "framer-motion";
import React from "react";
import { Outlet, useLocation, useOutlet } from "react-router-dom";

function AnimatedOutlet() {
  const element = useOutlet();
  const location = useLocation();
  return (
    <AnimatePresence mode="await">
      {element &&
        React.cloneElement(element, {
          key: location.pathname,
          location: location,
        })}
    </AnimatePresence>
  );
}

export default AnimatedOutlet;
