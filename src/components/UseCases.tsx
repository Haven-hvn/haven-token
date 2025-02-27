import React, { useRef } from "react";
import { Video, Shield, Bot, Eye } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { Section } from "./ui/section";
import { Container } from "./ui/container";
import { Heading } from "./ui/heading";
import { Text } from "./ui/text";
import { Card } from "./ui/card";
import { RetroShapes } from "./ui/retro-shapes";

const useCases = [
  {
    icon: Video,
    title: "Enhanced Video Understanding",
    description:
      "Automatic labeling and metadata generation for short-form video platforms, enabling improved content discovery and recommendations",
  },
  {
    icon: Bot,
    title: "Next-Gen Visual Language Models",
    description:
      "Advanced AI models capable of understanding and responding to complex visual and behavioral cues",
  },
  {
    icon: Eye,
    title: "Content Moderation",
    description:
      "Training AI for nuanced content understanding, enabling more effective and fair moderation practices",
  },
  {
    icon: Shield,
    title: "Responsible AI Development",
    description:
      "Creating meticulously curated datasets with robust governance frameworks for ethical AI advancement",
  },
];

const UseCases = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="flex gap-4 flex-col mb-16"
        >
          <div className="text-center">
            <Heading className="tracking-tight mb-4">
              Use{" "}
              <span className="bg-gradient-to-b bg-clip-text text-transparent from-red-400 to-pink-500 ">
                Cases
              </span>
            </Heading>
            <Text className="text-lg md:text-xl font-mono text-center text-gray-400 max-w-2xl lg:text-left">
              Transforming multiple industries through advanced AI dataset
              generation
            </Text>
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {useCases.map((useCase) => (
            <motion.div
              key={useCase.title}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="h-full"
            >
              <Card
                variant="glass"
                className="border border-red-800/20 bg-gradient-to-br from-red-900/20 to-black/50 p-8 backdrop-blur-lg h-full
                          transition-colors duration-300 hover:border-red-600/30 hover:from-red-900/30 hover:to-black/60"
              >
                <useCase.icon className="h-12 w-12 text-red-400 mb-4" />
                <Heading level="h3" className="text-xl mb-3">
                  {useCase.title}
                </Heading>
                <Text className="text-gray-400">{useCase.description}</Text>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
};

export default UseCases;
