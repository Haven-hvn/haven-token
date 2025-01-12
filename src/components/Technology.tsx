import React from 'react';
import { Server, Shield, Cpu } from 'lucide-react';

const Technology = () => {
  return (
    <section id="technology" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Technological Architecture</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Built on cutting-edge blockchain and AI technologies to enable secure, scalable dataset generation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-purple-900/50 to-black p-6 rounded-xl border border-purple-800/50">
            <Server className="h-12 w-12 text-purple-500 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">Solana Infrastructure</h3>
            <p className="text-gray-400">
              Leveraging Solana's high-performance blockchain for 65,000+ TPS and sub-second finality
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-900/50 to-black p-6 rounded-xl border border-purple-800/50">
            <Shield className="h-12 w-12 text-purple-500 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">Zero-Knowledge Proofs</h3>
            <p className="text-gray-400">
              Advanced cryptographic protocols ensuring participant privacy and data security
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-900/50 to-black p-6 rounded-xl border border-purple-800/50">
            <Cpu className="h-12 w-12 text-purple-500 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">ML Infrastructure</h3>
            <p className="text-gray-400">
              Sophisticated machine learning models for advanced video segmentation and analysis
            </p>
          </div>
        </div>

        <div className="mt-16 bg-purple-900/20 rounded-xl p-8 border border-purple-800/50">
          <h3 className="text-2xl font-bold text-white mb-4">Technical Specifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-purple-400 font-semibold mb-2">Computational Model</h4>
              <p className="text-gray-300 font-mono bg-black/50 p-4 rounded">L(θ) = ∑[Li(θi)] + R(θ)</p>
            </div>
            <div>
              <h4 className="text-purple-400 font-semibold mb-2">Consensus Validation</h4>
              <p className="text-gray-300 font-mono bg-black/50 p-4 rounded">C = f(S,A,R)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;