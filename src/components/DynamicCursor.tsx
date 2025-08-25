"use client";

import { useEffect, useRef } from "react";

export default function DynamicCursor() {
  const dotRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const dot = document.createElement("div");
    const ring = document.createElement("div");
    dotRef.current = dot;
    ringRef.current = ring;

    Object.assign(dot.style, {
      position: "fixed",
      width: "6px",
      height: "6px",
      borderRadius: "50%",
      background: "#fbbf24",
      pointerEvents: "none",
      zIndex: "9999",
      transform: "translate(-50%, -50%)",
      mixBlendMode: "difference",
    });

    Object.assign(ring.style, {
      position: "fixed",
      width: "32px",
      height: "32px",
      borderRadius: "50%",
      border: "1px solid rgba(251,191,36,0.5)",
      pointerEvents: "none",
      zIndex: "9998",
      transform: "translate(-50%, -50%)",
      transition: "width .2s ease, height .2s ease, border-color .2s ease, transform .05s ease",
    });

    document.body.appendChild(ring);
    document.body.appendChild(dot);

    let ringX = 0;
    let ringY = 0;

    const onMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      if (dotRef.current) {
        dotRef.current.style.left = `${clientX}px`;
        dotRef.current.style.top = `${clientY}px`;
      }
      ringX += (clientX - ringX) * 0.15;
      ringY += (clientY - ringY) * 0.15;
      if (ringRef.current) {
        ringRef.current.style.left = `${ringX}px`;
        ringRef.current.style.top = `${ringY}px`;
      }
    };

    const onDown = () => {
      if (ringRef.current) {
        ringRef.current.style.width = "20px";
        ringRef.current.style.height = "20px";
        ringRef.current.style.borderColor = "rgba(251,191,36,0.8)";
      }
    };

    const onUp = () => {
      if (ringRef.current) {
        ringRef.current.style.width = "32px";
        ringRef.current.style.height = "32px";
        ringRef.current.style.borderColor = "rgba(251,191,36,0.5)";
      }
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      dot.remove();
      ring.remove();
    };
  }, []);

  return null;
}


