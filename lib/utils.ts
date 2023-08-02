import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
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
