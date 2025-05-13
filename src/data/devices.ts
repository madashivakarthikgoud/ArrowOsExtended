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
    maintainer: 'ArrowTeam',
    lastUpdate: 'June 15, 2025',
    androidVersion: '13',
    image: 'images/pocox3.avif',
    downloadUrl: 'https://sourceforge.net/projects/arata-labs/files/ArrowOS-Extended/VANILLA/surya/ArrowExtended-v13.3-surya-OFFICIAL-20250510-VANILLA.zip/download',
    changelogUrl: ''
  },
  {
    name: 'Pixel 7',
    brand: 'Google',
    codename: 'panther',
    maintainer: 'ArrowTeam',
    lastUpdate: 'June 15, 2025',
    androidVersion: '13',
    image: 'images/pixel7pro.jpg',
    downloadUrl: 'https://download.arrowos.org/panther/arrowos-extended-panther-20250615.zip',
    changelogUrl: ''
  },
  {
    name: 'OnePlus 9 Pro',
    brand: 'OnePlus',
    codename: 'lemonadep',
    maintainer: 'ArrowTeam',
    lastUpdate: 'June 10, 2025',
    androidVersion: '12',
    image: 'images/oneplus9pro.png',
    downloadUrl: 'https://downloads.example.com/lemonadep/oneplus9pro-build.zip',
    changelogUrl: ''
  }
];