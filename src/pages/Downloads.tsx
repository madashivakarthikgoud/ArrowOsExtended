import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, Smartphone } from 'lucide-react';
import { devices } from '../data/devices';
import PageTransition from '../components/ui/PageTransition';
import Section from '../components/ui/Section';
import DeviceCard from '../components/downloads/DeviceCard';

const DownloadsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('');
  
  const brands = useMemo(() => {
    const brandsList = devices.map(device => device.brand);
    return ['All Brands', ...Array.from(new Set(brandsList))];
  }, []);
  
  const filteredDevices = useMemo(() => {
    return devices.filter(device => {
      const matchesSearch = 
        device.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        device.codename.toLowerCase().includes(searchTerm.toLowerCase());
        
      const matchesBrand = 
        selectedBrand === '' || 
        selectedBrand === 'All Brands' || 
        device.brand === selectedBrand;
        
      return matchesSearch && matchesBrand;
    });
  }, [searchTerm, selectedBrand]);
  
  return (
    <PageTransition>
      <div className="pt-24">
        <Section
          title="Download ArrowOS-Extended"
          subtitle="Find the latest builds for your device and experience the best custom ROM for Android."
          centered={true}
        >
          <div className="mb-8 glass p-6 rounded-xl">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search size={18} className="text-dark-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search by device name or codename..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-dark-800 border border-dark-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
              
              <div className="relative md:w-60">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Filter size={18} className="text-dark-400" />
                </div>
                <select
                  value={selectedBrand}
                  onChange={(e) => setSelectedBrand(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-dark-800 border border-dark-700 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  <option value="">All Brands</option>
                  {brands.slice(1).map((brand, index) => (
                    <option key={index} value={brand}>
                      {brand}
                    </option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <svg className="h-4 w-4 text-dark-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          
          {filteredDevices.length > 0 ? (
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {filteredDevices.map((device, index) => (
                <DeviceCard
                  key={device.codename}
                  name={device.name}
                  codename={device.codename}
                  maintainer={device.maintainer}
                  lastUpdate={device.lastUpdate}
                  image={device.image}
                />
              ))}
            </motion.div>
          ) : (
            <motion.div 
              className="text-center py-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <Smartphone size={64} className="mx-auto text-dark-500 mb-4" />
              <h3 className="text-2xl font-semibold mb-2">No devices found</h3>
              <p className="text-dark-300">
                Try another search term or filter.
              </p>
            </motion.div>
          )}
        </Section>
        
        <Section className="bg-dark-950">
          <div className="max-w-3xl mx-auto glass p-8 rounded-xl">
            <h2 className="text-2xl font-bold mb-4">Installation Instructions</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Before installing:</h3>
                <ul className="list-disc pl-5 text-dark-300 space-y-1">
                  <li>Backup all your important data</li>
                  <li>Ensure your device has at least 50% battery</li>
                  <li>Make sure you have a custom recovery installed (TWRP recommended)</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Installation steps:</h3>
                <ol className="list-decimal pl-5 text-dark-300 space-y-1">
                  <li>Download the ROM package for your specific device</li>
                  <li>Download the appropriate GApps package (if needed)</li>
                  <li>Boot into recovery mode</li>
                  <li>Perform a factory reset (Wipe Data, Cache, and Dalvik Cache)</li>
                  <li>Flash the ROM package</li>
                  <li>Flash GApps (if needed)</li>
                  <li>Format Data</li>
                  <li>Reboot your device</li>
                </ol>
              </div>
              
              <div className="pt-2">
                <p className="text-dark-300">
                  For detailed installation guides specific to your device, please visit our GitHub documentation or join our Telegram support group.
                </p>
              </div>
            </div>
          </div>
        </Section>
      </div>
    </PageTransition>
  );
};

export default DownloadsPage;