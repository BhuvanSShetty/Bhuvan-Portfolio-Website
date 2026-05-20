import React, { useState, useEffect, useRef } from 'react';
import musicFile from '../assets/music.mp3';

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const audioRef = useRef(null);

  useEffect(() => {
    // Initialize audio
    audioRef.current = new Audio(musicFile);
    audioRef.current.loop = true;

    const tryPlay = () => {
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.then(() => {
          // Autoplay started!
          setIsPlaying(true);
        }).catch(error => {
          setIsPlaying(false);
        });
      }
    };

    // We removed the immediate tryPlay() here to stop the red console error.
    // It will now ONLY try to play when you first click the screen!

    // Wait for the user's VERY FIRST interaction anywhere on the website
    const handleFirstInteraction = () => {
      if (audioRef.current && audioRef.current.paused) {
        const playPromise = audioRef.current.play();
        if (playPromise !== undefined) {
          playPromise.then(() => {
            // Autoplay started!
            setIsPlaying(true);
            // ONLY remove listeners if the play was successful!
            window.removeEventListener('click', handleFirstInteraction);
            window.removeEventListener('keydown', handleFirstInteraction);
            window.removeEventListener('touchstart', handleFirstInteraction);
          }).catch(error => {
            setIsPlaying(false);
          });
        }
      }
    };

    window.addEventListener('click', handleFirstInteraction);
    window.addEventListener('keydown', handleFirstInteraction);
    window.addEventListener('touchstart', handleFirstInteraction);

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      window.removeEventListener('click', handleFirstInteraction);
      window.removeEventListener('keydown', handleFirstInteraction);
      window.removeEventListener('touchstart', handleFirstInteraction);
      window.removeEventListener('scroll', handleFirstInteraction);
    };
  }, []);

  const toggleMusic = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <button
      onClick={toggleMusic}
      className="fixed bottom-6 left-6 z-50 p-4 rounded-full bg-primary/10 backdrop-blur-md border border-primary/20 text-primary shadow-lg shadow-primary/5 hover:bg-primary/20 hover:scale-105 transition-all duration-300 flex items-center justify-center group"
      aria-label="Toggle Background Music"
      title={isPlaying ? "Pause Music" : "Play Music"}
    >
      {isPlaying ? (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animate-pulse">
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
          <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
          <path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path>
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-70">
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
          <line x1="23" y1="9" x2="17" y2="15"></line>
          <line x1="17" y1="9" x2="23" y2="15"></line>
        </svg>
      )}
    </button>
  );
};

export default AudioPlayer;
