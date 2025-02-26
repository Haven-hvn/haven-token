import React from "react";
import { Box, Users, Lock, Brain, Star, Database, Shield } from "lucide-react";
import { motion } from "framer-motion";
import { textVariant } from "../lib/anims";

const Innovation = () => {
  return (
    <section id="innovation" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex gap-4 flex-col mb-12">
          <motion.h2
            variants={textVariant(0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-5xl md:text-7xl tracking-tight text-center font-semibold text-white mb-2"
          >
            Our {""}
            <span className="bg-gradient-to-t bg-clip-text text-transparent from-red-400 to-pink-600">
              Innovative Design
            </span>
          </motion.h2>
          <p className="text-lg md:text-xl leading-relaxed tracking-tight text-gray-400 max-w-2xl text-center mx-auto">
            HAVEN leverages cutting-edge AI and blockchain technology to create
            a revolutionary ecosystem
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <motion.div
            className="bg-gradient-to-br from-pink-900/20 to-black p-8 rounded-xl border border-pink-800/50"
            variants={textVariant(0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">
              Advanced Features
            </h3>
            <div className="space-y-4">
              <motion.div
                className="flex items-start gap-4 p-4 bg-black/40 rounded-lg"
                variants={textVariant(0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                <Lock className="h-6 w-6 text-red-400 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-white font-semibold">
                    Premium Access System
                  </h4>
                  <p className="text-gray-400">
                    Secure tiered access to exclusive content and advanced AI
                    features
                  </p>
                </div>
              </motion.div>
              <motion.div
                className="flex items-start gap-4 p-4 bg-black/40 rounded-lg"
                variants={textVariant(0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                <Star className="h-6 w-6 text-red-400 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-white font-semibold">
                    Progressive Enhancement
                  </h4>
                  <p className="text-gray-400">
                    Unlock additional capabilities and features as you
                    contribute to the ecosystem
                  </p>
                </div>
              </motion.div>
              <motion.div
                className="flex items-start gap-4 p-4 bg-black/40 rounded-lg"
                variants={textVariant(0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                <Brain className="h-6 w-6 text-red-400 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-white font-semibold">AI Integration</h4>
                  <p className="text-gray-400">
                    Advanced machine learning models provide intelligent content
                    analysis and recommendations
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className="bg-gradient-to-br from-pink-900/20 to-black p-8 rounded-xl border border-pink-800/50"
            variants={textVariant(0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">
              Community Features
            </h3>
            <div className="space-y-4">
              <motion.div
                className="flex items-start gap-4 p-4 bg-black/40 rounded-lg"
                variants={textVariant(0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                <Database className="h-6 w-6 text-red-400 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-white font-semibold">Content Curation</h4>
                  <p className="text-gray-400">
                    Contribute to AI dataset refinement through intelligent
                    content labeling
                  </p>
                </div>
              </motion.div>
              <motion.div
                className="flex items-start gap-4 p-4 bg-black/40 rounded-lg"
                variants={textVariant(0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                <Shield className="h-6 w-6 text-red-400 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-white font-semibold">
                    Quality Assurance
                  </h4>
                  <p className="text-gray-400">
                    Advanced validation systems ensure high-quality content and
                    contributions
                  </p>
                </div>
              </motion.div>
              <motion.div
                className="flex items-start gap-4 p-4 bg-black/40 rounded-lg"
                variants={textVariant(0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                <Users className="h-6 w-6 text-red-400 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-white font-semibold">
                    Decentralized Governance
                  </h4>
                  <p className="text-gray-400">
                    Community-driven decision making based on contribution and
                    engagement
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <motion.div
            className="bg-black/50 p-6 rounded-xl border border-red-400/50 text-center"
            variants={textVariant(0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <Box className="h-12 w-12 text-red-400 mx-auto mb-4" />
            <h4 className="text-xl font-semibold text-white mb-2">
              Technology Stack
            </h4>
            <p className="text-red-400 text-2xl font-bold">TBD</p>
          </motion.div>

          <motion.div
            className="bg-black/50 p-6 rounded-xl border border-red-400/50 text-center"
            variants={textVariant(0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <Users className="h-12 w-12 text-red-400 mx-auto mb-4" />
            <h4 className="text-xl font-semibold text-white mb-2">
              Community Model
            </h4>
            <p className="text-red-400 text-2xl font-bold">TBD</p>
          </motion.div>

          <motion.div
            className="bg-black/50 p-6 rounded-xl border border-red-400/50 text-center"
            variants={textVariant(0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <Lock className="h-12 w-12 text-red-400 mx-auto mb-4" />
            <h4 className="text-xl font-semibold text-white mb-2">
              Security Model
            </h4>
            <p className="text-red-400 text-2xl font-bold">TBD</p>
          </motion.div>

          <motion.div
            className="bg-black/50 p-6 rounded-xl border border-red-400/50 text-center"
            variants={textVariant(0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <Brain className="h-12 w-12 text-red-400 mx-auto mb-4" />
            <h4 className="text-xl font-semibold text-white mb-2">
              AI Architecture
            </h4>
            <p className="text-red-400 text-2xl font-bold">TBD</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Innovation;
