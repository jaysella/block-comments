"use client";

import HighlightExplanation from "@/app/_components/HighlightExplanation";
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
import { useThemeDetector } from "@/app/_components/ui/use-theme-detector";
import { useToast } from "@/app/_components/ui/use-toast";
import { cn } from "@/lib/utils";
import { AlignLeftIcon, CopyIcon, PlayIcon, WrapTextIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import {
  Highlight as HighlightPrimitive,
  Prism,
  themes,
} from "prism-react-renderer";
import { ReactNode, useEffect, useState } from "react";

export type Explanation = {
  line?: number;
  lines?: number[];
  content: ReactNode;
};

export type LineHighlight = {
  color: string;
  label?: string;
};

export default function Highlight({
  title,
  language,
  sandboxLink,
  explanations,
  highlights = {},
  children,
}: {
  title?: string;
  language: string;
  sandboxLink?: URL;
  explanations?: Explanation[];
  highlights?: Record<string, LineHighlight>;
  children: string;
}) {
  const code = children;
  const router = useRouter();
  const darkMode = useThemeDetector();
  const { toast } = useToast();

  const [wrapText, setWrapText] = useState<boolean>(false);

  useEffect(() => {
    async function loadLang() {
      (typeof global !== "undefined" ? global : window).Prism = Prism;
      await Promise.all([
        language === "diff" && import("prismjs/components/prism-diff" as any),
        language === "go" && import("prismjs/components/prism-go" as any),
        language === "markdown" &&
          import("prismjs/components/prism-markdown" as any),
        language === "python" &&
          import("prismjs/components/prism-python" as any),
        language === "scheme" &&
          import("prismjs/components/prism-scheme" as any),
      ]).then(() => {
        router.refresh();
      });
    }

    loadLang();
  }, []);

  return (
    <TooltipProvider>
      <HighlightPrimitive
        theme={darkMode ? themes.nightOwl : themes.github}
        code={code}
        language={language}
      >
        {({ className, tokens, getLineProps, getTokenProps }) => (
          <div
            className={cn(
              className,
              "pb-3 md:pb-6 rounded-xl bg-slate-50 text-slate-700 dark:text-slate-200 dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800"
            )}
          >
            <div className="flex items-center justify-between w-full py-2 pl-4 pr-4 border-b-2 md:pl-8 md:pr-6 border-b-slate-200 dark:border-b-slate-800">
              {title ? <h2 className="font-bold uppercase">{title}</h2> : null}

              <div className="flex items-center gap-1 -mr-2">
                <Tooltip>
                  <TooltipTrigger
                    className="p-2 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-800"
                    onClick={() => {
                      setWrapText(!wrapText);
                      toast({
                        title: `Text ${wrapText ? "unwrapped" : "wrapped"}!`,
                        description: `The ${title} section's formatting has been updated.`,
                      });
                    }}
                  >
                    {wrapText ? (
                      <AlignLeftIcon size={18} />
                    ) : (
                      <WrapTextIcon size={18} />
                    )}
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{wrapText ? "Unwrap text" : "Wrap text"}</p>
                  </TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger
                    className="p-2 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-800"
                    onClick={() => {
                      navigator.clipboard.writeText(code).then(
                        () => {
                          toast({
                            title: "Copied!",
                            description: `The ${title} has been copied to your clipboard.`,
                            icon: "success",
                          });
                        },
                        () => {
                          toast({
                            title: "Unable to copy",
                            description:
                              "Try opening up this demo in its own tab.",
                            icon: "error",
                          });
                        }
                      );
                    }}
                  >
                    <CopyIcon size={18} />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Copy snippet</p>
                  </TooltipContent>
                </Tooltip>

                {sandboxLink ? (
                  <Tooltip>
                    <TooltipTrigger
                      className="p-2 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-800"
                      onClick={() => window.open(sandboxLink, "_blank")}
                    >
                      <PlayIcon size={18} />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Open interactive CodeSandbox</p>
                    </TooltipContent>
                  </Tooltip>
                ) : null}
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
                const highlight = lineNum in highlights;

                return (
                  <div
                    key={i}
                    {...getLineProps({ line })}
                    className={cn(
                      "flex flex-row w-full px-4 md:px-8",
                      highlight
                        ? `bg-${highlights[lineNum].color}-100 dark:bg-${highlights[lineNum].color}-900`
                        : "",
                      explanations
                        ? highlight
                          ? `hover:bg-${highlights[lineNum].color}-200 dark:bg-${highlights[lineNum].color}-800`
                          : "hover:bg-slate-200 dark:hover:bg-slate-800"
                        : ""
                    )}
                  >
                    <div
                      className={cn(
                        "self-end flex-shrink-0 w-10 select-none text-slate-400 dark:text-slate-500",
                        highlight
                          ? `text-${highlights[lineNum].color}-600 dark:text-${highlights[lineNum].color}-400`
                          : ""
                      )}
                    >
                      {highlights[lineNum]?.label || lineNum}
                    </div>

                    <div className="block w-full">
                      {explanations ? (
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
                              {explanations.filter((e) =>
                                e.lines?.includes(lineNum)
                              )[0]?.content ?? null}
                            </HighlightExplanation>
                          </PopoverContent>
                        </Popover>
                      ) : (
                        <>
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
                        </>
                      )}
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
