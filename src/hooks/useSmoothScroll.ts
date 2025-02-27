import { useEffect, useRef, useCallback } from "react";
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
  const rafIdRef = useRef<number>();

  // Memoize the RAF callback to prevent unnecessary re-renders
  const rafCallback = useCallback((time: number) => {
    if (lenisRef.current) {
      lenisRef.current.raf(time * 1000);
      rafIdRef.current = requestAnimationFrame(rafCallback);
    }
  }, []);

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

      // Use requestAnimationFrame instead of gsap ticker for better performance
      rafIdRef.current = requestAnimationFrame(rafCallback);

      // Update ScrollTrigger on Lenis scroll
      lenis.on("scroll", ScrollTrigger.update);

      // Initial ScrollTrigger refresh
      ScrollTrigger.refresh();

      return () => {
        if (rafIdRef.current) {
          cancelAnimationFrame(rafIdRef.current);
        }
        if (lenisRef.current) {
          lenisRef.current.destroy();
          lenisRef.current = null;
          lenisInstance = null;
        }
      };
    }
  }, [options, rafCallback]);

  return lenisInstance;
};
