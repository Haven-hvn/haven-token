import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Technology from "./components/Technology";
import UseCases from "./components/UseCases";
import Tokenomics from "./components/Tokenomics";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
// import HeroSection from "./components/Hero/index";
import { useSmoothScroll } from "./hooks/useSmoothScroll";
import { Hero } from "./components/ui/animated-hero";

gsap.registerPlugin(ScrollTrigger);

function App() {
  // Initialize smooth scrolling with custom options
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
      ".tokenomics-section",
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
    <div className="relative bg-black text-white">
      <div className="flex flex-col">
        <Navbar />
        <main className="relative">
          {/* <HeroSection /> */}
          <Hero />

          <Technology />

          <UseCases />

          <Tokenomics />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
