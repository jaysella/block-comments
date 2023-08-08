import { ReactNode } from "react";

export type ActionItem = {
  stage: number;
  title: string;
  message: ReactNode;
  task: string;
};

export type Story = {
  id: string;
  points: number;
  persona: string;
  action: string;
  goal: string;
};

export type Ticket = {
  label: string;
  storyId: string;
  title: string;
  points: number;
  status?: "backlog" | "in-progress" | "complete";
};

export const ACTION_ITEMS: ActionItem[] = [
  {
    stage: 1,
    title: "Welcome to the Sprint!",
    message: (
      <>
        <p>
          This first stage is all about Product Backlog Refinement. This is
          where User Stories are selected and broken down into smaller, more
          manageable tickets. These smaller tickets will be moved to your Sprint
          Backlog.
        </p>
      </>
    ),
    task: "Select three (3) Stories from the Product Backlog to break down.",
  },
  {
    stage: 2,
    title: "Ticket Selection",
    message: (
      <>
        <p>
          Nice job! Each Story is now broken down into smaller, more manageable
          tickets.
        </p>
        <p>
          You just wrapped up a meeting with your development team. The result:
          their maximum capacity for this Sprint is 15 Story Points.
        </p>
      </>
    ),
    task: "Choose which tickets your team will be working on this Sprint.",
  },
  {
    stage: 3,
    title: "Setting Priorities",
    message: (
      <>
        <p>
          Alright! Tickets set. Let's prioritize these now so the team knows
          which tickets are most important.
        </p>
      </>
    ),
    task: "Order this Sprint's tickets in order of decreasing priority. The topmost is the most important.",
  },
  {
    stage: 4,
    title: "Ticket Status Review",
    message: (
      <>
        <p>
          Development has just wrapped up. Here is the status of each ticket you
          planned to complete this cycle.
        </p>
      </>
    ),
    task: "Review each ticket's status.",
  },
];

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
    label: "ENG-1",
    storyId: "virtual-tastings",
    title: "Build virtual tasting registration page",
    points: 5,
  },
  {
    label: "ENG-2",
    storyId: "virtual-tastings",
    title: "Set up email reminders for virtual tasting events",
    points: 2,
  },
  {
    label: "ENG-3",
    storyId: "virtual-tastings",
    title: "Build virtual tasting livestream page",
    points: 2,
  },
  {
    label: "ENG-4",
    storyId: "read-testimonials",
    title: "Add reviews section to product pages",
    points: 3,
  },
  {
    label: "ENG-5",
    storyId: "read-testimonials",
    title: "Email customers 3 days after order delivery requesting a review",
    points: 1,
  },
  {
    label: "ENG-6",
    storyId: "read-testimonials",
    title: 'Add "Write a Review" form to customer dashboard',
    points: 2,
  },
  {
    label: "ENG-7",
    storyId: "join-loyalty",
    title: "Create marketing page for loyalty program",
    points: 2,
  },
  {
    label: "ENG-8",
    storyId: "join-loyalty",
    title: "Add pricing page to customer dashboard",
    points: 1,
  },
  {
    label: "ENG-9",
    storyId: "join-loyalty",
    title: "Add membership management page to customer dashboard",
    points: 5,
  },
  {
    label: "ENG-10",
    storyId: "order-coffee",
    title: "Set up Stripe integration for payment processing",
    points: 5,
  },
  {
    label: "ENG-11",
    storyId: "order-coffee",
    title: "Create shopping cart logic",
    points: 3,
  },
  {
    label: "ENG-12",
    storyId: "order-coffee",
    title: "Display past orders in customer dashboard",
    points: 3,
  },
];
