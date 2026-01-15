
import React from 'react';

const SteamEffect: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`relative ${className}`}>
      {/* Three steam particles */}
      <div 
        className="absolute w-6 h-6 bg-white/30 rounded-full blur-xl steam-particle" 
        style={{ left: '20%', animationDelay: '0s' }}
      ></div>
      <div 
        className="absolute w-8 h-8 bg-white/40 rounded-full blur-xl steam-particle" 
        style={{ left: '50%', animationDelay: '0.8s' }}
      ></div>
      <div 
        className="absolute w-5 h-5 bg-white/20 rounded-full blur-xl steam-particle" 
        style={{ left: '80%', animationDelay: '1.5s' }}
      ></div>
    </div>
  );
};

export default SteamEffect;
