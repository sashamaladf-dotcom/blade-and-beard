export type Service = {
  id: string;
  title: string;
  description: string;
  price: number;
  duration: string;
  image: string;
};

export const services: Service[] = [
  {
    id: "classic-haircut",
    title: "Classic Haircut",
    description:
      "Scissors and clipper work tailored to your head shape, finished with a wash and style.",
    price: 35,
    duration: "45 min",
    image: "/services/classic-haircut.jpg",
  },
  {
    id: "beard-trim",
    title: "Beard Trim",
    description:
      "Shape, line-up, hot towel and beard oil — the signature ritual every bearded man deserves.",
    price: 25,
    duration: "30 min",
    image:
      "https://images.unsplash.com/photo-1596728325488-58c87691e9af?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "hot-towel-shave",
    title: "Hot Towel Shave",
    description:
      "Traditional straight razor shave with hot towels, pre-shave oil and cooling balm.",
    price: 40,
    duration: "45 min",
    image: "/services/hot-towel-shave.jpg",
  },
  {
    id: "father-and-son",
    title: "Father & Son",
    description:
      "Haircut for dad plus a fresh cut for the young gentleman (under 12). Bonding included.",
    price: 55,
    duration: "60 min",
    image: "/services/father-and-son.jpg",
  },
  {
    id: "royal-package",
    title: "Royal Package",
    description:
      "Haircut, beard sculpting, hot towel shave and a facial. The full Blade & Beard treatment.",
    price: 70,
    duration: "90 min",
    image: "/services/royal-package.jpg",
  },
  {
    id: "hair-styling",
    title: "Hair Styling",
    description:
      "Wash, blow-dry and a finish with premium product — walk out camera-ready.",
    price: 20,
    duration: "20 min",
    image: "/services/hair-styling.jpg",
  },
];

export const heroImage =
  "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=1600&q=80";

export const aboutImage = "/services/about.jpg";

export const gallery: { src: string; alt: string }[] = [
  {
    src: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=900&q=80",
    alt: "Hot towel shave in progress",
  },
  {
    src: "https://images.unsplash.com/photo-1596728325488-58c87691e9af?auto=format&fit=crop&w=900&q=80",
    alt: "Beard trim close-up",
  },
  {
    src: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=900&q=80",
    alt: "Classic haircut with clipper",
  },
  {
    src: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=900&q=80",
    alt: "Barbershop interior",
  },
  {
    src: "https://images.unsplash.com/photo-1552234994-66ba234fd567?auto=format&fit=crop&w=900&q=80",
    alt: "Barber tools on leather",
  },
  {
    src: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&w=900&q=80",
    alt: "Finished cut and style",
  },
];
