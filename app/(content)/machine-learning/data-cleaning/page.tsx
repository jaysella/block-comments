import Snippet, { SnippetContent } from "@/app/_components/Snippet";
import { Metadata } from "next";
import { CODE, CODE_EXPLANATIONS, OUTPUT, OUTPUT_EXPLANATIONS } from "./data";
import {
  Block,
  BlockContent,
  BlockHeader,
  BlockTitle,
} from "@/app/_components/ui/block";

export const metadata: Metadata = {
  title: "Machine Learning: Data Cleaning"
};

export default function Page() {
  return (
    <>
      <Snippet title="Code" language="python" explanations={CODE_EXPLANATIONS}>
        {CODE}
      </Snippet>

      <Snippet
        title="Output"
        language="python"
        explanations={OUTPUT_EXPLANATIONS}
      >
        {OUTPUT}
      </Snippet>

      <Block>
        <BlockHeader>
          <BlockTitle title="Sample Results" />
        </BlockHeader>

        <BlockContent withPadding={false}>
          <table className="w-full text-sm text-left text-slate-500 dark:text-slate-400">
            <thead className="text-xs uppercase border-b text-slate-700 dark:text-slate-400 border-slate-200 dark:border-slate-800">
              <tr className="bg-slate-100 dark:bg-slate-900">
                <th className="px-6 py-3"></th>
                <th className="px-6 py-3">sepal_length</th>
                <th className="px-6 py-3">sepal_width</th>
                <th className="px-6 py-3">outcome</th>
                <th className="px-6 py-3">species</th>
              </tr>
            </thead>
            <tbody>
              <tr className="transition-colors border-b hover:bg-slate-100 dark:hover:bg-slate-900 border-slate-200 dark:border-slate-800">
                <th
                  scope="row"
                  className="px-6 py-4 font-mono font-bold text-slate-950 bg-slate-100 whitespace-nowrap dark:text-slate-50 dark:bg-slate-900"
                >
                  0
                </th>
                <td className="px-6 py-4">5.0</td>
                <td className="px-6 py-4">3.4</td>
                <td className="px-6 py-4">Correct</td>
                <td className="px-6 py-4">setosa</td>
              </tr>
              <tr className="transition-colors border-b hover:bg-slate-100 dark:hover:bg-slate-900 border-slate-200 dark:border-slate-800">
                <th
                  scope="row"
                  className="px-6 py-4 font-mono font-bold text-slate-950 bg-slate-100 whitespace-nowrap dark:text-slate-50 dark:bg-slate-900"
                >
                  1
                </th>
                <td className="px-6 py-4">5.5</td>
                <td className="px-6 py-4">4.2</td>
                <td className="px-6 py-4">Correct</td>
                <td className="px-6 py-4">setosa</td>
              </tr>
              <tr className="transition-colors border-b hover:bg-slate-100 dark:hover:bg-slate-900 border-slate-200 dark:border-slate-800">
                <th
                  scope="row"
                  className="px-6 py-4 font-mono font-bold text-slate-950 bg-slate-100 whitespace-nowrap dark:text-slate-50 dark:bg-slate-900"
                >
                  2
                </th>
                <td className="px-6 py-4">5.0</td>
                <td className="px-6 py-4">3.2</td>
                <td className="px-6 py-4">Correct</td>
                <td className="px-6 py-4">setosa</td>
              </tr>
            </tbody>
          </table>
        </BlockContent>
      </Block>
    </>
  );
}
