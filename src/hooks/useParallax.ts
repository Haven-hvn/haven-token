import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useParallax = (
  elementRef: React.RefObject<HTMLElement>,
  speed: number = 0.5
) => {
  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    gsap.to(element, {
      scrollTrigger: {
        trigger: element,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
      y: () => -ScrollTrigger.maxScroll(window) * speed,
      ease: "none",
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [elementRef, speed]);
};
