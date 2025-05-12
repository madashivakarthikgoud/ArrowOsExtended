export interface Device {
  name: string;
  brand: string;
  codename: string;
  maintainer: string;
  lastUpdate: string;
  androidVersion: string;
  image?: string;
}

export const devices: Device[] = [
  {
    name: 'Poco x3 NFC / Poco x3',
    brand: 'Poco',
    codename: 'surya / karna',
    maintainer: 'ArrowTeam',
    lastUpdate: 'June 15, 2025',
    androidVersion: '13',
    image: 'images/pocox3.avif'
  },
  {
    name: 'Pixel 7',
    brand: 'Google',
    codename: 'panther',
    maintainer: 'ArrowTeam',
    lastUpdate: 'June 15, 2025',
    androidVersion: '13',
    image: 'https://images.pexels.com/photos/13092897/pexels-photo-13092897.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    name: 'Pixel 6 Pro',
    brand: 'Google',
    codename: 'raven',
    maintainer: 'ArrowTeam',
    lastUpdate: 'June 10, 2025',
    androidVersion: '13',
    image: 'https://images.pexels.com/photos/13092897/pexels-photo-13092897.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    name: 'Galaxy S21',
    brand: 'Samsung',
    codename: 'o1s',
    maintainer: 'SamsungDev',
    lastUpdate: 'June 8, 2025',
    androidVersion: '13',
    image: 'https://images.pexels.com/photos/9072216/pexels-photo-9072216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    name: 'Galaxy S21 Ultra',
    brand: 'Samsung',
    codename: 'o1u',
    maintainer: 'SamsungDev',
    lastUpdate: 'June 8, 2025',
    androidVersion: '13',
    image: 'https://images.pexels.com/photos/9072216/pexels-photo-9072216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    name: 'OnePlus 9 Pro',
    brand: 'OnePlus',
    codename: 'lemonadep',
    maintainer: 'OneDev',
    lastUpdate: 'June 5, 2025',
    androidVersion: '13',
    image: 'https://images.pexels.com/photos/14894269/pexels-photo-14894269.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    name: 'OnePlus 9',
    brand: 'OnePlus',
    codename: 'lemonade',
    maintainer: 'OneDev',
    lastUpdate: 'June 5, 2025',
    androidVersion: '13',
    image: 'https://images.pexels.com/photos/14894269/pexels-photo-14894269.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    name: 'Mi 11 Ultra',
    brand: 'Xiaomi',
    codename: 'star',
    maintainer: 'XiaomiDev',
    lastUpdate: 'June 1, 2025',
    androidVersion: '13',
    image: 'https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  }
];