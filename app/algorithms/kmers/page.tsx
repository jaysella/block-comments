import Highlight from "@/app/_components/Highlight";
import { CODE, CODE_EXPLANATIONS, OUTPUT, OUTPUT_EXPLANATIONS } from "./data";
import { Metadata } from "next";
import KMersPlayground from "@/app/_components/KMersPlayground";

export const metadata: Metadata = {
  title: "Algorithms: Counting K-Mers (Go)",
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

      <KMersPlayground sequence="ACGAGGTACGA" playground={false} />
    </>
  );
}
