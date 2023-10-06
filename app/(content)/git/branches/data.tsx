import { Commit } from "@/app/_components/ui/commit-history";
import { addRandomTime, getRandomDate } from "@/lib/utils";

const randomDate1 = getRandomDate(); // ---------- main
const randomDate2 = addRandomTime(randomDate1); // main
const randomDate3 = addRandomTime(randomDate2); // main
const randomDate4 = addRandomTime(randomDate3); // main, fp
const randomDate5 = addRandomTime(randomDate3); // sn
const randomDate6 = addRandomTime(randomDate4); // main
const randomDate7 = addRandomTime(randomDate5); // sn
const randomDate8 = addRandomTime(randomDate7); // sn

export const COMMITS: Commit[] = [
  {
    hash: "da39a3e",
    branches: ["main", "support-notes", "fix-pagination"],
    author: "Serif Purpleson",
    ts: randomDate1.toDate(),
    message: "Initial commit",
    files: [],
  },
  {
    hash: "a7caf6a",
    branches: ["main", "support-notes", "fix-pagination"],
    author: "Serif Purpleson",
    ts: randomDate2.toDate(),
    message: "Scaffold out project",
    files: [],
  },
  {
    hash: "ba27faa",
    branches: ["main", "support-notes", "fix-pagination"],
    author: "Serif Purpleson",
    ts: randomDate3.toDate(),
    message: "Update README with setup instructions",
    files: [],
  },
  {
    hash: "bb77b1d",
    branches: ["fix-pagination"],
    author: "Indigo Patel",
    ts: randomDate4.toDate(),
    message: "Tweak page count logic",
    files: [],
  },
  {
    hash: "da8ffc2",
    branches: ["support-notes"],
    author: "Geneve Benitez",
    ts: randomDate5.toDate(),
    message: "Add model for client notes",
    files: [],
  },
  {
    hash: "afa326a",
    branches: ["support-notes"],
    author: "Geneve Benitez",
    ts: randomDate7.toDate(),
    message: "Build out client notes page",
    files: [],
  },
  {
    hash: "8ceb59d",
    branches: ["main"],
    author: "Indigo Patel",
    ts: randomDate6.toDate(),
    message: "Merge Pull Request #1 from fix-pagination",
    files: [],
  },
  {
    hash: "fc6af2b",
    branches: ["support-notes"],
    author: "Serif Purpleson",
    ts: randomDate8.toDate(),
    message: "Fix note creation bugs",
    files: [],
  },
];
