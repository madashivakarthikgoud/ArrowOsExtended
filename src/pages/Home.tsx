import React from 'react';
import PageTransition from '../components/ui/PageTransition';
import Hero from '../components/home/Hero';
import Screenshots from '../components/home/Screenshots';
import Features from '../components/home/Features';
import Download from '../components/home/Download';

const HomePage: React.FC = () => {
  return (
    <PageTransition>
      <Hero />
      <Features />
      <Screenshots />
      <Download />
    </PageTransition>
  );
};

export default HomePage;