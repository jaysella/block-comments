export type Story = {
  id: string;
  points: number;
  persona: string;
  action: string;
  goal: string;
};

export const PRODUCT_BACKLOG: Story[] = [
  {
    id: "explore-blend-selection",
    points: 2,
    persona: "coffee enthusiast",
    action:
      "easily explore the coffee roaster's selection of blends and single-origin beans",
    goal: "learn about their unique flavors and make informed purchasing decisions",
  },
  {
    id: "subscribe-newsletter",
    points: 3,
    persona: "coffee lover",
    action: "subscribe to the coffee roaster's newsletter",
    goal: "receive updates about new product releases, brewing tips, and exclusive promotions",
  },
  {
    id: "read-testimonials",
    points: 5,
    persona: "potential customer",
    action:
      "read reviews and testimonials from other coffee enthusiasts who have purchased from the coffee roaster",
    goal: "gain confidence in the quality of their products and service",
  },
  {
    id: "join-loyalty",
    points: 13,
    persona: "frequent customer",
    action: "join a loyalty program",
    goal: "earn rewards for my coffee purchases",
  },
  {
    id: "access-bts",
    points: 5,
    persona: "coffee enthusiast",
    action: "access behind-the-scenes content",
    goal: "gain insights into the coffee roasting process and the people behind the brand",
  },
];
