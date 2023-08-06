export type Story = {
  id: string;
  points: number;
  persona: string;
  action: string;
  goal: string;
};

export type Ticket = {
  id: string;
  storyId: string;
  // status: "backlog" | "in-progress" | "complete";
  title: string;
  points: number;
};

export const PRODUCT_BACKLOG: Story[] = [
  {
    id: "virtual-tastings",
    points: 8,
    persona: "curious coffee drinker",
    action:
      "participate in a virtual coffee tasting event hosted by the coffee roaster",
    goal: "learn about different coffee flavors, brewing techniques, and connect with fellow coffee enthusiasts",
  },
  {
    id: "read-testimonials",
    points: 8,
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
    id: "order-coffee",
    points: 8,
    persona: "coffee enthusiast and online shopper",
    action: "order coffee blends and products through the roaster's website",
    goal: "enjoy high-quality coffee at home and order it at anytime",
  },
];

export const SPRINT_BACKLOG: Ticket[] = [
  {
    id: "abc",
    storyId: "virtual-tastings",
    title: "Build virtual tasting registration page",
    points: 5,
  },
  {
    id: "bcd",
    storyId: "virtual-tastings",
    title: "Set up email reminders for virtual tasting events",
    points: 2,
  },
  {
    id: "cde",
    storyId: "virtual-tastings",
    title: "Build virtual tasting livestream page",
    points: 2,
  },
  {
    id: "def",
    storyId: "read-testimonials",
    title: "Add reviews section to product pages",
    points: 3,
  },
  {
    id: "efg",
    storyId: "read-testimonials",
    title: "Email customers 3 days after order delivery requesting a review",
    points: 1,
  },
  {
    id: "fgh",
    storyId: "read-testimonials",
    title: 'Add "Write a Review" form to customer dashboard',
    points: 2,
  },
  {
    id: "ghi",
    storyId: "join-loyalty",
    title: "Create marketing page for loyalty program",
    points: 2,
  },
  {
    id: "hij",
    storyId: "join-loyalty",
    title: "Add pricing page to customer dashboard",
    points: 1,
  },
  {
    id: "ijk",
    storyId: "join-loyalty",
    title: "Add membership management page to customer dashboard",
    points: 5,
  },
  {
    id: "jkl",
    storyId: "order-coffee",
    title: "Set up Stripe integration for payment processing",
    points: 5,
  },
  {
    id: "klm",
    storyId: "order-coffee",
    title: "Create shopping cart logic",
    points: 3,
  },
  {
    id: "lmn",
    storyId: "order-coffee",
    title: "Display past orders in customer dashboard",
    points: 3,
  },
];
