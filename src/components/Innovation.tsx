import { memo, useRef } from "react";
import { Box, Users, Lock, Brain, Star, Database, Shield } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { Section } from "./ui/section";
import { Container } from "./ui/container";
import { Heading } from "./ui/heading";
import { Text } from "./ui/text";
import { Card } from "./ui/card";
import { RetroShapesAlt } from "./ui/retro-shapes-alt";

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

const ADVANCED_FEATURES = [
  {
    icon: Lock,
    title: "Privacy-First Processing",
    description:
      "Your personal videos stay local while contributing to public model training through secure metadata sharing",
  },
  {
    icon: Star,
    title: "Reputation & Rewards",
    description:
      "Build reputation through accurate classifications and earn rewards based on community consensus and betting success",
  },
  {
    icon: Brain,
    title: "AI Model Integration",
    description:
      "Advanced Visual Language Models provide intelligent video analysis and classification assistance",
  },
] as const;

const COMMUNITY_FEATURES = [
  {
    icon: Database,
    title: "Video Classification",
    description:
      "Classify short video clips with scene segmentation, object detection, and activity recognition",
  },
  {
    icon: Shield,
    title: "Quality Assurance",
    description:
      "Community consensus and betting system ensures high-quality training data and accurate classifications",
  },
  {
    icon: Users,
    title: "Community Governance",
    description:
      "Participate in platform decisions and contribute to the future of AI-powered video understanding",
  },
] as const;

const STATS = [
  { icon: Box, title: "Video Analysis", value: "Real-time" },
  { icon: Users, title: "Community Model", value: "Consensus" },
  { icon: Lock, title: "Privacy Model", value: "Local-first" },
  { icon: Brain, title: "AI Training", value: "Continuous" },
] as const;

interface FeatureProps {
  icon: (typeof ADVANCED_FEATURES)[number]["icon"];
  title: string;
  description: string;
}

const Feature = memo(({ icon: Icon, title, description }: FeatureProps) => (
  <motion.div
    variants={ANIMATION_CONFIG.item}
    className="flex items-start gap-4 p-4 bg-black/40 rounded-lg border border-red-800/20 hover:border-red-600/30"
  >
    <Icon className="h-6 w-6 text-red-400 flex-shrink-0 mt-1" />
    <div>
      <Text variant="primary" weight="semibold" className="mb-1">
        {title}
      </Text>
      <Text variant="muted">{description}</Text>
    </div>
  </motion.div>
));

const FeatureCard = memo(
  ({
    title,
    features,
  }: {
    title: string;
    features: readonly FeatureProps[];
  }) => (
    <Card
      variant="glass"
      className="border border-red-800/20 bg-gradient-to-br from-red-900/20 to-black/50 p-8 backdrop-blur-lg"
    >
      <Heading level="h3" className="text-2xl font-bold text-white mb-6">
        {title}
      </Heading>
      <motion.div
        variants={ANIMATION_CONFIG.container}
        initial="hidden"
        animate="show"
        className="space-y-4"
      >
        {features.map((feature) => (
          <Feature key={feature.title} {...feature} />
        ))}
      </motion.div>
    </Card>
  )
);

const StatCard = memo(
  ({ icon: Icon, title, value }: (typeof STATS)[number]) => (
    <motion.div variants={ANIMATION_CONFIG.item}>
      <Card
        variant="glass"
        className="border border-red-800/20 bg-gradient-to-br from-red-900/20 to-black/50 p-6 text-center
                transition-colors duration-300 hover:border-red-600/30"
      >
        <Icon className="h-12 w-12 text-red-400 mx-auto mb-4" />
        <Heading level="h4" className="text-xl text-center mb-2">
          {title}
        </Heading>
        <Text className="text-center" weight="bold" size="xl">
          {value}
        </Text>
      </Card>
    </motion.div>
  )
);

Feature.displayName = "Feature";
FeatureCard.displayName = "FeatureCard";
StatCard.displayName = "StatCard";

const Innovation = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <Section
      id="innovation"
      background="muted"
      size="xl"
      align="center"
      className="bg-black relative overflow-hidden"
    >
      <RetroShapesAlt className="z-0 opacity-100" />
      <Container className="relative z-10" ref={ref}>
        <motion.div
          variants={ANIMATION_CONFIG.container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="flex gap-4 flex-col mb-12"
        >
          <div className="text-center">
            <Heading className="tracking-tight mb-4">
              Our{" "}
              <span className="bg-gradient-to-b bg-clip-text text-transparent from-red-400 to-pink-500">
                Platform Features
              </span>
            </Heading>
            <Text className="lg:text-lg md:text-xl font-mono text-gray-400 max-w-2xl">
              Sinbox leverages cutting-edge AI and community consensus to 
              create a revolutionary video classification ecosystem
            </Text>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <FeatureCard title="Advanced Features" features={ADVANCED_FEATURES} />
          <FeatureCard
            title="Community Features"
            features={COMMUNITY_FEATURES}
          />
        </div>

        <motion.div
          variants={ANIMATION_CONFIG.container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {STATS.map((stat) => (
            <StatCard key={stat.title} {...stat} />
          ))}
        </motion.div>
      </Container>
    </Section>
  );
};

export default memo(Innovation);
