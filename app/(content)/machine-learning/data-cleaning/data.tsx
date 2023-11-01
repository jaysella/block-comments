import { Explanation } from "@/app/_components/Snippet";
import { CodeSegment } from "@/app/_components/ui/code-segment";

export const CODE = `## Create Value Map
value_dict = {True: 'Correct', False: 'Incorrect'}

## Check Data Types
print(type(iris_target_test))
print(type(iris_target_predictions))

## Clean Data
iris_target_test = iris_target_test['species']
iris_target_predictions = pd.Series(iris_target_predictions)
iris_target_test = iris_target_test.reset_index()['species']
iris_target_predictions.name = 'species'

### Validate Data Types
print(type(iris_target_test))
print(type(iris_target_predictions))

#### Create a dataframe with all of the information we will need for our two vizualizations
viz_frame = iris_feature_test.reset_index()[['sepal_length', 'sepal_width']]
viz_frame['outcome'] = (iris_target_test == iris_target_predictions).map(value_dict)
viz_frame['species'] = iris_target_test

##### Validate viz_frame
viz_frame.head(3)`;

export const CODE_EXPLANATIONS: Explanation[] = [
  {
    lines: [1, 4, 8, 14, 18, 23],
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
        <p>
          This line initializes a dictionary with boolean keys and string
          values. The dictionary is named <CodeSegment>value_dict</CodeSegment>.
        </p>
        <br />
        <p>
          It is intended to create more readable values for our predictions,
          where <CodeSegment>True</CodeSegment>/<CodeSegment>False</CodeSegment>{" "}
          are mapped as <CodeSegment>'Correct'</CodeSegment>/
          <CodeSegment>'Incorrect'</CodeSegment> respectively.
        </p>
      </>
    ),
  },
  {
    lines: [5],
    content: (
      <>
        <p>
          Prints the data type of the{" "}
          <CodeSegment>iris_target_test</CodeSegment> variable before data
          cleaning. This should output a DataFrame object.
        </p>
        <br />
        <p>
          <CodeSegment>print()</CodeSegment> is a function included in the
          Python standard library to output values to the terminal.
        </p>
        <br />
        <p>
          <CodeSegment>type()</CodeSegment> is a function also included in the
          Python standard library that returns the type of an object. For
          example, the function call <CodeSegment>type(3)</CodeSegment> would
          return <CodeSegment>{"<class 'int'>"}</CodeSegment> since{" "}
          <CodeSegment>3</CodeSegment> is an integer.
        </p>
      </>
    ),
  },
  {
    lines: [6],
    content: (
      <>
        <p>
          Prints the data type of the{" "}
          <CodeSegment>iris_target_predictions</CodeSegment> variable before
          data cleaning. This should output a NumPy ndarray object.
        </p>
        <br />
        <p>
          An n-dimensional array, or ndarray, is a multi-dimensional array from
          the NumPy library. It consists only of elements of the same data type
          which enables efficient computations on large data sets. The data
          science modules we have previously imported support its functionality,
          supporting a seamless integration.
        </p>
      </>
    ),
  },
  {
    lines: [9],
    content: (
      <>
        <p>
          This line reassigns the <CodeSegment>iris_target_test</CodeSegment>{" "}
          variable to a subset consisting of just the{" "}
          <CodeSegment>species</CodeSegment> column.
        </p>
        <br />
        <p>
          Single brackets (<CodeSegment>[]</CodeSegment>) return a Series.
        </p>
      </>
    ),
  },
  {
    lines: [10],
    content: (
      <>
        <p>
          This line converts the{" "}
          <CodeSegment>iris_target_predictions</CodeSegment> variable into a
          Pandas Series.
        </p>
        <br />
        <p>
          A Series object is a one-dimensional array that can hold data of
          multiple types. They are highly compatible with DataFrames, as a
          column can be added as a Series. Every element has an index associated
          with it for convenient retrieval.
        </p>
      </>
    ),
  },
  {
    lines: [11],
    content: (
      <>
        This line resets the index of the{" "}
        <CodeSegment>iris_target_test</CodeSegment> DataFrame to its default
        state. We need to prevent out of order indexing because the{" "}
        <CodeSegment>train_test_split</CodeSegment> function called previously
        in the module randomly sampled the original frame.
      </>
    ),
  },
  {
    lines: [12],
    content: (
      <>
        The <CodeSegment>name</CodeSegment> field of the{" "}
        <CodeSegment>iris_target_predictions</CodeSegment> Series is set to '
        <em>species</em>' for labeling.
      </>
    ),
  },
  {
    lines: [15],
    content: (
      <>
        Prints the data type of the <CodeSegment>iris_target_test</CodeSegment>{" "}
        variable before data cleaning. This should output a Series object.
      </>
    ),
  },
  {
    lines: [16],
    content: (
      <>
        Prints the data type of the{" "}
        <CodeSegment>iris_target_predictions</CodeSegment> variable before data
        cleaning. This should output a Series object.
      </>
    ),
  },
  {
    lines: [19],
    content: (
      <>
        <p>
          Creates a new DataFrame that contains the{" "}
          <CodeSegment>sepal_length</CodeSegment> and{" "}
          <CodeSegment>sepal_width</CodeSegment> from the{" "}
          <CodeSegment>iris_feature_test</CodeSegment> group. It is stored to as{" "}
          <CodeSegment>viz_frame</CodeSegment>.
        </p>
        <br />
        <p>
          <em>
            Double brackets (<CodeSegment>[]</CodeSegment>) return a new
            DataFrame. The index is reset because of the random sampling from
            the <CodeSegment>train_test_split</CodeSegment> previously.
          </em>
        </p>
      </>
    ),
  },
  {
    lines: [20],
    content: (
      <>
        <p>
          Adds a column (named <CodeSegment>outcome</CodeSegment>) which
          reflects the success of the{" "}
          <CodeSegment>iris_target_test</CodeSegment> group against{" "}
          <CodeSegment>iris_target_predictions</CodeSegment>.
        </p>
        <br />
        <p>
          Here, the equality operator (<CodeSegment>==</CodeSegment>) compares
          the elements of each Series object, resulting in{" "}
          <CodeSegment>True</CodeSegment> if equivalent and{" "}
          <CodeSegment>False</CodeSegment> otherwise, to a new Series. These
          values are <CodeSegment>map</CodeSegment>ped to more readable String
          labels using the <CodeSegment>value_dict</CodeSegment> declared on
          line 2.
        </p>
      </>
    ),
  },
  {
    lines: [21],
    content: (
      <>
        Associates the actual <CodeSegment>species</CodeSegment> for each
        prediction from the <CodeSegment>iris_target_test</CodeSegment> group
        with its respective feature variables in the{" "}
        <CodeSegment>viz_frame</CodeSegment>, to be presented, as a new column (
        <CodeSegment>species</CodeSegment>).
      </>
    ),
  },
  {
    lines: [24],
    content: (
      <>
        Displays the first three entries in our visualization DataFrame,{" "}
        <CodeSegment>viz_frame</CodeSegment>, using the{" "}
        <CodeSegment>head()</CodeSegment> function.
      </>
    ),
  },
];

export const OUTPUT = `<class 'pandas.core.frame.DataFrame'>
<class 'numpy.ndarray'>
<class 'pandas.core.series.Series'>
<class 'pandas.core.series.Series'>`;

export const OUTPUT_EXPLANATIONS: Explanation[] = [
  {
    lines: [1],
    content: (
      <>
        This is the output from line 5 (
        <CodeSegment>print(type(iris_target_test))</CodeSegment>). It confirms
        that <CodeSegment>iris_target_test</CodeSegment> is a DataFrame as
        expected.
      </>
    ),
  },
  {
    lines: [2],
    content: (
      <>
        This is the output from line 6 (
        <CodeSegment>print(type(iris_target_predictions))</CodeSegment>). It
        confirms that <CodeSegment>iris_target_predictions</CodeSegment> is an
        ndarray as expected.
      </>
    ),
  },
  {
    lines: [3],
    content: (
      <>
        This is the output from line 15 (
        <CodeSegment>print(type(iris_target_test))</CodeSegment>). It confirms
        that <CodeSegment>iris_target_test</CodeSegment> is a Series as
        expected.
      </>
    ),
  },
  {
    lines: [4],
    content: (
      <>
        This is the output from line 16 (
        <CodeSegment>print(type(iris_target_predictions))</CodeSegment>). It
        confirms that <CodeSegment>iris_target_predictions</CodeSegment> is a
        Series as expected.
      </>
    ),
  },
  {
    lines: [5],
    content: (
      <>
        This is the tabular output from line 24 (
        <CodeSegment>viz_frame.head(3)</CodeSegment>
        ). It tells us that our KNN algorithm successfully predicted three (3)
        setosa flowers.
      </>
    ),
  },
];
