import Snippet from "@/app/_components/Snippet";
import { CODE, CODE_EXPLANATIONS, OUTPUT, OUTPUT_EXPLANATIONS } from "./data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "First Flight: TypeScript",
};

export default function Page() {
  return (
    <>
      <Snippet
        title="Code"
        language="typescript"
        explanations={CODE_EXPLANATIONS}
      >
        {CODE}
      </Snippet>

      <Snippet
        title="Output"
        language="typescript"
        explanations={OUTPUT_EXPLANATIONS}
      >
        {OUTPUT}
      </Snippet>
    </>
  );
}
