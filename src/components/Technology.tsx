import { memo } from "react";
import { Server, Shield, Cpu, LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import { textVariant } from "../lib/anims";

interface TechCardProps {
  Icon: LucideIcon;
  title: string;
  description: string;
  variant?: "primary" | "secondary";
}

interface SpecificationProps {
  title: string;
  formula: string;
}

const TechCard = memo(
  ({ Icon, title, description, variant = "secondary" }: TechCardProps) => {
    const baseStyles = "p-8 rounded-xl border backdrop-blur-sm";
    const variantStyles = {
      primary:
        "bg-gradient-to-br from-pink-800/20 via-pink-900/5 to-black border-pink-400/5",
      secondary:
        "bg-gradient-to-br from-red-900/20 to-black/50 border-red-800/20",
    };

    return (
      <motion.div
        className={`${baseStyles} ${variantStyles[variant]}`}
        variants={textVariant(0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <Icon className="h-12 w-12 text-red-400 mb-4" />
        <h3 className="text-2xl font-semibold text-white mb-3">{title}</h3>
        <p className="text-gray-400 text-lg">{description}</p>
      </motion.div>
    );
  }
);

const Specification = memo(({ title, formula }: SpecificationProps) => (
  <div>
    <h4 className="text-xl text-red-400 font-semibold mb-2">{title}</h4>
    <p className="text-gray-300 font-mono bg-black/40 p-4 rounded-lg">
      {formula}
    </p>
  </div>
));

const TECH_CARDS = [
  {
    Icon: Server,
    title: "Solana Infrastructure",
    description:
      "Leveraging Solana's high-performance blockchain for 65,000+ TPS and sub-second finality",
    variant: "primary" as const,
  },
  {
    Icon: Shield,
    title: "Zero-Knowledge Proofs",
    description:
      "Advanced cryptographic protocols ensuring participant privacy and data security",
    variant: "primary" as const,
  },
  {
    Icon: Cpu,
    title: "ML Infrastructure",
    description:
      "Sophisticated machine learning models for advanced video segmentation and analysis",
    variant: "primary" as const,
  },
];

const SPECIFICATIONS = [
  {
    title: "Computational Model",
    formula: "L(θ) = ∑[Li(θi)] + R(θ)",
  },
  {
    title: "Consensus Validation",
    formula: "C = f(S,A,R)",
  },
];

const Technology = () => {
  return (
    <section id="technology" className="w-full py-20 lg:py-40">
      <div className="container mx-auto">
        <div className="flex gap-8 items-center justify-center flex-col">
          <div className="flex gap-4 flex-col">
            <motion.h2
              variants={textVariant(0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="text-5xl md:text-7xl tracking-tight text-center font-semibold text-white mb-4"
            >
              Our{" "}
              <span className="bg-gradient-to-t bg-clip-text text-transparent from-red-400 to-pink-600">
                Architecture
              </span>
            </motion.h2>
            <p className="text-lg md:text-xl leading-relaxed tracking-tight text-gray-400 max-w-2xl text-center mx-auto">
              Built on cutting-edge blockchain and AI technologies to enable
              secure, scalable dataset generation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl">
            {TECH_CARDS.map((card, index) => (
              <TechCard key={index} {...card} />
            ))}
          </div>

          <div className="w-full max-w-7xl bg-gradient-to-br from-red-900/20 to-black/50 rounded-xl p-8 border border-red-800/20 backdrop-blur-sm">
            <h3 className="text-3xl font-semibold text-white mb-6 tracking-tighter">
              Technical Specifications
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {SPECIFICATIONS.map((spec, index) => (
                <Specification key={index} {...spec} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(Technology);
