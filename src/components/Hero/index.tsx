import { motion } from "framer-motion";
import { Container } from "../ui/container";
import { Section } from "../ui/section";
import { Text } from "../ui/text";
import { RetroBlur } from "../ui/retro-blur";
import { NoiseTexture } from "../ui/noise-texture";
import { heroTextAnim, staggerChildren } from "../../lib/animations";
import DynamicBackground from "./DynamicBackground";

const metrics = [
  {
    value: "50+",
    label: "DATA CENTERS",
  },
  {
    value: "10X",
    label: "FASTER DEPLOYMENTS",
  },
];

export const Hero = () => {
  return (
    <Section
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      spacing="none"
      container="full"
    >
      {/* Background Effects */}
      <DynamicBackground />
      <RetroBlur className="absolute inset-0" />
      <NoiseTexture />

      {/* Content */}
      <Container className="relative z-10 py-20">
        <motion.div
          className="max-w-5xl mx-auto text-center space-y-16"
          variants={staggerChildren}
          initial="hidden"
          animate="visible"
        >
          {/* Main Heading */}
          <motion.div variants={heroTextAnim} className="space-y-6">
            <h1 className="text-[clamp(2rem,8vw,6rem)] font-clash font-black tracking-wide leading-none bg-gradient-to-t bg-clip-text text-transparent  from-white to-gray-200">
              AI FRAMEWORK
              <br />
              TO TAKE YOU
              <br />
              ANYWHERE
            </h1>
            <p className="font-jakarta text-muted-foreground text-lg tracking-wide uppercase">
              SUPPORT YOUR GROWTH EVERY STEP OF THE WAY
              <br />— NO MATTER WHERE YOU'RE HEADED
            </p>
          </motion.div>

          {/* Metrics */}
          <motion.div
            variants={heroTextAnim}
            className="grid grid-cols-2 gap-x-8 max-w-2xl mx-auto bg-white/10 backdrop-blur-lg rounded-lg p-8"
          >
            {metrics.map((metric) => (
              <div key={metric.label} className="space-y-2">
                <Text className="font-clash text-[clamp(2.5rem,5vw,4.5rem)] font-bold bg-gradient-primary bg-clip-text text-transparent">
                  {metric.value}
                </Text>
                <Text className="font-jakarta text-sm tracking-wider text-muted-foreground">
                  {metric.label}
                </Text>
              </div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div variants={heroTextAnim}>
            <a
              href="#discover"
              className="inline-flex items-center font-jakarta text-lg bg-gradient-primary bg-clip-text text-transparent hover:opacity-80 transition-opacity uppercase tracking-wider"
            >
              DISCOVER MORE
            </a>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
};
