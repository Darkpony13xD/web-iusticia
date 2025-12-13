import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

type RevealProps = {
  children: React.ReactNode;
  width?: string; // default: "100%"
  delay?: number;
  className?: string;
};

export const Reveal: React.FC<RevealProps> = ({
  children,
  width = "100%",
  delay = 0,
  className = "",
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px -10% 0px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) controls.start("visible");
  }, [isInView, controls]);

  return (
    <div ref={ref} style={{ width, display: "block" }} className={className}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 18 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.6, ease: "easeOut", delay }}
        style={{ width: "100%" }}
      >
        {children}
      </motion.div>
    </div>
  );
};
