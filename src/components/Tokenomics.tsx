import React from 'react';
import { Coins, Users, Lock, TrendingUp, Star, Database, Shield } from 'lucide-react';

const Tokenomics = () => {
  return (
    <section id="tokenomics" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Tokenomics</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            The HAVEN token ($HVN) powers our ecosystem through sophisticated staking and reward mechanisms
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-gradient-to-br from-purple-900/50 to-black p-8 rounded-xl border border-purple-800/50">
            <h3 className="text-2xl font-bold text-white mb-6">Staking Benefits</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-black/40 rounded-lg">
                <Lock className="h-6 w-6 text-purple-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-white font-semibold">Premium Content Access</h4>
                  <p className="text-gray-400">Stake $HVN to unlock exclusive adult content and advanced AI features</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-black/40 rounded-lg">
                <Star className="h-6 w-6 text-purple-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-white font-semibold">Tier-Based Benefits</h4>
                  <p className="text-gray-400">Higher staking tiers unlock additional features and increased earning potential</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-black/40 rounded-lg">
                <TrendingUp className="h-6 w-6 text-purple-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-white font-semibold">APY Rewards</h4>
                  <p className="text-gray-400">Earn up to 15% APY through staking participation</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-900/50 to-black p-8 rounded-xl border border-purple-800/50">
            <h3 className="text-2xl font-bold text-white mb-6">Contribution Rewards</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-black/40 rounded-lg">
                <Database className="h-6 w-6 text-purple-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-white font-semibold">Data Labeling</h4>
                  <p className="text-gray-400">Earn tokens by contributing to AI dataset refinement and action labeling</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-black/40 rounded-lg">
                <Shield className="h-6 w-6 text-purple-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-white font-semibold">Quality Multipliers</h4>
                  <p className="text-gray-400">Receive bonus rewards for maintaining high accuracy in data contributions</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-black/40 rounded-lg">
                <Users className="h-6 w-6 text-purple-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-white font-semibold">Community Governance</h4>
                  <p className="text-gray-400">Participate in protocol decisions based on contribution history</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-black/50 p-6 rounded-xl border border-purple-800/50 text-center">
            <Coins className="h-12 w-12 text-purple-500 mx-auto mb-4" />
            <h4 className="text-xl font-semibold text-white mb-2">Total Supply</h4>
            <p className="text-purple-400 text-2xl font-bold">1,000,000,000</p>
          </div>

          <div className="bg-black/50 p-6 rounded-xl border border-purple-800/50 text-center">
            <Users className="h-12 w-12 text-purple-500 mx-auto mb-4" />
            <h4 className="text-xl font-semibold text-white mb-2">Community Allocation</h4>
            <p className="text-purple-400 text-2xl font-bold">40%</p>
          </div>

          <div className="bg-black/50 p-6 rounded-xl border border-purple-800/50 text-center">
            <Lock className="h-12 w-12 text-purple-500 mx-auto mb-4" />
            <h4 className="text-xl font-semibold text-white mb-2">Locked Tokens</h4>
            <p className="text-purple-400 text-2xl font-bold">30%</p>
          </div>

          <div className="bg-black/50 p-6 rounded-xl border border-purple-800/50 text-center">
            <TrendingUp className="h-12 w-12 text-purple-500 mx-auto mb-4" />
            <h4 className="text-xl font-semibold text-white mb-2">Base Staking APY</h4>
            <p className="text-purple-400 text-2xl font-bold">Up to 15%</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;