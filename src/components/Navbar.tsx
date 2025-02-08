import { motion, useScroll, useTransform } from "framer-motion";
import { Brain, Menu } from "lucide-react";
import { useState } from "react";
import { IconButton } from "./ui/icon-button";
import { NavLink } from "./ui/nav-link";
import { fadeInDown, mobileMenuAnim, staggerChildren } from "../lib/animations";
import { cn } from "../lib/utils";

const navItems = [
  { name: "Features", href: "#features" },
  { name: "Technology", href: "#technology" },
  { name: "Tokenomics", href: "#tokenomics" },
  { name: "Whitepaper", href: "#whitepaper" },
] as const;

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.5)"]
  );

  const borderGradient = useTransform(
    scrollY,
    [0, 100],
    [
      "linear-gradient(90deg, rgba(var(--primary), 0) 0%, rgba(var(--primary), 0.1) 50%, rgba(var(--primary), 0) 100%)",
      "linear-gradient(90deg, rgba(var(--primary), 0) 0%, rgba(var(--primary), 0.2) 50%, rgba(var(--primary), 0) 100%)",
    ]
  );

  return (
    <motion.header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-colors duration-300 backdrop-blur-[0.5px]",
        className
      )}
      style={{ backgroundColor }}
      role="banner"
    >
      <div className="container max-w-7xl mx-auto h-20 flex items-center justify-between">
        {/* Logo */}
        <a
          href="/"
          className="flex items-center focus-ring rounded-md px-2 py-1"
          aria-label="Haven - Home"
        >
          <motion.div
            variants={fadeInDown}
            initial="hidden"
            animate="visible"
            className="flex items-center gap-2"
          >
            <Brain className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold font-clash">HAVEN</span>
          </motion.div>
        </a>

        {/* Desktop Navigation */}
        <motion.nav
          className="hidden md:flex items-center space-x-8"
          variants={staggerChildren}
          initial="hidden"
          animate="visible"
          role="navigation"
          aria-label="Main navigation"
        >
          {navItems.map((item) => (
            <NavLink key={item.name} href={item.href}>
              {item.name}
            </NavLink>
          ))}
        </motion.nav>

        {/* Mobile Menu Button */}
        <motion.div
          className="md:hidden"
          variants={fadeInDown}
          initial="hidden"
          animate="visible"
        >
          <IconButton
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle menu"
          >
            <Menu className="h-5 w-5" />
          </IconButton>
        </motion.div>
      </div>

      {/* Mobile Navigation */}
      <motion.nav
        id="mobile-menu"
        className="md:hidden overflow-hidden"
        initial="hidden"
        animate={isMobileMenuOpen ? "visible" : "hidden"}
        variants={mobileMenuAnim}
      >
        <div className="container py-4 flex flex-col space-y-4 bg-background/80 backdrop-blur-sm">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      </motion.nav>

      {/* Border line */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[1px]"
        style={{ background: borderGradient }}
        aria-hidden="true"
      />
    </motion.header>
  );
};

export default Navbar;
