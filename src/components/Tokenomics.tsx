import React from 'react';
import { Coins, Users, Lock, TrendingUp, Star, Database, Shield } from 'lucide-react';

const Tokenomics = () => {
  return (
    <section id="tokenomics" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Reward System</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Earn rewards through accurate video classifications and community consensus
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-gradient-to-br from-purple-900/50 to-black p-8 rounded-xl border border-purple-800/50">
            <h3 className="text-2xl font-bold text-white mb-6">Betting Rewards</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-black/40 rounded-lg">
                <Lock className="h-6 w-6 text-purple-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-white font-semibold">Stake Your Points</h4>
                  <p className="text-gray-400">Place bets on your video classifications and earn rewards when you align with community consensus</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-black/40 rounded-lg">
                <Star className="h-6 w-6 text-purple-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-white font-semibold">Accuracy Pays</h4>
                  <p className="text-gray-400">Higher accuracy in your classifications leads to better rewards and reputation growth</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-black/40 rounded-lg">
                <TrendingUp className="h-6 w-6 text-purple-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-white font-semibold">Community Consensus</h4>
                  <p className="text-gray-400">Rewards are distributed based on how well your choices align with the broader community</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-900/50 to-black p-8 rounded-xl border border-purple-800/50">
            <h3 className="text-2xl font-bold text-white mb-6">Reputation Benefits</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-black/40 rounded-lg">
                <Database className="h-6 w-6 text-purple-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-white font-semibold">Higher Multipliers</h4>
                  <p className="text-gray-400">Build your reputation through consistent accuracy and unlock larger reward multipliers</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-black/40 rounded-lg">
                <Shield className="h-6 w-6 text-purple-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-white font-semibold">Quality Incentives</h4>
                  <p className="text-gray-400">The system rewards skill and honest participation, not random chance</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-black/40 rounded-lg">
                <Users className="h-6 w-6 text-purple-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-white font-semibold">Community Recognition</h4>
                  <p className="text-gray-400">Gain recognition as a trusted contributor in the AI training community</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-black/50 p-6 rounded-xl border border-purple-800/50 text-center">
            <Coins className="h-12 w-12 text-purple-500 mx-auto mb-4" />
            <h4 className="text-xl font-semibold text-white mb-2">Points System</h4>
            <p className="text-purple-400 text-2xl font-bold">Stake & Earn</p>
          </div>

          <div className="bg-black/50 p-6 rounded-xl border border-purple-800/50 text-center">
            <Users className="h-12 w-12 text-purple-500 mx-auto mb-4" />
            <h4 className="text-xl font-semibold text-white mb-2">Community Driven</h4>
            <p className="text-purple-400 text-2xl font-bold">Consensus Based</p>
          </div>

          <div className="bg-black/50 p-6 rounded-xl border border-purple-800/50 text-center">
            <Lock className="h-12 w-12 text-purple-500 mx-auto mb-4" />
            <h4 className="text-xl font-semibold text-white mb-2">Privacy First</h4>
            <p className="text-purple-400 text-2xl font-bold">Your Data Stays Private</p>
          </div>

          <div className="bg-black/50 p-6 rounded-xl border border-purple-800/50 text-center">
            <TrendingUp className="h-12 w-12 text-purple-500 mx-auto mb-4" />
            <h4 className="text-xl font-semibold text-white mb-2">Reputation</h4>
            <p className="text-purple-400 text-2xl font-bold">Build & Grow</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;