export const brands = [
  {
    id: 1,
    name: 'Mercedes',
    logo: require('../assets/img/cars/mercedes/mercedes-logo.png'),
    availableCars: Math.floor(Math.random() * (25 - 1)) + 1,
  },
  {
    id: 2,
    name: 'BMW',
    logo: require('../assets/img/cars/bmw/bmw-logo.png'),
    availableCars: Math.floor(Math.random() * (25 - 1)) + 1,
  },
  {
    id: 3,
    name: 'Porsche',
    logo: require('../assets/img/cars/porsche/porsche-logo.png'),
    availableCars: Math.floor(Math.random() * (25 - 1)) + 1,
  },
];
