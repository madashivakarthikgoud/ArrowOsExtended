import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, ShieldCheck, Zap, Smartphone } from 'lucide-react';
import Button from '../ui/Button';

const Hero: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });
  //Mobile detector MUST come first
  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' ? window.innerWidth < 768 : true
  );
  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);
  // Then scroll hooks and transforms
  const { scrollY } = useScroll();
  // slow fade on desktop, no fade on mobile
  const fadeRange = isMobile ? [0, 1] : [0, 600];
  const y = useTransform(scrollY, fadeRange, [0, 100]);
  const opacity = useTransform(scrollY, fadeRange, [1, 0]);
  return (
    <div className="relative min-h-screen pt-20 md:pt-18 lg:pt-1 overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-950/80 via-dark-950/60 to-dark-950"></div>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          style={{ filter: 'blur(8px)' }}
        >
          <source src="https://www.quantamagazine.org/wp-content/uploads/2020/03/Axion_Lede_1300wide.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="max-w-7xl mx-auto px-4 pt-12 lg:pt-20">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 lg:pr-12">
            <motion.div
              ref={ref}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Experience Android Like Never Before with <span className="text-gradient bg-gradient-to-r from-primary-400 via-secondary-400 to-accent-400">ArrowOS-Extended</span>
              </h1>

              <p className="text-xl text-dark-300 mb-8 leading-relaxed">
                A custom ROM that combines performance, stability, and essential customization features for the ultimate Android experience.
              </p>

              <div className="flex flex-wrap gap-4 mb-12">
                <Button
                  to="/downloads"
                  variant="primary"
                  size="lg"
                  className="backdrop-blur-sm bg-primary-600/90 hover:bg-primary-600"
                >
                  Download Now
                  <ArrowRight size={20} />
                </Button>

                <Button
                  to="/features"
                  variant="outline"
                  size="lg"
                  className="backdrop-blur-sm bg-dark-900/50"
                >
                  Explore Features
                </Button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {[
                  {
                    icon: <Zap className="text-primary-500" />,
                    title: 'Lightning Fast',
                    desc: 'Optimized for speed and responsiveness'
                  },
                  {
                    icon: <ShieldCheck className="text-secondary-500" />,
                    title: 'Secure & Stable',
                    desc: 'Enhanced security with regular updates'
                  },
                  {
                    icon: <Smartphone className="text-accent-500" />,
                    title: 'Clean UI',
                    desc: 'Minimalist design with essential customizations'
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    className="glass-modern p-4 rounded-2xl backdrop-blur-md"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 + (i * 0.1) }}
                  >
                    <div className="p-2 mb-3 rounded-xl w-fit bg-dark-800/50">{item.icon}</div>
                    <h3 className="font-semibold mb-1">{item.title}</h3>
                    <p className="text-sm text-dark-300">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            className="w-full lg:w-1/2 mt-12 lg:mt-0"
            style={isMobile ? {} : { y, opacity }}
          >
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Phone mockup with enhanced iOS-style design */}
              <div className="relative z-10 mx-auto w-[280px] h-[570px] rounded-[3rem] border-[14px] border-dark-950/90 overflow-hidden shadow-2xl backdrop-blur-xl">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/10 via-secondary-500/10 to-accent-500/10"></div>
                <img
                  src="images/heroImage.jpg"
                  alt="ArrowOS-Extended screenshot"
                  className="w-full h-full object-cover rounded-[2.5rem]"
                />
              </div>

              {/* Decorative elements with iOS 18-style blur effects */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-gradient-to-tr from-primary-500/20 via-secondary-500/20 to-accent-500/20 rounded-full filter blur-3xl -z-10"></div>

              <motion.div
                className="absolute -bottom-4 -right-4 glass-modern p-4 rounded-2xl max-w-[200px] shadow-lg backdrop-blur-xl"
                initial={{ x: 50, opacity: 0 }}
                animate={inView ? { x: 0, opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <h4 className="font-semibold text-sm mb-1">Android 13+</h4>
                <p className="text-xs text-dark-300">Latest Android features with custom enhancements.</p>
              </motion.div>

              <motion.div
                className="absolute -top-4 -left-4 glass-modern p-4 rounded-2xl max-w-[200px] shadow-lg backdrop-blur-xl"
                initial={{ x: -50, opacity: 0 }}
                animate={inView ? { x: 0, opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <h4 className="font-semibold text-sm mb-1">Battery Optimized</h4>
                <p className="text-xs text-dark-300">Extended battery life with smart power management.</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;