import { memo } from "react";
import { Server, Shield, Cpu, LucideIcon, Users, Brain, Target } from "lucide-react";
import { motion } from "framer-motion";
import { Section } from "./ui/section";
import { Container } from "./ui/container";
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

// Add error boundary for this component
const TechnologyComponent = () => {
  try {
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
        Icon: Brain,
        title: "AI Model Training",
        description:
          "Web3 platform where community members classify videos to train Visual Language Models",
      },
      {
        Icon: Users,
        title: "Community Consensus",
        description:
          "Betting and reputation algorithms that reward accurate classifications",
      },
      {
        Icon: Target,
        title: "Privacy-First",
        description:
          "Uses curated public datasets - never touches personal videos",
      },
    ] as const;

    const SPECIFICATIONS = [
      {
        title: "Reputation Multiplier",
        description: "Better performance = bigger rewards",
        formula: "🎯 + 🏆 = 💰💰💰",
      },
      {
        title: "Consensus Betting",
        description: "Stake points, trust your gut, let community decide",
        formula: "🎲 + 👥 = 🎉",
      },
      {
        title: "Tier System",
        description: "Rookie to legend - unlock bigger rewards",
        formula: "🥉 → 🥈 → 🥇 → 👑",
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
        className="relative overflow-hidden text-center"
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
            <Icon className="h-12 w-12 text-primary mb-4 mx-auto" />
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
      description: string;
      formula: string;
    }

    const Specification = memo(({ title, description, formula }: SpecificationProps) => (
      <Card
        variant="glass"
        hover="scale"
        animate={false}
        className="relative overflow-hidden text-center"
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
            <Text className="bg-black/40 p-4 rounded-lg font-mono text-center" variant="muted">
              {description}
            </Text>
            <Text className="bg-black/40 p-4 rounded-lg font-mono text-center" variant="muted">
              {formula}
            </Text>
          </CardContent>
        </motion.div>
      </Card>
    ));

    return (
      <Section
        size="xl"
        align="center"
        spacing="xl"
        className="relative overflow-hidden isolate technology-section"
      >
        <RetroShapesAlt className="-z-10" />
        <RetroBlur className="absolute inset-0 opacity-30 -z-20" />
        <NoiseTexture className="absolute inset-0 opacity-10 -z-30" />

        <Container className="relative z-10" align="center">
          <motion.div
            className="relative flex gap-8 items-center justify-center flex-col text-center"
            variants={textVariant(0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <div className="flex gap-4 flex-col max-w-3xl mx-auto text-center">
              <motion.div className="space-y-6">
                <h1 className="text-7xl font-clash font-black tracking-wide leading-none bg-gradient-to-t bg-clip-text text-transparent from-slate-200 to-gray-200/70 text-center">
                  Our{" "}
                  <span className="bg-gradient-to-t bg-clip-text text-transparent from-red-400 to-pink-600 font-bold drop-shadow-sm">
                    Technology
                  </span>
                </h1>
                <p className="font-jakarta text-muted-foreground text-lg font-medium tracking-wide uppercase text-center">
                  Web3 AI training platform with community consensus for 
                  secure video classification and model improvement
                </p>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl mx-auto">
              {TECH_CARDS.map((card) => (
                <TechCard key={card.title} {...card} />
              ))}
            </div>

            <div className="w-full max-w-7xl mx-auto">
              <Card
                variant="glass"
                hover="glow"
                animate={false}
                className="relative overflow-hidden text-center"
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
                    <CardHeader className="p-0 mb-6 text-center">
                      <CardTitle>How You Win Big</CardTitle>
                    </CardHeader>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {SPECIFICATIONS.map((spec) => (
                        <Specification key={spec.title} {...spec} />
                      ))}
                    </div>
                  </CardContent>
                </motion.div>
              </Card>
            </div>
          </motion.div>
        </Container>
      </Section>
    );
  } catch (error) {
    console.error("Error in Technology component:", error);
    return (
      <div className="min-h-[400px] flex items-center justify-center text-gray-400">
        Technology section temporarily unavailable
      </div>
    );
  }
};

const Technology = memo(TechnologyComponent);

export default Technology;
