import React, { useEffect, useState, useRef } from 'react';

const ShootingStars = () => {
  const [stars, setStars] = useState([]);
  const idCounter = useRef(0);

  useEffect(() => {
    const createStar = () => {
      const id = idCounter.current++;
      
      const top = Math.random() * 50 - 20; 
      const right = Math.random() * 80 - 20; 
      
      const length = Math.random() * 150 + 100; 
      const duration = Math.random() * 1.5 + 1.5; // 1.5s to 3.0s (Very visible)
      const angle = -45 + (Math.random() * 4 - 2);
      
      const newStar = { id, top, right, length, duration, angle };
      
      setStars(prev => [...prev, newStar]);

      setTimeout(() => {
        setStars(prev => prev.filter(s => s.id !== id));
      }, duration * 1000 + 100);
    };

    let timeoutId;
    const scheduleNextStar = () => {
      const nextDelay = Math.random() * 2000 + 500; // Very frequent
      
      timeoutId = setTimeout(() => {
        createStar();
        
        if (Math.random() > 0.6) {
          setTimeout(createStar, Math.random() * 200 + 50);
        }
        
        scheduleNextStar();
      }, nextDelay);
    };

    scheduleNextStar();
    setTimeout(createStar, 300);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="fixed inset-0 z-10 pointer-events-none overflow-hidden">
      {stars.map(star => (
        <div
          key={star.id}
          className="absolute"
          style={{
            top: `${star.top}%`,
            right: `${star.right}%`,
            width: `${star.length}px`,
            transform: `rotate(${star.angle}deg)`,
          }}
        >
          <div
            className="relative w-full h-[2px] bg-gradient-to-r from-white to-transparent"
            style={{
              animation: `meteor-streak ${star.duration}s ease-in forwards`,
            }}
          >
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-[3px] bg-white rounded-full shadow-[0_0_20px_5px_rgba(255,255,255,1),_0_0_40px_10px_rgba(255,255,255,0.7)]"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShootingStars;
