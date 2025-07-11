import Snippet from "@/app/_components/Snippet";
import { Metadata } from "next";
import { CODE, CODE_EXPLANATIONS, CODE_HIGHLIGHTS } from "./data";

export const metadata: Metadata = {
  title: "Algorithms: Big O Analysis (Go)"
};

export default function Page() {
  return (
    <>
      <Snippet
        title="Big O Analysis"
        language="go"
        explanations={CODE_EXPLANATIONS}
        highlights={CODE_HIGHLIGHTS}
      >
        {CODE}
      </Snippet>
    </>
  );
}
