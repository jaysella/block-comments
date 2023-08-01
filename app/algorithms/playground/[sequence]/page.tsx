import { Metadata } from "next";
import KMersPlayground from "@/app/_components/KMersPlayground";

export const metadata: Metadata = {
  title: "Algorithms: K-Mers Playground",
};

export default function Page({ params }: { params: { sequence: string } }) {
  const sequence: string = params.sequence.toUpperCase();

  return <KMersPlayground sequence={sequence} />;
}
