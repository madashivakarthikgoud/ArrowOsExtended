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
    version: 'v13.3',
    date: 'May 05, 2025',
    changes: [
      {
        type: 'security',
        description: 'Hide QS in secure Lockscreen'
      },
      {
        type: 'security',
        description: 'Allow disable power menu in secure Lock Screen'
      },
      {
        type: 'feature',
        description: 'Lockscreen charging info'
      },
      {
        type: 'feature',
        description: 'Add GameSpace'
      },
      {
        type: 'feature',
        description: 'Per-apps volume control'
      },
      {
        type: 'feature',
        description: 'Bypass charge (Device side must be supported)'
      },
      {
        type: 'feature',
        description: 'Add ability to change back gesture height'
      },
      {
        type: 'feature',
        description: 'Add ability to change maximum notification icons in Status Bar'
      },
      {
        type: 'feature',
        description: 'Add ability to change Brightness Slider visibility and position'
      },
      {
        type: 'feature',
        description: 'Add ability to change Status Bar layout paddings'
      },
      {
        type: 'feature',
        description: 'Allow change default animations to Android Pie'
      },
      {
        type: 'feature',
        description: 'Allow hide indicators of Location, Media Projection, Mic, and Camera'
      },
      {
        type: 'feature',
        description: 'Add fingerprint vibration options'
      },
      {
        type: 'feature',
        description: 'Introduce media cover art in lockscreen'
      },
      {
        type: 'improvement',
        description: 'Optimized - Ensures smooth performance'
      },
      {
        type: 'improvement',
        description: 'Enhanced Memory Management'
      },
      {
        type: 'fix',
        description: 'Hide QS on secure lockscreen'
      }
      // {
      //   type: 'security',
      //   description: 'Updated to the latest June 2025 security patch'
      // }
    ]
  }
];