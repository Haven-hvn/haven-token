import React, { useRef } from "react";
import { Box, Users, Lock, Brain, Star, Database, Shield } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { Section } from "./ui/section";
import { Container } from "./ui/container";
import { Heading } from "./ui/heading";
import { Text } from "./ui/text";
import { Card } from "./ui/card";
// import { RetroShapes } from "./ui/retro-shapes";
import { RetroShapesAlt } from "./ui/retro-shapes-alt";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
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
};

const Innovation = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <Section
      background="muted"
      size="xl"
      align="center"
      className="bg-black relative overflow-hidden"
    >
      <RetroShapesAlt className="z-0 opacity-100" />
      <Container className="relative z-10" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="flex gap-4 flex-col mb-12"
        >
          <div className="text-center">
            <Heading className="tracking-tight mb-4">
              Our{" "}
              <span className="bg-gradient-to-b bg-clip-text text-transparent from-red-400 to-pink-500">
                Innovative Design
              </span>
            </Heading>
            <Text className="lg:text-lg md:text-xl  font-mono  text-gray-400 max-w-2xl ">
              HAVEN leverages cutting-edge AI and blockchain technology to
              create a revolutionary ecosystem
            </Text>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <Card
            variant="glass"
            className="border border-red-800/20 bg-gradient-to-br from-red-900/20 to-black/50 p-8 backdrop-blur-lg"
          >
            <Heading level="h3" className="text-2xl font-bold text-white mb-6">
              Advanced Features
            </Heading>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "show" : "hidden"}
              className="space-y-4"
            >
              {[
                {
                  icon: Lock,
                  title: "Premium Access System",
                  description:
                    "Secure tiered access to exclusive content and advanced AI features",
                },
                {
                  icon: Star,
                  title: "Progressive Enhancement",
                  description:
                    "Unlock additional capabilities and features as you contribute to the ecosystem",
                },
                {
                  icon: Brain,
                  title: "AI Integration",
                  description:
                    "Advanced machine learning models provide intelligent content analysis and recommendations",
                },
              ].map((feature) => (
                <motion.div
                  key={feature.title}
                  variants={itemVariants}
                  className="flex items-start gap-4 p-4 bg-black/40 rounded-lg border border-red-800/20 hover:border-red-600/30"
                >
                  <feature.icon className="h-6 w-6 text-red-400 flex-shrink-0 mt-1" />
                  <div>
                    <Text variant="primary" weight="semibold" className="mb-1">
                      {feature.title}
                    </Text>
                    <Text variant="muted">{feature.description}</Text>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </Card>

          <Card
            variant="glass"
            className="border border-red-800/20 bg-gradient-to-br from-red-900/20 to-black/50 p-8 backdrop-blur-lg"
          >
            <Heading level="h3" className="text-2xl font-bold text-white mb-6">
              Community Features
            </Heading>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "show" : "hidden"}
              className="space-y-4"
            >
              {[
                {
                  icon: Database,
                  title: "Content Curation",
                  description:
                    "Contribute to AI dataset refinement through intelligent content labeling",
                },
                {
                  icon: Shield,
                  title: "Quality Assurance",
                  description:
                    "Advanced validation systems ensure high-quality content and contributions",
                },
                {
                  icon: Users,
                  title: "Decentralized Governance",
                  description:
                    "Community-driven decision making based on contribution and engagement",
                },
              ].map((feature) => (
                <motion.div
                  key={feature.title}
                  variants={itemVariants}
                  className="flex items-start gap-4 p-4 bg-black/40 rounded-lg border border-red-800/20 hover:border-red-600/30"
                >
                  <feature.icon className="h-6 w-6 text-red-400 flex-shrink-0 mt-1" />
                  <div>
                    <Text variant="primary" weight="semibold" className="mb-1">
                      {feature.title}
                    </Text>
                    <Text variant="muted">{feature.description}</Text>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </Card>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {[
            { icon: Box, title: "Technology Stack", value: "TBD" },
            { icon: Users, title: "Community Model", value: "TBD" },
            { icon: Lock, title: "Security Model", value: "TBD" },
            { icon: Brain, title: "AI Architecture", value: "TBD" },
          ].map((stat) => (
            <motion.div key={stat.title} variants={itemVariants}>
              <Card
                variant="glass"
                className="border border-red-800/20 bg-gradient-to-br from-red-900/20 to-black/50 p-6 text-center
                          transition-colors duration-300 hover:border-red-600/30"
              >
                <stat.icon className="h-12 w-12 text-red-400 mx-auto mb-4" />
                <Heading level="h4" className="text-xl text-center mb-2">
                  {stat.title}
                </Heading>
                <Text className="text-center" weight="bold" size="xl">
                  {stat.value}
                </Text>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
};

export default Innovation;
