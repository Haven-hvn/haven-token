import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Technology from './components/Technology';
import UseCases from './components/UseCases';
import Tokenomics from './components/Tokenomics';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <Hero />
      <Technology />
      <UseCases />
      <Tokenomics />
    </div>
  );
}

export default App;