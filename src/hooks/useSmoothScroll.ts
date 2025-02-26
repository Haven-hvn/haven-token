import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

let lenisInstance: Lenis | null = null;

interface UseSmoothScrollOptions {
  duration?: number;
  easing?: (t: number) => number;
  orientation?: "vertical" | "horizontal";
  gestureOrientation?: "vertical" | "horizontal";
  smoothWheel?: boolean;
  wheelMultiplier?: number;
  touchMultiplier?: number;
  infinite?: boolean;
}

export const scrollTo = (
  target: string | HTMLElement,
  options?: { offset?: number }
) => {
  if (lenisInstance) {
    lenisInstance.scrollTo(target, { offset: options?.offset ?? -100 });
  }
};

export const useSmoothScroll = (options: UseSmoothScrollOptions = {}) => {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    if (!lenisInstance) {
      const lenis = new Lenis({
        duration: options.duration ?? 1.2,
        easing:
          options.easing ??
          ((t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t))),
        orientation: options.orientation ?? "vertical",
        gestureOrientation: options.gestureOrientation ?? "vertical",
        smoothWheel: options.smoothWheel ?? true,
        wheelMultiplier: options.wheelMultiplier ?? 1,
        touchMultiplier: options.touchMultiplier ?? 1,
        infinite: options.infinite ?? false,
      });

      lenisRef.current = lenis;
      lenisInstance = lenis;

      // GSAP ScrollTrigger integration
      const rafCallback = (time: number) => {
        lenis.raf(time * 1000);
      };

      gsap.ticker.add(rafCallback);
      ScrollTrigger.refresh();

      return () => {
        gsap.ticker.remove(rafCallback);
        if (lenisRef.current) {
          lenisRef.current.destroy();
          lenisRef.current = null;
          lenisInstance = null;
        }
      };
    }
  }, [options]);

  return lenisInstance;
};
