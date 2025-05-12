import React from 'react';
import { motion } from 'framer-motion';
import { Download, Smartphone, Calendar } from 'lucide-react';
import Button from '../ui/Button';

interface DeviceCardProps {
  name: string;
  codename: string;
  maintainer: string;
  lastUpdate: string;
  image?: string;
}

const DeviceCard: React.FC<DeviceCardProps> = ({
  name,
  codename,
  maintainer,
  lastUpdate,
  image,
}) => {
  return (
    <motion.div
      className="glass rounded-xl overflow-hidden"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <div className="h-48 overflow-hidden relative">
        <img 
          src={image || "https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} 
          alt={name} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-950/80 to-transparent"></div>
        <div className="absolute bottom-4 left-4">
          <div className="px-2 py-1 text-xs rounded-full bg-dark-950/70 backdrop-blur-sm inline-flex items-center">
            <Smartphone size={12} className="mr-1" />
            {codename}
          </div>
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-1">{name}</h3>
        
        <div className="flex items-center text-sm text-dark-300 mb-3">
          <Calendar size={14} className="mr-1" />
          Last updated: {lastUpdate}
        </div>
        
        <p className="text-sm text-dark-300 mb-4">
          Maintained by: {maintainer}
        </p>
        
        <Button 
          to={`/downloads/${codename}`} 
          variant="primary" 
          className="w-full justify-center"
        >
          <Download size={16} className="mr-1" />
          Download
        </Button>
      </div>
    </motion.div>
  );
};

export default DeviceCard;