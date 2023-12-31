import { LineHighlight } from "@/app/_components/Snippet";
import { clsx, type ClassValue } from "clsx";
import moment from "moment";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function shuffle<T>(array: T[]): T[] {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    // pick a remaining element
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // swap the remaining element with the current element
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

export function getRandomDate(): moment.Moment {
  const currentDate = moment();

  const monthsAgo = currentDate.clone().subtract(2, "months");
  const daysDifference = currentDate.diff(monthsAgo, "days");
  const randomDaysOffset = Math.floor(Math.random() * daysDifference);
  const randomDate = monthsAgo.clone().add(randomDaysOffset, "days");

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

export function getRandomInt(min: number, max: number): number {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
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

export function moveArrayItem(
  array: any[],
  fromIndex: number,
  toIndex: number
): any[] {
  const updatedArray = [...array];
  const movedItem = updatedArray[fromIndex];
  updatedArray.splice(fromIndex, 1);
  updatedArray.splice(toIndex, 0, movedItem);
  return updatedArray;
}
