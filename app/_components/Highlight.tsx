import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/app/_components/ui/popover";
import { cn } from "@/lib/utils";
import { Highlight, Prism, themes } from "prism-react-renderer";
import { ReactNode, useEffect } from "react";
import HighlightExplainer from "./HighlightExplainer";
import { useRouter } from "next/navigation";

export type Explanation = {
  line: number;
  content: ReactNode;
};

export default function CustomHighlight({
  children,
  language,
  explanations,
}: {
  children: string;
  language: string;
  explanations: Explanation[];
}) {
  const router = useRouter();
  const code = children;

  useEffect(() => {
    async function loadLang() {
      (typeof global !== "undefined" ? global : window).Prism = Prism;
      await import("prismjs/components/prism-python" as any).then(() => {
        router.refresh();
      });
    }

    loadLang();
  }, []);

  return (
    <Highlight theme={themes.github} code={code} language={language}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre style={style} className={cn(className, "py-6 rounded-xl")}>
          {tokens.map((line, i) => {
            const lineNum = i + 1;

            return (
              <div
                key={i}
                {...getLineProps({ line })}
                className="flex flex-row px-8 hover:bg-slate-200"
              >
                <div className="self-end w-10 select-none text-slate-400">
                  {lineNum}
                </div>

                <div className="block w-full">
                  <Popover>
                    <PopoverTrigger className="w-full text-left">
                      {line.map((token, key) => {
                        const tokenProps = getTokenProps({ token, key });

                        return (
                          <div
                            {...tokenProps}
                            key={key}
                            style={{
                              ...tokenProps.style,
                            }}
                            className="inline"
                          />
                        );
                      })}
                    </PopoverTrigger>

                    <PopoverContent align="start" arrowPadding={25}>
                      <HighlightExplainer line={lineNum}>
                        {explanations.filter((e) => e.line === lineNum)[0]
                          ?.content ?? null}
                      </HighlightExplainer>

                      {/* <PopoverArrow className="visible fill-slate-200" /> */}
                    </PopoverContent>
                  </Popover>
                </div>
              </div>
            );
          })}
        </pre>
      )}
    </Highlight>
  );
}
