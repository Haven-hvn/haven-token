import { motion } from "framer-motion";
import { fadeInDown, spring } from "../../lib/animations";
import { cn } from "../../lib/utils";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const NavLink = ({
  href,
  children,
  className,
  onClick,
}: NavLinkProps) => (
  <motion.a
    href={href}
    className={cn(
      "text-sm font-medium text-gray-200 hover:text-primary transition-colors cursor-pointer focus-ring rounded-md px-2 py-1",
      className
    )}
    variants={fadeInDown}
    whileHover={{ y: -2 }}
    transition={spring}
    onClick={onClick}
  >
    {children}
  </motion.a>
);

NavLink.displayName = "NavLink";
