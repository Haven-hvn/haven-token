import { forwardRef, ReactNode } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { motion, type MotionProps } from "framer-motion";
import { cn } from "../../lib/utils";

const containerVariants = cva("w-full mx-auto", {
  variants: {
    size: {
      sm: "max-w-screen-sm",
      md: "max-w-screen-md",
      lg: "max-w-screen-lg",
      xl: "max-w-screen-xl",
      "2xl": "max-w-screen-2xl",
      full: "max-w-none",
    },
    padding: {
      none: "",
      sm: "px-4",
      default: "px-4 sm:px-6 lg:px-8",
      lg: "px-6 sm:px-8 lg:px-12",
    },
    align: {
      left: "text-left",
      center: "text-center",
      right: "text-right",
    },
  },
  defaultVariants: {
    size: "xl",
    padding: "default",
    align: "left",
  },
});

type ContainerVariantProps = VariantProps<typeof containerVariants>;

interface ContainerProps
  extends ContainerVariantProps,
    Omit<MotionProps, keyof ContainerVariantProps> {
  children: ReactNode;
  animate?: boolean;
  className?: string;
}

const Container = forwardRef<HTMLDivElement, ContainerProps>((props, ref) => {
  const {
    children,
    className,
    size,
    padding,
    align,
    animate = false,
    ...rest
  } = props;

  const containerClasses = cn(
    containerVariants({
      size,
      padding,
      align,
    }),
    className
  );

  if (!animate) {
    return (
      <div ref={ref} className={containerClasses}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      ref={ref}
      className={containerClasses}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        ease: [0.645, 0.045, 0.355, 1],
      }}
      {...rest}
    >
      {children}
    </motion.div>
  );
});

Container.displayName = "Container";

export { Container, containerVariants, type ContainerProps };
