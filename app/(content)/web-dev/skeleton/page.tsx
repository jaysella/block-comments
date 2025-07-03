import Snippet from "@/app/_components/Snippet";
import { CODE, CODE_EXPLANATIONS } from "./data";
import { Metadata } from "next";
import {
  Block,
  BlockContent,
  BlockHeader,
  BlockTitle,
} from "@/app/_components/ui/block";

export const metadata: Metadata = {
  title: "Web Dev: Skeleton"
};

export default function Page() {
  return (
    <>
      <Snippet title="HTML" language="html" explanations={CODE_EXPLANATIONS}>
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
              <p>[Your major]</p>
              <ul>
                <li>[Your email]</li>
                <li>[Your favorite website]</li>
              </ul>
            </div>
          </main>
        </BlockContent>
      </Block>
    </>
  );
}
