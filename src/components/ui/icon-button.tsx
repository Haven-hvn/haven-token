import { forwardRef } from "react";
import { Button, ButtonProps } from "./button";
import { cn } from "../../lib/utils";

interface IconButtonProps extends ButtonProps {
  "aria-label": string;
}

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <Button
        ref={ref}
        size="icon"
        variant="ghost"
        className={cn(
          "rounded-full hover:bg-primary/10 transition-colors",
          className
        )}
        {...props}
      >
        {children}
      </Button>
    );
  }
);

IconButton.displayName = "IconButton";
