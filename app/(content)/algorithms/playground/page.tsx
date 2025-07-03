import { Metadata } from "next";
import KMersPlayground from "@/app/_components/KMersPlayground";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Algorithms: K-Mers Playground"
};

export default function Page() {
  return (
    <Suspense>
      <KMersPlayground sequence="ACGA" />
    </Suspense>
  );
}
