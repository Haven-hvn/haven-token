import { useLayoutEffect, lazy, Suspense } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import Navbar from "./components/Navbar";
import { Hero } from "./components/ui/animated-hero";
import { useSmoothScroll } from "./hooks/useSmoothScroll";
import { debounce } from "./lib/utils";

// Import test file for component verification
import "./test-components";

// Fallback components for when lazy loading fails
const TechnologyFallback = () => <div className="min-h-[400px] flex items-center justify-center text-gray-400">Technology section temporarily unavailable</div>;
const UseCasesFallback = () => <div className="min-h-[400px] flex items-center justify-center text-gray-400">Use Cases section temporarily unavailable</div>;
const FooterFallback = () => <div className="min-h-[200px] flex items-center justify-center text-gray-400">Footer temporarily unavailable</div>;
const JoinUsFallback = () => <div className="min-h-[400px] flex items-center justify-center text-gray-400">Join Us section temporarily unavailable</div>;
const DMCFallback = () => <div className="min-h-[400px] flex items-center justify-center text-gray-400">DMCA page temporarily unavailable</div>;
const DesignSystemDemoFallback = () => <div className="min-h-[400px] flex items-center justify-center text-gray-400">Design system demo temporarily unavailable</div>;

// Lazy load non-critical components
const Technology = lazy(() => import("./components/Technology"));
const UseCases = lazy(() => import("./components/UseCases"));
const Footer = lazy(() => import("./components/Footer"));
const JoinUs = lazy(() => import("./components/JoinUs"));
const DMCA = lazy(() => import("./components/DMCA"));
const DesignSystemDemo = lazy(() => import("./components/ui/design-system-demo"));

gsap.registerPlugin(ScrollTrigger);

// Loading fallback component
const LoadingFallback = () => (
  <div className="min-h-[200px] flex items-center justify-center">
    <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-white"></div>
  </div>
);

// Error fallback component
const ErrorFallback = ({ error, resetErrorBoundary }: { error: Error; resetErrorBoundary: () => void }) => (
  <div className="min-h-[200px] flex items-center justify-center flex-col gap-4">
    <div className="text-red-400">Something went wrong loading this section</div>
    <button 
      onClick={resetErrorBoundary}
      className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded-md transition-colors"
    >
      Try again
    </button>
  </div>
);

// Component wrapper with error handling
const SafeLazyComponent = ({ 
  LazyComponent, 
  FallbackComponent 
}: { 
  LazyComponent: React.LazyExoticComponent<React.ComponentType<any>>;
  FallbackComponent: React.ComponentType;
}) => (
  <ErrorBoundary 
    FallbackComponent={ErrorFallback}
    onError={(error) => {
      console.error("Component failed to load:", error);
    }}
  >
    <Suspense fallback={<LoadingFallback />}>
      <LazyComponent />
    </Suspense>
  </ErrorBoundary>
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
      <div className="relative bg-black text-white min-h-screen w-full">
        <div className="flex flex-col w-full">
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                <main className="relative w-full">
                  <Hero />
                  <SafeLazyComponent LazyComponent={Technology} FallbackComponent={TechnologyFallback} />
                  <SafeLazyComponent LazyComponent={UseCases} FallbackComponent={UseCasesFallback} />
                  <SafeLazyComponent LazyComponent={JoinUs} FallbackComponent={JoinUsFallback} />
                </main>
              }
            />
            <Route
              path="/dmca"
              element={
                <SafeLazyComponent LazyComponent={DMCA} FallbackComponent={DMCFallback} />
              }
            />
            <Route
              path="/design-system"
              element={
                <SafeLazyComponent LazyComponent={DesignSystemDemo} FallbackComponent={DesignSystemDemoFallback} />
              }
            />
          </Routes>
          <SafeLazyComponent LazyComponent={Footer} FallbackComponent={FooterFallback} />
        </div>
      </div>
    </Router>
  );
}

export default App;
