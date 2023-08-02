import { Commit } from "@/app/_components/ui/commit-history";
import moment from "moment";

export const COMMITS: Commit[] = [
  {
    hash: "db6554a",
    author: "Serif Purpleson",
    ts: moment("2023-08-02T18:26:00.000Z"),
    message: "Initial commit",
    files: [
      {
        name: "README.md",
        language: "markdown",
        content: `+# serif-123`,
      },
    ],
  },
  {
    hash: "64e77ed",
    author: "Serif Purpleson",
    ts: moment("2023-08-02T19:31:00.000Z"),
    message: "Add name to README",
    files: [
      {
        name: "README.md",
        language: "markdown",
        content: `-# serif-123
+# serif-123
+
+Serif Purpleson`,
      },
    ],
  },
  {
    hash: "f2fddd4",
    author: "Serif Purpleson",
    ts: moment("2023-08-02T19:54:00.000Z"),
    message: "Fix typo",
    files: [
      {
        name: "README.md",
        language: "markdown",
        content: `# serif-123

-Serif Purpleson
+Serif Purpleson.`,
      },
    ],
  },
  {
    hash: "a4d3c32",
    author: "Serif Purpleson",
    ts: moment("2023-08-02T21:13:00.000Z"),
    message: "Add resume with education",
    files: [
      {
        name: "README.md",
        language: "markdown",
        content: `# serif-123

Serif Purpleson.`,
      },
      {
        name: "resume.md",
        language: "markdown",
        content: `+# Serif Purpleson's Resume
+
        +## Education
        +**Northeastern University**, Khoury College of Computer Sciences
        +*Candidate: Bachelor of Science in Cybersecurity and Criminal Justice*
        +Boston, MA • Sep 2023 - May 2027`,
      },
    ],
  },
  {
    hash: "cd87d09",
    author: "Serif Purpleson",
    ts: moment("2023-08-03T01:07:00.000Z"),
    message: "Merge pull request #1 from serif-123/resume",
    files: [
      {
        name: "README.md",
        language: "markdown",
        content: `# serif-123

Serif Purpleson.`,
      },
      {
        name: "resume.md",
        language: "markdown",
        content: `+# Serif Purpleson's Resume
+
        +## Education
        +**Northeastern University**, Khoury College of Computer Sciences
        +*Candidate: Bachelor of Science in Cybersecurity and Criminal Justice*
        +Boston, MA • Sep 2023 - May 2027`,
      },
    ],
  },
];
