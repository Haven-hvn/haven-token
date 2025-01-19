import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollDemo = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<HTMLDivElement[]>([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax effect
      sectionRefs.current.forEach((section) => {
        const bg = section.querySelector(".parallax-bg");
        if (bg) {
          gsap.to(bg, {
            y: "30%",
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          });
        }

        // Fade in content
        const content = section.querySelector(".content");
        if (content) {
          gsap.from(content, {
            y: 50,
            opacity: 0,
            duration: 1,
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
              end: "top 30%",
              toggleActions: "play none none reverse",
            },
          });
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const addToRefs = (el: HTMLDivElement) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current.push(el);
    }
  };

  return (
    <div ref={containerRef} className="w-full">
      <section
        ref={addToRefs}
        className="min-h-screen relative overflow-hidden flex items-center justify-center"
      >
        <div
          className="parallax-bg absolute inset-0 bg-gradient-to-b from-purple-800 to-blue-600 transform"
          style={{ zIndex: -1 }}
        />
        <div className="content text-center text-white p-8">
          <h2 className="text-4xl font-bold mb-4">Smooth Scroll Section 1</h2>
          <p className="text-xl max-w-2xl mx-auto">
            Scroll down to see smooth transitions and parallax effects in
            action. Notice how the background moves at a different rate than the
            content.
          </p>
        </div>
      </section>

      <section
        ref={addToRefs}
        className="min-h-screen relative overflow-hidden flex items-center justify-center"
      >
        <div
          className="parallax-bg absolute inset-0 bg-gradient-to-b from-blue-600 to-emerald-600 transform"
          style={{ zIndex: -1 }}
        />
        <div className="content text-center text-white p-8">
          <h2 className="text-4xl font-bold mb-4">Smooth Scroll Section 2</h2>
          <p className="text-xl max-w-2xl mx-auto">
            Each section demonstrates different scroll-based animations. The
            smooth scrolling makes the experience feel natural and engaging.
          </p>
        </div>
      </section>

      <section
        ref={addToRefs}
        className="min-h-screen relative overflow-hidden flex items-center justify-center"
      >
        <div
          className="parallax-bg absolute inset-0 bg-gradient-to-b from-emerald-600 to-purple-800 transform"
          style={{ zIndex: -1 }}
        />
        <div className="content text-center text-white p-8">
          <h2 className="text-4xl font-bold mb-4">Smooth Scroll Section 3</h2>
          <p className="text-xl max-w-2xl mx-auto">
            The Lenis smooth scroll library integrates perfectly with GSAP
            ScrollTrigger, enabling complex animations triggered by scroll
            position.
          </p>
        </div>
      </section>
    </div>
  );
};

export default ScrollDemo;
