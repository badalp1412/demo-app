"use client";

import { useEffect } from "react";

/**
 * Adds ".active" to any element with class ".reveal" when:
 * - page loads (small delay), and
 * - element comes into view on scroll (like your original 2.html script).
 */
export default function useRevealOnScroll() {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll(".reveal"));
    if (!elements.length) return;

    const revealPoint = 150;

    const onScroll = () => {
      const windowHeight = window.innerHeight;

      elements.forEach((el) => {
        const revealTop = el.getBoundingClientRect().top;
        if (revealTop < windowHeight - revealPoint) {
          el.classList.add("active");
        }
      });
    };

    const timer = window.setTimeout(() => {
      elements.forEach((el) => el.classList.add("active"));
    }, 200);

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    onScroll();

    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);
}
