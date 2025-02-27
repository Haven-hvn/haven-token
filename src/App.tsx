import { useLayoutEffect, lazy, Suspense } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Hero } from "./components/ui/animated-hero";
import { useSmoothScroll } from "./hooks/useSmoothScroll";
import { debounce } from "./lib/utils";

// Lazy load non-critical components
const Technology = lazy(() => import("./components/Technology"));
const UseCases = lazy(() => import("./components/UseCases"));
const Innovation = lazy(() => import("./components/Innovation"));
const Footer = lazy(() => import("./components/Footer"));
const JoinUs = lazy(() => import("./components/JoinUs"));
const DMCA = lazy(() => import("./components/DMCA"));
const Whitepaper = lazy(() => import("./components/Whitepaper"));
const DesignSystemDemo = lazy(
  () => import("./components/ui/design-system-demo")
);

gsap.registerPlugin(ScrollTrigger);

// Loading fallback component
const LoadingFallback = () => (
  <div className="min-h-[200px] flex items-center justify-center">
    <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-white"></div>
  </div>
);

function App() {
  useSmoothScroll({
    duration: 1.2,
    smoothWheel: true,
    wheelMultiplier: 0.8, // Reduced from 1 for smoother scrolling
    touchMultiplier: 1.5, // Adjusted from 2 for better mobile experience
  });

  useLayoutEffect(() => {
    const setupScrollAnimations = () => {
      const sections = [
        ".technology-section",
        ".use-cases-section",
        ".innovation-section",
      ];

      sections.forEach((section) => {
        const elements = document.querySelectorAll(`${section} > *`);

        if (elements.length === 0) return; // Skip if no elements found

        gsap.set(elements, { opacity: 0, y: 50 }); // Set initial state

        gsap.from(elements, {
          y: 50,
          opacity: 0,
          duration: 0.8, // Reduced from 1
          stagger: 0.15, // Reduced from 0.2
          ease: "power2.out", // Changed from power3 for better performance
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
            end: "top 35%",
            toggleActions: "play none none reverse",
            markers: false,
          },
        });
      });
    };

    // Debounce scroll animation setup
    const debouncedSetup = debounce(setupScrollAnimations, 100);
    debouncedSetup();

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        trigger.kill(true); // true parameter ensures complete cleanup
      });
      gsap.killTweensOf("*"); // Kill all tweens
    };
  }, []);

  return (
    <Router>
      <div className="relative bg-black text-white">
        <div className="flex flex-col">
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                <main className="relative">
                  <Hero />
                  <Suspense fallback={<LoadingFallback />}>
                    <Technology />
                    <UseCases />
                    <Innovation />
                    <JoinUs />
                  </Suspense>
                </main>
              }
            />
            <Route
              path="/dmca"
              element={
                <Suspense fallback={<LoadingFallback />}>
                  <DMCA />
                </Suspense>
              }
            />
            <Route
              path="/whitepaper"
              element={
                <Suspense fallback={<LoadingFallback />}>
                  <Whitepaper />
                </Suspense>
              }
            />
            <Route
              path="/design-system"
              element={
                <Suspense fallback={<LoadingFallback />}>
                  <DesignSystemDemo />
                </Suspense>
              }
            />
          </Routes>
          <Suspense fallback={<LoadingFallback />}>
            <Footer />
          </Suspense>
        </div>
      </div>
    </Router>
  );
}

export default App;
