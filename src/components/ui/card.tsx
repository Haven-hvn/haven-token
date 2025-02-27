import { forwardRef, HTMLAttributes, ReactNode } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "../../lib/utils";

const cardVariants = cva(
  "relative overflow-hidden rounded-2xl transition-all duration-200",
  {
    variants: {
      variant: {
        default: "bg-card text-card-foreground",
        glass: "bg-white/5 backdrop-blur-md border border-white/10",
        outline: "border bg-background",
        ghost: "hover:bg-accent/5",
        gradient: "bg-gradient-primary text-white/90 border border-white/10",
      },
      hover: {
        none: "",
        lift: "hover:-translate-y-1 hover:shadow-lg",
        glow: "hover:shadow-glow",
        scale: "hover:scale-[1.02]",
      },
      size: {
        sm: "p-4",
        default: "p-6",
        lg: "p-8",
      },
      animation: {
        none: "",
        float: "animate-float",
        pulse: "animate-pulse-hover",
      },
    },
    defaultVariants: {
      variant: "default",
      hover: "none",
      size: "default",
      animation: "none",
    },
  }
);

type CardVariantProps = VariantProps<typeof cardVariants>;

interface CardBaseProps extends CardVariantProps {
  children: ReactNode;
  className?: string;
  contentClassName?: string;
  animate?: boolean;
}

type CardMotionProps = Omit<HTMLMotionProps<"div">, keyof CardBaseProps>;
type CardStaticProps = Omit<
  HTMLAttributes<HTMLDivElement>,
  keyof CardBaseProps
>;
type CardProps = CardBaseProps & (CardMotionProps | CardStaticProps);

export const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      children,
      className,
      contentClassName,
      variant,
      hover,
      size,
      animation,
      animate = true,
      ...props
    },
    ref
  ) => {
    const cardClasses = cn(
      cardVariants({ variant, hover, size, animation }),
      className
    );

    if (!animate) {
      return (
        <div ref={ref} className={cardClasses} {...(props as CardStaticProps)}>
          <div className={contentClassName}>{children}</div>
        </div>
      );
    }

    const motionProps: HTMLMotionProps<"div"> = {
      initial: { opacity: 0, y: 50 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, margin: "-50px" },
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 15,
        mass: 1,
      },
      ...(props as CardMotionProps),
    };

    return (
      <motion.div ref={ref} className={cardClasses} {...motionProps}>
        <div className={contentClassName}>{children}</div>
      </motion.div>
    );
  }
);

Card.displayName = "Card";

// Card Header Component
interface CardHeaderProps {
  children: ReactNode;
  className?: string;
}

export const CardHeader = ({ children, className }: CardHeaderProps) => (
  <div className={cn("space-y-1.5", className)}>{children}</div>
);

// Card Title Component
interface CardTitleProps {
  children: ReactNode;
  className?: string;
}

export const CardTitle = ({ children, className }: CardTitleProps) => (
  <h3
    className={cn(
      "text-lg font-clash font-semibold leading-none tracking-tight",
      className
    )}
  >
    {children}
  </h3>
);

// Card Description Component
interface CardDescriptionProps {
  children: ReactNode;
  className?: string;
}

export const CardDescription = ({
  children,
  className,
}: CardDescriptionProps) => (
  <p className={cn("text-sm font-jakarta text-muted-foreground", className)}>
    {children}
  </p>
);

// Card Content Component
interface CardContentProps {
  children: ReactNode;
  className?: string;
}

export const CardContent = ({ children, className }: CardContentProps) => (
  <div className={cn("pt-4", className)}>{children}</div>
);

// Card Footer Component
interface CardFooterProps {
  children: ReactNode;
  className?: string;
}

export const CardFooter = ({ children, className }: CardFooterProps) => (
  <div className={cn("flex items-center pt-4", className)}>{children}</div>
);

export { cardVariants };
