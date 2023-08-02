import Highlight from "@/app/_components/Highlight";
import { Metadata } from "next";
import { CODE, CODE_EXPLANATIONS, OUTPUT, OUTPUT_EXPLANATIONS } from "./data";

export const metadata: Metadata = {
  title: "Algorithms: Simple Multiplication (Go)",
};

export default function Page() {
  return (
    <>
      <Highlight title="Code" language="go" explanations={CODE_EXPLANATIONS}>
        {CODE}
      </Highlight>

      <Highlight
        title="Output"
        language="go"
        explanations={OUTPUT_EXPLANATIONS}
      >
        {OUTPUT}
      </Highlight>
    </>
  );
}
