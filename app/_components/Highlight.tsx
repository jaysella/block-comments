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
import HighlightExplanation from "./HighlightExplanation";

export type Explanation = {
  line: number;
  content: ReactNode;
};

export default function Highlight({
  title,
  language,
  sandboxLink,
  explanations = [],
  children,
}: {
  title?: string;
  language: string;
  sandboxLink?: URL;
  explanations?: Explanation[];
  children: string;
}) {
  const code = children;
  const router = useRouter();
  const { toast } = useToast();

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
                    onClick={() => {
                      setWrapText(!wrapText);
                      toast({
                        title: `Text ${wrapText ? "unwrapped" : "wrapped"}! ✅`,
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
                    className="p-2 rounded-lg hover:bg-slate-200"
                    onClick={() => {
                      navigator.clipboard.writeText(code);
                      toast({
                        title: "Copied! ✅",
                        description: `The ${title} has been copied to your clipboard.`,
                      });
                    }}
                  >
                    <CopyIcon size={18} />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Copy code</p>
                  </TooltipContent>
                </Tooltip>

                {sandboxLink ? (
                  <Tooltip>
                    <TooltipTrigger
                      className="p-2 rounded-lg hover:bg-slate-200"
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
