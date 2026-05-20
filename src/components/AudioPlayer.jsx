import React, { useState, useEffect, useRef } from 'react';
import musicFile from '../assets/music.mp3';

const AudioPlayer = ({ isVisible = true }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [volume, setVolume] = useState(0.5);
  const audioRef = useRef(null);
  const hasManuallyToggled = useRef(false);

  useEffect(() => {
    // Initialize audio
    audioRef.current = new Audio(musicFile);
    audioRef.current.loop = true;
    audioRef.current.volume = volume;

    const handleFirstInteraction = () => {
      if (hasManuallyToggled.current) return; // Ignore if user already explicitly clicked play/pause

      if (audioRef.current && audioRef.current.paused) {
        const playPromise = audioRef.current.play();
        if (playPromise !== undefined) {
          playPromise.then(() => {
            setIsPlaying(true);
            window.removeEventListener('click', handleFirstInteraction);
            window.removeEventListener('keydown', handleFirstInteraction);
            window.removeEventListener('touchstart', handleFirstInteraction);
            window.removeEventListener('scroll', handleFirstInteraction);
          }).catch(error => {
            setIsPlaying(false);
          });
        }
      }
    };

    window.addEventListener('click', handleFirstInteraction);
    window.addEventListener('keydown', handleFirstInteraction);
    window.addEventListener('touchstart', handleFirstInteraction);
    window.addEventListener('scroll', handleFirstInteraction, { passive: true });

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      window.removeEventListener('click', handleFirstInteraction);
      window.removeEventListener('keydown', handleFirstInteraction);
      window.removeEventListener('touchstart', handleFirstInteraction);
      window.removeEventListener('scroll', handleFirstInteraction);
    };
  }, []); // Note: volume is not in dep array intentionally so we don't recreate audio on volume change

  const toggleMusic = () => {
    hasManuallyToggled.current = true;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  const [showSlider, setShowSlider] = useState(false);
  const containerRef = useRef(null);

  // Close slider when tapping outside on mobile
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setShowSlider(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, []);

  return (
    <div className={`transition-opacity duration-1000 delay-1000 ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      <div 
        ref={containerRef}
        className="fixed bottom-6 right-6 z-50 flex items-center bg-primary/10 hover:bg-primary/20 backdrop-blur-md border border-primary/20 rounded-full p-1.5 transition-all duration-300 shadow-lg shadow-primary/5 hover:scale-105 group"
        onMouseEnter={() => setShowSlider(true)}
        onMouseLeave={() => setShowSlider(false)}
        onClick={() => setShowSlider(true)}
      >
        
        {/* Volume Slider - Expands on hover (desktop) or tap (mobile) */}
        <div className={`overflow-hidden transition-all duration-500 ease-in-out flex items-center justify-center ${showSlider ? 'w-28 opacity-100' : 'w-0 opacity-0'}`}>
          <input 
            type="range" 
            min="0" 
            max="1" 
            step="0.01" 
            value={volume}
            onChange={handleVolumeChange}
            className="w-20 mx-2 h-1 bg-primary/30 rounded-lg appearance-none cursor-pointer accent-primary"
            title="Adjust Volume"
          />
        </div>

        {/* Play/Pause Button */}
        <button
          onClick={(e) => {
            e.stopPropagation(); // prevent triggering the container onClick again
            toggleMusic();
          }}
          className="p-3 rounded-full text-primary flex items-center justify-center transition-transform"
          aria-label="Toggle Background Music"
          title={isPlaying ? "Pause Music" : "Play Music"}
        >
          {isPlaying ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animate-pulse">
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
              <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
              <path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-70">
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
              <line x1="23" y1="9" x2="17" y2="15"></line>
              <line x1="17" y1="9" x2="23" y2="15"></line>
            </svg>
          )}
        </button>
      </div>
    </div>
  );
};

export default AudioPlayer;
