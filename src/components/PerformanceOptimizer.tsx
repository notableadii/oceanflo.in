"use client";

import { useEffect } from "react";

const PerformanceOptimizer = () => {
  useEffect(() => {
    // Note: Critical resources are now preloaded statically in layout.tsx

    // Lazy load non-critical images
    const lazyLoadImages = () => {
      const images = document.querySelectorAll("img[data-src]");
      const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            img.src = img.dataset.src || "";
            img.classList.remove("lazy");
            observer.unobserve(img);
          }
        });
      });

      images.forEach((img) => imageObserver.observe(img));
    };

    // Optimize scroll performance
    const optimizeScroll = () => {
      let ticking = false;

      const updateScroll = () => {
        // Optimize scroll-based animations
        ticking = false;
      };

      const requestTick = () => {
        if (!ticking) {
          requestAnimationFrame(updateScroll);
          ticking = true;
        }
      };

      window.addEventListener("scroll", requestTick, { passive: true });
    };

    // Initialize performance optimizations
    lazyLoadImages();
    optimizeScroll();

    // Cleanup function
    return () => {
      // Remove event listeners if needed
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  return null; // This component doesn't render anything visible
};

export default PerformanceOptimizer;
