import { Explanation } from "@/app/_components/Snippet";
import { CodeSegment } from "@/app/_components/ui/code-segment";

export const CODE = `## Descriptive Statistics for classifying irises by petal size
print('Classification Guide:')
for species in petal_df.species.unique():
  length_avg = petal_df[petal_df['species'] == species]['petal_length'].mean()
  width_avg= petal_df[petal_df['species'] == species]['petal_width'].mean()
  print(f'{species} irises have petals with an average length of {length_avg:.1f} cm and an average width of {width_avg:.1f} cm')`;

export const CODE_EXPLANATIONS: Explanation[] = [
  {
    lines: [1],
    content: (
      <>
        A hashtag (<CodeSegment>#</CodeSegment>) indicates a comment in Python.
        Any text on that line which follows it will be ignored.
      </>
    ),
  },
  {
    lines: [2],
    content: (
      <>
        This line calls the <CodeSegment>print()</CodeSegment> function with one
        argument:
        <CodeSegment>'Classification Guide:'</CodeSegment>. That argument is the
        string value to be printed to the console. By default, the function adds
        a newline character at the end of the string.
      </>
    ),
  },
  {
    lines: [3],
    content: (
      <>
        This is a <CodeSegment>for</CodeSegment>-loop. It iterates over the{" "}
        <CodeSegment>species</CodeSegment> of iris present{" "}
        <CodeSegment>in</CodeSegment> the dataset sequence, which is defined as
        follows:
        <ul className="my-2 ml-6 leading-relaxed list-disc">
          <li>
            <CodeSegment>petal_df</CodeSegment> refers to the DataFrame we
            created previously, containing the 'petal_width', 'petal_length',
            and 'species' columns of the Iris dataset.
          </li>
          <li>
            <CodeSegment>species</CodeSegment> is a string value denoting the
            specific column.
          </li>
          <li>
            <CodeSegment>unique()</CodeSegment> filters duplicate elements,
            leaving 'setosa', 'versicolor', and 'virginica'.
          </li>
        </ul>
        The contents of the loop are tab-indented.
      </>
    ),
  },
  {
    lines: [4],
    content: (
      <>
        <p>
          This line computes the average petal length for each species of iris,
          storing it in the variable <CodeSegment>length_avg</CodeSegment>.
        </p>
        <br />
        <p>
          The line first filters the <CodeSegment>petal_df</CodeSegment>{" "}
          DataFrame entries where the species column (
          <CodeSegment>petal_df['species']</CodeSegment>) matches the current{" "}
          <CodeSegment>species</CodeSegment> in the loop. It uses the logical{" "}
          <CodeSegment>==</CodeSegment> operator to compare values of compatible
          data types.
        </p>
        <br />
        <p>
          Then, in this usage, the <CodeSegment>mean()</CodeSegment> function
          returns the average of the according{" "}
          <CodeSegment>'petal_length'</CodeSegment>
          column data as a scalar (single) value.
        </p>
      </>
    ),
  },
  {
    lines: [5],
    content: (
      <>
        <p>
          This line computes the average petal width for each species of iris,
          storing it in the variable <CodeSegment>width_avg</CodeSegment>.
        </p>
        <br />
        <p>
          The line first filters the <CodeSegment>petal_df</CodeSegment>{" "}
          DataFrame entries where the species column (
          <CodeSegment>petal_df['species']</CodeSegment>) matches the current{" "}
          <CodeSegment>species</CodeSegment> in the loop. It uses the logical{" "}
          <CodeSegment>==</CodeSegment> operator to compare values of compatible
          data types.
        </p>
        <br />
        <p>
          Then, in this usage, the <CodeSegment>mean()</CodeSegment> function
          returns the average of the according{" "}
          <CodeSegment>'petal_width'</CodeSegment>
          column data as a scalar (single) value.
        </p>
      </>
    ),
  },
  {
    lines: [6],
    content: (
      <>
        <p>
          This line calls the <CodeSegment>print()</CodeSegment> function with
          an <a h-ref="https://realpython.com/python-f-strings/">f-string</a>.
          These are a fast and concise way to embed variables or expressions
          inside string literals.
        </p>
        <br />
        <p>
          An f-string is denoted by adding the letter{" "}
          <CodeSegment>f</CodeSegment> before the opening quotes of your string.
          Variables and expressions are enclosed in curly brackets{" "}
          <CodeSegment>{"{your_var}"}</CodeSegment>, which are replaced with
          their respective value at runtime.
        </p>
        <br />
        <p>
          The result is printed to the console, showing the results of the
          calculations in a <em>formatted</em> string. The message displays the
          species and associated length and width averages, rounded to one (1)
          decimal point. The precision is specified by{" "}
          <CodeSegment>num:.1f</CodeSegment>.
        </p>
      </>
    ),
  },
];

export const OUTPUT = `Classification Guide:
setosa irises have petals with an average length of 1.5 cm and an average width of 0.2 cm
versicolor irises have petals with an average length of 4.3 cm and an average width of 1.3 cm
virginica irises have petals with an average length of 5.6 cm and an average width of 2.0 cm`;

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
  {
    lines: [2],
    content: (
      <>
        This is the output from line 6 during the first iteration of the
        for-loop defined on line 3. It provides information about the average
        length and width of setosa irises.
      </>
    ),
  },
  {
    lines: [3],
    content: (
      <>
        This is the output from line 6 during the second iteration of the
        for-loop defined on line 3. It provides information about the average
        length and width of versicolor irises.
      </>
    ),
  },
  {
    lines: [4],
    content: (
      <>
        This is the output from line 6 during the third (and final) iteration of
        the for-loop defined on line 3. It provides information about the
        average length and width of virginica irises.
      </>
    ),
  },
];
