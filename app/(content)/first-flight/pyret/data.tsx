import { Explanation } from "@/app/_components/Snippet";
import { CodeSegment } from "@/app/_components/ui/code-segment";

export const CODE = `# Types of video games
data GameType:
  | Action
  | Adventure
  | RPG
end

# A video game, where:
# name is the name of the game
# typ is the type of the game
data Game:
  | MakeGame(name :: String, typ :: GameType)
end

# Examples of video games
GAME-CYBER = MakeGame("Cyberpunk 2077", Action)
GAME-ZELDA = MakeGame("Legend of Zelda", Adventure)
GAME-ELDEN = MakeGame("Elden Ring", RPG)

fun adventure-game(g :: Game) -> Boolean:
  doc: "Determines if the given game is an adventure game."
  g.typ == Adventure

adventure-game(GAME-CYBER) # false
adventure-game(GAME-ZELDA) # true
adventure-game(GAME-ELDEN) # false`;

export const CODE_EXPLANATIONS: Explanation[] = [];

export const OUTPUT = `false
true
false`;

export const OUTPUT_EXPLANATIONS: Explanation[] = [
  {
    lines: [1],
    content: (
      <>
        This is the output from line 24 (
        <CodeSegment>adventure-game(GAME-CYBER)</CodeSegment>). It tells us that
        Cyberpunk 2077 (<CodeSegment>GAME-CYBER</CodeSegment>) <b>is not</b> an
        adventure game.
        <br />
        <br />
        This is correct since the definition of{" "}
        <CodeSegment>GAME-CYBER</CodeSegment> on line 16 defines it as an{" "}
        <b>action</b> game.
      </>
    ),
  },
  {
    lines: [2],
    content: (
      <>
        This is the output from line 25 (
        <CodeSegment>adventure-game(GAME-ZELDA)</CodeSegment>). It tells us that
        Legend of Zelda (<CodeSegment>GAME-ZELDA</CodeSegment>) <b>is</b> an
        adventure game.
        <br />
        <br />
        This is correct since the definition of{" "}
        <CodeSegment>GAME-ZELDA</CodeSegment> on line 17 does define it as an{" "}
        <b>adventure</b> game.
      </>
    ),
  },
  {
    lines: [3],
    content: (
      <>
        This is the output from line 26 (
        <CodeSegment>adventure-game(GAME-ELDEN)</CodeSegment>). It tells us that
        Elden Ring (<CodeSegment>GAME-ELDEN</CodeSegment>) <b>is not</b> an
        adventure game.
        <br />
        <br />
        This is correct since the definition of{" "}
        <CodeSegment>GAME-ELDEN</CodeSegment> on line 18 defines it as an{" "}
        <b>rpg</b>.
      </>
    ),
  },
];
