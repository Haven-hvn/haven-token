import { memo } from "react";
import { Server, Shield, Cpu, LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import { Section } from "./ui/section";
import { RetroShapesAlt } from "./ui/retro-shapes-alt";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "./ui/card";
import { RetroBlur } from "./ui/retro-blur";
import { NoiseTexture } from "./ui/noise-texture";
import { Text } from "./ui/text";
import { textVariant } from "../lib/anims";

const ANIMATION_CONFIG = {
  card: {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 40,
        damping: 20,
      },
    },
  },
};

const TECH_CARDS = [
  {
    Icon: Server,
    title: "Video Analysis Engine",
    description:
      "Advanced AI models for scene segmentation, object detection, and activity recognition in short-form video content",
  },
  {
    Icon: Shield,
    title: "Privacy-First Design",
    description:
      "Local-first processing ensures your personal videos stay private while contributing to public model training",
  },
  {
    Icon: Cpu,
    title: "Community Consensus",
    description:
      "Betting and reputation system that rewards accurate classifications and maintains high-quality training data",
  },
] as const;

const SPECIFICATIONS = [
  {
    title: "Video Classification Model",
    formula: "C(v) = f(θ, S, A, R)",
  },
  {
    title: "Consensus Validation",
    formula: "R = Σ(w_i * c_i) / Σ(w_i)",
  },
] as const;

interface TechCardProps {
  Icon: LucideIcon;
  title: string;
  description: string;
}

const TechCard = memo(({ Icon, title, description }: TechCardProps) => (
  <Card
    variant="glass"
    hover="glow"
    animate={false}
    className="relative overflow-hidden"
  >
    <RetroBlur className="absolute inset-0 opacity-50" />
    <NoiseTexture className="absolute inset-0 opacity-10" />
    <motion.div
      variants={ANIMATION_CONFIG.card}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-50px" }}
    >
      <CardContent>
        <Icon className="h-12 w-12 text-primary mb-4" />
        <CardHeader className="p-0">
          <CardTitle>{title}</CardTitle>
          <CardDescription className="text-lg">{description}</CardDescription>
        </CardHeader>
      </CardContent>
    </motion.div>
  </Card>
));

interface SpecificationProps {
  title: string;
  formula: string;
}

const Specification = memo(({ title, formula }: SpecificationProps) => (
  <Card
    variant="glass"
    hover="scale"
    animate={false}
    className="relative overflow-hidden"
  >
    <RetroBlur className="absolute inset-0 opacity-10" />
    <NoiseTexture className="absolute inset-0 opacity-10" />
    <motion.div
      variants={ANIMATION_CONFIG.card}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-50px" }}
    >
      <CardContent>
        <CardHeader className="p-0">
          <CardTitle className="text-xl text-primary mb-2">{title}</CardTitle>
        </CardHeader>
        <Text className="bg-black/40 p-4 rounded-lg font-mono" variant="muted">
          {formula}
        </Text>
      </CardContent>
    </motion.div>
  </Card>
));

const Technology = () => {
  return (
    <Section
      id="technology"
      size="xl"
      align="center"
      spacing="xl"
      className="relative overflow-hidden isolate"
    >
      <RetroShapesAlt className="-z-10" />
      <RetroBlur className="absolute inset-0 opacity-30 -z-20" />
      <NoiseTexture className="absolute inset-0 opacity-10 -z-30" />

      <motion.div
        className="relative flex gap-8 items-center justify-center flex-col"
        variants={textVariant(0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <div className="flex gap-4 flex-col max-w-3xl">
          <motion.div className="space-y-6">
            <h1 className="text-7xl font-clash font-black tracking-wide leading-none bg-gradient-to-t bg-clip-text text-transparent from-slate-200 to-gray-200/70">
              Our{" "}
              <span className="bg-gradient-to-t bg-clip-text text-transparent from-red-400 to-pink-600 font-bold drop-shadow-sm">
                Technology
              </span>
            </h1>
            <p className="font-jakarta text-muted-foreground text-lg font-medium tracking-wide uppercase">
              Built on cutting-edge AI and community consensus to enable 
              secure, scalable video classification and model training
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl">
          {TECH_CARDS.map((card) => (
            <TechCard key={card.title} {...card} />
          ))}
        </div>

        <div className="w-full max-w-7xl">
          <Card
            variant="glass"
            hover="glow"
            animate={false}
            className="relative overflow-hidden"
          >
            <RetroBlur className="absolute inset-0 opacity-30" />
            <NoiseTexture className="absolute inset-0 opacity-10" />
            <motion.div
              variants={ANIMATION_CONFIG.card}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
            >
              <CardContent>
                <CardHeader className="p-0 mb-6">
                  <CardTitle>Technical Specifications</CardTitle>
                </CardHeader>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {SPECIFICATIONS.map((spec) => (
                    <Specification key={spec.title} {...spec} />
                  ))}
                </div>
              </CardContent>
            </motion.div>
          </Card>
        </div>
      </motion.div>
    </Section>
  );
};

TechCard.displayName = "TechCard";
Specification.displayName = "Specification";

export default memo(Technology);
