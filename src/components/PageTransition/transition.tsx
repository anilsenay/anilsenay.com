import React, { useEffect, useState } from "react";
import { AnimatePresence, motion, Variants } from "framer-motion";

type Props = {
  path: string;
  children: JSX.Element;
};

const variants = {
  in: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.75,
      delay: 0,
    },
  },
  out: {
    opacity: 0,
    scale: 1,
    y: 40,
    transition: {
      duration: 0.75,
    },
  },
};

export default function PageTransition({ path, children }: Props) {
  if (path.includes("#")) {
    setTimeout(() => {
      scroll({ top: 2000, behavior: "smooth" });
    }, 30);
  }

  return (
    <motion.div
      key={path}
      variants={variants}
      animate="in"
      initial="out"
      exit="out"
    >
      {children}
    </motion.div>
  );
}
