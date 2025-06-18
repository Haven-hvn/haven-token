import React from 'react';
import { Video, Shield, Bot, Eye } from 'lucide-react';

const UseCases = () => {
  return (
    <section id="use-cases" className="py-20 bg-gradient-to-b from-black to-purple-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">How It Works</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Start earning from gooning to short video clips in just a few simple swipes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-black/50 backdrop-blur-sm p-8 rounded-xl border border-purple-800/50">
            <Video className="h-12 w-12 text-purple-500 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">Goon to Clips</h3>
            <p className="text-gray-400">
              Goon to short video clips in a swipeable interface. Each clip is just a few seconds long.
            </p>
          </div>

          <div className="bg-black/50 backdrop-blur-sm p-8 rounded-xl border border-purple-800/50">
            <Bot className="h-12 w-12 text-purple-500 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">Classify & Earn</h3>
            <p className="text-gray-400">
              Swipe left or right to classify each clip while you goon and earn points for your accuracy.
            </p>
          </div>

          <div className="bg-black/50 backdrop-blur-sm p-8 rounded-xl border border-purple-800/50">
            <Eye className="h-12 w-12 text-purple-500 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">Stake Your Points</h3>
            <p className="text-gray-400">
              Bet on your classifications and earn more when you align with community consensus.
            </p>
          </div>

          <div className="bg-black/50 backdrop-blur-sm p-8 rounded-xl border border-purple-800/50">
            <Shield className="h-12 w-12 text-purple-500 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">Build Your Reputation</h3>
            <p className="text-gray-400">
              Develop your reputation score through consistent accuracy and unlock higher rewards.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCases;