import Snippet from "@/app/_components/Snippet";
import KMersPlayground from "@/app/_components/KMersPlayground";
import { Metadata } from "next";
import { CODE, CODE_EXPLANATIONS, OUTPUT, OUTPUT_EXPLANATIONS } from "./data";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Algorithms: Counting K-Mers (Go)"
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

      <Suspense>
        <KMersPlayground sequence="ACGAGGTACGA" playground={false} />
      </Suspense>
    </>
  );
}
