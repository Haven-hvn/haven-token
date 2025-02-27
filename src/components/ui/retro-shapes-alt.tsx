import { memo } from "react";
import { motion } from "framer-motion";

export const RetroShapesAlt = memo(
  ({ className = "" }: { className?: string }) => {
    return (
      <div
        className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
      >
        {/* Circles */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0.3 }}
          animate={{
            scale: [0.8, 1.1, 0.8],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -right-32 -top-32 w-[500px] h-[500px] bg-red-400/30 rounded-full blur-[100px]"
        />
        <motion.div
          initial={{ scale: 0.8, opacity: 0.3 }}
          animate={{
            scale: [1, 0.8, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
            delay: 1,
          }}
          className="absolute -left-32 -bottom-32 w-[500px] h-[500px] bg-pink-400/30 rounded-full blur-[100px]"
        />

        {/* Grid lines */}
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.05] mix-blend-overlay"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="grid"
              width="32"
              height="32"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 32 0 L 0 0 0 32"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>

        {/* Retro shapes */}
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/4 -right-16 w-64 h-64"
        >
          <div className="w-full h-full border-[2px] border-red-500/30 rounded-lg transform rotate-45" />
        </motion.div>

        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: -360 }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-1/4 -left-16 w-80 h-80"
        >
          <div className="w-full h-full border-[2px] border-pink-500/30 rounded-lg transform -rotate-12" />
        </motion.div>
      </div>
    );
  }
);

RetroShapesAlt.displayName = "RetroShapes";
