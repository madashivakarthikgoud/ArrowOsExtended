import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, ChevronDown, Code, Bug, Zap, Shield } from 'lucide-react';

interface ChangeItem {
  type: 'feature' | 'fix' | 'improvement' | 'security';
  description: string;
}

interface ChangelogItemProps {
  version: string;
  date: string;
  changes: ChangeItem[];
}

const ChangelogItem: React.FC<ChangelogItemProps> = ({
  version,
  date,
  changes,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const getIcon = (type: string) => {
    switch (type) {
      case 'feature':
        return <Code size={16} className="text-primary-500" />;
      case 'fix':
        return <Bug size={16} className="text-red-500" />;
      case 'improvement':
        return <Zap size={16} className="text-amber-500" />;
      case 'security':
        return <Shield size={16} className="text-green-500" />;
      default:
        return <Code size={16} className="text-primary-500" />;
    }
  };
  
  const getLabel = (type: string) => {
    switch (type) {
      case 'feature':
        return 'New Feature';
      case 'fix':
        return 'Bug Fix';
      case 'improvement':
        return 'Improvement';
      case 'security':
        return 'Security';
      default:
        return 'Change';
    }
  };
  
  return (
    <div className="glass rounded-xl overflow-hidden mb-4">
      <button
        className="w-full p-4 flex justify-between items-center text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div>
          <h3 className="text-xl font-semibold">Version {version}</h3>
          <div className="flex items-center text-sm text-dark-300">
            <Calendar size={14} className="mr-1" />
            {date}
          </div>
        </div>
        
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown size={20} />
        </motion.div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-4 pb-4">
              <div className="border-t border-dark-800 pt-4">
                <ul className="space-y-3">
                  {changes.map((change, index) => (
                    <li key={index} className="flex">
                      <div className="mr-3 mt-1">{getIcon(change.type)}</div>
                      <div>
                        <span className="text-xs px-2 py-0.5 rounded-full bg-dark-800 mr-2">
                          {getLabel(change.type)}
                        </span>
                        <p className="mt-1">{change.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ChangelogItem;