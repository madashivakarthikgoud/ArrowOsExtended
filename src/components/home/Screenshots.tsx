import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence, PanInfo } from 'framer-motion';
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

const fadeVariants = {
  enter: dir => ({ x: dir > 0 ? 150 : -150, opacity: 0 }),
  center: { x: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeInOut' } },
  exit: dir => ({ x: dir < 0 ? 150 : -150, opacity: 0, transition: { duration: 0.6, ease: 'easeInOut' } }),
};

const Screenshots = () => {
  const [[currentIndex, direction], setIndex] = useState([0, 0]);
  const [hasSwiped, setHasSwiped] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const autoPlayRef = useRef();

  const paginate = useCallback(dir => {
    setIndex(([i]) => [ (i + dir + screenshots.length) % screenshots.length, dir ]);
    setHasSwiped(true);
  }, []);

  const handleDragEnd = (_event, info: PanInfo) => {
    setIsDragging(false);
    const threshold = 80;
    if (info.offset.x < -threshold) paginate(1);
    else if (info.offset.x > threshold) paginate(-1);
  };
  const handleDragStart = () => setIsDragging(true);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 640);
    onResize(); window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    if (!isMobile) {
      clearTimeout(autoPlayRef.current);
      autoPlayRef.current = window.setTimeout(() => paginate(1), 5000);
    }
    return () => clearTimeout(autoPlayRef.current);
  }, [currentIndex, paginate, isMobile]);

  const { url, title, description } = screenshots[currentIndex];
  const firstSlide = screenshots[0];
  const showSwipeHint = isMobile && !hasSwiped && !isDragging;

  return (
    <Section id="screenshots" title="Experience ArrowOS-Extended" subtitle="See how our custom ROM transforms your Android experience." centered className="bg-dark-950 py-12">
      <div className="relative px-4 max-w-4xl mx-auto overflow-hidden cursor-grab">
        {/* Invisible placeholder of first slide to prevent blank gap */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <img
            src={firstSlide.url}
            alt={firstSlide.title}
            className="w-full h-full object-contain rounded-3xl opacity-0"
          />
          <div className="absolute bottom-8 left-8 text-left opacity-0">
            <h3 className="text-3xl font-bold text-white">{firstSlide.title}</h3>
            <p className="mt-2 text-base text-gray-400">{firstSlide.description}</p>
          </div>
        </div>

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
            className="relative flex flex-col lg:flex-row items-center justify-center gap-8 w-full"
          >
            <div className="w-full lg:w-1/3 flex-shrink-0">
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
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">{title}</h3>
              <p className="mt-2 text-sm sm:text-base text-gray-400">{description}</p>
            </motion.div>
          </motion.div>
        </AnimatePresence>

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
