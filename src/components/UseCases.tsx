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
    title: "Haven Player VLM Training",
    description:
      "Train Visual Language Models for Haven Player - the local-first AI video analysis tool",
    link: "https://github.com/Haven-hvn/haven-player",
  },
  {
    icon: Bot,
    title: "Flux Model Development",
    description:
      "Improve NSFW video generation models",
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
  link?: string;
}

const UseCaseCard = memo(
  ({ icon: Icon, title, description, link }: UseCaseCardProps) => (
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
        <Text className="text-gray-400">
          {description}
          {link && (
            <>
              {" "}
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-400 hover:text-red-300 underline transition-colors"
              >
                View on GitHub →
              </a>
            </>
          )}
        </Text>
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
      className="bg-black relative use-cases-section"
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
          </div>
        </motion.div>

        <motion.div
          variants={ANIMATION_CONFIG.container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl mx-auto"
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
