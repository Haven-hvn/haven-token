import { memo } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { RetroShapes } from "./ui/retro-shapes";
import { Container } from "./ui/container";
import { Text } from "./ui/text";
import { SocialIcon } from "./ui/SocialIcon";
import { footerAnimations } from "../utils/animations";

const QUICK_LINKS = ["Whitepaper", "Technology", "Use Cases", "Tokenomics"];
const RESOURCES = ["Documentation", "FAQs", "Community", "Blog"];
const SOCIAL_LINKS = [
  {
    name: "Follow on X",
    href: "https://x.com/HavenCryptoNet",
    icon: "M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z",
  },
  // ...existing social links...
];

const FooterLink = memo(({ item }: { item: string }) => (
  <motion.li
    className="font-mono"
    whileHover="hover"
    variants={footerAnimations.link}
  >
    {item === "Whitepaper" ? (
      <Link
        to="/whitepaper"
        className="text-gray-300 hover:text-white flex items-center space-x-2 text-sm group transition-all duration-200"
      >
        <span className="h-px w-4 bg-gradient-to-r from-red-400 to-pink-600 transform origin-left group-hover:w-5 transition-all duration-200"></span>
        <span>{item}</span>
      </Link>
    ) : (
      <a
        href={`#${item.toLowerCase()}`}
        className="text-gray-300 hover:text-white flex items-center space-x-2 text-sm group transition-all duration-200"
      >
        <span className="h-px w-4 bg-gradient-to-r from-red-400 to-pink-600 transform origin-left group-hover:w-5 transition-all duration-200"></span>
        <span>{item}</span>
      </a>
    )}
  </motion.li>
));

const Footer = () => (
  <footer className="relative bg-black text-white overflow-hidden isolate">
    <RetroShapes className="z-0 opacity-[0.15]" />
    <Container>
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        variants={footerAnimations.container}
        className="relative z-10 py-16"
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* About Section */}
          <motion.div variants={footerAnimations.item} className="space-y-6">
            <h3 className="text-white font-clash text-3xl font-semibold">
              About Haven
            </h3>
            <Text className="text-gray-300 font-mono text-sm leading-relaxed">
              Haven is a revolutionary crypto network focused on privacy,
              security, and decentralized solutions for digital assets.
            </Text>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={footerAnimations.item} className="space-y-6">
            <h3 className="text-white font-clash text-3xl font-semibold">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {QUICK_LINKS.map((item) => (
                <FooterLink key={item} item={item} />
              ))}
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div variants={footerAnimations.item} className="space-y-6">
            <h3 className="text-white font-clash text-3xl font-semibold">
              Resources
            </h3>
            <ul className="space-y-3">
              {RESOURCES.map((item) => (
                <FooterLink key={item} item={item} />
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={footerAnimations.item} className="space-y-6">
            <h3 className="text-white font-clash text-3xl font-semibold">
              Connect With Us
            </h3>
            <div className="flex flex-col space-y-3">
              {SOCIAL_LINKS.map((social) => (
                <SocialIcon key={social.name} {...social} />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Rest of the component remains unchanged */}
        <motion.div
          variants={footerAnimations.item}
          className="border-t border-white/5 mt-12 pt-8 text-center"
        >
          <div className="space-y-2">
            <Text className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Haven. All rights reserved.
            </Text>
            <Text className="text-gray-500 text-xs">
              <a href="/dmca" className="hover:text-gray-400 transition-colors">
                DMCA Policy
              </a>
            </Text>
          </div>
        </motion.div>

        {/* Background Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="absolute -top-32 left-1/2 w-[40rem] h-[40rem] bg-gradient-to-br from-red-400/5 to-pink-600/5 rounded-full blur-3xl transform -translate-x-1/2"
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="absolute bottom-0 right-0 w-[30rem] h-[30rem] bg-gradient-to-tl from-red-400/5 to-pink-600/5 rounded-full blur-3xl"
          />
        </div>
      </motion.div>
    </Container>
  </footer>
);

export default memo(Footer);
