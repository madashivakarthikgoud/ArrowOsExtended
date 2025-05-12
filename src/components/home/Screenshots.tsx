import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Section from '../ui/Section';

const screenshots = [
  {
    id: 1,
    url: 'images/homeScreen.jpg',
    title: 'Home Screen',
    description: 'Clean and minimalist home screen design'
  },
  {
    id: 2,
    url: 'images/qsImage.jpg',
    title: 'Quick Settings',
    description: 'Redesigned quick settings with customizable tiles'
  },
  {
    id: 3,
    url: 'images/settingsImage.jpg',
    title: 'Settings',
    description: 'Intuitive settings with extended options'
  },
  {
    id: 4,
    url: 'images/heroImage.jpg',
    title: 'Lockscreen',
    description: 'Enhanced lockscreen with custom clock styles'
  }
];

const Screenshots: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  
  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % screenshots.length);
  };
  
  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? screenshots.length - 1 : prevIndex - 1
    );
  };
  
  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  return (
    <Section
      id="screenshots"
      title="Experience ArrowOS-Extended"
      subtitle="See how our custom ROM transforms your Android experience with a beautiful interface and powerful features."
      centered={true}
      className="bg-dark-950"
    >
      <div className="relative">
        {/* Main carousel */}
        <div className="relative h-[600px] overflow-hidden rounded-xl">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={screenshots[currentIndex].id}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              className="absolute w-full h-full flex items-center justify-center"
            >
              <div className="max-w-4xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-12">
                {/* Phone mockup */}
                <div className="relative z-10 mx-auto w-[250px] h-[500px] rounded-[3rem] border-[14px] border-dark-950 overflow-hidden shadow-2xl">
                  <img 
                    src={screenshots[currentIndex].url} 
                    alt={screenshots[currentIndex].title} 
                    className="w-full h-full object-cover rounded-[2.5rem]"
                  />
                </div>
                
                {/* Description */}
                <div className="max-w-md">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">
                    {screenshots[currentIndex].title}
                  </h3>
                  <p className="text-lg text-dark-300 mb-6">
                    {screenshots[currentIndex].description}
                  </p>
                  
                  <div className="flex space-x-3">
                    {screenshots.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          setDirection(index > currentIndex ? 1 : -1);
                          setCurrentIndex(index);
                        }}
                        className={`w-3 h-3 rounded-full transition-all ${
                          index === currentIndex 
                            ? 'bg-primary-500 w-6' 
                            : 'bg-dark-700'
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        
        {/* Navigation buttons */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 -translate-y-1/2 p-2 rounded-full bg-dark-900/80 text-white hover:bg-dark-800 transition-colors z-10"
          aria-label="Previous slide"
        >
          <ChevronLeft size={24} />
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 -translate-y-1/2 p-2 rounded-full bg-dark-900/80 text-white hover:bg-dark-800 transition-colors z-10"
          aria-label="Next slide"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </Section>
  );
};

export default Screenshots;