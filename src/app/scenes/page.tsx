"use client";

import LenisProvider from "@/components/LenisProvider";
import Scene from "@/components/Scene";
import Parallax from "@/components/Parallax";
import DynamicCursor from "@/components/DynamicCursor";
import { motion } from "framer-motion";

export default function ScenesDemo() {
  return (
    <LenisProvider>
      <DynamicCursor />
      <main className="w-full min-h-screen bg-black">
        {/* HOME */}
        <Scene id="home" background="#0b0b0b">
          <motion.p
            className="font-roboto-mono text-xl max-w-xl"
            style={{ color: "#DBDB99" }}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Product designer crafting minimal, expressive interfaces with motion.
          </motion.p>
        </Scene>

        {/* ABOUT */}
        <Scene id="about" title="About" background="#0c0c0c">
          <Parallax strength={0.4}>
            <motion.div
              className="grid gap-6 md:grid-cols-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="font-roboto-mono text-lg text-gray-300">
                I design flows, systems, and interactions that feel inevitable —
                clean typography, confident spacing, and purposeful motion.
              </p>
              <p className="font-roboto-mono text-lg text-gray-400">
                Currently exploring atmospheric portfolios with scroll‑choreographed
                scenes and subtle micro‑interactions.
              </p>
            </motion.div>
          </Parallax>
        </Scene>

        {/* PROJECTS */}
        <Scene id="projects" title="Projects" background="#0e0e0e">
          <div className="grid gap-6 md:grid-cols-3">
            {["Wanderly", "DTTV", "Profile Reminder"].map((name, i) => (
              <motion.a
                key={name}
                href="#"
                className="group relative overflow-hidden rounded-2xl border border-gray-700 bg-black/20 p-6 hover:border-yellow-400 transition-colors duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-2xl font-anton" style={{ color: "#DBDB99" }}>{name}</div>
                <div className="mt-2 font-roboto-mono text-sm text-gray-400">Case study →</div>
                <div className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-yellow-400/10 to-transparent" />
              </motion.a>
            ))}
          </div>
        </Scene>

        {/* CONTACT */}
        <Scene id="contact" title="Contact" background="#101010">
          <motion.div
            className="flex items-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <a href="mailto:hello@abhishekmaddur.com" className="px-6 py-3 rounded-md bg-yellow-500 text-black font-roboto-mono hover:bg-yellow-400 transition-colors">
              Email me
            </a>
            <a href="#" className="text-gray-400 hover:text-yellow-400 font-roboto-mono transition-colors">
              LinkedIn
            </a>
            <a href="#" className="text-gray-400 hover:text-yellow-400 font-roboto-mono transition-colors">
              Twitter
            </a>
          </motion.div>
        </Scene>
      </main>
    </LenisProvider>
  );
}


