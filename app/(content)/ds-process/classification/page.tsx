import Snippet from "@/app/_components/Snippet";
import { CODE, CODE_EXPLANATIONS, OUTPUT, OUTPUT_EXPLANATIONS } from "./data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "First Flight: Python"
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
    </>
  );
}
