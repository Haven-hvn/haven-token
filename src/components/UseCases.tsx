import React from "react";
import { Video, Shield, Bot, Eye } from "lucide-react";

const UseCases = () => {
  return (
    <section id="use-cases" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex gap-4 flex-col mb-12">
          <h2 className="text-5xl md:text-7xl tracking-tight text-center font-semibold  text-white mb-2">
            Use{" "}
            <span className=" bg-gradient-to-t bg-clip-text text-transparent  from-red-400  to-pink-600">
              Cases
            </span>
          </h2>
          <p className="text-lg md:text-xl leading-relaxed tracking-tight text-gray-400 max-w-2xl text-center mx-auto">
            Transforming multiple industries through advanced AI dataset
            generation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-red-900/20 to-black/50 backdrop-blur-sm p-8 rounded-xl border border-red-800/20">
            <Video className="h-12 w-12 text-red-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">
              Enhanced Video Understanding
            </h3>
            <p className="text-gray-400">
              Automatic labeling and metadata generation for short-form video
              platforms, enabling improved content discovery and recommendations
            </p>
          </div>

          <div className="bg-gradient-to-br from-red-900/20 to-black/50 backdrop-blur-sm p-8 rounded-xl border border-red-800/20">
            <Bot className="h-12 w-12 text-red-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">
              Next-Gen Visual Language Models
            </h3>
            <p className="text-gray-400">
              Advanced AI models capable of understanding and responding to
              complex visual and behavioral cues
            </p>
          </div>

          <div className="bg-gradient-to-br from-red-900/20 to-black/50 backdrop-blur-sm p-8 rounded-xl border border-red-800/20">
            <Eye className="h-12 w-12 text-red-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">
              Content Moderation
            </h3>
            <p className="text-gray-400">
              Training AI for nuanced content understanding, enabling more
              effective and fair moderation practices
            </p>
          </div>

          <div className="bg-gradient-to-br from-red-900/20 to-black/50 backdrop-blur-sm p-8 rounded-xl border border-red-800/20">
            <Shield className="h-12 w-12 text-red-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">
              Responsible AI Development
            </h3>
            <p className="text-gray-400">
              Creating meticulously curated datasets with robust governance
              frameworks for ethical AI advancement
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCases;
