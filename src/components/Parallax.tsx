"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ReactNode, useRef } from "react";

type ParallaxProps = {
  children: ReactNode;
  strength?: number; // positive moves slower than scroll, negative moves faster
  className?: string;
};

export default function Parallax({ children, strength = 0.3, className }: ParallaxProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [strength * 50, strength * -50]);

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
}


