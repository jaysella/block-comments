import { Explanation } from "@/app/_components/Snippet";
import { CodeSegment } from "@/app/_components/ui/code-segment";

export const CODE = `## Descriptive Statistics for classifying irises by petal size
print('Classification Guide:')
for species in petal_df.species.unique():
  length_avg = petal_df[petal_df['species'] == species]['petal_length'].mean()
  width_avg= petal_df[petal_df['species'] == species]['petal_width'].mean()
  print(f'{species} irises have petals with an average length of {length_avg:.1f} cm, and an average width of {width_avg:.1f} cm')`;

export const CODE_EXPLANATIONS: Explanation[] = [
  {
    lines: [2],
    content: <>This prints a .</>,
  },
];

export const OUTPUT = `Classification Guide:
setosa irises have petals with an average length of 1.5 cm, and an average width of 0.2 cm
versicolor irises have petals with an average length of 4.3 cm, and an average width of 1.3 cm
virginica irises have petals with an average length of 5.6 cm, and an average width of 2.0 cm`;

export const OUTPUT_EXPLANATIONS: Explanation[] = [
  {
    lines: [1],
    content: (
      <>
        This is the output from line 2. It simply titles the content following
        it as belonging to the Classification Guide.
      </>
    ),
  },
];
