import Snippet from "@/app/_components/Snippet";
import { CODE, CODE_EXPLANATIONS } from "./data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Databases: Create Table",
};

export default function Page() {
  return (
    <>
      <Snippet title="Code" language="sql" explanations={CODE_EXPLANATIONS}>
        {CODE}
      </Snippet>
    </>
  );
}
