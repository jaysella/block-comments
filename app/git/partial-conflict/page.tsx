import Snippet from "@/app/_components/Snippet";
import { Metadata } from "next";
import { CONFLICT } from "./data";

export const metadata: Metadata = {
  title: "Git: Conflict",
};

export default function Page() {
  return (
    <>
      <Snippet
        title="user-profile.rkt"
        language="scheme"
        highlights={{
          8: {
            color: "purple",
          },
          11: {
            color: "slate",
          },
          14: {
            color: "blue",
          },
        }}
      >
        {CONFLICT}
      </Snippet>
    </>
  );
}
