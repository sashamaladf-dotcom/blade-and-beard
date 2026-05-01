export type Review = {
  name: string;
  role: string;
  text: string;
  rating: number;
};

export const reviews: Review[] = [
  {
    name: "Marcus T.",
    role: "Regular since 2022",
    text: "Best beard trim in town, hands down. The hot towel at the end turns a haircut into a ritual. I book two weeks ahead now.",
    rating: 5,
  },
  {
    name: "Daniel K.",
    role: "First-time visitor",
    text: "Walked in skeptical, walked out with the cleanest fade I've ever had. Place smells like leather and bay rum. Unreal.",
    rating: 5,
  },
  {
    name: "Oliver R.",
    role: "Royal Package client",
    text: "Ninety minutes of pure downtime. Barber knew exactly what I needed without me saying a word. Worth every penny.",
    rating: 5,
  },
];
