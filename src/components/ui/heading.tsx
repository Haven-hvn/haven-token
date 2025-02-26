import { ElementType, HTMLAttributes, forwardRef, ReactNode } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "../../lib/utils";
import { heroTextAnim } from "../../lib/animations";

const headingVariants = cva("tracking-tight font-clash", {
  variants: {
    level: {
      h1: "text-4xl font-black lg:text-5xl xl:text-7xl",
      h2: "text-3xl font-bold lg:text-4xl xl:text-5xl",
      h3: "text-2xl font-bold lg:text-3xl xl:text-4xl",
      h4: "text-xl font-semibold lg:text-2xl",
      h5: "text-lg font-semibold",
      h6: "text-base font-semibold",
    },
    variant: {
      default: "text-foreground",
      muted: "text-muted-foreground",
      primary: "text-primary",
      gradient: "bg-gradient-primary bg-clip-text text-transparent",
    },
    align: {
      left: "text-left",
      center: "text-center",
      right: "text-right",
    },
  },
  defaultVariants: {
    level: "h1",
    variant: "default",
    align: "left",
  },
});

type HeadingTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
type HeadingVariantProps = VariantProps<typeof headingVariants>;

interface HeadingBaseProps {
  level?: HeadingTag;
  variant?: HeadingVariantProps["variant"];
  align?: HeadingVariantProps["align"];
  animate?: boolean;
  as?: HeadingTag;
  children: ReactNode;
  className?: string;
}

type HeadingProps = HeadingBaseProps &
  Omit<HTMLAttributes<HTMLHeadingElement>, keyof HeadingBaseProps>;

const Heading = forwardRef<HTMLHeadingElement, HeadingProps>((props, ref) => {
  const {
    className,
    children,
    level = "h1",
    variant = "default",
    align = "left",
    animate = true,
    as,
    ...rest
  } = props;

  const headingClasses = cn(
    headingVariants({ level, variant, align }),
    className
  );

  if (!animate) {
    const Component = as || level;
    return (
      <Component ref={ref} className={headingClasses} {...rest}>
        {children}
      </Component>
    );
  }

  const MotionComponent = motion[as || level] as ElementType;

  return (
    <MotionComponent
      ref={ref}
      className={headingClasses}
      variants={heroTextAnim}
      initial="hidden"
      animate="visible"
      {...(rest as HTMLMotionProps<HeadingTag>)}
    >
      {children}
    </MotionComponent>
  );
});

Heading.displayName = "Heading";

export { Heading, headingVariants, type HeadingProps };
