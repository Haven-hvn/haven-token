import { ElementType, HTMLAttributes, forwardRef, ReactNode } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "../../lib/utils";
import { fadeInUp } from "../../lib/animations";

const textVariants = cva("", {
  variants: {
    variant: {
      default: "text-foreground",
      muted: "text-muted-foreground",
      primary: "text-primary",
      gradient:
        "bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600",
    },
    size: {
      xs: "text-xs",
      sm: "text-sm leading-relaxed",
      base: "text-base leading-relaxed",
      lg: "text-lg leading-relaxed",
      xl: "text-xl leading-relaxed",
      "2xl": "text-2xl leading-relaxed",
    },
    weight: {
      light: "font-light",
      normal: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
    },
    font: {
      sans: "font-jakarta",
      display: "font-clash",
    },
    align: {
      left: "text-left",
      center: "text-center",
      right: "text-right",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "base",
    weight: "normal",
    font: "sans",
    align: "left",
  },
});

type TextVariantProps = VariantProps<typeof textVariants>;

interface TextBaseProps {
  variant?: TextVariantProps["variant"];
  size?: TextVariantProps["size"];
  weight?: TextVariantProps["weight"];
  font?: TextVariantProps["font"];
  align?: TextVariantProps["align"];
  animate?: boolean;
  as?: ElementType;
  children: ReactNode;
  className?: string;
}

type TextProps = TextBaseProps &
  Omit<HTMLAttributes<HTMLElement>, keyof TextBaseProps>;

const Text = forwardRef<HTMLElement, TextProps>((props, ref) => {
  const {
    className,
    children,
    variant = "default",
    size = "base",
    weight = "normal",
    font = "sans",
    align = "left",
    animate = false,
    as: Component = "p",
    ...rest
  } = props;

  const textClasses = cn(
    textVariants({ variant, size, weight, font, align }),
    className
  );

  if (!animate) {
    return (
      <Component ref={ref} className={textClasses} {...rest}>
        {children}
      </Component>
    );
  }

  const MotionComponent =
    motion[Component as keyof typeof motion] || motion.div;

  return (
    <MotionComponent
      ref={ref}
      className={textClasses}
      variants={fadeInUp}
      initial="hidden"
      animate="visible"
      {...(rest as HTMLMotionProps<"div">)}
    >
      {children}
    </MotionComponent>
  );
});

Text.displayName = "Text";

export { Text, textVariants, type TextProps };
