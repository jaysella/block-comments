import { Commit } from "@/app/_components/ui/commit-history";
import moment from "moment";

export const COMMITS: Commit[] = [
  {
    hash: "db6554a",
    author: "Serif Purpleson",
    ts: moment("2023-08-02T18:26:00.000Z"),
    message: "Initial commit",
    diff: `+# serif-123`,
  },
  {
    hash: "64e77ed",
    author: "Serif Purpleson",
    ts: moment("2023-08-02T19:31:00.000Z"),
    message: "Add name to README",
    diff: `-# serif-123
+# serif-123
+
+Serif Purpleson`,
  },
  {
    hash: "f2fddd4",
    author: "Serif Purpleson",
    ts: moment("2023-08-02T19:54:00.000Z"),
    message: "Fix typo",
    diff: `# serif-123

    -Serif Purpleson
    +Serif Purpleson.`,
  },
];
