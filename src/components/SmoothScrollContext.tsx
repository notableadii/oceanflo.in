"use client";

import {
  createContext,
  useContext,
  useRef,
  useEffect,
  useState,
  useCallback,
  ReactNode,
} from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface SmoothScrollContextType {
  lenis: Lenis | null;
  scrollTo: (target: string | number, options?: object) => void;
  getScroll: () => number;
  stop: () => void;
  start: () => void;
}

const SmoothScrollContext = createContext<SmoothScrollContextType>({
  lenis: null,
  scrollTo: () => {},
  getScroll: () => 0,
  stop: () => {},
  start: () => {},
});

export const useSmoothScroll = () => useContext(SmoothScrollContext);

interface SmoothScrollProviderProps {
  children: ReactNode;
  onScroll?: (scroll: number) => void;
}

export const SmoothScrollProvider: React.FC<SmoothScrollProviderProps> = ({
  children,
  onScroll,
}) => {
  const lenisRef = useRef<Lenis | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Function to check if screen is mobile (<= 440px)
  const checkIsMobile = () => {
    return window.innerWidth <= 440;
  };

  // Initialize or destroy Lenis based on screen size
  const initializeLenis = useCallback(() => {
    if (lenisRef.current) {
      // Clean up existing instance
      gsap.ticker.remove((time) => {
        lenisRef.current?.raf(time * 1000);
      });
      lenisRef.current.destroy();
      lenisRef.current = null;
    }

    const mobile = checkIsMobile();
    setIsMobile(mobile);

    if (!mobile) {
      // Initialize Lenis only on desktop
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
    }
  }, [onScroll]);

  useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Initialize Lenis based on screen size
    initializeLenis();

    // Handle resize events
    const handleResize = () => {
      const mobile = checkIsMobile();
      if (mobile !== isMobile) {
        initializeLenis();
      }
    };

    window.addEventListener("resize", handleResize);

    // Clean up function
    return () => {
      window.removeEventListener("resize", handleResize);

      if (lenisRef.current) {
        gsap.ticker.remove((time) => {
          lenisRef.current?.raf(time * 1000);
        });
        lenisRef.current.destroy();
        lenisRef.current = null;
      }
    };
  }, [initializeLenis, isMobile]);

  const contextValue: SmoothScrollContextType = {
    lenis: lenisRef.current,
    scrollTo: (target: string | number, options?: object) => {
      if (lenisRef.current) {
        lenisRef.current.scrollTo(target, options);
      } else if (typeof target === "string") {
        // Fallback to native scroll for mobile
        const element = document.querySelector(target);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      } else if (typeof target === "number") {
        // Fallback to native scroll for mobile
        window.scrollTo({ top: target, behavior: "smooth" });
      }
    },
    getScroll: () => {
      if (lenisRef.current) {
        return lenisRef.current.scroll;
      }
      // Fallback to native scroll position for mobile
      return window.scrollY;
    },
    stop: () => {
      if (lenisRef.current) {
        lenisRef.current.stop();
      }
    },
    start: () => {
      if (lenisRef.current) {
        lenisRef.current.start();
      }
    },
  };

  return (
    <SmoothScrollContext.Provider value={contextValue}>
      {children}
    </SmoothScrollContext.Provider>
  );
};
