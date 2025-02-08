import { textVariant } from "../lib/anims";
import { motion, Variants } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import React from "react";
import { Card, CardContent } from "./ui/card";
import { Text } from "./ui/text";
import { Heading } from "./ui/heading";

interface CommunityBarProps {
  icon?: React.ReactNode;
  title: string;
  description: string;
  link: string;
  svg?: string;
}

function CommunityBar({
  icon,
  svg,
  title,
  description,
  link,
}: CommunityBarProps) {
  const variants: Variants = textVariant(0.1);

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      variants={variants}
      className="w-full lg:w-1/2 p-4"
    >
      <a href={link} target="_blank" rel="noopener noreferrer">
        <Card hover="scale" variant="glass" className="bg-neutral-900/50">
          <CardContent>
            <div className="flex justify-between items-start">
              <div className="flex gap-3 items-center">
                {icon && <span className="text-white">{icon}</span>}
                {svg && (
                  <img
                    src={svg}
                    width={24}
                    height={24}
                    alt=""
                    className="text-white"
                  />
                )}
                <Heading level="h3" className="text-lg font-semibold">
                  {title}
                </Heading>
              </div>
              <ArrowUpRight className="w-6 h-6" />
            </div>
            <Text variant="muted" className="mt-2">
              {description}
            </Text>
          </CardContent>
        </Card>
      </a>
    </motion.div>
  );
}

export default CommunityBar;
