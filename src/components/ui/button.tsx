import { ButtonHTMLAttributes, forwardRef } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { HTMLMotionProps, motion } from "framer-motion";
import { cn } from "../../lib/utils";
import { Spinner } from "./spinner";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-jakarta ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        gradient: "bg-gradient-primary text-white hover:opacity-90",
        glass:
          "bg-white/10 backdrop-blur-lg text-white hover:bg-white/20 transition-all",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

type ButtonBaseProps = ButtonHTMLAttributes<HTMLButtonElement>;
type ButtonVariantProps = VariantProps<typeof buttonVariants>;
type ButtonMotionProps = Omit<HTMLMotionProps<"button">, keyof ButtonBaseProps>;

export interface ButtonProps extends ButtonBaseProps, ButtonVariantProps {
  loading?: boolean;
  animate?: boolean;
  loadingText?: string;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      animate = true,
      loading = false,
      loadingText = "Loading...",
      children,
      ...props
    },
    ref
  ) => {
    const buttonClasses = cn(buttonVariants({ variant, size }), className);
    const content = loading ? (
      <div className="flex items-center gap-2">
        <Spinner size="sm" />
        {size !== "icon" && <span>{loadingText}</span>}
      </div>
    ) : (
      children
    );

    if (animate) {
      return (
        <motion.button
          className={buttonClasses}
          ref={ref}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          transition={{
            type: "spring",
            stiffness: 50,
            damping: 10,
          }}
          disabled={loading || props.disabled}
          {...(props as ButtonMotionProps)}
        >
          {content}
        </motion.button>
      );
    }

    return (
      <button
        className={buttonClasses}
        ref={ref}
        disabled={loading || props.disabled}
        {...props}
      >
        {content}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
