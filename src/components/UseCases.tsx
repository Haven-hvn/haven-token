import { memo, useRef } from "react";
import { Video, Shield, Bot, Eye } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { Section } from "./ui/section";
import { Container } from "./ui/container";
import { Heading } from "./ui/heading";
import { Text } from "./ui/text";
import { Card } from "./ui/card";
import { RetroShapes } from "./ui/retro-shapes";

const USE_CASES = [
  {
    icon: Video,
    title: "Short-Form Video Classification",
    description:
      "Classify and tag short video clips to improve content discovery, recommendations, and search capabilities across video platforms",
  },
  {
    icon: Bot,
    title: "Visual Language Model Training",
    description:
      "Contribute to training AI models that can understand complex visual content, actions, and contextual information in videos",
  },
  {
    icon: Eye,
    title: "Content Moderation & Safety",
    description:
      "Help train AI systems for nuanced content understanding, enabling more effective and fair content moderation practices",
  },
  {
    icon: Shield,
    title: "Privacy-Preserving AI Development",
    description:
      "Participate in AI advancement while maintaining data privacy through local-first processing and community consensus",
  },
] as const;

const ANIMATION_CONFIG = {
  container: {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  },
  item: {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  },
} as const;

interface UseCaseCardProps {
  icon: (typeof USE_CASES)[number]["icon"];
  title: string;
  description: string;
}

const UseCaseCard = memo(
  ({ icon: Icon, title, description }: UseCaseCardProps) => (
    <motion.div
      variants={ANIMATION_CONFIG.item}
      whileHover={{ scale: 1.02 }}
      className="h-full"
    >
      <Card
        variant="glass"
        className="border border-red-800/20 bg-gradient-to-br from-red-900/20 to-black/50 p-8 backdrop-blur-lg h-full
                transition-colors duration-300 hover:border-red-600/30 hover:from-red-900/30 hover:to-black/60"
      >
        <Icon className="h-12 w-12 text-red-400 mb-4" />
        <Heading level="h3" className="text-xl mb-3">
          {title}
        </Heading>
        <Text className="text-gray-400">{description}</Text>
      </Card>
    </motion.div>
  )
);

UseCaseCard.displayName = "UseCaseCard";

const UseCases = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <Section
      background="muted"
      size="xl"
      align="center"
      className="bg-black relative"
    >
      <RetroShapes className="z-0 opacity-100" />
      <Container className="relative z-10" ref={ref}>
        <motion.div
          variants={ANIMATION_CONFIG.container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="flex gap-4 flex-col mb-16"
        >
          <div className="text-center">
            <Heading className="tracking-tight mb-4">
              Use{" "}
              <span className="bg-gradient-to-b bg-clip-text text-transparent from-red-400 to-pink-500">
                Cases
              </span>
            </Heading>
            <Text className="text-lg md:text-xl font-mono text-center text-gray-400 max-w-2xl lg:text-left">
              Transforming video understanding through community-driven AI training 
              and classification
            </Text>
          </div>
        </motion.div>

        <motion.div
          variants={ANIMATION_CONFIG.container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {USE_CASES.map((useCase) => (
            <UseCaseCard key={useCase.title} {...useCase} />
          ))}
        </motion.div>
      </Container>
    </Section>
  );
};

export default memo(UseCases);
