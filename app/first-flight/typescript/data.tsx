/* eslint-disable react/no-unescaped-entities */
import { Explanation } from "@/app/_components/Highlight";
import { CodeSegment } from "@/app/_components/ui/code-segment";

export const CODE = `// Represents a type of video game
enum GameType {
  ACTION = "action",
  ADVENTURE = "adventure",
  RPG = "rpg"
}

// Represents a video game
type Game = {
  name: string;
  type: GameType;
};

// Examples of video games
const GAME_CYBER: Game = { name: "Cyberpunk 2077", type: GameType.ACTION };
const GAME_ZELDA: Game = { name: "Legend of Zelda", type: GameType.ADVENTURE };
const GAME_ELDEN: Game = { name: "Elden Ring", type: GameType.RPG };

// Determines if the given game is an adventure game
function isAdventureGame(game: Game): boolean {
  return game.type === GameType.ADVENTURE;
}

console.log(isAdventureGame(GAME_CYBER)); // false
console.log(isAdventureGame(GAME_ZELDA)); // true
console.log(isAdventureGame(GAME_ELDEN)); // false`;

export const CODE_EXPLANATIONS: Explanation[] = [];

export const OUTPUT = `false
true
false`;

export const OUTPUT_EXPLANATIONS: Explanation[] = [
  {
    line: 1,
    content: (
      <>
        This is the output from line 24 (
        <CodeSegment>console.log(isAdventureGame(GAME_CYBER))</CodeSegment>). It
        tells us that Cyberpunk 2077 (<CodeSegment>GAME_CYBER</CodeSegment>){" "}
        <b>is not</b> an adventure game.
        <br />
        <br />
        This is correct since the definition of{" "}
        <CodeSegment>GAME_CYBER</CodeSegment> on line 9 defines it as an{" "}
        <b>action</b> game.
      </>
    ),
  },
  {
    line: 2,
    content: (
      <>
        This is the output from line 25 (
        <CodeSegment>console.log(isAdventureGame(GAME_ZELDA))</CodeSegment>). It
        tells us that Legend of Zelda (<CodeSegment>GAME_ZELDA</CodeSegment>){" "}
        <b>is</b> an adventure game.
        <br />
        <br />
        This is correct since the definition of{" "}
        <CodeSegment>GAME_ZELDA</CodeSegment> on line 10 does define it as an{" "}
        <b>adventure</b> game.
      </>
    ),
  },
  {
    line: 3,
    content: (
      <>
        This is the output from line 26 (
        <CodeSegment>console.log(isAdventureGame(GAME_ELDEN))</CodeSegment>). It
        tells us that Elden Ring (<CodeSegment>GAME_ELDEN</CodeSegment>){" "}
        <b>is not</b> an adventure game.
        <br />
        <br />
        This is correct since the definition of{" "}
        <CodeSegment>GAME_ELDEN</CodeSegment> on line 11 defines it as an{" "}
        <b>rpg</b>.
      </>
    ),
  },
];
