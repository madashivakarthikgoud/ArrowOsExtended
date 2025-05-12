import React from 'react';
import { motion } from 'framer-motion';
import { Download, ChevronRight, Smartphone } from 'lucide-react';
import Section from '../ui/Section';
import Button from '../ui/Button';

const popularDevices = [
  {
    name: 'Google Pixel 7 Pro',
    codename: 'cheetah',
    image: 'images/pixel7pro.jpg'
  },
  {
    name: 'Poco X3 NFC / Poco X3',
    codename: 'Surya / Karna',
    image: 'images/pocox3.avif'
  },
  {
    name: 'OnePlus 9 Pro',
    codename: 'lemonadep',
    image: 'images/oneplus9pro.png'
  }
];

const DownloadSection: React.FC = () => {
  return (
    <Section
      id="download"
      className="bg-gradient-to-b from-dark-950 to-dark-900"
    >
      <div className="flex flex-col lg:flex-row items-center gap-12">
        <div className="w-full lg:w-1/2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Android Experience?
            </h2>
            
            <p className="text-xl text-dark-300 mb-8">
              ArrowOS-Extended is available for a wide range of devices. Find your device and download the latest build.
            </p>
            
            <div className="flex gap-4 mb-8">
              <Button to="/downloads" variant="primary" size="lg">
                <Download size={20} />
                Browse All Devices
              </Button>
              
              <Button href="https://github.com/ArrowOS-Extended/documentation" variant="outline" size="lg" external>
                Installation Guide
              </Button>
            </div>
            
            <div className="p-4 glass rounded-lg">
              <div className="flex items-center mb-3">
                <Smartphone size={18} className="mr-2 text-primary-500" />
                <h3 className="font-semibold">Popular Devices</h3>
              </div>
              
              <ul className="space-y-2">
                {popularDevices.map((device, index) => (
                  <li key={index}>
                    <Button 
                      to={`/downloads?device=${device.codename}`}
                      variant="secondary" 
                      className="w-full justify-between bg-dark-800/50 hover:bg-dark-800"
                    >
                      {device.name}
                      <ChevronRight size={18} />
                    </Button>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
        
        <div className="w-full lg:w-1/2">
          <motion.div
            className="relative flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative">
              <div className="grid grid-cols-2 gap-6">
                {popularDevices.map((device, index) => (
                  <div 
                    key={index}
                    className={`rounded-2xl overflow-hidden shadow-lg ${
                      index === 0 ? 'col-span-2' : ''
                    }`}
                  >
                    <img 
                      src={device.image} 
                      alt={device.name} 
                      className={`w-full h-auto object-cover ${
                        index === 0 ? 'h-48' : 'h-36'
                      }`}
                    />
                    <div className="p-4 glass">
                      <h4 className="font-medium">{device.name}</h4>
                      <p className="text-sm text-dark-300">codename: {device.codename}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -z-10 -left-4 -bottom-4 w-36 h-36 rounded-full bg-primary-500/20 filter blur-xl"></div>
              <div className="absolute -z-10 -right-4 -top-4 w-24 h-24 rounded-full bg-secondary-500/20 filter blur-xl"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
};

export default DownloadSection;