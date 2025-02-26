import { cn } from "../../lib/utils";

interface NoiseTextureProps {
  className?: string;
}

export function NoiseTexture({ className }: NoiseTextureProps) {
  return (
    <div
      className={cn(
        "pointer-events-none fixed inset-0 z-50 mix-blend-overlay opacity-[0.15]",
        className
      )}
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23noise)'/%3E%3C/svg%3E")`,
      }}
      aria-hidden="true"
    />
  );
}
