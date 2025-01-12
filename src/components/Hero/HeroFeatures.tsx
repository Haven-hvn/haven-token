import React from 'react';
import { Brain, Lock, Rocket } from 'lucide-react';
import FeatureCard from './FeatureCard';

const features = [
  {
    icon: Brain,
    title: "Smart AF",
    description: "AI that actually understands what you're into 😏"
  },
  {
    icon: Lock,
    title: "Private & Secure",
    description: "What happens on Haven, stays on Haven 🤫"
  },
  {
    icon: Rocket,
    title: "To The Moon",
    description: "Earn $HVN while enjoying your favorite content 💸"
  }
];

export const HeroFeatures = () => {
  return (
    <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
      {features.map((feature) => (
        <FeatureCard key={feature.title} {...feature} />
      ))}
    </div>
  );
};
