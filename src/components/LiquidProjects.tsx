"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

type Project = {
  id: string;
  name: string;
  role: string;
  duration: string;
  description?: string;
  ctaLabel?: string;
  ctaHref?: string;
};

const DEFAULT_PROJECTS: Project[] = [
  {
    id: "wanderly",
    name: "Wanderly",
    role: "Product Design",
    duration: "24 Jul 2025",
    description: "Travel exploration concepts with expressive typography and micro‑interactions.",
    ctaLabel: "View case study",
    ctaHref: "/projects/wanderly",
  },
  {
    id: "dttv",
    name: "DTTV",
    role: "Personal Tool",
    duration: "12–14 Aug 2025",
    description: "Tracks website visits and total time spent to help curb impulsive, repetitive social media checks.",
    ctaLabel: "View case study",
    ctaHref: "/projects/dttv",
  },
  {
    id: "profile-reminder",
    name: "Profile Reminder",
    role: "Personal Tool",
    duration: "11 Aug 2025",
    description: "Twitter relationship CRM: capture notes, qualify genuine people, and plan follow‑ups or cold DMs.",
    ctaLabel: "View case study",
    ctaHref: "/projects/profile-reminder",
  },
];

type FloatingBody = {
  x: number; // px
  y: number; // px
  vx: number; // px/s
  vy: number; // px/s
  el: HTMLDivElement | null;
};

export default function LiquidProjects({ projects = DEFAULT_PROJECTS }: { projects?: Project[] }) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const bodiesRef = useRef<Record<string, FloatingBody>>({});
  const mouseRef = useRef<{ x: number; y: number; t: number } | null>(null);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [ripple, setRipple] = useState<{ x: number; y: number; key: number } | null>(null);
  const [idle, setIdle] = useState<boolean>(false);

  // Refs map for project cards (no hooks inside loops)
  const cardRefs = useRef<Record<string, HTMLDivElement | null>>({});

  // Idle detector
  useEffect(() => {
    let idleTimer: number | undefined;
    const reset = () => {
      setIdle(false);
      if (idleTimer) window.clearTimeout(idleTimer);
      idleTimer = window.setTimeout(() => setIdle(true), 10000);
    };
    window.addEventListener("mousemove", reset);
    window.addEventListener("keydown", reset);
    reset();
    return () => {
      window.removeEventListener("mousemove", reset);
      window.removeEventListener("keydown", reset);
      if (idleTimer) window.clearTimeout(idleTimer);
    };
  }, []);

  // Cursor sampling (for gentle fluid push)
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY, t: performance.now() };
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  // Physics loop
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const bounds = () => {
      const rect = container.getBoundingClientRect();
      return { w: rect.width, h: rect.height };
    };

    // Initialize bodies
    const { w, h } = bounds();
    projects.forEach((p, i) => {
      const angle = (i / projects.length) * Math.PI * 2;
      const speed = 12 + Math.random() * 18; // px/s
      bodiesRef.current[p.id] = {
        x: (0.25 + Math.random() * 0.5) * w,
        y: (0.25 + Math.random() * 0.5) * h,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        el: cardRefs.current[p.id] ?? null,
      };
    });

    let last = performance.now();
    let raf = 0;
    const tick = () => {
      const now = performance.now();
      const dt = Math.min(0.032, (now - last) / 1000); // cap dt
      last = now;

      const { w: width, h: height } = bounds();
      const mouse = mouseRef.current;

      for (const p of projects) {
        const body = bodiesRef.current[p.id];
        if (!body) continue;

        // Gentle buoyancy drift
        const buoyancy = idle ? 6 : 18;
        body.vy += Math.sin(now / 1500 + body.x * 0.002) * (buoyancy * dt * 0.1);
        body.vx += Math.cos(now / 1700 + body.y * 0.002) * (buoyancy * dt * 0.1);

        // Cursor fluid push
        if (mouse) {
          const dx = body.x - mouse.x;
          const dy = body.y - mouse.y;
          const dist2 = Math.max(80, dx * dx + dy * dy);
          const force = 9000 / dist2; // inverse-square
          body.vx += (dx / Math.sqrt(dist2)) * force * dt * 0.2;
          body.vy += (dy / Math.sqrt(dist2)) * force * dt * 0.2;
        }

        // Damping
        const damping = activeId === p.id ? 0.90 : 0.96;
        body.vx *= damping;
        body.vy *= damping;

        // Integrate
        body.x += body.vx * dt;
        body.y += body.vy * dt;

        // Soft bounds wrap
        if (body.x < -40) body.x = width + 40;
        if (body.x > width + 40) body.x = -40;
        if (body.y < -40) body.y = height + 40;
        if (body.y > height + 40) body.y = -40;

        // Apply transform
        if (body.el) body.el.style.transform = `translate3d(${body.x}px, ${body.y}px, 0)`;
      }

      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [projects, activeId]);

  // Play a short liquid-like click sound via WebAudio
  const playRippleSound = () => {
    try {
      const AudioCtx = (window as unknown as { AudioContext?: typeof AudioContext; webkitAudioContext?: typeof AudioContext }).AudioContext || (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const duration = 0.25;
      const sampleRate = ctx.sampleRate;
      const buffer = ctx.createBuffer(1, sampleRate * duration, sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < data.length; i++) {
        const t = i / sampleRate;
        // filtered noise burst
        data[i] = (Math.random() * 2 - 1) * Math.exp(-8 * t) * (0.5 + 0.5 * Math.sin(2 * Math.PI * 400 * t));
      }
      const src = ctx.createBufferSource();
      const gain = ctx.createGain();
      gain.gain.value = 0.15;
      src.buffer = buffer;
      src.connect(gain);
      gain.connect(ctx.destination);
      src.start();
    } catch {}
  };

  const onCardEnter = (id: string) => setActiveId(id);
  const onCardLeave = () => setActiveId(null);
  const onCardClick = (e: React.MouseEvent, id: string) => {
    setActiveId(id);
    setRipple({ x: e.clientX, y: e.clientY, key: Date.now() });
    playRippleSound();
  };

  return (
    <div ref={containerRef} className="relative w-full min-h-[80vh] overflow-hidden rounded-3xl">
      {/* Ambient morphing background */}
      <motion.div
        aria-hidden
        className="absolute inset-0 -z-10"
        initial={{ opacity: 0.7 }}
        animate={{ opacity: 0.9, backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        style={{
          backgroundImage:
            "radial-gradient(60% 60% at 20% 30%, rgba(59,130,246,0.15), transparent)," +
            "radial-gradient(50% 50% at 80% 70%, rgba(236,72,153,0.12), transparent)," +
            "radial-gradient(40% 40% at 50% 50%, rgba(16,185,129,0.10), transparent)",
          backgroundSize: "200% 200%",
          filter: "blur(40px)",
        }}
      />

      {/* Cursor ripple visualization */}
      {ripple && (
        <motion.span
          key={ripple.key}
          className="pointer-events-none absolute rounded-full"
          initial={{ opacity: 0.3, scale: 0, x: ripple.x, y: ripple.y }}
          animate={{ opacity: 0, scale: 12, x: ripple.x, y: ripple.y }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          style={{ width: 12, height: 12, background: "radial-gradient(circle, rgba(251,191,36,0.35), rgba(251,191,36,0) 70%)" }}
        />
      )}

      {/* Floating project cards */}
      {projects.map((p) => (
        <motion.div
          key={p.id}
          ref={(el) => {
            cardRefs.current[p.id] = el;
            if (bodiesRef.current[p.id]) bodiesRef.current[p.id].el = el;
          }}
          onMouseEnter={() => onCardEnter(p.id)}
          onMouseLeave={onCardLeave}
          onClick={(e) => onCardClick(e, p.id)}
          className="absolute -translate-x-1/2 -translate-y-1/2 select-none cursor-pointer"
          initial={false}
          animate={{
            scale: activeId === p.id ? 1.1 : 1,
            filter: activeId === p.id ? "brightness(1.1) saturate(1.1)" : "brightness(0.95)",
          }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
        >
          <div className="relative backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl px-5 py-4 shadow-2xl">
            {/* reflective highlight */}
            <span className="pointer-events-none absolute -inset-0.5 rounded-2xl bg-gradient-to-br from-white/10 to-transparent opacity-40" />
            <div className="relative z-10 space-y-1">
              <h3
                className="text-xl md:text-2xl font-anton"
                style={{
                  color: "#DBDB99",
                  background: "linear-gradient(110deg, #DBDB99 0%, #e9e9b0 40%, #b8b876 60%, #DBDB99 100%)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {p.name}
              </h3>
              <div className="flex items-center gap-3 text-xs font-roboto-mono text-gray-300/80">
                <span className="animate-pulse">{p.role}</span>
                <span className="opacity-50">•</span>
                <span className="opacity-80">{p.duration}</span>
              </div>
            </div>
          </div>
        </motion.div>
      ))}

      {/* Fullscreen dive view */}
      {activeId && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setActiveId(null)}
        >
          <motion.div
            className="relative max-w-3xl w-[90%] rounded-3xl border border-white/10 bg-black/60 p-8"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 22 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
            {(() => {
              const proj = projects.find((p) => p.id === activeId);
              if (!proj) return null;
              return (
                <div className="space-y-4">
                  <h3 className="text-3xl md:text-4xl font-anton" style={{ color: "#DBDB99" }}>
                    {proj.name}
                  </h3>
                  <p className="text-gray-300 font-roboto-mono">
                    {proj.description || "Case study coming soon."}
                  </p>
                  {(proj.ctaHref || proj.ctaLabel) && (
                    <div>
                      <a
                        href={proj.ctaHref || "#"}
                        className="inline-flex items-center gap-2 px-5 py-2 rounded-md bg-yellow-500 text-black font-roboto-mono hover:bg-yellow-400 transition-colors"
                      >
                        {proj.ctaLabel || "Learn more"}
                      </a>
                    </div>
                  )}
                </div>
              );
            })()}
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}


