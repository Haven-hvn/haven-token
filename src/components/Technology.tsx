import React from "react";
import { Server, Shield, Cpu } from "lucide-react";

const Technology = () => {
  return (
    <div className="w-full">
      <div className="container mx-auto">
        <section
          id="technology"
          className="flex gap-8 py-20 lg:py-40 items-center justify-center flex-col"
        >
          <div className="flex gap-4 flex-col">
            <h2 className="text-5xl md:text-7xl tracking-tight text-center font-regular  text-white mb-4">
              Our{" "}
              <span className=" bg-gradient-to-t bg-clip-text text-transparent  from-red-400  to-pink-600">
                Architecture
              </span>
            </h2>
            <p className="text-lg md:text-xl leading-relaxed tracking-tight text-gray-400 max-w-2xl text-center mx-auto">
              Built on cutting-edge blockchain and AI technologies to enable
              secure, scalable dataset generation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl">
            <div className="bg-gradient-to-br from-purple-900/20 to-black/50 p-8 rounded-xl border border-purple-800/20 backdrop-blur-sm">
              <Server className="h-12 w-12 text-purple-400 mb-4" />
              <h3 className="text-2xl font-semibold text-white mb-3">
                Solana Infrastructure
              </h3>
              <p className="text-gray-400 text-lg">
                Leveraging Solana's high-performance blockchain for 65,000+ TPS
                and sub-second finality
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-900/20 to-black/50 p-8 rounded-xl border border-purple-800/20 backdrop-blur-sm">
              <Shield className="h-12 w-12 text-purple-400 mb-4" />
              <h3 className="text-2xl font-semibold text-white mb-3">
                Zero-Knowledge Proofs
              </h3>
              <p className="text-gray-400 text-lg">
                Advanced cryptographic protocols ensuring participant privacy
                and data security
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-900/20 to-black/50 p-8 rounded-xl border border-purple-800/20 backdrop-blur-sm">
              <Cpu className="h-12 w-12 text-purple-400 mb-4" />
              <h3 className="text-2xl font-semibold text-white mb-3">
                ML Infrastructure
              </h3>
              <p className="text-gray-400 text-lg">
                Sophisticated machine learning models for advanced video
                segmentation and analysis
              </p>
            </div>
          </div>

          <div className="w-full max-w-7xl bg-gradient-to-br from-purple-900/20 to-black/50 rounded-xl p-8 border border-purple-800/20 backdrop-blur-sm">
            <h3 className="text-3xl font-semibold text-white mb-6 tracking-tighter">
              Technical Specifications
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-xl text-purple-400 font-semibold mb-2">
                  Computational Model
                </h4>
                <p className="text-gray-300 font-mono bg-black/40 p-4 rounded-lg">
                  L(θ) = ∑[Li(θi)] + R(θ)
                </p>
              </div>
              <div>
                <h4 className="text-xl text-purple-400 font-semibold mb-2">
                  Consensus Validation
                </h4>
                <p className="text-gray-300 font-mono bg-black/40 p-4 rounded-lg">
                  C = f(S,A,R)
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Technology;
