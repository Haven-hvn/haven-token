import { motion } from "framer-motion";
import { Text } from "./text";
import { footerAnimations } from "../../utils/animations";

interface SocialIconProps {
  name: string;
  href: string;
  icon: string;
}

export const SocialIcon = ({ name, href, icon }: SocialIconProps) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-300 hover:text-white flex items-center gap-3 group transition-all duration-200"
    whileHover={footerAnimations.link.hover}
  >
    <span className="bg-gradient-to-b from-red-400/10 to-pink-600/10 backdrop-blur-sm p-2 rounded-full opacity-80 group-hover:opacity-100 transition-all duration-200">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        viewBox="0 0 16 16"
      >
        <path d={icon} />
      </svg>
    </span>
    <Text className="text-sm">{name}</Text>
  </motion.a>
);
