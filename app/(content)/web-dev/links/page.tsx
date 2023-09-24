import Snippet from "@/app/_components/Snippet";
import { CODE, CODE_EXPLANATIONS, CODE_HIGHLIGHTS } from "./data";
import { Metadata } from "next";
import {
  Block,
  BlockContent,
  BlockHeader,
  BlockTitle,
} from "@/app/_components/ui/block";

export const metadata: Metadata = {
  title: "Web Dev: Skeleton with Links",
};

export default function Page() {
  return (
    <>
      <Snippet
        title="HTML"
        language="html"
        explanations={CODE_EXPLANATIONS}
        highlights={CODE_HIGHLIGHTS}
      >
        {CODE}
      </Snippet>

      <Block>
        <BlockHeader>
          <BlockTitle title="Output" />
        </BlockHeader>
        <BlockContent>
          <main className="font-serif prose">
            <div>
              <h1>[Your Name]</h1>
              <p>Quantum-computer Science major, Northeastern University</p>
              <ul>
                <li>
                  <a href="mailto:email.yours@northeastern.edu">
                    email.yours@northeastern.edu
                  </a>
                </li>
                <li>
                  <a href="https://www.northeastern.edu">
                    www.northeastern.edu
                  </a>
                </li>
              </ul>
            </div>
          </main>
        </BlockContent>
      </Block>
    </>
  );
}
