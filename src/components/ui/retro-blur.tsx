import { cn } from "../../lib/utils";
import { ReactNode } from "react";

interface RetroBlurProps {
  children?: ReactNode;
  className?: string;
  gradient?: boolean;
}

export function RetroBlur({
  children,
  className,
  gradient = true,
}: RetroBlurProps) {
  return (
    <div className="relative w-full h-full">
      <div
        className={cn(
          "absolute inset-0",
          gradient && "bg-gradient-primary",
          "retro-blur",
          className
        )}
      />
      <div className="absolute inset-0 noise" />
      {children && <div className="relative">{children}</div>}
    </div>
  );
}
