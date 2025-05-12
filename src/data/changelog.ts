export interface ChangeItem {
  type: 'feature' | 'fix' | 'improvement' | 'security';
  description: string;
}

export interface ChangelogEntry {
  version: string;
  date: string;
  changes: ChangeItem[];
}

export const changelogData: ChangelogEntry[] = [
  {
    version: '4.2',
    date: 'June 15, 2025',
    changes: [
      {
        type: 'feature',
        description: 'Added new dynamic theme engine that adapts to your wallpaper'
      },
      {
        type: 'feature',
        description: 'Implemented advanced screen-off gestures for quick actions'
      },
      {
        type: 'improvement',
        description: 'Enhanced camera performance with new processing algorithms'
      },
      {
        type: 'improvement',
        description: 'Optimized system animations for smoother transitions'
      },
      {
        type: 'fix',
        description: 'Fixed occasional launcher crashes when using custom icons'
      },
      {
        type: 'security',
        description: 'Updated to the latest June 2025 security patch'
      }
    ]
  },
  {
    version: '4.1',
    date: 'May 10, 2025',
    changes: [
      {
        type: 'feature',
        description: 'Added customizable Always-On Display with new clock styles'
      },
      {
        type: 'feature',
        description: 'Implemented app pairing for split-screen multitasking'
      },
      {
        type: 'improvement',
        description: 'Improved battery usage statistics with more detailed information'
      },
      {
        type: 'fix',
        description: 'Fixed WiFi connectivity issues on some devices'
      },
      {
        type: 'fix',
        description: 'Resolved random reboots during heavy gaming sessions'
      },
      {
        type: 'security',
        description: 'Enhanced privacy controls for app permissions'
      }
    ]
  },
  {
    version: '4.0',
    date: 'April 5, 2025',
    changes: [
      {
        type: 'feature',
        description: 'Major UI overhaul with new animations and transitions'
      },
      {
        type: 'feature',
        description: 'Added customizable navigation gestures with haptic feedback'
      },
      {
        type: 'feature',
        description: 'Implemented advanced battery optimization profiles'
      },
      {
        type: 'improvement',
        description: 'Enhanced notification management with priority controls'
      },
      {
        type: 'improvement',
        description: 'Optimized RAM management for better multitasking'
      },
      {
        type: 'fix',
        description: 'Fixed multiple Bluetooth connectivity issues'
      },
      {
        type: 'fix',
        description: 'Resolved camera focus problems in low-light conditions'
      },
      {
        type: 'security',
        description: 'Updated to the latest April 2025 security patch'
      }
    ]
  }
];