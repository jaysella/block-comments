import Highlight from "@/app/_components/Highlight";
import { CODE, CODE_EXPLANATIONS, OUTPUT, OUTPUT_EXPLANATIONS } from "./data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "First Flight: Racket",
};

export default function Page() {
  return (
    <>
      <Highlight
        title="Code"
        language="scheme"
        explanations={CODE_EXPLANATIONS}
      >
        {CODE}
      </Highlight>

      <Highlight
        title="Output"
        language="scheme"
        explanations={OUTPUT_EXPLANATIONS}
      >
        {OUTPUT}
      </Highlight>
    </>
  );
}