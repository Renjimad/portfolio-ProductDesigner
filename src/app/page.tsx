'use client';

import Scene from "@/components/Scene";
import { motion } from "framer-motion";
import { useCallback, useState } from "react";
import { useScrollSpy } from "@/hooks/useScrollSpy";
// Local types to avoid 'any'
type LenisScrollOptions = {
  offset?: number;
  duration?: number;
  easing?: (t: number) => number;
};
type LenisController = { scrollTo: (t: HTMLElement | string, opts?: LenisScrollOptions) => void };
type SimpleProject = {
  id: string;
  name: string;
  role: string;
  duration: string;
  href: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
};
// Simple projects data for the minimal grid
const simpleProjects: SimpleProject[] = [
  { id: "wanderly", name: "Wanderly", role: "Product Design", duration: "24 Jul 2025", href: "/projects/wanderly", description: "Travel exploration concepts with expressive typography and micro‑interactions.", ctaLabel: "View case study", ctaHref: "/projects/wanderly" },
  { id: "dttv", name: "DTTV", role: "Personal Tool", duration: "12–14 Aug 2025", href: "/projects/dttv", description: "Tracks website visits and total time spent to help curb impulsive, repetitive social media checks.", ctaLabel: "View case study", ctaHref: "/projects/dttv" },
  { id: "profile-reminder", name: "Profile Reminder", role: "Personal Tool", duration: "11 Aug 2025", href: "/projects/profile-reminder", description: "Twitter relationship CRM: capture notes, qualify genuine people, and plan follow‑ups or cold DMs.", ctaLabel: "View case study", ctaHref: "/projects/profile-reminder" },
];

export default function Home() {
  const sectionIds = ["home", "about", "projects", "contact"];
  const activeId = useScrollSpy(sectionIds);
  const [activeProjectId, setActiveProjectId] = useState<string | null>(null);

  const scrollTo = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const lenis = (globalThis as unknown as { __lenis?: LenisController }).__lenis;
    if (lenis && typeof lenis.scrollTo === 'function') {
      lenis.scrollTo(el, { offset: -10, duration: 1.1, easing: (t: number) => 1 - Math.pow(1 - t, 3) });
    } else {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  return (
    <main className="w-full min-h-screen bg-black pt-16">
      {/* Top navigation bar */}
      <header className="fixed top-0 left-0 right-0 z-50">
        <nav aria-label="Primary" className="w-full px-4 md:px-8 py-3 flex items-center justify-between">
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); scrollTo('home'); }}
            className="text-sm md:text-base font-anton tracking-wide"
                style={{ color: '#DBDB99' }}
              >
            Abhishek Maddur
          </a>
          <div className="flex items-center gap-1 md:gap-2">
            {sectionIds.map((id) => (
              <a
                key={`top-${id}`}
                href={`#${id}`}
                onClick={(e) => { e.preventDefault(); scrollTo(id); }}
                className={`px-3 py-2 rounded-md text-xs md:text-sm font-roboto-mono transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400/40 ${
                  activeId === id ? 'text-yellow-400 bg-yellow-400/10' : 'text-gray-300 hover:text-gray-100 hover:bg-white/5'
                }`}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            ))}
          </div>
        </nav>
      </header>

      {/* Sticky sidebar nav */}
      <aside className="hidden md:flex fixed left-0 top-0 h-screen w-28 items-center justify-center">
        <nav aria-label="Section" className="flex flex-col gap-5 -ml-1">
          {sectionIds.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={(e) => { e.preventDefault(); scrollTo(id); }}
              className={`text-left text-sm font-roboto-mono transition-colors px-3 py-1 rounded-r-full ${
                activeId === id ? 'text-yellow-400 bg-yellow-400/10' : 'text-gray-400 hover:text-gray-200'
              }`}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          ))}
        </nav>
      </aside>

      <Scene id="home" background="#0b0b0b">
            <motion.div
          className="min-h-[70vh] flex flex-col items-center justify-center text-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
                viewport={{ once: true }}
              >
          <h1 className="text-5xl md:text-7xl font-anton" style={{ color: '#DBDB99' }}>Product Designer</h1>
          <p className="text-base md:text-lg font-roboto-mono text-gray-400">Minimal, user exp/centered Design</p>
        </motion.div>
      </Scene>

      <Scene id="about" title="About" background="#0d0d0d">
                <motion.div
          className="min-h-[70vh] flex items-center justify-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
                  viewport={{ once: true }}
                >
          <div className="text-base md:text-lg font-roboto-mono text-center max-w-3xl text-gray-300 space-y-4">
            <p>
              As a Product Designer based in Pune, I turn complex problems into elegant, user-focused solutions. My journey began with a deep dive into AI technology, but I discovered my true calling lies in designing products that make technology more human and accessible.
            </p>
            <p>
              <b>My Approach:</b> I believe great design happens at the intersection of user needs, technical possibilities, and creative vision. Using AI tools for research and ideation, I uncover insights that inform every design decision. Then, through &quot;vibe coding,&quot; I rapidly prototype and test ideas, ensuring concepts work in reality—not just in theory.
            </p>
            <p>
              <b>Why I Design:</b> Every product should feel intuitive, purposeful, and delightful. I&#39;m passionate about creating experiences that users don&#39;t just tolerate, but genuinely enjoy. Whether it&#39;s helping people discover new travel destinations, build meaningful social connections, or develop healthier digital habits, I focus on solutions that make people&#39;s lives better in tangible ways.
            </p>
            <p>
              Currently seeking opportunities to collaborate with teams who value innovation, user-centered thinking, and aren&#39;t afraid to try something different.
            </p>
          </div>
                </motion.div>
      </Scene>

      <Scene id="projects" title="Projects" background="#0f0f0f">
        <div className="mx-auto w-full max-w-6xl px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {simpleProjects.map((p, i) => (
              <motion.button
                key={p.id}
                onClick={() => setActiveProjectId(p.id)}
                className="text-left group relative rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur hover:border-yellow-400/50 transition-colors"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                viewport={{ once: true }}
              >
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-yellow-400/10 to-transparent" />
                <div className="relative z-10">
                  <h3 className="text-xl font-anton mb-1" style={{ color: '#DBDB99' }}>{p.name}</h3>
                  <p className="text-xs font-roboto-mono text-gray-400">{p.role} • {p.duration}</p>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </Scene>

      {/* Simple preview modal */}
      {activeProjectId && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setActiveProjectId(null)}
        >
          <motion.div
            className="relative max-w-lg w-[90%] rounded-2xl border border-white/10 bg-black/60 p-6"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 180, damping: 20 }}
            onClick={(e) => e.stopPropagation()}
          >
            {(() => {
              const proj = simpleProjects.find((sp) => sp.id === activeProjectId);
              if (!proj) return null;
              return (
                <div className="space-y-3">
                  <h3 className="text-2xl md:text-3xl font-anton" style={{ color: '#DBDB99' }}>{proj.name}</h3>
                  <p className="text-sm font-roboto-mono text-gray-300">{proj.description || "Case study coming soon."}</p>
                  <div className="flex gap-3 pt-2">
                    <a
                      href={proj.ctaHref || '#'}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-yellow-500 text-black font-roboto-mono hover:bg-yellow-400 transition-colors"
                    >
                      {proj.ctaLabel || "Learn more"}
                    </a>
                    <button
                      onClick={() => setActiveProjectId(null)}
                      className="px-4 py-2 rounded-md border border-white/15 text-gray-200 font-roboto-mono hover:bg-white/5 transition-colors"
                    >
                      Close
                    </button>
                  </div>
                </div>
              )
            })()}
          </motion.div>
        </motion.div>
      )}
                
      <Scene id="contact" title="Contact" background="#111111">
                <motion.div
          className="min-h-[70vh] flex flex-col items-center justify-center gap-3"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
                  viewport={{ once: true }}
                >
          <a
            href="mailto:hello@abhishekmaddur.com"
            className="px-6 py-3 rounded-md bg-yellow-500 text-black font-roboto-mono hover:bg-yellow-400 transition-colors"
          >
            Email me
          </a>
          <a
            href="https://x.com/Abhi_Aata"
            className="text-sm text-gray-400 hover:text-yellow-400 font-roboto-mono transition-colors"
            rel="me noopener"
          >
            DM me — @Abhi_Aata
          </a>
                </motion.div>
      </Scene>
    </main>
  );
}
