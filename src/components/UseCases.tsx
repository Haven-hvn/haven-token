import React from 'react';
import { Video, Shield, Bot, Eye } from 'lucide-react';

const UseCases = () => {
  return (
    <section id="use-cases" className="py-20 bg-gradient-to-b from-black to-purple-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Use Cases</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Transforming multiple industries through advanced AI dataset generation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-black/50 backdrop-blur-sm p-8 rounded-xl border border-purple-800/50">
            <Video className="h-12 w-12 text-purple-500 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">Enhanced Video Understanding</h3>
            <p className="text-gray-400">
              Automatic labeling and metadata generation for short-form video platforms, enabling improved content discovery and recommendations
            </p>
          </div>

          <div className="bg-black/50 backdrop-blur-sm p-8 rounded-xl border border-purple-800/50">
            <Bot className="h-12 w-12 text-purple-500 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">Next-Gen Visual Language Models</h3>
            <p className="text-gray-400">
              Advanced AI models capable of understanding and responding to complex visual and behavioral cues
            </p>
          </div>

          <div className="bg-black/50 backdrop-blur-sm p-8 rounded-xl border border-purple-800/50">
            <Eye className="h-12 w-12 text-purple-500 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">Content Moderation</h3>
            <p className="text-gray-400">
              Training AI for nuanced content understanding, enabling more effective and fair moderation practices
            </p>
          </div>

          <div className="bg-black/50 backdrop-blur-sm p-8 rounded-xl border border-purple-800/50">
            <Shield className="h-12 w-12 text-purple-500 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">Responsible AI Development</h3>
            <p className="text-gray-400">
              Creating meticulously curated datasets with robust governance frameworks for ethical AI advancement
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCases;