/* eslint-disable react/no-unescaped-entities */
"use client";

import Highlight, { Explanation } from "../../_components/Highlight";
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

print(is_adventure_game(GAME_CYBER))
print(is_adventure_game(GAME_ZELDA))
print(is_adventure_game(GAME_ELDEN))`;

const explanations: Explanation[] = [
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
    line: 3,
    content: (
      <>
        Lines 2-4 represent a "docstring". Line 3 contains the purpose statement
        for our <CodeSegment>GameType</CodeSegment> class.
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
  {
    line: 6,
    content: (
      <>
        <CodeSegment>ADVENTURE</CodeSegment> is created as a constant with the
        value <CodeSegment>adventure</CodeSegment>.
      </>
    ),
  },
  {
    line: 7,
    content: (
      <>
        <CodeSegment>RPG</CodeSegment> is created as a constant with the value{" "}
        <CodeSegment>rpg</CodeSegment>.
      </>
    ),
  },
  {
    line: 9,
    content: (
      <>
        Similar to a <CodeSegment>;</CodeSegment> in Racket, a{" "}
        <CodeSegment>#</CodeSegment> denotes a comment in Python.
      </>
    ),
  },
  {
    line: 10,
    content: (
      <>
        This creates a constant named <CodeSegment>GAME_CYBER</CodeSegment>. The
        value is an object containing two keys (<CodeSegment>name</CodeSegment>{" "}
        and <CodeSegment>type</CodeSegment>) and each key's associated value (
        <CodeSegment>Cyberpunk 2077</CodeSegment> and{" "}
        <CodeSegment>GameType.ACTION</CodeSegment>).
        <br />
        <br />
        <CodeSegment>GameType.ACTION</CodeSegment> looks up the value of{" "}
        <CodeSegment>ACTION</CodeSegment> in our{" "}
        <CodeSegment>GameType</CodeSegment> class.
      </>
    ),
  },
  {
    line: 14,
    content: (
      <>
        <CodeSegment>def</CodeSegment>, short for "define", defines a function.
        The name of this function is{" "}
        <CodeSegment>is_adventure_game</CodeSegment> and it consumes one (1)
        argument named <CodeSegment>game</CodeSegment>.
      </>
    ),
  },
  {
    line: 16,
    content: (
      <>
        Lines 15-17 represent a "docstring". Line 16 contains the purpose
        statement for our <CodeSegment>is_adventure_game(Game)</CodeSegment>{" "}
        function.
      </>
    ),
  },
  {
    line: 18,
    content: (
      <>
        <CodeSegment>return</CodeSegment> returns the given value from the
        function. This is the function&rsquo;s output, or result.
        <br />
        <br />
        <CodeSegment>{'game["type"]'}</CodeSegment> accesses the{" "}
        <CodeSegment>type</CodeSegment> field from the given{" "}
        <CodeSegment>game</CodeSegment> object.
        <br />
        <br />
        <CodeSegment>==</CodeSegment> determines if two values are equal.
        <br />
        <br />
        <CodeSegment>GameType.ADVENTURE</CodeSegment> looks up the value of the{" "}
        <CodeSegment>ADVENTURE</CodeSegment> key in the{" "}
        <CodeSegment>GameType</CodeSegment> class.
      </>
    ),
  },
  {
    line: 20,
    content: (
      <>
        <CodeSegment>print()</CodeSegment> outputs the given argument to the
        console.
        <br />
        <br />
        Here, we&rsquo;re printing the value of the function call{" "}
        <CodeSegment>is_adventure_game(GAME_CYBER)</CodeSegment> to determine if
        Cyberpunk 2077 is an adventure game.
      </>
    ),
  },
  {
    line: 21,
    content: (
      <>
        <CodeSegment>print()</CodeSegment> outputs the given argument to the
        console.
        <br />
        <br />
        Here, we&rsquo;re printing the value of the function call{" "}
        <CodeSegment>is_adventure_game(GAME_ZELDA)</CodeSegment> to determine if
        Legend of Zelda is an adventure game.
      </>
    ),
  },
  {
    line: 22,
    content: (
      <>
        <CodeSegment>print()</CodeSegment> outputs the given argument to the
        console.
        <br />
        <br />
        Here, we&rsquo;re printing the value of the function call{" "}
        <CodeSegment>is_adventure_game(GAME_ELDEN)</CodeSegment> to determine if
        Elden Ring is an adventure game.
      </>
    ),
  },
];

const output = `False
True
False`;

const outputExplanations: Explanation[] = [
  {
    line: 1,
    content: (
      <>
        This is the output from line 20 (
        <CodeSegment>print(is_adventure_game(GAME_CYBER))</CodeSegment>). It
        tells us that Cyberpunk 2077 (<CodeSegment>GAME_CYBER</CodeSegment>){" "}
        <b>is not</b> an adventure game.
        <br />
        <br />
        This is correct since the definition of{" "}
        <CodeSegment>GAME_CYBER</CodeSegment> on line 10 defines it as an{" "}
        <b>action</b> game.
      </>
    ),
  },
  {
    line: 2,
    content: (
      <>
        This is the output from line 21 (
        <CodeSegment>print(is_adventure_game(GAME_ZELDA))</CodeSegment>). It
        tells us that Legend of Zelda (<CodeSegment>GAME_ZELDA</CodeSegment>){" "}
        <b>is</b> an adventure game.
        <br />
        <br />
        This is correct since the definition of{" "}
        <CodeSegment>GAME_ZELDA</CodeSegment> on line 11 does define it as an{" "}
        <b>adventure</b> game.
      </>
    ),
  },
  {
    line: 3,
    content: (
      <>
        This is the output from line 22 (
        <CodeSegment>print(is_adventure_game(GAME_ELDEN))</CodeSegment>). It
        tells us that Elden Ring (<CodeSegment>GAME_ELDEN</CodeSegment>){" "}
        <b>is not</b> an adventure game.
        <br />
        <br />
        This is correct since the definition of{" "}
        <CodeSegment>GAME_ELDEN</CodeSegment> on line 12 defines it as an{" "}
        <b>action</b> game.
      </>
    ),
  },
];

export default function Page() {
  return (
    <>
      <Highlight title="Code" language="python" explanations={explanations}>
        {pythonSnippet}
      </Highlight>

      <Highlight
        title="Output"
        language="python"
        explanations={outputExplanations}
      >
        {output}
      </Highlight>
    </>
  );
}
