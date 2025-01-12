import React from 'react';

interface WaveTextProps {
  text: string;
  className?: string;
}

const WaveText = ({ text, className = '' }: WaveTextProps) => {
  return (
    <div className={`relative ${className}`}>
      {text.split('').map((char, i) => (
        <span
          key={i}
          className="inline-block animate-wave"
          style={{
            animationDelay: `${i * 0.1}s`,
          }}
        >
          {char}
        </span>
      ))}
    </div>
  );
};

export default WaveText;