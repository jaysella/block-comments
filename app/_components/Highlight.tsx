import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/app/_components/ui/popover";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/app/_components/ui/tooltip";
import { cn } from "@/lib/utils";
import { AlignLeftIcon, CopyIcon, WrapTextIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import {
  Highlight as HighlightPrimitive,
  Prism,
  themes,
} from "prism-react-renderer";
import { ReactNode, useEffect, useState } from "react";
import HighlightExplanation from "./HighlightExplanation";

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
  const router = useRouter();
  const code = children;

  const [wrapText, setWrapText] = useState<boolean>(false);

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
    <TooltipProvider>
      <HighlightPrimitive theme={themes.github} code={code} language={language}>
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <div
            style={style}
            className={cn(className, "py-3 md:pb-6 rounded-xl")}
          >
            <div className="flex items-center justify-between w-full px-4 pb-2 border-b md:px-8 border-b-slate-200">
              {title ? <h2 className="font-bold uppercase">{title}</h2> : null}

              <div className="flex items-center gap-1 -mr-2">
                <Tooltip>
                  <TooltipTrigger
                    className="p-2 rounded-lg hover:bg-slate-200"
                    onClick={() => setWrapText(!wrapText)}
                  >
                    {wrapText ? (
                      <AlignLeftIcon size={18} />
                    ) : (
                      <WrapTextIcon size={18} />
                    )}
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{wrapText ? "Don't wrap text" : "Wrap text"}</p>
                  </TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger
                    className="p-2 rounded-lg hover:bg-slate-200"
                    onClick={() => navigator.clipboard.writeText(code)}
                  >
                    <CopyIcon size={18} />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Copy code</p>
                  </TooltipContent>
                </Tooltip>
              </div>
            </div>

            <pre
              className={cn(
                "text-sm md:text-base",
                title ? "mt-4" : "",
                wrapText
                  ? "overflow-hidden whitespace-break-spaces"
                  : "overflow-auto"
              )}
            >
              {tokens.map((line, i) => {
                const lineNum = i + 1;

                return (
                  <div
                    key={i}
                    {...getLineProps({ line })}
                    className="flex flex-row px-4 md:px-8 hover:bg-slate-200"
                  >
                    <div className="self-end flex-shrink-0 w-10 select-none text-slate-400">
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
                          <HighlightExplanation
                            title={
                              title
                                ? `${title} > Line ${lineNum}`
                                : `Line ${lineNum}`
                            }
                          >
                            {explanations.filter((e) => e.line === lineNum)[0]
                              ?.content ?? null}
                          </HighlightExplanation>

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
    </TooltipProvider>
  );
}
