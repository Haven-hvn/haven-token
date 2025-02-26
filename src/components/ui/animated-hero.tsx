import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import DynamicBackground from "../../components/Hero/DynamicBackground";
import { RetroBlur } from "./retro-blur";
import { NoiseTexture } from "./noise-texture";

function Hero() {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => ["Revolutionary", "User-Powered", "Limitless", "HAVEN"],
    []
  );
  console.log(titleNumber);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-background">
      {/* Background */}
      {/* Background Effects */}
      <DynamicBackground />
      <RetroBlur className="absolute inset-0" />
      <NoiseTexture />

      {/* Content */}
      <div className="relative z-10 mt-8">
        <div className="container mx-auto">
          <div className="flex min-h-screen gap-16 py-20 items-center justify-center flex-col">
            {/* Main Title */}
            <div className="flex gap-4 flex-col items-center">
              <motion.h1
                className="text-[clamp(2rem,8vw,6rem)] font-clash  text-slate-200 font-bold tracking-wide leading-none text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                The Future of Content is
                <span className="relative flex w-full justify-center overflow-hidden text-center h-[1.2em] mt-2">
                  {titles.map((title, index) => (
                    <motion.span
                      key={index}
                      className="absolute  bg-gradient-to-t bg-clip-text text-transparent from-red-400 to-pink-600  font-bold drop-shadow-sm"
                      initial={{ opacity: 0, y: 40 }}
                      transition={{
                        type: "spring",
                        stiffness: 100,
                        damping: 20,
                        duration: 0.5,
                      }}
                      animate={
                        titleNumber === index
                          ? {
                              y: 0,
                              opacity: 1,
                            }
                          : {
                              y: titleNumber > index ? -40 : 40,
                              opacity: 0,
                              transition: { duration: 0.3 },
                            }
                      }
                    >
                      {title}
                    </motion.span>
                  ))}
                </span>
              </motion.h1>

              <motion.p
                className="font-mono uppercase text-muted-foreground text-lg tracking-wider font-medium text-center max-w-3xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Haven Protocol allows users to generate user-owned content and
                participate in voting using Web3 blockchain technology. This
                ensures a decentralized and transparent platform where users
                have full control and ownership over their contributions.
              </motion.p>
            </div>

            {/* CTAs */}
            <div className="flex gap-4">
              <motion.a
                href="#join-us"
                className="font-mono text-primary bg-primary/10 hover:bg-primary/20 px-6 py-3 rounded-lg transition-colors uppercase tracking-wider"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Join the Community
              </motion.a>
              <motion.a
                href="https://havenapp.orbiter.website"
                target="_blank"
                className="font-mono text-white bg-primary/30 hover:bg-primary/50 px-6 py-3 rounded-lg transition-colors uppercase tracking-wider"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                Get Started Now
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Hero };
