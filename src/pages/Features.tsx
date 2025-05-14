import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { features } from '../data/features';
import PageTransition from '../components/ui/PageTransition';
import Section from '../components/ui/Section';
import FeatureCard from '../components/features/FeatureCard';

// 1. SpinningSVG is now properly closed.
function SpinningSVG() {
  const [isSpinning, setIsSpinning] = useState(true);

  const toggleSpin = () => {
    setIsSpinning(!isSpinning);
  };

  return (
    <div className="flex justify-center mb-6">
      <div className="relative p-4 bg-dark-800 rounded-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1024 1024"
          className={`w-16 h-16 ${isSpinning ? 'spin' : ''}`}
          onClick={toggleSpin}
        >
          <defs>
  <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
    <stop offset="0%" stopColor="#4A90E2" />
    <stop offset="100%" stopColor="#9013FE" />
  </linearGradient>
  <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
    <feDropShadow
      dx="0"
      dy="10"
      stdDeviation="15"
      floodColor="#000"
      floodOpacity="0.3"
    />
  </filter>
  <clipPath id="circleClip">
    <circle cx="512" cy="512" r="500" />
  </clipPath>
          </defs>

          <circle cx="512" cy="512" r="500" fill="url(#grad1)" filter="url(#shadow)" />
          <g clipPath="url(#circleClip)">
            <g transform="translate(210,360) scale(1.2)">
              <path d="M256 0 L512 512 L256 640 L0 512 Z" fill="#FFF" />
              <path d="M256 128 L448 512 L256 608 L64 512 Z" fill="#4A90E2" />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
} // ← Closing brace for SpinningSVG

// 2. FeaturesPage now begins at the top level.
const FeaturesPage: React.FC = () => {
  return (
    <PageTransition>
      <div className="pt-24">
        <Section
          title="ArrowOS-Extended Features"
          subtitle="Discover the full range of features that make ArrowOS-Extended a superior Android experience."
          centered={true}
        >
          <div className="space-y-16">
            {features.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <motion.h2
                  className="text-2xl font-bold mb-6 pb-2 border-b border-dark-800"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  {category.category}
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.items.map((feature, featureIndex) => (
                    <FeatureCard
                      key={featureIndex}
                      title={feature.title}
                      description={feature.description}
                      icon={
                        <feature.icon
                          size={24}
                          className={
                            feature.highlight ? 'text-primary-500' : 'text-white'
                          }
                        />
                      }
                      delay={0.1 * featureIndex}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section className="bg-dark-950">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              className="text-3xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Experience Android Like Never Before
            </motion.h2>

            <motion.p
              className="text-xl text-dark-300 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              ArrowOS-Extended combines the best of stock Android with the
              features you actually want, without the bloat you don't.
            </motion.p>

            <motion.div
              className="glass p-8 rounded-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {/* 3. Replace inline SVG block with <SpinningSVG /> */}
              <SpinningSVG />

              <h3 className="text-2xl font-bold mb-2">Built with Passion</h3>
              <p className="text-dark-300">
                ArrowOS-Extended is maintained by a dedicated team of developers
                who are passionate about creating the best possible Android
                experience. We're constantly working to improve and refine the
                ROM, bringing you the latest features and optimizations.
              </p>
            </motion.div>
          </div>
        </Section>
      </div>
    </PageTransition>
  );
};

// 4. Export at the module’s top level
export default FeaturesPage;
