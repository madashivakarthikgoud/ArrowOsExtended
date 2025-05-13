// src/data/devices.ts
export interface Device {
  name: string;
  brand: string;
  codename: string;
  maintainer: string;
  lastUpdate: string;
  androidVersion: string;
  image?: string;
  downloadUrl: string;
  changelogUrl: string;
}

export const devices: Device[] = [
  {
    name: 'Poco X3 NFC / Poco X3',
    brand: 'Poco',
    codename: 'surya',
    maintainer: 'Skyy丨アラタ',
    lastUpdate: 'May 10, 2025',
    androidVersion: '13',
    image: 'images/pocox3.avif',
    downloadUrl: 'https://sourceforge.net/projects/arata-labs/files/ArrowOS-Extended/VANILLA/surya/ArrowExtended-v13.3-surya-OFFICIAL-20250510-VANILLA.zip/download',
    changelogUrl: ''
  }
];