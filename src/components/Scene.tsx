"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ReactNode, useRef } from "react";

type SceneProps = {
  id: string;
  title?: string;
  background?: string;
  children?: ReactNode;
};

export default function Scene({ id, title, background = "#0b0b0b", children }: SceneProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section id={id} className="min-h-screen w-full flex items-center justify-center relative" style={{ background }}>
      <motion.div ref={ref} style={{ opacity }} className="w-full h-full absolute inset-0" />
      <div className="relative z-10 w-full max-w-6xl px-6 py-20">
        {title ? (
          <motion.h2
            className="text-5xl lg:text-7xl font-anton mb-10 tracking-tight"
            style={{ color: "#DBDB99" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {title}
          </motion.h2>
        ) : null}
        <motion.div style={{ y }} className="will-change-transform">
          {children}
        </motion.div>
      </div>
    </section>
  );
}


