const url = "/";

export type Photo = {
  img: string;
  title: string;
  orientation: string;
};

const photos: Photo[] = [
  {
    img: url + "1.JPG",
    title: "Aquarium",
    orientation: "horizontal",
  },
  {
    img: url + "21.JPG",
    title: "Fish in Aquarium Copenhagen",
    orientation: "horizontal",
  },
  {
    img: url + "52.JPG",
    title: "At Home Bladerunner",
    orientation: "vertical",
  },
  {
    img: url + "3.JPG",
    title: "Tivoli",
    orientation: "horizontal",
  },
  {
    img: url + "26.JPG",
    title: "Nyhavn Copenhagen",
    orientation: "horizontal",
  },
  {
    img: url + "24.JPG",
    title: "Tivoli",
    orientation: "horizontal",
  },
  {
    img: url + "56.JPG",
    title: "Female Portrait",
    orientation: "horizontal",
  },
  {
    img: url + "50.JPG",
    title: "Female Portrait",
    orientation: "horizontal",
  },
  {
    img: url + "33.jpg",
    title: "Female Portrait",
    orientation: "horizontal",
  },
  {
    img: url + "55.JPG",
    title: "Bicycle in the Rain",
    orientation: "vertical",
  },
  {
    img: url + "57.JPG",
    title: "Female Portrait",
    orientation: "horizontal",
  },
  {
    img: url + "58.JPG",
    title: "Male Portrait",
    orientation: "horizontal",
  },
  {
    img: url + "45.jpg",
    title: "Movie Shooting",
    orientation: "vertical",
  },
  {
    img: url + "35.jpg",
    title: "Amsterdam Sunset",
    orientation: "vertical",
  },
  {
    img: url + "37.jpg",
    title: "Male Portrait",
    orientation: "horizontal",
  },
  {
    img: url + "17.jpg",
    title: "Female Portrait",
    orientation: "horizontal",
  },
  {
    img: url + "32.jpg",
    title: "Dress",
    orientation: "vertical",
  },
  {
    img: url + "46.jpg",
    title: "Romanian Landscape",
    orientation: "vertical",
  },
  {
    img: url + "15.JPG",
    title: "Leaf in Botanical Garden Copenhagen",
    orientation: "horizontal",
  },
  {
    img: url + "14.JPG",
    title: "Leaf in Botanical Garden Copenhagen",
    orientation: "horizontal",
  },
  {
    img: url + "39.JPG",
    title: "Wheat in Botanical Garden Copenhagen",
    orientation: "vertical",
  },
  {
    img: url + "51.JPG",
    title: "CERN Hardronic Festival",
    orientation: "vertical",
  },
  {
    img: url + "34.JPG",
    title: "Cactus in Botanical Garden Copenhagen",
    orientation: "vertical",
  },
  {
    img: url + "31.JPG",
    title: "Dr. Rolf Heuer - CERN",
    orientation: "vertical",
  },
  {
    img: url + "42.JPG",
    title: "Bones",
    orientation: "horizontal",
  },
  {
    img: url + "4.JPG",
    title: "Leaf in Botanical Garden Copenhagen",
    orientation: "horizontal",
  },
  {
    img: url + "12.JPG",
    title: "Male Portrait",
    orientation: "horizontal",
  },
  {
    img: url + "8.jpg",
    title: "Female Portrait",
    orientation: "horizontal",
  },
  {
    img: url + "6.jpg",
    title: "Female Portrait",
    orientation: "vertical",
  },
  {
    img: url + "25.JPG",
    title: "CERN Alice Experiment",
    orientation: "vertical",
  },
  {
    img: url + "22.JPG",
    title: "CERN Data Centre",
    orientation: "vertical",
  },
  {
    img: url + "9.JPG",
    title: "CERN CMS Experiment",
    orientation: "vertical",
  },
  {
    img: url + "27.JPG",
    title: "CERN Alice Experiment",
    orientation: "vertical",
  },
  {
    img: url + "41.JPG",
    title: "Carousel in Tivoli",
    orientation: "vertical",
  },
  {
    img: url + "5.jpg",
    title: "Male Portrait",
    orientation: "horizontal",
  },
  {
    img: url + "38.jpg",
    title: "Male Portrait",
    orientation: "horizontal",
  },
  {
    img: url + "49.JPG",
    title: "Female Portrait",
    orientation: "vertical",
  },
  {
    img: url + "11.jpg",
    title: "Male Portrait",
    orientation: "horizontal",
  },
  {
    img: url + "10.jpg",
    title: "Female Portrait",
    orientation: "horizontal",
  },
  {
    img: url + "7.jpg",
    title: "Ballet",
    orientation: "horizontal",
  },
  {
    img: url + "13.JPG",
    title: "Male Portrait",
    orientation: "horizontal",
  },
  {
    img: url + "47.jpg",
    title: "Movie Shooting",
    orientation: "vertical",
  },
  {
    img: url + "48.jpg",
    title: "Movie Shooting",
    orientation: "vertical",
  },
  {
    img: url + "36.jpg",
    title: "Amsterdam",
    orientation: "vertical",
  },
  {
    img: url + "28.jpg",
    title: "Hug",
    orientation: "vertical",
  },
  {
    img: url + "16.JPG",
    title: "Leaf in Botanical Garden Copenhagen",
    orientation: "horizontal",
  },
  {
    img: url + "2.jpg",
    title: "Selfportrait - Heterochromia",
    orientation: "horizontal",
  },
  {
    img: url + "40.JPG",
    title: "Statue back",
    orientation: "horizontal",
  },
  {
    img: url + "18.JPG",
    title: "Male portrait",
    orientation: "horizontal",
  },
  {
    img: url + "20.jpg",
    title: "Clavicula",
    orientation: "vertical",
  },
  {
    img: url + "23.JPG",
    title: "CERN Data Centre",
    orientation: "vertical",
  },
  {
    img: url + "30.JPG",
    title: "CERN Silicon Detector",
    orientation: "vertical",
  },
  {
    img: url + "53.JPG",
    title: "CERN CMS Experiment",
    orientation: "vertical",
  },
];

const selectedPhotos = [
  {
    img: url + "44.jpg",
    title: "Budapest National Museum",
    orientation: "vertical",
  },
  {
    img: url + "39.JPG",
    title: "Wheat in Botanical Garden Copenhagen",
    orientation: "vertical",
  },
  {
    img: url + "32.jpg",
    title: "Dress",
    orientation: "vertical",
  },
  {
    img: url + "6.jpg",
    title: "Female Portrait",
    orientation: "vertical",
  },
  {
    img: url + "35.jpg",
    title: "Amsterdam Sunset",
    orientation: "vertical",
  },
  {
    img: url + "54.JPG",
    title: "Selfportrait",
    orientation: "horizontal",
  },
  {
    img: url + "25.JPG",
    title: "CERN Alice Experiment",
    orientation: "vertical",
  },
  {
    img: url + "22.JPG",
    title: "CERN Data Centre",
    orientation: "vertical",
  },
  {
    img: url + "28.jpg",
    title: "Hug",
    orientation: "vertical",
  },
  {
    img: url + "20.jpg",
    title: "Clavicula",
    orientation: "vertical",
  },
];

export function getPhotos() {
  return photos;
}

export function getSelectedPhotos() {
  return selectedPhotos;
}
