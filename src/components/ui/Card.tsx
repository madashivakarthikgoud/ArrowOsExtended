import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  glassEffect?: boolean;
  animated?: boolean;
}

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  glassEffect = false,
  animated = false,
}) => {
  const classes = `rounded-xl overflow-hidden ${
    glassEffect ? 'glass' : 'bg-dark-900 border border-dark-800'
  } ${className}`;
  
  if (animated) {
    return (
      <motion.div
        className={classes}
        whileHover={{ y: -5, boxShadow: '0 10px 30px -15px rgba(0, 0, 0, 0.5)' }}
        transition={{ duration: 0.2 }}
      >
        {children}
      </motion.div>
    );
  }
  
  return (
    <div className={classes}>
      {children}
    </div>
  );
};

export default Card;