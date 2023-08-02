import GitPlayground from "@/app/_components/GitPlayground";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Git: Playground",
};

export default function Page() {
  return (
    <div className="flex flex-col gap-4">
      <GitPlayground />
    </div>
  );
}
