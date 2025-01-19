import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface WaveTextProps {
  text: string;
  className?: string;
}

const WaveText = ({ text, className = "" }: WaveTextProps) => {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!textRef.current) return;

    const chars = textRef.current.children;
    const ctx = gsap.context(() => {
      // Initial state
      gsap.set(chars, {
        y: 100,
        opacity: 0,
      });

      // Reveal animation
      const revealTl = gsap.to(chars, {
        duration: 1,
        y: 0,
        opacity: 1,
        stagger: 0.02,
        ease: "power4.out",
      });

      // Wave animation
      const waveTl = gsap.to(chars, {
        duration: 1,
        y: -10,
        ease: "sine.inOut",
        stagger: {
          each: 0.05,
          repeat: -1,
          yoyo: true,
        },
        paused: true,
      });

      revealTl.then(() => waveTl.play());
    }, textRef);

    return () => ctx.revert(); // Cleanup animations when component unmounts
  }, [text]);

  return (
    <div ref={textRef} className={`relative ${className}`} aria-label={text}>
      {text.split("").map((char, i) => (
        <span
          key={`${char}-${i}`}
          className={`${char === " " ? "inline-block w-2" : "inline-block"}`}
          aria-hidden="true"
        >
          {char}
        </span>
      ))}
    </div>
  );
};

export default WaveText;
