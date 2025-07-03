import { Metadata } from "next";
import { CommitHistory } from "@/app/_components/ui/commit-history";
import { COMMITS } from "./data";

export const metadata: Metadata = {
  title: "Git: Branches"
};

export default function Page() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
      <CommitHistory commits={COMMITS} branch="main" />
      <CommitHistory commits={COMMITS} branch="support-notes" />
      <CommitHistory commits={COMMITS} branch="fix-pagination" />
    </div>
  );
}
