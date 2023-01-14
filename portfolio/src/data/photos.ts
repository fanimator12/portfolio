const url = '/';

const photos = [
  {
    img: url + '1.JPG',
    title: 'Aquarium',
  },
  {
    img: url + '3.JPG',
    title: 'Tivoli',
  },
  {
    img: url + '24.JPG',
    title: 'Tivoli',
  },
  {
    img: url + '35.jpg',
    title: 'Amsterdam Sunset',
  },
  {
    img: url + '37.jpg',
    title: 'Male Portrait',
  },

  {
    img: url + '17.jpg',
    title: 'Female Portrait',
  },
  {
    img: url + '7.jpg',
    title: 'Ballet',
  },
  {
    img: url + '32.jpg',
    title: 'Dress',
  },
  {
    img: url + '15.JPG',
    title: 'Leaf in Botanical Garden Copenhagen',
  },
  {
    img: url + '39.JPG',
    title: 'Wheat in Botanical Garden Copenhagen',
  },
  {
    img: url + '34.JPG',
    title: 'Cactus in Botanical Garden Copenhagen',
  },
  {
    img: url + '14.JPG',
    title: 'Leaf in Botanical Garden Copenhagen',
  },
  {
    img: url + '31.JPG',
    title: 'Dr. Rolf Heuer - CERN',
  },
  {
    img: url + '42.JPG',
    title: 'Bones',
  },
  {
    img: url + '4.JPG',
    title: 'Leaf in Botanical Garden Copenhagen',
  },
  {
    img: url + '12.JPG',
    title: 'Male Portrait',
  },
  {
    img: url + '6.jpg',
    title: 'Female Portrait',
  },
  {
    img: url + '25.JPG',
    title: 'CERN Alice Experiment',
  },
  {
    img: url + '22.JPG',
    title: 'CERN Data Centre',
  },
  {
    img: url + '9.JPG',
    title: 'CERN CMS Experiment',
  },
  {
    img: url + '27.JPG',
    title: 'CERN Alice Experiment',
  },
  // SECOND ROW
  {
    img: url + '21.JPG',
    title: 'Fish in Aquarium Copenhagen',
  },
  {
    img: url + '26.JPG',
    title: 'Nyhavn Copenhagen',
  },
  {
    img: url + '41.JPG',
    title: 'Carousel in Tivoli',
  },
  {
    img: url + '5.jpg',
    title: 'Male Portrait',
  },
  {
    img: url + '38.jpg',
    title: 'Male Portrait',
  },
  {
    img: url + '11.jpg',
    title: 'Male Portrait',
  },
  {
    img: url + '10.jpg',
    title: 'Female Portrait',
  },
  {
    img: url + '33.jpg',
    title: 'Female Portrait',
  },
  {
    img: url + '36.jpg',
    title: 'Amsterdam',
  },
  {
    img: url + '8.jpg',
    title: 'Female Portrait',
  },
  {
    img: url + '28.jpg',
    title: 'Hug',
  },
  {
    img: url + '16.JPG',
    title: 'Leaf in Botanical Garden Copenhagen',
  },
  {
    img: url + '2.jpg',
    title: 'Selfportrait - Heterochromia',
  },
  {
    img: url + '40.JPG',
    title: 'Statue back',
  },
  {
    img: url + '18.JPG',
    title: 'Male portrait',
  },
  {
    img: url + '20.jpg',
    title: 'Clavicula',
  },
  {
    img: url + '13.JPG',
    title: 'Male Portrait',
  },
  {
    img: url + '23.JPG',
    title: 'CERN Data Centre',
  },
  {
    img: url + '30.JPG',
    title: 'CERN Silicon Detector',
  },
];

const selectedPhotos = [
  {
    img: url + '44.jpg',
    title: 'Budapest National Museum',
  },
  {
    img: url + '39.JPG',
    title: 'Wheat in Botanical Garden Copenhagen',
  },
  {
    img: url + '32.JPG',
    title: 'Dress',
  },
  {
    img: url + '6.JPG',
    title: 'Female Portrait',
  },
  {
    img: url + '35.jpg',
    title: 'Amsterdam Sunset',
  },
  {
    img: url + '25.JPG',
    title: 'CERN Alice Experiment',
  },
  {
    img: url + '22.JPG',
    title: 'CERN Data Centre',
  },
  {
    img: url + '28.jpg',
    title: 'Hug',
  },
  {
    img: url + '20.JPG',
    title: 'Clavicula',
  }
];

export function getPhotos() {
  return photos;
}

export function getSelectedPhotos() {
  return selectedPhotos;
}