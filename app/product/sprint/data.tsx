import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/app/_components/ui/alert";
import { AlertTriangleIcon } from "lucide-react";
import { ReactNode } from "react";

export type ActionItem = {
  stage: number;
  title: string;
  message: ReactNode;
};

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
  title: string;
  points: number;
};

export const ACTION_ITEMS: ActionItem[] = [
  {
    stage: 0,
    title: "Welcome to the first stage of this sprint!",
    message: (
      <>
        <p>This stage is all about Product Backlog Refinement.</p>
        <p>
          Select three (3) Stories from your Product Backlog to break down into
          smaller, more manageable tickets for your Sprint Backlog.
        </p>
      </>
    ),
  },
  {
    stage: 1,
    title: "It's time for stage #2!",
    message: (
      <>
        <p>
          You and your team have completed Product Backlog Refinement! Each
          Story is now broken down into smaller, more manageable tickets and
          prioritized appropriately.
        </p>
        <Alert>
          <AlertTriangleIcon className="w-4 h-4" />
          <AlertTitle>Be mindful of each ticket's Story Points!</AlertTitle>
          <AlertDescription>
            Your development team has informed you that their maximum capacity
            for this Sprint is 15 Story Points.
          </AlertDescription>
        </Alert>
      </>
    ),
  },
  {
    stage: 2,
    title: "We've reached Stage 3.",
    message: (
      <>
        <p>
          You have selected a collection of tickets for your team to work on
          this Sprint.
        </p>
      </>
    ),
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
    id: "ljejvf",
    storyId: "virtual-tastings",
    title: "Build virtual tasting registration page",
    points: 5,
  },
  {
    id: "slvm1g",
    storyId: "virtual-tastings",
    title: "Set up email reminders for virtual tasting events",
    points: 2,
  },
  {
    id: "lwtsum",
    storyId: "virtual-tastings",
    title: "Build virtual tasting livestream page",
    points: 2,
  },
  {
    id: "zzw9uz",
    storyId: "read-testimonials",
    title: "Add reviews section to product pages",
    points: 3,
  },
  {
    id: "amox0g",
    storyId: "read-testimonials",
    title: "Email customers 3 days after order delivery requesting a review",
    points: 1,
  },
  {
    id: "d9w9vo",
    storyId: "read-testimonials",
    title: 'Add "Write a Review" form to customer dashboard',
    points: 2,
  },
  {
    id: "05sp9r",
    storyId: "join-loyalty",
    title: "Create marketing page for loyalty program",
    points: 2,
  },
  {
    id: "bfscp9",
    storyId: "join-loyalty",
    title: "Add pricing page to customer dashboard",
    points: 1,
  },
  {
    id: "syjfgo",
    storyId: "join-loyalty",
    title: "Add membership management page to customer dashboard",
    points: 5,
  },
  {
    id: "bjmg0q",
    storyId: "order-coffee",
    title: "Set up Stripe integration for payment processing",
    points: 5,
  },
  {
    id: "5rqk09",
    storyId: "order-coffee",
    title: "Create shopping cart logic",
    points: 3,
  },
  {
    id: "cucidp",
    storyId: "order-coffee",
    title: "Display past orders in customer dashboard",
    points: 3,
  },
];
