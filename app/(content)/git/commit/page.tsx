import { Metadata } from "next";
import { CommitHistory } from "@/app/_components/ui/commit-history";
import { COMMITS } from "./data";

export const metadata: Metadata = {
  title: "Git: Commit"
};

export default function Page() {
  return <CommitHistory commits={COMMITS} />;
}
