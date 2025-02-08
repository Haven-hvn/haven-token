import React from "react";
import {
  Coins,
  Users,
  Lock,
  TrendingUp,
  Star,
  Database,
  Shield,
} from "lucide-react";
import { motion } from "framer-motion";
import { textVariant } from "../lib/anims";

const Tokenomics = () => {
  return (
    <section id="tokenomics" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex gap-4 flex-col mb-12">
          <motion.h2
            variants={textVariant(0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-5xl md:text-7xl tracking-tight text-center font-semibold  text-white mb-2"
          >
            Our {""}
            <span className=" bg-gradient-to-t bg-clip-text text-transparent  from-red-400  to-pink-600">
              Tokenomics
            </span>
          </motion.h2>
          <p className="text-lg md:text-xl leading-relaxed tracking-tight text-gray-400 max-w-2xl text-center mx-auto">
            The HAVEN token ($HVN) powers our ecosystem through sophisticated
            staking and reward mechanisms
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
              Staking Benefits
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
                    Premium Content Access
                  </h4>
                  <p className="text-gray-400">
                    Stake $HVN to unlock exclusive adult content and advanced AI
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
                    Tier-Based Benefits
                  </h4>
                  <p className="text-gray-400">
                    Higher staking tiers unlock additional features and
                    increased earning potential
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
                <TrendingUp className="h-6 w-6 text-red-400 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-white font-semibold">APY Rewards</h4>
                  <p className="text-gray-400">
                    Earn up to 15% APY through staking participation
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
              Contribution Rewards
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
                  <h4 className="text-white font-semibold">Data Labeling</h4>
                  <p className="text-gray-400">
                    Earn tokens by contributing to AI dataset refinement and
                    action labeling
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
                    Quality Multipliers
                  </h4>
                  <p className="text-gray-400">
                    Receive bonus rewards for maintaining high accuracy in data
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
                    Community Governance
                  </h4>
                  <p className="text-gray-400">
                    Participate in protocol decisions based on contribution
                    history
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
            <Coins className="h-12 w-12 text-red-400 mx-auto mb-4" />
            <h4 className="text-xl font-semibold text-white mb-2">
              Total Supply
            </h4>
            <p className="text-red-400 text-2xl font-bold">1,000,000,000</p>
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
              Community Allocation
            </h4>
            <p className="text-red-400 text-2xl font-bold">40%</p>
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
              Locked Tokens
            </h4>
            <p className="text-red-400 text-2xl font-bold">30%</p>
          </motion.div>

          <motion.div
            className="bg-black/50 p-6 rounded-xl border border-red-400/50 text-center"
            variants={textVariant(0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <TrendingUp className="h-12 w-12 text-red-400 mx-auto mb-4" />
            <h4 className="text-xl font-semibold text-white mb-2">
              Base Staking APY
            </h4>
            <p className="text-red-400 text-2xl font-bold">Up to 15%</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;
