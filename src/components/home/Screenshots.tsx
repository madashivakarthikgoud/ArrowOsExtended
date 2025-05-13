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
  const [hasInteracted, setHasInteracted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const dragStart = useRef(0);
  const autoPlayRef = useRef();
  const imageRef = useRef(null);
  const containerRef = useRef();

  const paginate = useCallback(
    dir => {
      setCurrentIndex(prev => (prev + dir + screenshots.length) % screenshots.length);
      setHasInteracted(true);
      clearInterval(autoPlayRef.current);
    },
    [screenshots.length]
  );

  // Preload images with priority
  useEffect(() => {
    const preloadImages = [
      screenshots[(currentIndex + 1) % screenshots.length].url,
      screenshots[(currentIndex - 1 + screenshots.length) % screenshots.length].url,
    ];

    preloadImages.forEach(src => {
      const img = new Image();
      img.src = src;
      img.loading = 'eager';
    });
  }, [currentIndex]);

  // Unified gesture handling
  const handleDragStart = useCallback(clientX => {
    dragStart.current = clientX;
  }, []);

  const handleDragEnd = useCallback(
    clientX => {
      const delta = dragStart.current - clientX;
      const threshold = isMobile ? 40 : 80;
      if (Math.abs(delta) > threshold) paginate(delta > 0 ? 1 : -1);
    },
    [isMobile, paginate]
  );

  // Touch handlers
  const handleTouchStart = useCallback(e => handleDragStart(e.touches[0].clientX), [handleDragStart]);
  const handleTouchEnd = useCallback(e => handleDragEnd(e.changedTouches[0].clientX), [handleDragEnd]);

  // Mouse handlers
  const handleMouseDown = useCallback(e => {
    handleDragStart(e.clientX);
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  }, [handleDragStart]);

  const handleMouseMove = useCallback(e => e.preventDefault(), []);
  const handleMouseUp = useCallback(e => {
    handleDragEnd(e.clientX);
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
  }, [handleDragEnd, handleMouseMove]);

  // Responsive checks
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Optimized autoplay
  useEffect(() => {
    if (!isMobile && !hasInteracted) {
      autoPlayRef.current = setInterval(() => paginate(1), 4500);
    }
    return () => clearInterval(autoPlayRef.current);
  }, [isMobile, hasInteracted, paginate]);

  const { url, title, description } = screenshots[currentIndex];
  const showSwipeHint = !hasInteracted;

  return (
    <Section id="screenshots" title="Experience ArrowOS-Extended" subtitle="See how our custom ROM transforms your Android experience." centered className="bg-dark-950 py-8 md:py-12">
      <div 
        ref={containerRef}
        className="relative px-4 max-w-4xl mx-auto select-none"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        style={{ touchAction: 'pan-y' }}
      >
        <div className="flex flex-col lg:flex-row items-center justify-center gap-6 w-full">
          {/* Image Container */}
          <div className="w-full lg:w-1/2 xl:w-1/3 flex-shrink-0 relative"
            style={{ maxWidth: 'min(100%, 400px)' }}>
            <img
              ref={imageRef}
              src={url}
              alt={title}
              loading="eager"
              className="w-full h-auto object-contain rounded-xl md:rounded-2xl shadow-xl transition-opacity duration-200"
              style={{ 
                aspectRatio: '9/16',
                opacity: 1,
                imageRendering: '-webkit-optimize-contrast'
              }}
            />
            
            {/* Swipe Indicator */}
            {showSwipeHint && (
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none"
                style={{ top: '50%', transform: 'translateY(-50%)' }}>
                <div className="flex items-center gap-2 text-white backdrop-blur-sm bg-black/30 px-4 py-2 rounded-full shadow-lg border border-white/10 animate-pulse"
                  style={{
                    fontSize: 'clamp(0.75rem, 1.5vw, 1rem)',
                    padding: 'clamp(6px, 1.2vw, 10px) clamp(12px, 2vw, 16px)'
                  }}>
                  <svg 
                    className="inline-block"
                    style={{ width: 'clamp(16px, 2.5vw, 20px)', height: 'clamp(16px, 2.5vw, 20px)' }}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  <span className="whitespace-nowrap">
                    {isMobile ? 'Swipe' : 'Drag'}
                  </span>
                  <svg 
                    className="inline-block"
                    style={{ width: 'clamp(16px, 2.5vw, 20px)', height: 'clamp(16px, 2.5vw, 20px)' }}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            )}
          </div>

          {/* Text Content */}
          <div className="w-full lg:w-auto text-center lg:text-left px-4 md:px-0">
            <h3 className="text-xl md:text-2xl xl:text-3xl font-bold text-white mb-2 md:mb-3">
              {title}
            </h3>
            <p className="text-sm md:text-base text-gray-300 leading-relaxed max-w-prose">
              {description}
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Screenshots;