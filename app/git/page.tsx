import GitPlayground from "@/app/_components/GitPlayground";
import Highlight from "@/app/_components/Highlight";
import { Metadata } from "next";
import { SNIPPET_1 } from "./data";
import { CommitHistory } from "@/app/_components/ui/commit-history";

export const metadata: Metadata = {
  title: "Git: Playground",
};

export default function Page() {
  return (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <Highlight title="README.md" language="markdown">
          {SNIPPET_1}
        </Highlight>

        {/* <GitPlayground /> */}
        <CommitHistory />
      </div>
    </div>
  );
}
