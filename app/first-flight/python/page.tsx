import Highlight from "@/app/_components/Highlight";
import { CODE, CODE_EXPLANATIONS, OUTPUT, OUTPUT_EXPLANATIONS } from "./data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "First Flight: Python",
};

export default function Page() {
  return (
    <>
      <Highlight
        title="Code"
        language="python"
        explanations={CODE_EXPLANATIONS}
      >
        {CODE}
      </Highlight>

      <Highlight
        title="Output"
        language="python"
        explanations={OUTPUT_EXPLANATIONS}
      >
        {OUTPUT}
      </Highlight>
    </>
  );
}
