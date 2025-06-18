import { useCallback, useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import DynamicBackground from "../Hero/DynamicBackground";
import { RetroBlur } from "./retro-blur";
import { NoiseTexture } from "./noise-texture";

const TITLE_CHANGE_INTERVAL = 2000;
const ANIMATION_CONFIG = {
  spring: { type: "spring", stiffness: 100, damping: 20, duration: 0.5 },
  fade: { duration: 0.6 },
  slideUp: { duration: 0.3 },
};

const BUTTONS = [
  {
    href: "#join-us",
    text: "Join the Community",
    className: "text-primary bg-primary/10 hover:bg-primary/20",
    delay: 0.4,
  },
  {
    href: "#how-it-works",
    text: "Start Classifying",
    className: "text-white bg-primary/30 hover:bg-primary/50",
    delay: 0.5,
  },
];

function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);

  const titles = useMemo(
    () => ["Goon to Earn", "Video Intelligence", "Community-Powered", "SINBOX"],
    []
  );

  const updateTitle = useCallback(() => {
    setTitleIndex((prev) => (prev === titles.length - 1 ? 0 : prev + 1));
  }, [titles.length]);

  useEffect(() => {
    const timeoutId = setInterval(updateTitle, TITLE_CHANGE_INTERVAL);
    return () => clearInterval(timeoutId);
  }, [updateTitle]);

  const titleVariants = {
    enter: { opacity: 0, y: 40 },
    center: {
      y: 0,
      opacity: 1,
      transition: ANIMATION_CONFIG.spring,
    },
    exit: {
      y: -40,
      opacity: 0,
      transition: ANIMATION_CONFIG.slideUp,
    },
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-background">
      <DynamicBackground />
      <RetroBlur className="absolute inset-0" />
      <NoiseTexture />

      <div className="relative z-10 mt-8">
        <div className="container mx-auto">
          <div className="flex min-h-screen gap-16 py-20 items-center justify-center flex-col">
            <div className="flex gap-4 flex-col items-center">
              <motion.h1
                className="text-[clamp(2rem,8vw,6rem)] font-clash text-slate-200 font-bold tracking-wide leading-none text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...ANIMATION_CONFIG.fade }}
              >
                The Future of Video is
                <div className="relative flex w-full justify-center overflow-hidden text-center h-[1.2em] mt-2">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={titleIndex}
                      className="absolute bg-gradient-to-t bg-clip-text text-transparent from-red-400 to-pink-600 font-bold drop-shadow-sm"
                      variants={titleVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                    >
                      {titles[titleIndex]}
                    </motion.span>
                  </AnimatePresence>
                </div>
              </motion.h1>

              <motion.p
                className="font-mono uppercase text-muted-foreground text-lg tracking-wider font-medium text-center max-w-3xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...ANIMATION_CONFIG.fade, delay: 0.2 }}
              >
                Sinbox is a web3 platform where community members classify short video clips 
                and earn rewards for training better Visual Language Models. Join the future 
                of AI-powered video understanding.
              </motion.p>
            </div>

            <div className="flex gap-4">
              {BUTTONS.map((button) => (
                <motion.a
                  key={button.href}
                  href={button.href}
                  className={`font-mono ${button.className} px-6 py-3 rounded-lg transition-colors uppercase tracking-wider`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ ...ANIMATION_CONFIG.fade, delay: button.delay }}
                >
                  {button.text}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Hero };
