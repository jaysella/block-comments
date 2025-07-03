import Snippet from "@/app/_components/Snippet";
import KMersPlayground from "@/app/_components/KMersPlayground";
import { Metadata } from "next";
import {
  CODE,
  CODE_EXPLANATIONS,
  CODE_HIGHLIGHTS,
  OUTPUT,
  OUTPUT_EXPLANATIONS,
} from "./data";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Algorithms: Sliding Window Technique (Go)"
};

export default function Page() {
  return (
    <>
      <Snippet
        title="Code"
        language="go"
        explanations={CODE_EXPLANATIONS}
        highlights={CODE_HIGHLIGHTS}
      >
        {CODE}
      </Snippet>

      <Snippet title="Output" language="go" explanations={OUTPUT_EXPLANATIONS}>
        {OUTPUT}
      </Snippet>

      <Suspense>
        <KMersPlayground sequence="ACGAGGTACGA" playground={false} />
      </Suspense>
    </>
  );
}
