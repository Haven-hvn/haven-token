import { memo } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { RetroShapes } from "./ui/retro-shapes";
import { Container } from "./ui/container";
import { Text } from "./ui/text";
import { SocialIcon } from "./ui/SocialIcon";
import { footerAnimations } from "../utils/animations";

const NAVIGATION = {
  QUICK_LINKS: ["Whitepaper", "Technology", "Use Cases", "Tokenomics"],
  RESOURCES: ["Documentation", "FAQs", "Community", "Blog"],
} as const;

const SOCIAL_LINKS = [
  {
    name: "Follow on X",
    href: "https://x.com/HavenCryptoNet",
    icon: "M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z",
  },
  {
    name: "Join Discord",
    href: "https://discord.gg/haven",
    icon: "M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z",
  },
  {
    name: "Join Telegram",
    href: "https://t.me/HavenNetworkCommunity",
    icon: "M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z",
  },
  {
    name: "Visit LinkedIn",
    href: "https://www.linkedin.com/company/haven-network",
    icon: "M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z",
  },
] as const;

interface FooterLinkProps {
  item: string;
}

const FooterLink = memo(({ item }: FooterLinkProps) => (
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
        <span className="h-px w-4 bg-gradient-to-r from-red-400 to-pink-600 transform origin-left group-hover:w-5 transition-all duration-200" />
        <span>{item}</span>
      </Link>
    ) : (
      <a
        href={`#${item.toLowerCase()}`}
        className="text-gray-300 hover:text-white flex items-center space-x-2 text-sm group transition-all duration-200"
      >
        <span className="h-px w-4 bg-gradient-to-r from-red-400 to-pink-600 transform origin-left group-hover:w-5 transition-all duration-200" />
        <span>{item}</span>
      </a>
    )}
  </motion.li>
));

const FooterSection = memo(
  ({ title, items }: { title: string; items: readonly string[] }) => (
    <motion.div variants={footerAnimations.item} className="space-y-6">
      <h3 className="text-white font-clash text-3xl font-semibold">{title}</h3>
      <ul className="space-y-3">
        {items.map((item) => (
          <FooterLink key={item} item={item} />
        ))}
      </ul>
    </motion.div>
  )
);

const FooterBackground = memo(() => (
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
));

FooterLink.displayName = "FooterLink";
FooterSection.displayName = "FooterSection";
FooterBackground.displayName = "FooterBackground";

const Footer = memo(() => {
  return (
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
            <motion.div variants={footerAnimations.item} className="space-y-6">
              <h3 className="text-white font-clash text-3xl font-semibold">
                About Haven
              </h3>
              <Text className="text-gray-300 font-mono text-sm leading-relaxed">
                Haven is a revolutionary crypto network focused on privacy,
                security, and decentralized solutions for digital assets.
              </Text>
            </motion.div>

            <FooterSection title="Quick Links" items={NAVIGATION.QUICK_LINKS} />
            <FooterSection title="Resources" items={NAVIGATION.RESOURCES} />

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

          <motion.div
            variants={footerAnimations.item}
            className="border-t border-white/5 mt-12 pt-8 text-center"
          >
            <div className="space-y-2">
              <Text className="text-gray-400 text-sm">
                © {new Date().getFullYear()} Haven. All rights reserved.
              </Text>
              <Text className="text-gray-500 text-xs">
                <Link
                  to="/dmca"
                  className="hover:text-gray-400 transition-colors"
                >
                  DMCA Policy
                </Link>
              </Text>
            </div>
          </motion.div>

          <FooterBackground />
        </motion.div>
      </Container>
    </footer>
  );
});

Footer.displayName = "Footer";

export default Footer;
