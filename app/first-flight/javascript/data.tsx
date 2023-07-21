/* eslint-disable react/no-unescaped-entities */
import { Explanation } from "@/app/_components/Highlight";
import { CodeSegment } from "@/app/_components/HighlightExplanation";

export const CODE = `// Represents a type of video game.
const GAME_TYPE = {
  ACTION: "action",
  ADVENTURE: "adventure",
  RPG: "rpg"
};

// Examples of video games
const GAME_CYBER = { name: "Cyberpunk 2077", type: GAME_TYPE.ACTION };
const GAME_ZELDA = { name: "Legend of Zelda", type: GAME_TYPE.ADVENTURE };
const GAME_ELDEN = { name: "Elden Ring", type: GAME_TYPE.RPG };

// Determines if the given game is an adventure game.
function isAdventureGame(game) {
  return game.type === GAME_TYPE.ADVENTURE;
};

console.log(isAdventureGame(GAME_CYBER)); // false
console.log(isAdventureGame(GAME_ZELDA)); // true
console.log(isAdventureGame(GAME_ELDEN)); // false`;

export const CODE_EXPLANATIONS: Explanation[] = [
  {
    line: 1,
    content: (
      <>
        Similar to a <CodeSegment>;</CodeSegment> in Racket, a two (2) forward
        slashes (<CodeSegment>{"//"}</CodeSegment>) denote a comment in
        JavaScript.
      </>
    ),
  },
  {
    line: 2,
    content: (
      <>
        This begins defining the <CodeSegment>GameType</CodeSegment>{" "}
        enumeration, stored in a constant (immutable) object.
      </>
    ),
  },
  {
    line: 3,
    content: (
      <>
        <CodeSegment>ACTION</CodeSegment> is created as a key with the string
        value <CodeSegment>action</CodeSegment>.
      </>
    ),
  },
  {
    line: 4,
    content: (
      <>
        <CodeSegment>ADVENTURE</CodeSegment> is created as a constant with the
        string value <CodeSegment>adventure</CodeSegment>.
      </>
    ),
  },
  {
    line: 5,
    content: (
      <>
        <CodeSegment>RPG</CodeSegment> is created as a constant with the string
        value <CodeSegment>rpg</CodeSegment>.
      </>
    ),
  },
  {
    line: 6,
    content: (
      <>
        This closing curly brace (<CodeSegment>{"}"}</CodeSegment>) denotes the
        end of the <CodeSegment>GameType</CodeSegment> object declaration.
      </>
    ),
  },
  {
    line: 8,
    content: (
      <>
        Similar to a <CodeSegment>;</CodeSegment> in Racket, a two (2) forward
        slashes (<CodeSegment>{"//"}</CodeSegment>) denote a comment in
        JavaScript.
      </>
    ),
  },
  {
    line: 9,
    content: (
      <>
        This creates a constant named <CodeSegment>GAME_CYBER</CodeSegment>. The
        value is an object containing two key-value pairs:
        <ul className="mt-2 ml-6 leading-relaxed list-decimal">
          <li>
            <CodeSegment>name</CodeSegment> with a value of "Cyberpunk 2077"
          </li>
          <li>
            <CodeSegment>type</CodeSegment> with a value of{" "}
            <CodeSegment>GameType.ACTION</CodeSegment>
          </li>
        </ul>
        <br />
        <CodeSegment>GameType.ACTION</CodeSegment> looks up the value of{" "}
        <CodeSegment>ACTION</CodeSegment> in the{" "}
        <CodeSegment>GameType</CodeSegment> enumeration (constant object).
      </>
    ),
  },
  {
    line: 10,
    content: (
      <>
        This creates a constant named <CodeSegment>GAME_ZELDA</CodeSegment>. The
        value is an object containing two key-value pairs:
        <ul className="mt-2 ml-6 leading-relaxed list-decimal">
          <li>
            <CodeSegment>name</CodeSegment> with a value of "Legend of Zelda"
          </li>
          <li>
            <CodeSegment>type</CodeSegment> with a value of{" "}
            <CodeSegment>GameType.ADVENTURE</CodeSegment>
          </li>
        </ul>
        <br />
        <CodeSegment>GameType.ADVENTURE</CodeSegment> looks up the value of{" "}
        <CodeSegment>ADVENTURE</CodeSegment> in the{" "}
        <CodeSegment>GameType</CodeSegment> enumeration (constant object).
      </>
    ),
  },
  {
    line: 11,
    content: (
      <>
        This creates a constant named <CodeSegment>GAME_ELDEN</CodeSegment>. The
        value is an object containing two key-value pairs:
        <ul className="mt-2 ml-6 leading-relaxed list-decimal">
          <li>
            <CodeSegment>name</CodeSegment> with a value of "Elden Ring"
          </li>
          <li>
            <CodeSegment>type</CodeSegment> with a value of{" "}
            <CodeSegment>GameType.RPG</CodeSegment>
          </li>
        </ul>
        <br />
        <CodeSegment>GameType.RPG</CodeSegment> looks up the value of{" "}
        <CodeSegment>RPG</CodeSegment> in the{" "}
        <CodeSegment>GameType</CodeSegment> enumeration (constant object).
      </>
    ),
  },
  {
    line: 14,
    content: (
      <>
        <CodeSegment>function</CodeSegment> defines a function. The name of this
        function is <CodeSegment>isAdventureGame</CodeSegment> and it consumes
        one (1) argument named <CodeSegment>game</CodeSegment>.
        <br />
        <br />
        The function body is wrapped in a single curly brace (
        <CodeSegment>{"{"}</CodeSegment>/<CodeSegment>{"}"}</CodeSegment>)
      </>
    ),
  },
  {
    line: 15,
    content: (
      <>
        <CodeSegment>function</CodeSegment> defines a function. The name of this
        function is <CodeSegment>isAdventureGame</CodeSegment> and it consumes
        one (1) argument named <CodeSegment>game</CodeSegment>.
        <br />
        <br />
        The function body is wrapped in a single curly brace (
        <CodeSegment>{"{"}</CodeSegment>/<CodeSegment>{"}"}</CodeSegment>)
      </>
    ),
  },
  {
    line: 16,
    content: (
      <>
        This closing curly brace (<CodeSegment>{"}"}</CodeSegment>) denotes the
        end of the <CodeSegment>isAdventureGame()</CodeSegment> function
        definition.
      </>
    ),
  },
  {
    line: 18,
    content: (
      <>
        <CodeSegment>console.log()</CodeSegment> outputs the given argument to
        the console.
        <br />
        <br />
        Here, we're logging the value of the function call{" "}
        <CodeSegment>isAdventureGame(GAME_CYBER)</CodeSegment> to determine if
        Cyberpunk 2077 is an adventure game. We expect the function to return{" "}
        <CodeSegment>false</CodeSegment>.
      </>
    ),
  },
  {
    line: 19,
    content: (
      <>
        <CodeSegment>console.log()</CodeSegment> outputs the given argument to
        the console.
        <br />
        <br />
        Here, we're logging the value of the function call{" "}
        <CodeSegment>isAdventureGame(GAME_ZELDA)</CodeSegment> to determine if
        Legend of Zelda is an adventure game. We expect the function to return{" "}
        <CodeSegment>true</CodeSegment>.
      </>
    ),
  },
  {
    line: 20,
    content: (
      <>
        <CodeSegment>console.log()</CodeSegment> outputs the given argument to
        the console.
        <br />
        <br />
        Here, we're logging the value of the function call{" "}
        <CodeSegment>isAdventureGame(GAME_ELDEN)</CodeSegment> to determine if
        Elden Ring is an adventure game. We expect the function to return{" "}
        <CodeSegment>false</CodeSegment>.
      </>
    ),
  },
];

export const OUTPUT = `false
true
false`;

export const OUTPUT_EXPLANATIONS: Explanation[] = [
  {
    line: 1,
    content: (
      <>
        This is the output from line 18 (
        <CodeSegment>console.log(isAdventureGame(GAME_CYBER))</CodeSegment>). It
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
        <CodeSegment>console.log(isAdventureGame(GAME_ZELDA))</CodeSegment>). It
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
        <CodeSegment>console.log(isAdventureGame(GAME_ELDEN))</CodeSegment>). It
        tells us that Elden Ring (<CodeSegment>GAME_ELDEN</CodeSegment>){" "}
        <b>is not</b> an adventure game.
        <br />
        <br />
        This is correct since the definition of{" "}
        <CodeSegment>GAME_ELDEN</CodeSegment> on line 12 defines it as an{" "}
        <b>rpg</b>.
      </>
    ),
  },
];
