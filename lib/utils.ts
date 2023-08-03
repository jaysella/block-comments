import { LineHighlight } from "@/app/_components/Snippet";
import { clsx, type ClassValue } from "clsx";
import moment from "moment";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getRandomDate(): moment.Moment {
  const currentDate = moment();
  const sixMonthsAgo = currentDate.clone().subtract(3, "months");
  const daysDifference = currentDate.diff(sixMonthsAgo, "days");
  const randomDaysOffset = Math.floor(Math.random() * daysDifference);

  const randomDate = sixMonthsAgo.clone().add(randomDaysOffset, "days");

  const randomHours = Math.floor(Math.random() * 24);
  const randomMinutes = Math.floor(Math.random() * 60);
  const randomSeconds = Math.floor(Math.random() * 60);

  randomDate.set({
    hour: randomHours,
    minute: randomMinutes,
    second: randomSeconds,
  });

  return randomDate;
}

export function addRandomTime(initialDate: moment.Moment): moment.Moment {
  const randomDays = Math.floor(Math.random() * 14);
  const randomHours = Math.floor(Math.random() * 24);
  const randomMinutes = Math.floor(Math.random() * 60);

  return initialDate
    .clone()
    .add(randomDays, "days")
    .add(randomHours, "hours")
    .add(randomMinutes, "minutes");
}

export function findSubstrings(sequence: string, k: number): string[] {
  const res: string[] = [];

  for (let i = 0; i <= sequence.length - k; i++) {
    const substring = sequence.slice(i, i + k);
    res.push(substring);
  }

  return res;
}

export function groupSubstrings(
  substrings: string[]
): { string: string; count: number }[] {
  const stringCountMap: { [key: string]: number } = {};
  substrings.forEach((str) => {
    stringCountMap[str] = (stringCountMap[str] || 0) + 1;
  });

  const groupedStrings: { string: string; count: number }[] = [];
  for (const [string, count] of Object.entries(stringCountMap)) {
    groupedStrings.push({ string, count });
  }

  return groupedStrings;
}

function getLineInfo(line: string): LineHighlight {
  const firstChar = line[0];
  if (firstChar === "+") {
    return { color: "green", label: "+" };
  } else if (firstChar === "-") {
    return { color: "red", label: "-" };
  }
  return { color: "" };
}

export function processDiff(input: string): Record<string, LineHighlight> {
  const lines = input.split("\n");
  const result: Record<string, LineHighlight> = {};

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (line.length > 0) {
      const { color, label } = getLineInfo(line);
      if (label) {
        result[(i + 1).toString()] = { color, label };
      }
    }
  }

  return result;
}

export function unDiff(input: string, hideDeleted: boolean = false): string {
  const lines = input.split("\n");
  const processedLines = lines
    .filter((line) => {
      const trimmedLine = line.trim();
      if (hideDeleted && trimmedLine[0] === "-") {
        return false;
      }
      return true;
    })
    .map((line) => {
      const trimmedLine = line.trim();
      if (
        trimmedLine.length > 0 &&
        (trimmedLine[0] === "+" || trimmedLine[0] === "-")
      ) {
        return trimmedLine.substring(1);
      }
      return line;
    });

  return processedLines.join("\n");
}
