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
                HAVEN introduces a decentralized network built on a framework
                for creating and managing information markets, enabling
                cryptographically secured, ethically managed participatory
                mechanisms for generating high-quality datasets. This network
                leverages a protocol for governance, data validation, and
                participant compensation, creating a robust ecosystem for
                collaborative knowledge generation.
              </p>
            </section>

            {/* Add other sections similarly */}

            <section id="introduction" className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-red-400">
                Introduction
              </h2>
              {/* Introduction content */}
            </section>

            <section id="preliminary-use-cases" className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-red-400">
                Preliminary Use Cases
              </h2>
              {/* Use cases content */}
            </section>

            <section id="technological-architecture" className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-red-400">
                Technological Architecture and Computational Framework
              </h2>
              {/* Architecture content */}
            </section>

            <section id="machine-learning-infrastructure" className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-red-400">
                Machine Learning Model Training Infrastructure
              </h2>
              {/* ML infrastructure content */}
            </section>

            <section id="blockchain-infrastructure" className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-red-400">
                Blockchain Infrastructure and Cryptographic Security
              </h2>
              {/* Blockchain infrastructure content */}
            </section>

            <section id="economic-model" className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-red-400">
                Economic Model and Incentive Mechanisms
              </h2>
              {/* Economic model content */}
            </section>

            <section id="ethical-considerations" className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-red-400">
                Ethical Considerations and Responsible Innovation
              </h2>
              {/* Ethical considerations content */}
            </section>

            <section id="conclusion" className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-red-400">
                Conclusion and Future Research Vectors
              </h2>
              {/* Conclusion content */}
            </section>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Whitepaper;
