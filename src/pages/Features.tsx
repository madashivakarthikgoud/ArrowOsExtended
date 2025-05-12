import React from 'react';
import { motion } from 'framer-motion';
import { features } from '../data/features';
import PageTransition from '../components/ui/PageTransition';
import Section from '../components/ui/Section';
import FeatureCard from '../components/features/FeatureCard';

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
                      icon={<feature.icon size={24} className={feature.highlight ? 'text-primary-500' : 'text-white'} />}
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
              ArrowOS-Extended combines the best of stock Android with the features you actually want, without the bloat you don't.
            </motion.p>
            
            <motion.div
              className="glass p-8 rounded-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="flex justify-center mb-6">
                <div className="relative p-4 bg-dark-800 rounded-full">
                  <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L3 9L12 16L21 9L12 2Z" className="fill-primary-500" />
                    <path d="M3 9V17L7 20V12L3 9Z" className="fill-primary-400" />
                    <path d="M21 9V17L17 20V12L21 9Z" className="fill-primary-600" />
                    <path d="M12 16V22L3 17V9L12 16Z" className="fill-primary-400 opacity-70" />
                    <path d="M12 16V22L21 17V9L12 16Z" className="fill-primary-600 opacity-70" />
                  </svg>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold mb-2">Built with Passion</h3>
              <p className="text-dark-300">
                ArrowOS-Extended is maintained by a dedicated team of developers who are passionate about creating the best possible Android experience. We're constantly working to improve and refine the ROM, bringing you the latest features and optimizations.
              </p>
            </motion.div>
          </div>
        </Section>
      </div>
    </PageTransition>
  );
};

export default FeaturesPage;