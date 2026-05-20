import React, { useMemo } from 'react';

const Rain = () => {
  // Generate static raindrops with infinite looping animations for max performance
  const drops = useMemo(() => {
    return Array.from({ length: 70 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      duration: Math.random() * 0.4 + 0.3, // Fast, realistic falling speed
      delay: Math.random() * -2, // Negative delay so they start staggered immediately
      opacity: Math.random() * 0.25 + 0.05, // Subtle, cinematic opacity
      height: Math.random() * 30 + 15,
    }));
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden mix-blend-screen" style={{ transform: 'rotate(8deg) scale(1.1)' }}>
      {drops.map(drop => (
        <div
          key={drop.id}
          className="absolute top-[-10%] w-[1.5px] bg-gradient-to-b from-transparent to-[#ffffff]"
          style={{
            left: `${drop.left}%`,
            height: `${drop.height}px`,
            opacity: drop.opacity,
            animation: `rain-fall ${drop.duration}s linear ${drop.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
};

export default Rain;
