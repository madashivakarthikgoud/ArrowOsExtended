import React, { useState } from 'react';
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

const fadeVariants = {
  enter: { opacity: 0 },
  center: { opacity: 1, transition: { duration: 0.6, ease: 'easeInOut' } },
  exit:  { opacity: 0, transition: { duration: 0.6, ease: 'easeInOut' } },
};

const Screenshots: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => setCurrentIndex(i => (i + 1) % screenshots.length);
  const prevSlide = () => setCurrentIndex(i => (i === 0 ? screenshots.length - 1 : i - 1));

  const handleDragEnd = (_: any, info: PanInfo) => {
    const swipeThreshold = 100;
    if (info.offset.x < -swipeThreshold) {
      nextSlide();
    } else if (info.offset.x > swipeThreshold) {
      prevSlide();
    }
  };

  return (
    <Section
      id="screenshots"
      title="Experience ArrowOS-Extended"
      subtitle="See how our custom ROM transforms your Android experience with a beautiful interface and powerful features."
      centered
      className="bg-dark-950 py-12 md:py-20 lg:py-24"
    >
      <div className="relative px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={screenshots[currentIndex].id}
            variants={fadeVariants}
            initial="enter"
            animate="center"
            exit="exit"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={handleDragEnd}
            className="w-full flex flex-col lg:flex-row items-center justify-center gap-8 cursor-grab"
          >
            {/* Swipeable Image with rounded edges */}
            <div className="flex-shrink-0 w-2/3 sm:w-1/2 md:w-1/3 lg:w-1/4 aspect-[9/19]">
              <img
                src={screenshots[currentIndex].url}
                alt={screenshots[currentIndex].title}
                className="w-full h-full object-cover rounded-3xl shadow-lg"
                loading="lazy"
              />
            </div>

            {/* Caption & Indicators */}
            <div className="mt-6 lg:mt-0 text-center lg:text-left flex-1">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
                {screenshots[currentIndex].title}
              </h3>
              <p className="mt-2 text-sm sm:text-base text-gray-400">
                {screenshots[currentIndex].description}
              </p>
              <div className="mt-4 flex justify-center lg:justify-start space-x-2">
                {screenshots.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-2 w-8 rounded-full transition-all duration-300 ${
                      idx === currentIndex ? 'bg-primary-500' : 'bg-gray-700 hover:bg-gray-600'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </Section>
  );
};

export default Screenshots;
