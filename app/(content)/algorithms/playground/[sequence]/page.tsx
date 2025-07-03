import { Metadata } from "next";
import KMersPlayground from "@/app/_components/KMersPlayground";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Algorithms: K-Mers Playground"
};

export default async function Page(props: {
  params: Promise<{ sequence: string }>;
}) {
  const params = await props.params;
  const sequence: string = params.sequence.toUpperCase();

  return (
    <Suspense>
      <KMersPlayground sequence={sequence} />
    </Suspense>
  );
}
