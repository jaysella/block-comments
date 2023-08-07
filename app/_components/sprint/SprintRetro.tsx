import {
  Block,
  BlockContent,
  BlockHeader,
  BlockTitle,
} from "@/app/_components/ui/block";
import { Ticket } from "@/app/product/sprint/data";

export default function SprintRetro({ tickets }: { tickets: Ticket[] }) {
  return (
    <Block>
      <BlockHeader>
        <BlockTitle title="Sprint Retro" />
      </BlockHeader>

      <BlockContent>
        <p>Great work this Sprint!</p>
      </BlockContent>
    </Block>
  );
}
