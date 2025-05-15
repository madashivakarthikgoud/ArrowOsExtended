import React, { useState, useRef, useEffect, useCallback } from 'react';
import Section from '../ui/Section';

const screenshots = [
  { id: 1, url: 'images/1.png', title: 'Home Screen', description: 'Clean and minimalist home screen design' },
  { id: 2, url: 'images/2.png', title: 'Lockscreen', description: 'You can show weather information on Lockscreen now' },
  { id: 3, url: 'images/3.png', title: 'Quick Settings', description: 'Redesigned quick settings with some customizations' },
  { id: 4, url: 'images/4.png', title: 'Extensions Menu', description: 'Setup your styling for UI and enhancement here' },
  { id: 5, url: 'images/5.png', title: 'Themes Menu', description: 'Setup your themes, font, icon packs, and icon shape here' },
  { id: 6, url: 'images/6.png', title: 'Statusbar Menu', description: 'Make your statusbar cooler here' },
  { id: 7, url: 'images/8.png', title: 'Quick Settings Menu', description: 'Intuitive settings with extended options' },
  { id: 9, url: 'images/9.png', title: 'Notifications Menu', description: 'Enhance your notifications so they’re never boring' },
  { id: 10, url: 'images/10.png', title: 'Lockscreen Menu', description: 'Increase your privacy and interface for lockscreen menu' },
  { id: 14, url: 'images/14.png', title: 'Misc Menu', description: 'Elevate your experience here' },
  { id: 15, url: 'images/15.png', title: 'Weather Settings', description: 'Show weather info in Home Screen and Lockscreen' },
  { id: 16, url: 'images/16.png', title: 'Spoofing Settings', description: 'Spoof your device for safety and unlimited GPhotos backup' },
  { id: 18, url: 'images/18.png', title: 'GameSpace Settings', description: 'Increase your gaming experience' },
];

const Screenshots = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [showHint, setShowHint] = useState(true);
  const [fade, setFade] = useState(true);
  const containerRef = useRef(null);

  const total = screenshots.length;
  const threshold = 50;

  // Preload all images on mount
  useEffect(() => {
    screenshots.forEach(s => { const img = new Image(); img.src = s.url; });
  }, []);

  const goTo = useCallback((index) => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex((index + total) % total);
      setFade(true);
      setShowHint(false);
    }, 300);
  }, [total]);

  // Touch events
  const handleTouchStart = useCallback((e) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
  }, []);

  const handleTouchEnd = useCallback((e) => {
    if (!isDragging) return;
    const endX = e.changedTouches[0].clientX;
    const delta = startX - endX;
    if (delta > threshold) goTo(currentIndex + 1);
    else if (delta < -threshold) goTo(currentIndex - 1);
    setIsDragging(false);
  }, [isDragging, startX, currentIndex, goTo]);

  // Mouse events
  const handleMouseDown = useCallback((e) => {
    setIsDragging(true);
    setStartX(e.clientX);
  }, []);

  const handleMouseUp = useCallback((e) => {
    if (!isDragging) return;
    const delta = startX - e.clientX;
    if (delta > threshold) goTo(currentIndex + 1);
    else if (delta < -threshold) goTo(currentIndex - 1);
    setIsDragging(false);
  }, [isDragging, startX, currentIndex, goTo]);

  const handleMouseMove = useCallback((e) => {
    if (isDragging) e.preventDefault();
  }, [isDragging]);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [handleMouseMove, handleMouseUp]);

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowRight') goTo(currentIndex + 1);
      if (e.key === 'ArrowLeft') goTo(currentIndex - 1);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [currentIndex, goTo]);

  const { url, title, description } = screenshots[currentIndex];

  return (
    <Section
      id="screenshots"
      title="Experience ArrowOS-Extended"
      subtitle="See how our custom ROM transforms your Android experience."
      centered
      className="bg-dark-950 py-6 md:py-10 lg:py-12"
    >
      <div
        ref={containerRef}
        className="relative w-full px-4 mx-auto select-none max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        style={{ touchAction: 'pan-y' }}
      >
        <div className="flex flex-col lg:flex-row items-center gap-6">
          {/* Image */}
          <div className="flex-1 w-full">
            <div className="relative w-full rounded-3xl overflow-hidden bg-gray-800">
              <img
                src={url}
                alt={title}
                loading="lazy"
                className={`w-full h-auto object-contain rounded-3xl shadow-2xl transition-opacity duration-300 ${fade ? 'opacity-100' : 'opacity-0'}`}
                style={{ imageRendering: '-webkit-optimize-contrast' }}
              />
              {showHint && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="flex items-center gap-2 bg-black/30 backdrop-blur-md px-4 py-2 rounded-full animate-pulse">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    <span className="text-white text-base">Swipe</span>
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              )}
            </div>
          </div>
          {/* Text & dots */}
          <div className="flex-1 text-center lg:text-left px-2 md:px-4">
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3">{title}</h3>
            <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-prose mx-auto lg:mx-0 mb-4">{description}</p>
            <div className="flex justify-center lg:justify-start gap-2">
              {screenshots.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => goTo(idx)}
                  className={`w-3.5 h-3.5 rounded-full transition-colors duration-200 ${idx === currentIndex ? 'bg-white' : 'bg-gray-600'}`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Screenshots;
