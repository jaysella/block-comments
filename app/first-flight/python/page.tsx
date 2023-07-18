"use client";

import CustomHighlight from "../../_components/Highlight";
import { CodeSegment } from "../../_components/HighlightExplainer";

const pythonSnippet = `class GameType:
  """
  Represents a type of video game.
  """
  ACTION = "action"
  ADVENTURE = "adventure"
  RPG = "rpg"

# Examples of video games
GAME_CYBER = { "name": "Cyberpunk 2077", "type": GameType.ACTION }
GAME_ZELDA = { "name": "Legend of Zelda", "type": GameType.ADVENTURE }
GAME_ELDEN = { "name": "Elden Ring", "type": GameType.RPG }

def is_adventure_game(game):
  """
  Determines if the given game is an adventure game.
  """
  return game["type"] == GameType.ADVENTURE

print(is_adventure_game(GAME_CYBER)) # False
print(is_adventure_game(GAME_ZELDA)) # True
print(is_adventure_game(GAME_ELDEN)) # False`;

const explanations = [
  {
    line: 1,
    content: (
      <>
        This begins defining the <CodeSegment>GameType</CodeSegment> class.
        We&rsquo;ll use this below to build examples of various types of video
        games.
      </>
    ),
  },
  {
    line: 5,
    content: (
      <>
        <CodeSegment>ACTION</CodeSegment> is created as a constant with the
        value <CodeSegment>action</CodeSegment>.
      </>
    ),
  },
];

export default function Page() {
  return (
    <div className="m-16 rounded-2xl">
      <CustomHighlight language="python" explanations={explanations}>
        {pythonSnippet}
      </CustomHighlight>
    </div>
  );
}
