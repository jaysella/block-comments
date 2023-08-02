import Highlight from "@/app/_components/Highlight";
import { Metadata } from "next";
import { CONFLICT, CONFLICT_EXPLANATIONS } from "./data";

export const metadata: Metadata = {
  title: "Git: Conflict",
};

export default function Page() {
  return (
    <>
      <Highlight
        title="random.txt"
        language="diff"
        explanations={CONFLICT_EXPLANATIONS}
      >
        {CONFLICT}
      </Highlight>
    </>
  );
}
