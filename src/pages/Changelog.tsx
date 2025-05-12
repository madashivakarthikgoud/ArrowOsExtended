import React from 'react';
import { motion } from 'framer-motion';
import { changelogData } from '../data/changelog';
import PageTransition from '../components/ui/PageTransition';
import Section from '../components/ui/Section';
import ChangelogItem from '../components/changelog/ChangelogItem';

const ChangelogPage: React.FC = () => {
  return (
    <PageTransition>
      <div className="pt-24">
        <Section
          title="ArrowOS-Extended Changelog"
          subtitle="Stay up to date with all the latest features, improvements, bug fixes, and security updates."
          centered={true}
        >
          <div className="max-w-3xl mx-auto">
            {changelogData.map((entry, index) => (
              <motion.div
                key={entry.version}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ChangelogItem
                  version={entry.version}
                  date={entry.date}
                  changes={entry.changes}
                />
              </motion.div>
            ))}
          </div>
        </Section>
        
        <Section className="bg-dark-950">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              className="text-3xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Stay Updated
            </motion.h2>
            
            <motion.p
              className="text-xl text-dark-300 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Follow our GitHub repository and join our Telegram channel to be notified about new releases and updates.
            </motion.p>
            
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <a
                href="https://github.com/ArrowOS-Ext/OTA"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                GitHub Repository
              </a>
              
              <a
                href="https://t.me/arrowosextended_updates"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                Telegram Channel
              </a>
            </motion.div>
          </div>
        </Section>
      </div>
    </PageTransition>
  );
};

export default ChangelogPage;