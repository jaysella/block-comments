import {
  Block,
  BlockContent,
  BlockControls,
  BlockHeader,
  BlockTitle,
} from "@/app/_components/ui/block";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { motion } from "framer-motion";
import { CheckIcon } from "lucide-react";

export default function Onboarding({
  firstName,
  setFirstName,
  nuid,
  setNuid,
}: {
  firstName: string;
  setFirstName: (firstName: string) => void;
  nuid: string;
  setNuid: (nuid: string) => void;
}) {
  return (
    <Block>
      <BlockHeader>
        <BlockTitle title="Onboarding" />

        <BlockControls>
          <Tooltip>
            <TooltipTrigger>
              {firstName && nuid && nuid.length > 6 && nuid.length < 10 && (
                <motion.div
                  initial={{ scale: 2 }}
                  animate={{ scale: 1 }}
                  className="p-2 text-green-600"
                >
                  <CheckIcon size={18} />
                </motion.div>
              )}
            </TooltipTrigger>
            <TooltipContent>Selected Story Points</TooltipContent>
          </Tooltip>
        </BlockControls>
      </BlockHeader>

      <BlockContent>
        <div className="flex flex-col w-full gap-4 md:gap-6">
          <div className="grid items-center w-full max-w-sm gap-2">
            <Label htmlFor="first-name">First Name</Label>
            <Input
              type="text"
              id="first-name"
              placeholder="Carnegie"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="nuid">NUID</Label>
            <Input
              type="text"
              id="nuid"
              pattern="[0-9]*"
              placeholder="001234567"
              value={nuid}
              onChange={(e) => setNuid(e.target.value)}
            />
          </div>
        </div>
      </BlockContent>
    </Block>
  );
}
