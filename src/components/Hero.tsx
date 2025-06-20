import React from "react";
import { Brain, Database, Lock } from "lucide-react";
import HeroButtons from "./Hero/HeroButtons";

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-black via-purple-900 to-black text-white">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <img
          src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80"
          alt="AI Network Background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Sinbox
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto">
            You're Already Gooning, <br/> Might As Well Earn From It
          </p>
          <p className="text-lg md:text-2xl mb-12 text-gray-400 max-w-2xl mx-auto">
            Companies profit from your data every day. Take control and earn rewards by gooning to short video clips.
          </p>

          <HeroButtons />
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="flex flex-col items-center text-center p-6 rounded-lg bg-white/5 backdrop-blur-sm">
            <Brain className="h-12 w-12 text-purple-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Goon & Earn</h3>
            <p className="text-gray-400">
              Goon to short video clips and swipe left or right to classify them, earning points instantly.
            </p>
          </div>

          <div className="flex flex-col items-center text-center p-6 rounded-lg bg-white/5 backdrop-blur-sm">
            <Lock className="h-12 w-12 text-purple-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Privacy First</h3>
            <p className="text-gray-400">
              Your personal videos stay private while you train on curated public datasets.
            </p>
          </div>

          <div className="flex flex-col items-center text-center p-6 rounded-lg bg-white/5 backdrop-blur-sm">
            <Database className="h-12 w-12 text-purple-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Build Reputation</h3>
            <p className="text-gray-400">
              Get rewarded for accurate classifications through our betting and reputation system.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
