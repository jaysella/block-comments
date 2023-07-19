import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/app/_components/ui/popover";
import { cn } from "@/lib/utils";
import {
  Highlight as HighlightPrimitive,
  Prism,
  themes,
} from "prism-react-renderer";
import { ReactNode, useEffect } from "react";
import HighlightExplainer from "./HighlightExplainer";
import { useRouter } from "next/navigation";

export type Explanation = {
  line: number;
  content: ReactNode;
};

export default function Highlight({
  title,
  language,
  explanations = [],
  children,
}: {
  title?: string;
  language: string;
  explanations?: Explanation[];
  children: string;
}) {
  console.log(title);

  const router = useRouter();
  const code = children;

  useEffect(() => {
    async function loadLang() {
      (typeof global !== "undefined" ? global : window).Prism = Prism;
      await Promise.all([
        import("prismjs/components/prism-python" as any),
        import("prismjs/components/prism-bash" as any),
      ]).then(() => {
        router.refresh();
      });
    }

    loadLang();
  }, []);

  return (
    <HighlightPrimitive theme={themes.github} code={code} language={language}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <div style={style} className={cn(className, "py-6 rounded-xl")}>
          {title ? (
            <h2 className="w-full px-8 pb-2 font-bold uppercase border-b border-b-slate-200">
              {title}
            </h2>
          ) : null}

          <pre className={cn(title ? "mt-4" : null)}>
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
                        <HighlightExplainer
                          title={
                            title
                              ? `${title} > Line ${lineNum}`
                              : `Line ${lineNum}`
                          }
                        >
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
        </div>
      )}
    </HighlightPrimitive>
  );
}
