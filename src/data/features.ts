import { 
  Zap, 
  Shield, 
  Smartphone, 
  Battery, 
  Paintbrush, 
  Settings, 
  Clock, 
  Cloud, 
  Lock, 
  Ghost, 
  Image, 
  Wrench, 
  Heart, 
  Eye, 
  Layers, 
  AppWindow,
  FileCode,
  Gamepad2
} from 'lucide-react';

export interface Feature {
  category: string;
  items: {
    icon: any;
    title: string;
    description: string;
    highlight?: boolean;
  }[];
}

export const features: Feature[] = [
  {
    category: 'Performance',
    items: [
      {
        icon: Zap,
        title: 'Enhanced System Performance',
        description: 'Optimized kernel and system processes for faster app loading and smoother multitasking.',
        highlight: true
      },
      {
        icon: Battery,
        title: 'Advanced Battery Management',
        description: 'Intelligent battery optimization that extends your device\'s battery life without sacrificing performance.'
      },
      {
        icon: Cloud,
        title: 'Efficient Memory Management',
        description: 'Smart RAM management that keeps your device running smoothly even with multiple apps open.'
      }
    ]
  },
  {
    category: 'Security & Privacy',
    items: [
      {
        icon: Shield,
        title: 'Enhanced Security Framework',
        description: 'Regular security patches and additional security layers to keep your data safe.'
      },
      {
        icon: Lock,
        title: 'Privacy Controls',
        description: 'Granular permission controls and privacy features that give you complete control over your data.',
        highlight: true
      },
      {
        icon: Eye,
        title: 'Privacy Dashboard',
        description: 'Comprehensive dashboard to monitor and control app permissions and data access.'
      },
    ]
  },
  {
    category: 'User Interface',
    items: [
      {
        icon: Smartphone,
        title: 'Clean, Modern Interface',
        description: 'Beautiful and intuitive user interface inspired by stock Android with subtle enhancements.'
      },
      {
        icon: Paintbrush,
        title: 'Extensive Customization',
        description: 'Personalize your device with custom accent colors, icon shapes, fonts, and more.',
        highlight: true
      },
      {
        icon: Image,
        title: 'Dynamic Theming',
        description: 'Automatically generates a UI theme based on your wallpaper for a cohesive look.'
      }
    ]
  },
  {
    category: 'System Features',
    items: [
      {
        icon: Settings,
        title: 'Extended Controls',
        description: 'Additional system controls and settings not found in stock Android.'
      },
      {
        icon: AppWindow,
        title: 'Enhanced Multitasking',
        description: 'Advanced split-screen features and floating windows for improved productivity.'
      },
      {
        icon: Layers,
        title: 'Custom Quick Settings',
        description: 'Fully customizable quick settings panel with additional tiles and options.',
        highlight: true
      }
    ]
  },
  {
    category: 'Extras',
    items: [
      {
        icon: Clock,
        title: 'Regular Updates',
        description: 'Frequent OTA updates that bring the latest features and security patches.'
      },
      {
        icon: Ghost,
        title: 'Spoofing Options',
        description: 'Smart features for make a pass Play Store certificate and pass some apps needed Meet Device Integrity.'
      },
      {
        icon: Heart,
        title: 'Community Driven',
        description: 'Features and improvements based on community feedback and contributions.',
        highlight: true
      },
      {
        icon: FileCode,
        title: 'Hide ADB Options',
        description: 'Features for hiding ADB and Developers options for selected apps'
      },
      {
        icon: Gamepad2,
        title: 'Game Space',
        description: 'Enhanced your gaming experienced for block gesture, block notifications, restrict screenshots, and more',
        highlight: true
      }
    ]
  }
];