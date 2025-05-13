import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence, PanInfo } from 'framer-motion';
import Section from '../ui/Section';

const screenshots = [
  { id: 1, url: 'images/1.png', title: 'Home Screen', description: 'Clean and minimalist home screen design' },
  { id: 2, url: 'images/2.png', title: 'Lockscreen', description: 'You can show weather informations in Lockscreen now' },
  { id: 3, url: 'images/3.png', title: 'Quick Settings', description: 'Redesigned quick settings with some customitations' },
  { id: 4, url: 'images/4.png', title: 'Extensions Menu', description: 'Setup your styling for UI and enhancement here' },
  { id: 5, url: 'images/5.png', title: 'Themes Menu', description: 'Setup your themes, font, icon packs, and icon shape here' },
  { id: 6, url: 'images/6.png', title: 'Statusbar Menu', description: 'Make your statusbar cooler here' },
  { id: 7, url: 'images/8.png', title: 'Quick Settings Menu', description: 'Intuitive settings with extended options' },
  { id: 9, url: 'images/9.png', title: 'Notifications Menu', description: 'Enhance your notifications so it is not bored' },
  { id: 10, url: 'images/10.png', title: 'Lockscreen Menu', description: 'Increase your privacy and interface for lockscreen menu' },
  { id: 14, url: 'images/14.png', title: 'Misc Menu', description: 'Elevate your experience here' },
  { id: 15, url: 'images/15.png', title: 'Weather Settings', description: 'Show weather info in Home Screen and Lockscreen' },
  { id: 16, url: 'images/16.png', title: 'Spoofing Settings', description: 'Spoof your device for pass integrity and certificate of Play Store also get unlimited Gphotos backup' },
  { id: 18, url: 'images/18.png', title: 'GameSpace Settings', description: 'Increase your gaming experience' },
];

const fadeVariants = {
  enter: (dir: number) => ({ x: dir > 0 ? 150 : -150, opacity: 0 }),
  center: { x: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeInOut' } },
  exit: (dir: number) => ({ x: dir < 0 ? 150 : -150, opacity: 0, transition: { duration: 0.6, ease: 'easeInOut' } }),
};

const Screenshots: React.FC = () => {
  const [[currentIndex, direction], setIndex] = useState<[number, number]>([0, 0]);
  const [hasSwiped, setHasSwiped] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const autoPlayRef = useRef<number>();

  const paginate = useCallback((dir: number) => {
    setIndex(([i]) => [
      (i + dir + screenshots.length) % screenshots.length,
      dir,
    ]);
    setHasSwiped(true);
  }, []);

  const handleDragEnd = (_: any, info: PanInfo) => {
    setIsDragging(false);
    const threshold = 80;
    if (info.offset.x < -threshold) paginate(1);
    else if (info.offset.x > threshold) paginate(-1);
  };

  const handleDragStart = () => {
    setIsDragging(true);
  };

  // Responsive check
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Conditional autoplay
  useEffect(() => {
    if (!isMobile) {
      clearTimeout(autoPlayRef.current);
      autoPlayRef.current = window.setTimeout(() => paginate(1), 5000);
    }
    return () => clearTimeout(autoPlayRef.current);
  }, [currentIndex, paginate, isMobile]);

  const { url, title, description } = screenshots[currentIndex];
  const showSwipeHint = isMobile && !hasSwiped && !isDragging;

  return (
    <Section
      id="screenshots"
      title="Experience ArrowOS-Extended"
      subtitle="See how our custom ROM transforms your Android experience with a beautiful interface and powerful features."
      centered
      className="bg-dark-950 py-12 md:py-20 lg:py-24"
    >
      <div className="relative px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto overflow-hidden cursor-grab">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={url}
            custom={direction}
            variants={fadeVariants}
            initial="enter"
            animate="center"
            exit="exit"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.25}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
            className="flex flex-col lg:flex-row items-center justify-center gap-8 w-full"
          >
            <div className="w-full sm:w-2/3 md:w-1/2 lg:w-1/3 flex-shrink-0">
              <motion.img
                src={url}
                alt={title}
                className="w-full h-auto object-contain rounded-3xl shadow-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.7 } }}
                exit={{ opacity: 0, transition: { duration: 0.5 } }}
              />
            </div>

            <motion.div
              className="w-full lg:w-auto text-center lg:text-left"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.3, duration: 0.7 } }}
              exit={{ opacity: 0, transition: { duration: 0.5 } }}
            >
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
                {title}
              </h3>
              <p className="mt-2 text-sm sm:text-base text-gray-400">
                {description}
              </p>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Swipe Hint Indicator */}
        {showSwipeHint && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="flex items-center gap-2 text-white opacity-75 animate-pulse">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span className="text-sm">Swipe to navigate</span>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        )}
      </div>
    </Section>
  );
};

export default Screenshots;
