import Snippet from "@/app/_components/Snippet";
import { Metadata } from "next";
import { CODE, CODE_EXPLANATIONS, OUTPUT, OUTPUT_EXPLANATIONS } from "./data";

export const metadata: Metadata = {
  title: "Algorithms: Simple Multiplication (Go)",
};

export default function Page() {
  return (
    <>
      <Snippet title="Code" language="go" explanations={CODE_EXPLANATIONS}>
        {CODE}
      </Snippet>

      <Snippet title="Output" language="go" explanations={OUTPUT_EXPLANATIONS}>
        {OUTPUT}
      </Snippet>
    </>
  );
}
