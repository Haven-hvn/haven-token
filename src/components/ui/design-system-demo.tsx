import { motion } from "framer-motion";
import { RetroBlur } from "./retro-blur";

function DesignSystemDemo() {
  return (
    <div className="min-h-screen w-full overflow-hidden">
      <RetroBlur>
        <div className="relative z-10">
          <div className="container mx-auto">
            <div className="flex min-h-screen gap-16 py-20 items-center justify-center flex-col">
              {/* Main Title */}
              <motion.h1
                className="text-[clamp(2rem,8vw,6rem)] font-display font-bold tracking-wide leading-none text-center text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                Design System
              </motion.h1>

              {/* Description */}
              <motion.p
                className="font-mono text-white/80 text-lg tracking-wide text-center max-w-3xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Featuring retro blur effects with noise texture and smooth text
                animations
              </motion.p>

              {/* Buttons */}
              <div className="flex gap-4">
                <motion.button
                  className="font-mono text-white/90 bg-white/10 hover:bg-white/20 px-6 py-3 rounded-lg transition-colors uppercase tracking-wider"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  Primary Action
                </motion.button>
                <motion.button
                  className="font-mono text-white bg-gradient-to-r from-red-400 to-pink-600 hover:opacity-90 px-6 py-3 rounded-lg transition-opacity uppercase tracking-wider"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  Secondary Action
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </RetroBlur>
    </div>
  );
}

export { DesignSystemDemo };
