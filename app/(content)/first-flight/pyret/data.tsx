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
end

adventure-game(GAME-CYBER) # false
adventure-game(GAME-ZELDA) # true
adventure-game(GAME-ELDEN) # false`;

export const CODE_EXPLANATIONS: Explanation[] = [
  {
    lines: [1, 2, 3, 4, 5, 6],
    content: (
      <>
        This is a data definition for the custom{" "}
        <CodeSegment>GameType</CodeSegment> enumeration.
      </>
    ),
  },
  {
    lines: [8, 9, 10, 11, 12, 13],
    content: (
      <>
        This is a data definition for the custom <CodeSegment>Game</CodeSegment>{" "}
        data type. It has two (2) fields: <CodeSegment>name</CodeSegment> and{" "}
        <CodeSegment>typ</CodeSegment>.<br></br>
        <br></br>
        <strong>Note</strong>: The second field is named{" "}
        <CodeSegment>typ</CodeSegment> rather than{" "}
        <CodeSegment>type</CodeSegment> because <CodeSegment>type</CodeSegment>{" "}
        is a reserved keyword in Pyret.
      </>
    ),
  },
  {
    lines: [16],
    content: (
      <>
        This creates an example named <CodeSegment>GAME-CYBER</CodeSegment>. The
        value is an instance of the <CodeSegment>Game</CodeSegment> data type
        with:
        <ol className="mt-2 ml-6 leading-relaxed list-decimal">
          <li>
            a <CodeSegment>name</CodeSegment> of "Cyberpunk 2077"
          </li>
          <li>
            a <CodeSegment>typ</CodeSegment> (type) of{" "}
            <CodeSegment>Action</CodeSegment>
          </li>
        </ol>
        <br />
        <CodeSegment>Action</CodeSegment> refers to the{" "}
        <CodeSegment>GameType</CodeSegment> enumeration value defined on line 3.
      </>
    ),
  },
  {
    lines: [17],
    content: (
      <>
        This creates an example named <CodeSegment>GAME-ZELDA</CodeSegment>. The
        value is an instance of the <CodeSegment>Game</CodeSegment> data type
        with:
        <ol className="mt-2 ml-6 leading-relaxed list-decimal">
          <li>
            a <CodeSegment>name</CodeSegment> of "Legend of Zelda"
          </li>
          <li>
            a <CodeSegment>typ</CodeSegment> (type) of{" "}
            <CodeSegment>Adventure</CodeSegment>
          </li>
        </ol>
        <br />
        <CodeSegment>Adventure</CodeSegment> refers to the{" "}
        <CodeSegment>GameType</CodeSegment> enumeration value defined on line 4.
      </>
    ),
  },
  {
    lines: [18],
    content: (
      <>
        This creates an example named <CodeSegment>GAME-ELDEN</CodeSegment>. The
        value is an instance of the <CodeSegment>Game</CodeSegment> data type
        with:
        <ol className="mt-2 ml-6 leading-relaxed list-decimal">
          <li>
            a <CodeSegment>name</CodeSegment> of "Elden Ring"
          </li>
          <li>
            a <CodeSegment>typ</CodeSegment> (type) of{" "}
            <CodeSegment>RPG</CodeSegment>
          </li>
        </ol>
        <br />
        <CodeSegment>RPG</CodeSegment> refers to the{" "}
        <CodeSegment>GameType</CodeSegment> enumeration value defined on line 5.
      </>
    ),
  },
  {
    lines: [20],
    content: (
      <>
        This defines an
        <CodeSegment>adventure-game</CodeSegment> function. It accepts one
        parameter, <CodeSegment>g</CodeSegment>, of type{" "}
        <CodeSegment>Game</CodeSegment> and returns a{" "}
        <CodeSegment>Boolean</CodeSegment>.
      </>
    ),
  },
  {
    lines: [21],
    content: (
      <>
        This is the purpose statement for the{" "}
        <CodeSegment>adventure-game</CodeSegment> function.
      </>
    ),
  },
  {
    lines: [22],
    content: (
      <>
        This conditional statement determines if{" "}
        <CodeSegment>g.typ</CodeSegment> is equal to{" "}
        <CodeSegment>Adventure</CodeSegment>. Both sides of this conditional are
        of the same type, <CodeSegment>GameType</CodeSegment>.
        <br />
        <br />
        The resulting boolean value (<CodeSegment>true</CodeSegment> or{" "}
        <CodeSegment>false</CodeSegment>) is returned by this function when it
        is called.
      </>
    ),
  },
  {
    lines: [23],
    content: (
      <>
        This denotes the end of the <CodeSegment>adventure-game</CodeSegment>{" "}
        function.
      </>
    ),
  },
  {
    lines: [25],
    content: (
      <>
        This line determines if Cyberpunk 2077 is an adventure game by calling
        the <CodeSegment>adventure-game(GAME-CYBER)</CodeSegment> function. The
        result is printed to the console. We expect the function to return{" "}
        <CodeSegment>false</CodeSegment>.
      </>
    ),
  },
  {
    lines: [26],
    content: (
      <>
        This line determines if Legend of Zelda is an adventure game by calling
        the <CodeSegment>adventure-game(GAME-ZELDA)</CodeSegment> function. The
        result is printed to the console. We expect the function to return{" "}
        <CodeSegment>true</CodeSegment>.
      </>
    ),
  },
  {
    lines: [27],
    content: (
      <>
        This line determines if Elden Ring is an adventure game by calling the{" "}
        <CodeSegment>adventure-game(GAME-ELDEN)</CodeSegment> function. The
        result is printed to the console. We expect the function to return{" "}
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
    lines: [1],
    content: (
      <>
        This is the output from line 25 (
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
        This is the output from line 26 (
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
        This is the output from line 27 (
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
