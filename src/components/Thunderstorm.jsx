import React, { useEffect, useState } from 'react';

const Thunderstorm = () => {
  const [isFlashing, setIsFlashing] = useState(false);
  const [flashType, setFlashType] = useState(1);

  useEffect(() => {
    let timeoutId;
    
    const triggerFlash = () => {
      // Pick a random flash animation type (1, 2, or 3) for varied strikes
      setFlashType(Math.floor(Math.random() * 3) + 1);
      setIsFlashing(true);
      
      // Reset flash state after animation completes
      setTimeout(() => {
        setIsFlashing(false);
      }, 1500);

      // Unpredictable delay for the next strike (between 4 and 15 seconds)
      const nextDelay = Math.random() * 11000 + 4000;
      timeoutId = setTimeout(triggerFlash, nextDelay);
    };

    // Schedule the first strike
    timeoutId = setTimeout(triggerFlash, Math.random() * 4000 + 2000);

    return () => clearTimeout(timeoutId);
  }, []);

  if (!isFlashing) return null;

  return (
    <div className={`fixed inset-0 z-0 pointer-events-none mix-blend-screen bg-white animate-lightning-${flashType}`}></div>
  );
};

export default Thunderstorm;
