import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { Button } from "../ui/button";
import { Container } from "../ui/container";
import { Heading } from "../ui/heading";
import { Section } from "../ui/section";
import { Text } from "../ui/text";
import { Card, CardContent } from "../ui/card";
import { GradientBackground, GridPattern } from "../ui/gradient-background";
import { heroTextAnim, staggerChildren } from "../../lib/animations";

const stats = [
  {
    label: "Total Value Locked",
    value: "$10M+",
    description: "Secured in smart contracts",
  },
  {
    label: "Active Nodes",
    value: "1,000+",
    description: "Powering the network",
  },
  {
    label: "Community Members",
    value: "50,000+",
    description: "Growing globally",
  },
];

export const Hero = () => {
  return (
    <Section
      className="min-h-[90vh] flex items-center relative overflow-hidden"
      spacing="none"
      container="full"
    >
      {/* Background Effects */}
      <GradientBackground
        variant="primary"
        intensity="strong"
        className="opacity-60"
      />
      <GridPattern
        size="lg"
        opacity="medium"
        className="mix-blend-soft-light"
      />

      <Container className="relative z-10 py-20">
        <motion.div
          className="max-w-4xl mx-auto text-center space-y-8"
          variants={staggerChildren}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div variants={heroTextAnim}>
            <Text
              size="lg"
              variant="primary"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20"
            >
              Introducing Haven Protocol
              <ChevronRight className="h-4 w-4" />
            </Text>
          </motion.div>

          {/* Main Heading */}
          <motion.div variants={heroTextAnim}>
            <Heading
              level="h1"
              color="gradient"
              align="center"
              className="max-w-3xl mx-auto"
            >
              The Next Generation of{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                Decentralized Intelligence
              </span>
            </Heading>
          </motion.div>

          {/* Subtitle */}
          <motion.div variants={heroTextAnim}>
            <Text
              size="xl"
              variant="muted"
              className="max-w-2xl mx-auto"
              align="center"
            >
              Experience the future of AI-powered blockchain technology. Haven
              combines advanced artificial intelligence with secure
              decentralized infrastructure.
            </Text>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            className="flex flex-wrap items-center justify-center gap-4"
            variants={heroTextAnim}
          >
            <Button size="lg" variant="gradient">
              Get Started
            </Button>
            <Button size="lg" variant="outline">
              Read Whitepaper
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12"
            variants={heroTextAnim}
          >
            {stats.map((stat) => (
              <Card
                key={stat.label}
                variant="glass"
                hover="scale"
                animate={true}
                className="text-center"
              >
                <CardContent className="space-y-2">
                  <Text
                    size="2xl"
                    weight="bold"
                    variant="gradient"
                    className="font-clash"
                  >
                    {stat.value}
                  </Text>
                  <div className="space-y-1">
                    <Text size="base" weight="medium" className="text-white">
                      {stat.label}
                    </Text>
                    <Text size="sm" variant="muted">
                      {stat.description}
                    </Text>
                  </div>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
};
