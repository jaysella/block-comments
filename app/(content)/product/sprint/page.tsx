import { Metadata } from "next";
import Sprint from "@/app/_components/Sprint";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Product Management: Sprint Simulation"
};

export default function Page() {
  return (
    <div className="flex flex-col gap-4">
      <Suspense>
        <Sprint />
      </Suspense>
    </div>
  );
}
