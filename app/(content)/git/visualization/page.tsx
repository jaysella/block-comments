import GitVisualization from "@/app/_components/GitVisualization";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Git: Visualization"
};

export default function Page() {
  return (
    <div className="flex flex-col gap-4">
      <GitVisualization />
    </div>
  );
}
