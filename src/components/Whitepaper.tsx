import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "../lib/utils";

const navItems = [
  { id: "abstract", title: "Abstract" },
  { id: "introduction", title: "Introduction" },
  { id: "preliminary-use-cases", title: "Preliminary Use Cases" },
  { id: "technological-architecture", title: "Technological Architecture" },
  {
    id: "machine-learning-infrastructure",
    title: "Machine Learning Infrastructure",
  },
  { id: "blockchain-infrastructure", title: "Blockchain Infrastructure" },
  { id: "economic-model", title: "Economic Model" },
  { id: "ethical-considerations", title: "Ethical Considerations" },
  { id: "conclusion", title: "Conclusion" },
];

export const Whitepaper = () => {
  const [activeNavItem, setActiveNavItem] = useState<string>("abstract");

  const handleScroll = () => {
    const sections = navItems.map((item) => {
      const el = document.getElementById(item.id);
      if (!el) return { id: item.id, position: 0 };
      const rect = el.getBoundingClientRect();
      return { id: item.id, position: Math.abs(rect.top) };
    });

    const closest = sections.reduce((prev, curr) =>
      prev.position < curr.position ? prev : curr
    );

    setActiveNavItem(closest.id);
  };

  return (
    <div className="min-h-screen max-w-7xl mx-auto bg-gradient-to-b from-black via-black/95 to-black/90 text-white pt-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Navigation */}
          <nav className="md:w-1/4 lg:w-1/5">
            <div className="sticky top-24 space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={cn(
                    "block py-2 px-4 rounded-lg transition-all duration-200",
                    activeNavItem === item.id
                      ? "bg-pink-600/20 text-red-400"
                      : "hover:bg-pink-600/10 text-gray-400 hover:text-red-400"
                  )}
                >
                  {item.title}
                </a>
              ))}
            </div>
          </nav>

          {/* Content */}
          <motion.div
            className="flex-1 prose prose-invert max-w-none"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            onScroll={handleScroll}
          >
            <h1 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-pink-600">
              HAVEN: Human Activity Valuation and Exploration Network
            </h1>
            <h2 className="text-2xl text-gray-400 mb-12">
              Technical Whitepaper v1.0
            </h2>

            <section id="abstract" className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-red-400">Abstract</h2>
              <p className="text-gray-300 leading-relaxed">
                Technological innovation in artificial intelligence demands
                increasingly sophisticated approaches to dataset generation,
                particularly in domains requiring nuanced human understanding.
                The intersection of machine learning, blockchain technology, and
                specialized content domains presents unprecedented opportunities
                for advanced data annotation methodologies.
              </p>
              <p className="text-gray-300 leading-relaxed mt-4">
                Our research explores a novel decentralized infrastructure
                designed to revolutionize dataset creation through
                cryptographically secured, ethically managed participatory
                mechanisms. This network leverages a protocol for governance,
                data validation, and participant compensation, creating a robust
                ecosystem for collaborative knowledge generation.
              </p>
            </section>

            <section id="introduction" className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-red-400">
                Introduction
              </h2>
              <p className="text-gray-300">
                The contemporary landscape of artificial intelligence training
                faces significant challenges in acquiring high-quality,
                contextually rich datasets. Traditional data collection
                paradigms suffer from inherent limitations: centralized control,
                opaque participant compensation, limited diversity, and
                constrained representational depth. These systemic constraints
                fundamentally restrict the potential sophistication of machine
                learning models, particularly in domains requiring intricate
                semantic understanding and granular action recognition.
              </p>
              <p className="text-gray-300 mt-4">
                Modern vision-language models demand increasingly complex
                training datasets that capture subtle human interactions,
                contextual nuances, and domain-specific behavioral patterns.
                Existing methodologies predominantly rely on limited, often
                biased dataset generation techniques that fail to capture the
                multidimensional complexity of human activity. Our proposed
                framework introduces a transformative approach that leverages
                blockchain technology, distributed computational resources, and
                advanced cryptographic protocols to create a fundamentally
                reimagined data annotation ecosystem.
              </p>
            </section>

            <section id="preliminary-use-cases" className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-red-400">
                Preliminary Use Cases
              </h2>
              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li>
                  <strong>Responsibly Generating AI Porn:</strong> HAVEN offers
                  a platform for creating meticulously curated datasets that
                  capture the nuances of adult media, enabling accurate content
                  categorization, age verification, and safety monitoring.
                </li>
                <li>
                  <strong>Enhanced Video Understanding:</strong> A TikTok-style
                  platform where visual models automatically generate initial
                  labeling for short-form videos, improving content discovery
                  and personalized recommendations.
                </li>
                <li>
                  <strong>Next-Generation Visual Language Models:</strong>{" "}
                  Enabling AI agent cam girls to perceive and respond to user's
                  actions, voice, and visual cues in real-time for immersive
                  interactions.
                </li>
                <li>
                  <strong>Content Moderation:</strong> Training AI to understand
                  context and nuances of online content for more effective
                  moderation practices.
                </li>
              </ul>
            </section>

            <section id="technological-architecture" className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-red-400">
                Technological Architecture and Computational Framework
              </h2>
              <p className="text-gray-300">
                The architectural design of the HAVEN protocol emerges from a
                sophisticated integration of multiple advanced technological
                domains. At its core, the system leverages a distributed
                computational infrastructure built upon the Solana blockchain,
                providing unprecedented transaction throughput and cryptographic
                security.
              </p>
              <p className="text-gray-300 mt-4">
                The primary computational workflow initiates with advanced video
                segmentation algorithms capable of granular action recognition
                and semantic parsing. Each submitted video undergoes a complex
                transformation process wherein machine vision techniques
                deconstruct the visual signal into discrete, semantically
                meaningful clips.
              </p>
              <p className="text-gray-300 mt-4">
                Our segmentation methodology implements advanced computer vision
                techniques that extend beyond traditional frame-by-frame
                analysis. The algorithm employs a combination of convolutional
                neural networks, temporal coherence modeling, and semantic
                action recognition to identify meaningful video segments.
              </p>
              <p className="text-gray-300 mt-4">
                The human annotation stage represents a critical juncture in
                dataset generation, wherein domain experts provide sophisticated
                semantic interpretations of the segmented video content. HAVEN
                implements a reputation-based system that dynamically evaluates
                annotator performance, ensuring consistently high-quality
                dataset curation.
              </p>
            </section>

            <section id="machine-learning-infrastructure" className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-red-400">
                Machine Learning Model Training Infrastructure
              </h2>
              <p className="text-gray-300">
                The training of vision-language models (VLMs) demands
                sophisticated computational approaches that extend traditional
                machine learning paradigms. Our proposed framework introduces an
                innovative training methodology that integrates advanced
                representation learning techniques with cryptographically
                secured dataset management.
              </p>
              <p className="text-gray-300 mt-4">
                To assess performance, several benchmarks have been introduced
                to measure vision-linguistic and reasoning abilities. However,
                many of these benchmarks have limitations, such as being
                solvable primarily through language priors.
              </p>
              <div className="my-6">
                <code className="text-sm font-mono text-gray-400 block">
                  L(θ) = ∑[Li(θi)] + R(θ)
                </code>
              </div>
              <p className="text-gray-300 mt-4">
                Our training protocol implements a novel federated learning
                approach that distributes computational workload across multiple
                nodes while maintaining strict privacy preservation. Each
                computational node contributes to the collective model training
                through encrypted gradient aggregation.
              </p>
            </section>

            <section id="blockchain-infrastructure" className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-red-400">
                Blockchain Infrastructure and Cryptographic Security
              </h2>
              <p className="text-gray-300">
                The Solana blockchain provides the foundational infrastructure
                for HAVEN's decentralized ecosystem, offering exceptional
                computational performance and cryptographic integrity. With a
                transaction throughput exceeding 65,000 transactions per second
                and sub-second finality, the platform enables real-time, secure
                participant interactions.
              </p>
              <div className="my-6">
                <code className="text-sm font-mono text-gray-400 block">
                  C = f(S, A, R)
                </code>
              </div>
              <p className="text-gray-300 mt-4">
                Smart contract implementations utilize the Rust programming
                language, providing enhanced memory safety and computational
                efficiency. Each contract undergoes rigorous formal verification
                processes to eliminate potential vulnerabilities.
              </p>
            </section>

            <section id="economic-model" className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-red-400">
                Economic Model and Incentive Mechanisms
              </h2>
              <p className="text-gray-300">
                The HAVEN token ($HVN) serves as the primary mechanism for
                economic coordination within the ecosystem. The token's value is
                dynamically determined through a sophisticated computational
                model:
              </p>
              <div className="my-6">
                <code className="text-sm font-mono text-gray-400 block">
                  V(t) = f(S, D, P, R)
                </code>
              </div>
              <p className="text-gray-300 mt-4">
                The staking mechanism implements a tiered reward structure that
                encourages sustained, high-quality contributions:
              </p>
              <div className="my-6">
                <code className="text-sm font-mono text-gray-400 block">
                  R = B * (C/T) * (Q/M)
                </code>
              </div>
            </section>

            <section id="ethical-considerations" className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-red-400">
                Ethical Considerations and Responsible Innovation
              </h2>
              <p className="text-gray-300">
                Recognizing the sensitive nature of dataset generation, HAVEN
                implements comprehensive ethical frameworks that prioritize
                participant consent, data privacy, and responsible technological
                development. The platform's design incorporates multiple layers
                of protection against potential misuse, including advanced
                anonymization techniques, granular consent management, and
                ongoing algorithmic bias detection.
              </p>
              <p className="text-gray-300 mt-4">
                Machine learning models are continuously evaluated for potential
                representational biases, with automated detection mechanisms
                that identify and mitigate problematic patterns. This approach
                ensures that generated datasets and trained models maintain high
                standards of fairness, accuracy, and cultural sensitivity.
              </p>
            </section>

            <section id="conclusion" className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-red-400">
                Conclusion and Future Research Vectors
              </h2>
              <p className="text-gray-300">
                The HAVEN protocol represents a fundamental reimagining of
                dataset generation methodologies, introducing a sophisticated,
                ethically managed ecosystem for collaborative knowledge
                creation. By integrating advanced blockchain technology,
                distributed machine learning infrastructure, and comprehensive
                governance frameworks, we provide a transformative platform that
                addresses critical limitations in contemporary artificial
                intelligence training approaches.
              </p>
              <p className="text-gray-300 mt-4">
                Future research directions will focus on expanding the
                platform's computational capabilities, exploring advanced
                federated learning techniques, and developing more nuanced
                approaches to semantic representation learning.
              </p>
            </section>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Whitepaper;
