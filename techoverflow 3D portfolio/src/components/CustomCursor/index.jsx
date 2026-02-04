import React, { useState, useEffect } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

// Styles
import "./style.css";

// Icons
import { RiArrowRightLine } from "react-icons/ri";

// Store
import { useStore } from "../../store/store";

const CustomCursor = () => {
  const cursorType = useStore((store) => store.cursorType);

  // Motion values for smooth mouse tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Spring physics for smooth movement
  const springConfig = { damping: 50, stiffness: 1000, mass: 1 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const onMouseMove = (e) => {
      const { clientX: x, clientY: y } = e;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener("mousemove", onMouseMove);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, [mouseX, mouseY]);

  const variants = {
    default: {
      width: 32,
      height: 32,
      backgroundColor: "rgba(255, 255, 255, 0.2)",
      borderColor: "rgba(255, 255, 255, 0.4)",
    },
    hover: {
      width: 64,
      height: 64,
      backgroundColor: "rgba(0, 243, 255, 0.1)",
      borderColor: "#00f3ff",
      mixBlendMode: "screen",
    },
    custom: {
      width: 48,
      height: 48,
      backgroundColor: "rgba(189, 0, 255, 0.1)",
      borderColor: "#bd00ff",
    },
  };

  return (
    <motion.div
      className={`cursor ${cursorType}`}
      style={{
        left: cursorX,
        top: cursorY,
        x: "-50%",
        y: "-50%",
      }}
      variants={variants}
      animate={cursorType === "pointer" ? "default" : cursorType}
      transition={{ type: "spring", stiffness: 500, damping: 28 }}
    >
      <div className="cursor-icon">
        <RiArrowRightLine />
      </div>
    </motion.div>
  );
};

export default CustomCursor;
