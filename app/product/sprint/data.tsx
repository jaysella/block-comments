export type ActionItem = {
  stage: number;
  title: string;
  message: string[];
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

export type Problem = {
  title: string;
  description: string;
  improvement: string;
};

export const ACTION_ITEMS: ActionItem[] = [
  {
    stage: 0,
    title: "Welcome to Malden Consulting Group!",
    message: [
      "Before you can begin working with Midnight Coffee, our People team has requested some information about you.",
    ],
    task: "Complete all required information.",
  },
  {
    stage: 1,
    title: "Welcome to the Sprint!",
    message: [
      "This first stage is all about Product Backlog Refinement. This is where User Stories are selected and broken down into smaller, more manageable tickets. These smaller tickets will be moved to your Sprint Backlog.",
    ],
    task: "Select three (3) Stories from the Product Backlog to break down.",
  },
  {
    stage: 2,
    title: "Selecting Tickets",
    message: [
      "Nice job! Each Story is now broken down into smaller, more manageable tickets.",
      "You just wrapped up a meeting with your development team. The result: their maximum capacity for this Sprint is {MAX_POINTS} Story Points.",
    ],
    task: "Choose which tickets your team will be working on this Sprint.",
  },
  {
    stage: 3,
    title: "Setting Priorities",
    message: [
      "Alright! Tickets set. Let's prioritize these now so the team knows which tickets are most important.",
    ],
    task: "Order this Sprint's tickets in order of decreasing priority. The topmost is the most important.",
  },
  {
    stage: 4,
    title: "Reviewing Development Progress",
    message: [
      "Development has just wrapped up. Here is the status of each ticket you planned to complete this cycle.",
    ],
    task: "Review each ticket's status.",
  },
  {
    stage: 5,
    title: "Identifying Potential Improvements",
    message: [
      "The Sprint Retro is the final stage of the Sprint. It's important to routinely review what went well, what didn't, and how processes can be improved for future Sprints.",
    ],
    task: "Review the identified problems and select one (1) improvement to work on during the next Sprint.",
  },
  {
    stage: 6,
    title: "Wrapping Up",
    message: [
      "Great work throughout this Sprint! This final step will recap all of your decisions and their effects.",
    ],
    task: "Think about what went well during this Sprint and what you would change if you were to do it again.",
  },
];

export const PRODUCT_BACKLOG: Story[] = [
  {
    id: "subscriptions",
    points: 8,
    persona: "busy coffee lover",
    action: "subscribe to recurring coffee bean deliveries",
    goal: "always have a supply of coffee without the need to manually re-order",
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
  {
    id: "read-testimonials",
    points: 8,
    persona: "potential customer",
    action:
      "read reviews and testimonials from other coffee enthusiasts who have purchased from the coffee roaster",
    goal: "gain confidence in the quality of their products and service",
  },
  {
    id: "virtual-tastings",
    points: 8,
    persona: "curious coffee drinker",
    action:
      "participate in a virtual coffee tasting event hosted by the coffee roaster",
    goal: "learn about different coffee flavors, brewing techniques, and connect with fellow coffee enthusiasts",
  },
];

export const SPRINT_BACKLOG: Ticket[] = [
  {
    label: "ENG-14",
    storyId: "subscriptions",
    title:
      "Create subscription management page which allows customers to change delivery frequency",
    points: 3,
  },
  {
    label: "ENG-15",
    storyId: "subscriptions",
    title: "Build automated subscription renewal reminders",
    points: 2,
  },
  {
    label: "ENG-16",
    storyId: "subscriptions",
    title: "Allow support team to view and manage customer subscriptions",
    points: 5,
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
    points: 2,
  },
  {
    label: "ENG-6",
    storyId: "read-testimonials",
    title: 'Add "Write a Review" form to customer dashboard',
    points: 3,
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
    storyId: "join-loyalty",
    title: "Award customers 1 point per dollar spent",
    points: 5,
  },
  {
    label: "ENG-11",
    storyId: "order-coffee",
    title: "Set up Stripe integration for payment processing",
    points: 3,
  },
  {
    label: "ENG-12",
    storyId: "order-coffee",
    title: "Create shopping cart logic",
    points: 3,
  },
  {
    label: "ENG-13",
    storyId: "order-coffee",
    title: "Display past orders in customer dashboard",
    points: 2,
  },
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
    points: 1,
  },
  {
    label: "ENG-3",
    storyId: "virtual-tastings",
    title: "Build virtual tasting livestream page",
    points: 2,
  },
];

export const PROBLEMS: Problem[] = [
  {
    title: "Lack of User Testing",
    description:
      "New features and updates are launched without thorough user testing, leading to usability problems and negative customer experiences.",
    improvement:
      "Implement a structured user testing process before launching any significant updates. Gather feedback from a diverse group of customers to identify and address issues early on.",
  },
  {
    title: "Scope Creep",
    description:
      "Constantly adding new features or changes to the project scope disrupts timelines and impacts project delivery.",
    improvement:
      "Implement a change request process to assess the impact of any proposed changes on timeline, prioritization, and development resources.",
  },
  {
    title: "Inadequate Code Documentation",
    description:
      "Insufficient documentation in the codebase makes it challenging for developers to understand and maintain the code.",
    improvement:
      "Enforce a documentation standard that includes comments, API documentation, and explanations of code logic.",
  },
  {
    title: "Inconsistent Code Quality",
    description:
      "Developers follow different coding standards and practices, leading to inconsistencies and difficulty in maintaining code.",
    improvement:
      "Establish coding guidelines and conduct code reviews to ensure consistency and maintainability.",
  },
  {
    title: "Lack of Tests",
    description:
      "The absence of comprehensive unit and integration tests results in frequent regressions and makes it harder to catch bugs early.",
    improvement:
      "Devote development time each Sprint to writing unit and integration tests. Ensure that all new features include comprehensive tests before deploying into production.",
  },
  {
    title: "Limited Design Collaboration",
    description:
      "Lack of collaboration between developers and designers results in implementation misalignment with design intent.",
    improvement:
      "Involve designers earlier in the development process and hold regular meetings to address design-implementation gaps.",
  },
  {
    title: "Underestimation of Technical Debt",
    description:
      "Ignoring or underestimating technical debt accumulation leads to increasing maintenance challenges over time.",
    improvement:
      "Prioritize addressing technical debt alongside feature development to maintain a healthy codebase.",
  },
  {
    title: "Insufficient Knowledge Sharing",
    description:
      "Lack of knowledge sharing leads to silos of expertise and makes the team reliant on specific individuals.",
    improvement:
      "Encourage knowledge sharing through code reviews, tech talks, and documentation to distribute expertise within the team.",
  },
];
