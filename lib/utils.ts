import { LineHighlight } from "@/app/_components/Highlight";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getRandomSeconds(min: number = 0, max: number = 60): number {
  if (min < 0 || max < 0 || min >= max) {
    throw new Error(
      "Invalid input: min and max must be positive and min must be less than max"
    );
  }

  const randomSeconds = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomSeconds;
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

export function removeDiffChars(input: string): string {
  const lines = input.split("\n");
  const processedLines = lines.map((line) => {
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
