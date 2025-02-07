import React from "react";
import { Menu, X, Brain } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="fixed w-full bg-black/50 backdrop-blur z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Brain className="h-8 w-8 text-purple-500" />
            <span className="ml-2 text-2xl font-bold text-white">HAVEN</span>
          </div>

          <nav className="hidden md:flex space-x-8">
            <a
              href="#technology"
              className="text-gray-300 hover:text-purple-500 transition"
            >
              Technology
            </a>
            <a
              href="#use-cases"
              className="text-gray-300 hover:text-purple-500 transition"
            >
              Use Cases
            </a>
            <a
              href="#tokenomics"
              className="text-gray-300 hover:text-purple-500 transition"
            >
              Tokenomics
            </a>
          </nav>

          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#technology"
              className="block px-3 py-2 text-gray-300 hover:text-purple-500"
            >
              Technology
            </a>
            <a
              href="#use-cases"
              className="block px-3 py-2 text-gray-300 hover:text-purple-500"
            >
              Use Cases
            </a>
            <a
              href="#tokenomics"
              className="block px-3 py-2 text-gray-300 hover:text-purple-500"
            >
              Tokenomics
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
