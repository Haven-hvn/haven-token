import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

interface GradientBackgroundProps {
  className?: string;
  intensity?: "light" | "medium" | "strong";
  variant?: "primary" | "secondary" | "accent";
  animate?: boolean;
}

const intensityClasses = {
  light: {
    primary: "from-primary/10 via-transparent to-transparent",
    secondary: "from-secondary/10 via-transparent to-transparent",
    accent: "from-accent/10 via-transparent to-transparent",
  },
  medium: {
    primary: "from-primary/20 via-transparent to-transparent",
    secondary: "from-secondary/20 via-transparent to-transparent",
    accent: "from-accent/20 via-transparent to-transparent",
  },
  strong: {
    primary: "from-primary/30 via-transparent to-transparent",
    secondary: "from-secondary/30 via-transparent to-transparent",
    accent: "from-accent/30 via-transparent to-transparent",
  },
};

export const GradientBackground = ({
  className,
  intensity = "medium",
  variant = "primary",
  animate = true,
}: GradientBackgroundProps) => {
  const gradientClasses = intensityClasses[intensity][variant];

  // Core gradient classes
  const baseClasses = cn(
    "absolute inset-0 bg-gradient-radial pointer-events-none",
    gradientClasses,
    className
  );

  if (!animate) {
    return <div className={baseClasses} aria-hidden="true" />;
  }

  return (
    <motion.div
      className={baseClasses}
      initial={{ opacity: 0 }}
      animate={{
        opacity: [0, 1],
        scale: [0.9, 1],
      }}
      transition={{
        duration: 1,
        ease: "easeOut",
      }}
      aria-hidden="true"
    />
  );
};

interface GridPatternProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  opacity?: "light" | "medium" | "strong";
  animate?: boolean;
}

const gridSizes = {
  sm: "bg-grid-small",
  md: "bg-grid",
  lg: "bg-grid-large",
};

const gridOpacities = {
  light: "opacity-[0.02]",
  medium: "opacity-[0.05]",
  strong: "opacity-[0.08]",
};

export const GridPattern = ({
  className,
  size = "md",
  opacity = "medium",
  animate = true,
}: GridPatternProps) => {
  const baseClasses = cn(
    "absolute inset-0 pointer-events-none bg-repeat",
    gridSizes[size],
    gridOpacities[opacity],
    className
  );

  if (!animate) {
    return <div className={baseClasses} aria-hidden="true" />;
  }

  return (
    <motion.div
      className={baseClasses}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.5,
        ease: "easeOut",
        delay: 0.2,
      }}
      aria-hidden="true"
    />
  );
};
