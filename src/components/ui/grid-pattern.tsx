import { cn } from "../../lib/utils";

interface GridPatternProps {
  className?: string;
  size?: number;
  spacing?: number;
  color?: string;
}

export function GridPattern({
  className,
  size = 32,
  spacing = 1,
  color = "currentColor",
}: GridPatternProps) {
  return (
    <svg
      className={cn("absolute inset-0 h-full w-full", className)}
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      fill="none"
    >
      <defs>
        <pattern
          id="grid"
          width={size}
          height={size}
          patternUnits="userSpaceOnUse"
        >
          <path
            d={`M ${size} 0 L 0 0 0 ${size}`}
            fill="none"
            stroke={color}
            strokeWidth={spacing}
            opacity="0.1"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" />
    </svg>
  );
}
