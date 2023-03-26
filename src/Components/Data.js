import room1 from "../images/details-1.jpeg";
import room2 from "../images/details-2.jpeg";
import room3 from "../images/details-3.jpeg";
import room4 from "../images/details-4.jpeg";
import img1 from "../images/room-1.jpeg";
import img2 from "../images/room-2.jpeg";
import img3 from "../images/room-3.jpeg";
import img4 from "../images/room-4.jpeg";
import img5 from "../images/room-5.jpeg";
import img6 from "../images/room-6.jpeg";
import img7 from "../images/room-7.jpeg";
import img8 from "../images/room-8.jpeg";
import img9 from "../images/room-9.jpeg";
import img10 from "../images/room-10.jpeg";
import img11 from "../images/room-11.jpeg";
import img12 from "../images/room-12.jpeg";


const Data = [
  {

    id: "1",
    name: "The Central Park Hotel",
    type: "Standard",
    price: 2000,
    size: 200,
    capacity: 3,
    pets: false,
    breakfast: false,
    featured: false,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      service: ['Wifi' , 'food', 'parking'],
      images:[img1, room2, room3, room4,]

  },
  {

    id: "2",

    name: "The Oakwood Hotel",
    type: "Premium",
    price: 1500,
    size: 250,
    capacity: 1,
    pets: false,
    breakfast: false,
    featured: false,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      service: ['Wifi' , 'food', 'parking'],

    images: [img2, room2, room3, room4,]
  },
  {

    id: "3",
    name: "Pride Hotel",
    type: "Premium",
    price: 2500,
    size: 300,
    capacity: 1,
    pets: true,
    breakfast: false,
    featured: false,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      service: ['Wifi' , 'food', 'parking'],

    images: [ img3, room2,  room3, room4, ]
  },
  {

    id: "4",
    name: "ST LAURN HOTEL",
    type: "standard",
    price: 1300,
    size: 400,
    capacity: 1,
    pets: true,
    breakfast: true,
    featured: false,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      service: ['Wifi' , 'food', 'parking'],

    images: [ img4,  room2, room3, room4,]
  },
  {

    id: "5",
    name: "7 Apple Hotel",
    type: "Premium",
    price: 2000,
    size: 300,
    capacity: 2,
    pets: false,
    breakfast: false,
    featured: false,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      service: ['Wifi' , 'food', 'parking'],
    images: [img5,room2,room3 ,room4]
  },
  {

    id: "6",
    name: "Kapila Business Hotel",
    type: "Premium",
    price: 2500,
    size: 350,
    capacity: 2,
    pets: false,
    breakfast: false,
    featured: false,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    service: ['Wifi' , 'food', 'parking'],

    images:[img6,room2,room3 ,room4]
  },
  {

    id: "7",
    name: "Hotel Madhav International",
    type: "Standard",
    price: 1300,
    size: 400,
    capacity: 2,
    pets: true,
    breakfast: false,
    featured: false,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      service: ['Wifi' , 'food', 'parking'],
    images:[img7,room2,room3 ,room4]

  },
  {

    id: "8",
    name: "Hotel Taraa Delux",
    type: "Premium",
    price: 3400,
    size: 500,
    capacity: 2,
    pets: true,
    breakfast: true,
    featured: true,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      service: ['Wifi' , 'food', 'parking'],
    images: [img8,room2,room3 ,room4]

  },
  {

    id: "9",
    name: "Hotel North View",
    type: "Standard",
    price: 2300,
    size: 500,
    capacity: 3,
    pets: false,
    breakfast: false,
    featured: false,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      service: ['Wifi' , 'food', 'parking'],

    images: [img9,room2,room3 ,room4]
  },
  {

    id: "10",
    name: "Hotel Aditya Inn",
    type: "Standard",
    price: 1350,
    size: 550,
    capacity: 4,
    pets: false,
    breakfast: false,
    featured: false,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      service: ['Wifi' , 'food', 'parking'],
    images: [img10,room2,room3 ,room4]

  },
  {

    id: "11",
    name: "Hotel Skylark",
    type: "Standard",
    price: 1400,
    size: 600,
    capacity: 5,
    pets: true,
    breakfast: false,
    featured: false,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      service: ['Wifi' , 'food', 'parking'],
    images: [img11,room2,room3 ,room4]

  },
  {

    id: "12",
    name: "Hotel Amrta",
    type: "Standard",
    price: 2500,
    size: 700,
    capacity: 6,
    pets: true,
    breakfast: true,
    featured: true,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      service: ['Wifi' , 'food', 'parking'],

    images: [img12,room2,room3 ,room4]
  },
  {

    id: "13",
    name: "The President Hotel",
    type: "Premium",
    price: 600,
    size: 1000,
    capacity: 10,
    pets: true,
    breakfast: true,
    featured: true,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      service: ['Wifi' , 'food', 'parking'],
    images:[room1,room2,room3 ,room4]
  },

]
export default Data;
