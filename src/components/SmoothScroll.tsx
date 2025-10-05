"use client";

import { useEffect, useRef, ReactNode } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface SmoothScrollProps {
  children: ReactNode;
  onScroll?: (scroll: number) => void;
}

const SmoothScroll: React.FC<SmoothScrollProps> = ({ children, onScroll }) => {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    lenisRef.current = lenis;

    // Connect Lenis to GSAP ScrollTrigger
    lenis.on("scroll", (e) => {
      // Update ScrollTrigger
      ScrollTrigger.update();

      // Call custom onScroll callback if provided
      if (onScroll) {
        onScroll(e.scroll);
      }
    });

    // GSAP ticker integration for smooth animation loop
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    // Clean up function
    return () => {
      gsap.ticker.remove((time) => {
        lenis.raf(time * 1000);
      });
      lenis.destroy();
    };
  }, [onScroll]);

  // Expose methods for external use if needed (currently unused but part of component API)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const scrollTo = (target: string | number, options?: object) => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(target, options);
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const getScroll = () => {
    return lenisRef.current ? lenisRef.current.scroll : 0;
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const stop = () => {
    if (lenisRef.current) {
      lenisRef.current.stop();
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const start = () => {
    if (lenisRef.current) {
      lenisRef.current.start();
    }
  };

  return <>{children}</>;
};

export default SmoothScroll;
