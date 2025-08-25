"use client";

import { useEffect, useRef } from "react";

type Props = {
  children: React.ReactNode;
};

type LenisInstance = {
  raf: (time: number) => void;
  destroy: () => void;
};

export default function LenisProvider({ children }: Props) {
  const lenisRef = useRef<LenisInstance | null>(null);

  useEffect(() => {
    let rafId = 0;
    let destroyed = false;

    (async () => {
      const { default: Lenis } = await import("lenis");
      const lenis = new Lenis({
        duration: 1.1,
        easing: (t: number) => 1 - Math.pow(1 - t, 3),
        smoothWheel: true,
        touchMultiplier: 2,
        wheelMultiplier: 1,
      });
      lenisRef.current = lenis;

      // Expose for smooth anchor scrolling from anywhere
      try {
        (globalThis as unknown as { __lenis?: LenisInstance }).__lenis = lenis;
      } catch {}

      const raf = (time: number) => {
        if (destroyed) return;
        lenis.raf(time);
        rafId = requestAnimationFrame(raf);
      };
      rafId = requestAnimationFrame(raf);
    })();

    return () => {
      destroyed = true;
      if (rafId) cancelAnimationFrame(rafId);
      if (lenisRef.current) {
        try { lenisRef.current.destroy(); } catch {}
        lenisRef.current = null;
      }
      try {
        (globalThis as unknown as { __lenis?: LenisInstance }).__lenis = undefined;
      } catch {}
    };
  }, []);

  return children as React.ReactElement;
}


