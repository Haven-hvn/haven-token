import React from "react";
import { motion, Variants } from "framer-motion";
import { FileText, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const HeroButtons: React.FC = () => {
  const buttonVariants: Variants = {
    rest: {
      scale: 1,
      filter: "brightness(1)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 17,
      },
    },
    hover: {
      scale: 1.05,
      filter: "brightness(1.2)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 17,
      },
    },
  };

  const iconVariants: Variants = {
    rest: {
      x: 0,
      rotate: 0,
      scale: 1,
    },
    hover: {
      x: 5,
      rotate: 15,
      scale: 1.2,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 17,
      },
    },
  };

  const glowVariants: Variants = {
    rest: {
      opacity: 0,
      scale: 1,
    },
    hover: {
      opacity: 1,
      scale: 1.35,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 17,
      },
    },
  };

  return (
    <div className="flex flex-wrap justify-center gap-6">
      <motion.div
        initial="rest"
        whileHover="hover"
        animate="rest"
        variants={buttonVariants}
        className="relative group"
      >
        <a
          href="https://havenapp.orbiter.website/"
          target="_blank"
          rel="noopener noreferrer"
          className="relative inline-flex items-center justify-center rounded-lg px-8 py-4 text-lg font-medium text-white overflow-hidden group"
        >
          <motion.span
            className="absolute inset-0 bg-gradient-to-r from-purple-700 via-violet-600 to-purple-700 group-hover:bg-[length:400%_400%]"
            variants={glowVariants}
            style={{
              backgroundSize: "200% 200%",
              animation: "gradient 8s linear infinite",
            }}
          />
          <motion.span
            className="absolute inset-0 bg-gradient-to-r from-purple-700 to-violet-600 blur-xl opacity-50"
            variants={glowVariants}
          />
          <span className="relative flex items-center gap-2 z-10">
            Launch App
            <motion.span variants={iconVariants}>
              <ChevronRight className="h-5 w-5" />
            </motion.span>
          </span>
        </a>
      </motion.div>

      <motion.div
        initial="rest"
        whileHover="hover"
        animate="rest"
        variants={buttonVariants}
        className="relative group"
      >
        <Link
          to="/whitepaper"
          className="relative inline-flex items-center justify-center rounded-lg px-8 py-4 text-lg font-medium overflow-hidden"
        >
          <motion.span
            className="absolute inset-0 bg-white/10 backdrop-blur-sm border border-white/20"
            variants={glowVariants}
            style={{
              backdropFilter: "blur(8px)",
              WebkitBackdropFilter: "blur(8px)",
            }}
          />
          <motion.span
            className="absolute inset-0 bg-gradient-to-r from-purple-700/20 via-violet-600/20 to-purple-700/20 blur-xl opacity-50"
            variants={glowVariants}
          />
          <span className="relative flex items-center gap-3 text-white z-10">
            <motion.span variants={iconVariants}>
              <FileText className="h-5 w-5" />
            </motion.span>
            <span>Read Whitepaper</span>
          </span>
        </Link>
      </motion.div>
    </div>
  );
};

export default HeroButtons;
