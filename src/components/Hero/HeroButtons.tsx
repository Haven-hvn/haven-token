import React, { useState } from 'react';
import Whitepaper from '../Whitepaper';
import { FileText } from 'lucide-react';

const HeroButtons: React.FC = () => {
  const [isWhitepaperOpen, setIsWhitepaperOpen] = useState(false);

  const handleOpenWhitepaper = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsWhitepaperOpen(true);
  };

  const handleCloseWhitepaper = () => {
    setIsWhitepaperOpen(false);
  };

  return (
    <div className="flex flex-wrap justify-center gap-4">
      <div className="inline-flex rounded-md shadow">
        <a
          href="#"
          className="inline-flex items-center justify-center rounded-md bg-purple-600 px-5 py-3 text-sm font-medium text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
        >
          Start Earning
        </a>
      </div>
      <div className="ml-3 inline-flex rounded-md shadow">
        <button
          onClick={handleOpenWhitepaper}
          className="px-8 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold transition flex items-center gap-2 group"
        >
          <FileText className="h-5 w-5 group-hover:rotate-12 transition-transform" />
          <span>Learn More</span>
        </button>
      </div>
      {isWhitepaperOpen && <Whitepaper onClose={handleCloseWhitepaper} />}
    </div>
  );
};

export default HeroButtons;
