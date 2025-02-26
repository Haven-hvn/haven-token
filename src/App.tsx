import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Technology from "./components/Technology";
import UseCases from "./components/UseCases";
import Innovation from "./components/Innovation";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import JoinUs from "./components/JoinUs";
// import HeroSection from "./components/Hero/index";
import { useSmoothScroll } from "./hooks/useSmoothScroll";
import { Hero } from "./components/ui/animated-hero";
import DMCA from "./components/DMCA";
import { Whitepaper } from "./components/Whitepaper";

gsap.registerPlugin(ScrollTrigger);

function App() {
  // Get Lenis instance from smooth scroll hook
  useSmoothScroll({
    duration: 1.2,
    smoothWheel: true,
    wheelMultiplier: 1,
    touchMultiplier: 2,
  });

  useLayoutEffect(() => {
    // Create scroll-triggered animations for sections
    const sections = [
      ".technology-section",
      ".use-cases-section",
      ".innovation-section",
    ];

    sections.forEach((section) => {
      const elements = document.querySelectorAll(`${section} > *`);

      gsap.from(elements, {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          end: "top 30%",
          toggleActions: "play none none reverse",
        },
      });
    });

    return () => {
      // Cleanup scroll triggers on unmount
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
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
                  <Technology />
                  <UseCases />
                  <Innovation />
                  <JoinUs />
                </main>
              }
            />
            <Route path="/dmca" element={<DMCA />} />
            <Route path="/whitepaper" element={<Whitepaper />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
