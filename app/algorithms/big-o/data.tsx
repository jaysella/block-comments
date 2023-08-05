export const CODE = `func countkmers(sequence string, k int) map[string]int {
  var kmers = make(map[string]int)

  if k > len(sequence) {
    return kmers
  }

  var tempSequence = sequence[:k]
  kmers[tempSequence]++

  for i := k; i < len(sequence); i++ {
    tempSequence = tempSequence[1:] + sequence[i:i+1]
    kmers[tempSequence]++
  }

  return kmers
}`;

export const CODE_HIGHLIGHTS = {
  1: {
    color: "blue",
    label: "O(n)",
  },
  2: {
    color: "slate",
    label: "O(1)",
  },
  3: { label: "----" },
  4: {
    color: "slate",
    label: "O(1)",
  },
  5: {
    color: "slate",
    label: "O(1)",
  },
  6: { label: "----" },
  7: { label: "----" },
  8: {
    color: "slate",
    label: "O(1)",
  },
  9: {
    color: "slate",
    label: "O(1)",
  },
  10: { label: "----" },
  11: {
    color: "blue",
    label: "O(n)",
  },
  12: {
    color: "slate",
    label: "O(1)",
  },
  13: {
    color: "slate",
    label: "O(1)",
  },
  14: { label: "----" },
  15: { label: "----" },
  16: {
    color: "slate",
    label: "O(1)",
  },
  17: { label: "----" },
};
