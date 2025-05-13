import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence, PanInfo } from 'framer-motion';
import Section from '../ui/Section';

const screenshots = [
  { id: 1, url: 'images/1.png', title: 'Home Screen', description: 'Clean and minimalist home screen design' },
  { id: 2, url: 'images/2.png', title: 'Lockscreen', description: 'You can show weather informations in Lockscreen now' },
  { id: 3, url: 'images/3.png', title: 'Quick Settings', description: 'Redesigned quick settings with some customitations' },
  { id: 4, url: 'images/4.png', title: 'Extensions Menu', description: 'setup your styling for UI and enchancement here' },
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

// Slide + Fade Variants
const fadeVariants = {
  enter: (dir: number) => ({ x: dir > 0 ? 150 : -150, opacity: 0 }),
  center: { x: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeInOut' } },
  exit: (dir: number) => ({ x: dir < 0 ? 150 : -150, opacity: 0, transition: { duration: 0.6, ease: 'easeInOut' } }),
};

// Hint SVG with drop-shadow
const HintSvg = () => (
  <svg
    width="120"
    height="80"
    viewBox="0 0 120 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="drop-shadow-lg"
  >
    <defs>
      <linearGradient id="arrowGrad" x1="0" y1="40" x2="120" y2="40" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#FFF" stopOpacity="0" />
        <stop offset="50%" stopColor="#FFF" stopOpacity="0.8" />
        <stop offset="100%" stopColor="#FFF" stopOpacity="0" />
      </linearGradient>
    </defs>
    <path d="M100 40 H20" stroke="url(#arrowGrad)" strokeWidth="8" strokeLinecap="round" />
    <path d="M30 30 L20 40 L30 50" fill="white" />
    <path d="M90 40 C90 20, 60 20, 60 40 S90 60, 90 40" fill="rgba(255,255,255,0.8)" />
  </svg>
);

// Hint animation
const hintVariants = {
  initial: { opacity: 0, scale: 0.8 },
  animate: {
    opacity: [0.8, 0.4, 0.8],
    scale: [1, 1.1, 1],
    transition: { duration: 1.5, ease: 'easeInOut', repeat: Infinity },
  },
};

const Screenshots: React.FC = () => {
  const [[currentIndex, direction], setIndex] = useState<[number, number]>([0, 0]);
  const [isSmall, setIsSmall] = useState(false);
  const [hasSwiped, setHasSwiped] = useState(false);
  const autoPlayRef = useRef<number>();

  // Track small screens and resize changes
  useEffect(() => {
    const check = () => setIsSmall(window.innerWidth <= 410);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  // Auto-advance on large screens
  useEffect(() => {
    if (!isSmall) {
      clearTimeout(autoPlayRef.current);
      autoPlayRef.current = window.setTimeout(() => paginate(1), 5000);
      return () => clearTimeout(autoPlayRef.current);
    }
  }, [currentIndex, isSmall]);

  const paginate = useCallback((dir: number) => {
    setIndex(([i]) => [
      (i + dir + screenshots.length) % screenshots.length,
      dir,
    ]);
  }, []);

  const handleDragStart = () => {
    if (isSmall && !hasSwiped) {
      setHasSwiped(true);
    }
  };

  const handleDragEnd = (_: any, info: PanInfo) => {
    const threshold = 80;
    if (info.offset.x < -threshold) paginate(1);
    else if (info.offset.x > threshold) paginate(-1);
  };

  // Safe index
  const safeIndex = Math.max(0, Math.min(currentIndex, screenshots.length - 1));
  const { url, title, description } = screenshots[safeIndex];

  return (
    <Section
      id="screenshots"
      title="Experience ArrowOS-Extended"
      subtitle="See how our custom ROM transforms your Android experience with a beautiful interface and powerful features."
      centered
      className="bg-dark-950 py-12 md:py-20 lg:py-24"
    >
      <div className="relative px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto overflow-visible cursor-grab">
        <AnimatePresence>
          {isSmall && !hasSwiped && (
            <motion.div
              key="hint"
              variants={hintVariants}
              initial="initial"
              animate="animate"
              className="absolute"
              style={{
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                pointerEvents: 'none',
              }}
            >
              <HintSvg />
            </motion.div>
          )}
        </AnimatePresence>

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
            <div className="w-full sm:w-2/3 md:w-1/2 lg:w-1/3 aspect-[9/19] flex-shrink-0 overflow-visible">
              <motion.img
                src={url}
                alt={title}
                className="w-full h-auto object-cover rounded-3xl shadow-lg"
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
      </div>
    </Section>
  );
};

export default Screenshots;
