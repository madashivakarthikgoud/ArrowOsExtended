import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface FeatureCardProps extends HTMLMotionProps<'div'> {
  title: string;
  description: string;
  icon: React.ReactNode;
  /**
   * Tailwind gradient class, e.g. "from-blue-500 to-green-500"
   */
  gradient?: string;
  /**
   * Delay for the entrance animation (in seconds)
   */
  delay?: number;
}

const DEFAULT_GRADIENT = 'from-primary-500 to-secondary-500';

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  icon,
  gradient = DEFAULT_GRADIENT,
  delay = 0,
  whileHover,
  ...motionProps
}) => {
  return (
    <motion.div
      className="glass backdrop-blur-md rounded-xl shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={whileHover ?? { scale: 1.03, transition: { duration: 0.3 } }}
      {...motionProps}
    >
      {/* Accent bar */}
      <div className={`h-1 w-full bg-gradient-to-r ${gradient}`} />

      <div className="p-6">
        {/* Icon container */}
        <div className="p-3 bg-dark-800 rounded-lg w-max mb-4">
          {icon}
        </div>

        {/* Title */}
        <h3 className="text-lg sm:text-xl font-semibold mb-2">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm sm:text-base text-gray-300">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default FeatureCard;
