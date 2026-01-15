
import React from 'react';

const SteamEffect: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`relative ${className}`}>
      {/* Three steam particles with staggered delays using Tailwind styles */}
      <div 
        className="steam-particle w-6 h-6" 
        style={{ left: '20%', animationDelay: '0s' }}
      ></div>
      <div 
        className="steam-particle w-8 h-8" 
        style={{ left: '50%', animationDelay: '0.8s' }}
      ></div>
      <div 
        className="steam-particle w-5 h-5" 
        style={{ left: '80%', animationDelay: '1.5s' }}
      ></div>
    </div>
  );
};

export default SteamEffect;
