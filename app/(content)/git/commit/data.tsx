import { Commit } from "@/app/_components/ui/commit-history";
import { getRandomDate } from "@/lib/utils";

const randomDate1 = getRandomDate();

export const COMMITS: Commit[] = [
  {
    hash: "a7caf6a",
    branches: ["main"],
    author: "Serif Purpleson",
    ts: randomDate1.toDate(),
    message: "Scaffold out project",
    files: [],
  },
];
