import React from "react";
import HeroButtons from "./HeroButtons";
import { HeroFeatures } from "./HeroFeatures";
import WaveText from "./WaveText";
import { Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-black via-purple-900 to-black text-white">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <img
          src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80"
          alt="Vibrant Neon Background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="h-8 w-8 text-purple-400 animate-pulse" />
            <span className="text-xl text-purple-400 font-semibold">
              🔥 The Spiciest Web3 Project 🔥
            </span>
            <Sparkles className="h-8 w-8 text-purple-400 animate-pulse" />
          </div>

          <WaveText
            text="HAVEN Protocol"
            className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
          />
          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto">
            Where AI Meets Adult Entertainment 🎵
          </p>
          <p className="text-lg md:text-xl mb-12 text-gray-400 max-w-2xl mx-auto animate-bounce">
            The First NSFW TikTok Clone Powered by Blockchain 🚀
          </p>

          <HeroButtons />
        </div>

        <HeroFeatures />
      </div>
    </div>
  );
};

export default Hero;
