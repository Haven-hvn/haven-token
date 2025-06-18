import React from 'react';
import { Server, Shield, Cpu } from 'lucide-react';

const Technology = () => {
  return (
    <section id="technology" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Platform Features</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Advanced betting and reputation systems designed to incentivize high-quality AI training contributions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-purple-900/50 to-black p-6 rounded-xl border border-purple-800/50">
            <Server className="h-12 w-12 text-purple-500 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">Consensus-Based Betting</h3>
            <p className="text-gray-400">
              Stake points on your classifications and earn rewards when you align with community consensus
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-900/50 to-black p-6 rounded-xl border border-purple-800/50">
            <Shield className="h-12 w-12 text-purple-500 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">Reputation System</h3>
            <p className="text-gray-400">
              Build your reputation score through accurate labeling and unlock higher reward multipliers
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-900/50 to-black p-6 rounded-xl border border-purple-800/50">
            <Cpu className="h-12 w-12 text-purple-500 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">AI Model Training</h3>
            <p className="text-gray-400">
              Your classifications directly improve Visual Language Models for better video understanding
            </p>
          </div>
        </div>

        <div className="mt-16 bg-purple-900/20 rounded-xl p-8 border border-purple-800/50">
          <h3 className="text-2xl font-bold text-white mb-4">How Rewards Work</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-purple-400 font-semibold mb-2">Betting Mechanism</h4>
              <p className="text-gray-300">Stake points on your video classifications. Earn rewards when your choices align with community consensus, lose stakes when they don't.</p>
            </div>
            <div>
              <h4 className="text-purple-400 font-semibold mb-2">Reputation Multipliers</h4>
              <p className="text-gray-300">Higher reputation scores yield larger rewards for correct classifications, encouraging sustained, honest participation.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;