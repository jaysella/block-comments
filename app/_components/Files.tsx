"user client";
import { useState } from "react";
import { Explanation, LineHighlight, SnippetContent } from "./Snippet";
import { Block, BlockControls, BlockHeader, BlockTitle } from "./ui/block";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { AlignLeftIcon, ChevronDownIcon, WrapTextIcon } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { useToast } from "./ui/use-toast";

export type File = {
  name: string;
  language: string;
  explanations?: Explanation[];
  highlights?: Record<string, LineHighlight>;
  content: string;
};

export default function Files({ files }: { files: File[] }) {
  const { toast } = useToast();

  const [currentFile, setCurrentFile] = useState(files[0]);
  const [wrapText, setWrapText] = useState<boolean>(false);

  return (
    <Block>
      <BlockHeader>
        <div className="flex items-center space-x-1 rounded-xl bg-secondary text-secondary-foreground">
          <BlockTitle title={currentFile.name} />

          {files.length > 1 && (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="ml-2 p-1.5 rounded-md shadow-none hover:bg-slate-200 dark:hover:bg-slate-700">
                  <ChevronDownIcon className="w-4 h-4 text-secondary-foreground" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-[200px]" forceMount>
                <DropdownMenuLabel>Files</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {files.map((f) => (
                  <DropdownMenuCheckboxItem
                    key={f.name}
                    checked={currentFile.name === f.name}
                    onCheckedChange={() => setCurrentFile(f)}
                  >
                    {f.name}
                  </DropdownMenuCheckboxItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </div>

        <BlockControls>
          <Tooltip>
            <TooltipTrigger
              className="p-2 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-800"
              onClick={() => {
                setWrapText(!wrapText);
                toast({
                  title: `Text ${wrapText ? "unwrapped" : "wrapped"}!`,
                  description: "This section's formatting has been updated.",
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
        </BlockControls>
      </BlockHeader>
      <SnippetContent
        title={currentFile.name}
        language={currentFile.language}
        explanations={currentFile.explanations}
        highlights={currentFile.highlights}
        wrapText={wrapText}
      >
        {currentFile.content}
      </SnippetContent>
    </Block>
  );
}
