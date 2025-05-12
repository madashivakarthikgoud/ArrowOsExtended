import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Shield, Smartphone, Battery, Paintbrush, Settings, Clock, Cloud } from 'lucide-react';
import Section from '../ui/Section';
import Button from '../ui/Button';

const featuresList = [
  {
    icon: <Zap size={24} />,
    title: 'Performance Optimized',
    description: 'Experience lightning-fast performance with kernel optimizations and system tweaks.',
    color: 'from-blue-500 to-indigo-500'
  },
  {
    icon: <Battery size={24} />,
    title: 'Battery Efficiency',
    description: 'Extended battery life with advanced power management features.',
    color: 'from-green-500 to-teal-500'
  },
  {
    icon: <Shield size={24} />,
    title: 'Enhanced Security',
    description: 'Stay protected with regular security patches and privacy features.',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: <Paintbrush size={24} />,
    title: 'Customization',
    description: 'Personalize your device with theme engine and UI customization options.',
    color: 'from-orange-500 to-red-500'
  },
  {
    icon: <Settings size={24} />,
    title: 'Advanced Controls',
    description: 'Fine-tune your experience with extended system controls and settings.',
    color: 'from-cyan-500 to-blue-500'
  },
  {
    icon: <Clock size={24} />,
    title: 'Regular Updates',
    description: 'Stay up-to-date with frequent OTA updates and improvements.',
    color: 'from-amber-500 to-orange-500'
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const Features: React.FC = () => {
  return (
    <Section
      id="features"
      title="Key Features"
      subtitle="Discover what makes ArrowOS-Extended the perfect choice for Android enthusiasts."
      centered={true}
    >
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        {featuresList.map((feature, index) => (
          <motion.div
            key={index}
            className="glass p-6 rounded-xl hover:shadow-lg transition-all"
            variants={item}
          >
            <div className={`p-3 rounded-lg w-fit mb-4 bg-gradient-to-r ${feature.color} bg-opacity-10`}>
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-dark-300">{feature.description}</p>
          </motion.div>
        ))}
      </motion.div>
      
      <div className="mt-12 text-center">
        <Button to="/features" variant="primary">
          Explore All Features
        </Button>
      </div>
    </Section>
  );
};

export default Features;