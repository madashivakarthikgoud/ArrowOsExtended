import React from 'react';
import { motion } from 'framer-motion';
import { Download, Smartphone, Calendar, ScrollText } from 'lucide-react';
import Button from '../ui/Button';
import { devices, Device } from '../../data/devices';

interface DeviceCardProps {
  codename: string;
}

const DeviceCard: React.FC<DeviceCardProps> = ({ codename }) => {
  // Find the device details based on the codename
  const device: Device | undefined = devices.find(
    (d) => d.codename.toLowerCase() === codename.toLowerCase()
  );

  if (!device) {
    return (
      <div className="text-center p-4 text-red-500">
        Device not found.
      </div>
    );
  }

  const {
    name,
    brand,
    codename: deviceCodename,
    maintainer,
    lastUpdate,
    androidVersion,
    image,
    downloadUrl,
    changelogUrl
  } = device;

  return (
    <motion.div
      className="glass rounded-xl overflow-hidden shadow-xl"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <div className="h-48 overflow-hidden relative">
        <img
          src={image || 'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg'}
          alt={name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-950/80 to-transparent" />
        <div className="absolute bottom-4 left-4">
          <div className="px-2 py-1 text-xs rounded-full bg-dark-950/70 backdrop-blur-sm inline-flex items-center">
            <Smartphone size={12} className="mr-1" />
            {deviceCodename}
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
          Maintained by: {maintainer} | Android Version: {androidVersion}
        </p>

        <div className="flex gap-2">
          <Button
            to={downloadUrl}
            variant="primary"
            className="w-full justify-center"
          >
            <Download size={16} className="mr-1" />
            Download
          </Button>

          <Button
            to={changelogUrl}
            variant="secondary"
            className="w-full justify-center"
          >
            <ScrollText size={16} className="mr-1" />
            Changelog
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default DeviceCard;
