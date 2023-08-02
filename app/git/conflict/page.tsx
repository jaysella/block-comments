import Snippet from "@/app/_components/Snippet";
import { Metadata } from "next";
import { CONFLICT, CONFLICT_EXPLANATIONS } from "./data";

export const metadata: Metadata = {
  title: "Git: Conflict",
};

export default function Page() {
  return (
    <>
      <Snippet
        title="random.txt"
        language="diff"
        explanations={CONFLICT_EXPLANATIONS}
      >
        {CONFLICT}
      </Snippet>
    </>
  );
}
