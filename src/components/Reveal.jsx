import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Reveal = ({ children, delay = 0, className = '' }) => {
  const ref = useRef(null);
  // Trigger slightly before it hits the bottom
  const isInView = useInView(ref, { once: true, margin: "0px 0px -15% 0px" });

  return (
    <div ref={ref} className={className} style={{ perspective: "1000px" }}>
      <motion.div
        initial={{ 
          opacity: 0, 
          y: 100, 
          scale: 0.85,
          filter: "blur(20px)",
          rotateX: 15
        }}
        animate={isInView ? { 
          opacity: 1, 
          y: 0, 
          scale: 1,
          filter: "blur(0px)",
          rotateX: 0
        } : {}}
        transition={{
          duration: 1.4, // Slow, beautiful, cinematic
          delay: delay / 1000,
          ease: [0.16, 1, 0.3, 1] // Custom high-end spring curve
        }}
        style={{ transformOrigin: "top" }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Reveal;
