import { forwardRef, ReactNode } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { motion, type MotionProps } from "framer-motion";
import { cn } from "../../lib/utils";
import { scrollFadeIn } from "../../lib/animations";

const sectionVariants = cva("relative w-full", {
  variants: {
    size: {
      sm: "py-8 md:py-12",
      default: "py-12 md:py-16",
      lg: "py-16 md:py-24",
      xl: "py-24 md:py-32",
    },
    spacing: {
      none: "",
      sm: "space-y-4",
      default: "space-y-6",
      lg: "space-y-8",
      xl: "space-y-12",
    },
    align: {
      left: "text-left",
      center: "text-center items-center",
      right: "text-right items-end",
    },
    container: {
      default: "container mx-auto",
      full: "w-full px-4 sm:px-6 lg:px-8",
      screen: "w-screen",
    },
    background: {
      default: "bg-background",
      muted: "bg-muted",
      primary: "bg-primary text-primary-foreground",
      gradient: "bg-gradient-primary",
    },
  },
  defaultVariants: {
    size: "default",
    spacing: "default",
    align: "left",
    container: "default",
    background: "default",
  },
});

type SectionVariantProps = VariantProps<typeof sectionVariants>;

interface SectionProps
  extends SectionVariantProps,
    Omit<MotionProps, keyof SectionVariantProps> {
  children: ReactNode;
  animate?: boolean;
  className?: string;
  containerClassName?: string;
}

const Section = forwardRef<HTMLElement, SectionProps>((props, ref) => {
  const {
    children,
    className,
    containerClassName,
    animate = true,
    size,
    spacing,
    align,
    container,
    background,
    ...rest
  } = props;

  const sectionClasses = cn(
    sectionVariants({
      size,
      spacing,
      align,
      container,
      background,
    }),
    className
  );

  const wrappedContent =
    container === "full" || container === "screen" ? (
      <div className={cn("container mx-auto", containerClassName)}>
        {children}
      </div>
    ) : (
      children
    );

  if (!animate) {
    return (
      <section ref={ref} className={sectionClasses}>
        {wrappedContent}
      </section>
    );
  }

  return (
    <motion.section
      ref={ref}
      className={sectionClasses}
      variants={scrollFadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      {...rest}
    >
      {wrappedContent}
    </motion.section>
  );
});

Section.displayName = "Section";

export { Section, sectionVariants, type SectionProps };
