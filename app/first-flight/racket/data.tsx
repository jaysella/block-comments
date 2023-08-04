/* eslint-disable react/no-unescaped-entities */
import { Explanation } from "@/app/_components/Snippet";
import { CodeSegment } from "@/app/_components/ui/code-segment";

export const CODE = `; A GameType (GT) is one of:
;  - "action"
;  - "adventure"
;  - "rpg"
; Interpretation: types of video games

(define GT-ACTION "action")
(define GT-ADVENTURE "adventure")
(define GT-RPG "rpg")

; A Game is a (make-game String GameType)
; Intepretation: a video game
;  - name is the name of the game
;  - type is the type of the game
(define-struct game [name type])

(define GAME-CYBER (make-game "Cyberpunk 2077" GT-ACTION))
(define GAME-ZELDA (make-game "Legend of Zelda" GT-ADVENTURE))
(define GAME-ELDEN (make-game "Elden Ring" GT-RPG))

; adventure-game? : Game -> Boolean
; Determines if the given game is an adventure game.
(define (adventure-game? game)
  (string=? (game-type game) GT-ADVENTURE))

(adventure-game? GAME-CYBER) ; #false
(adventure-game? GAME-ZELDA) ; #true
(adventure-game? GAME-ELDEN) ; #false`;

export const CODE_EXPLANATIONS: Explanation[] = [
  {
    lines: [1, 2, 3, 4, 5],
    content: (
      <>
        This is a data definition for the custom{" "}
        <CodeSegment>GameType</CodeSegment> enumeration.
      </>
    ),
  },
  {
    lines: [7],
    content: (
      <>
        <CodeSegment>GT-ACTION</CodeSegment> is created as a constant with the
        string value <CodeSegment>action</CodeSegment>.
      </>
    ),
  },
  {
    lines: [8],
    content: (
      <>
        <CodeSegment>GT-ADVENTURE</CodeSegment> is created as a constant with
        the string value <CodeSegment>adventure</CodeSegment>.
      </>
    ),
  },
  {
    lines: [9],
    content: (
      <>
        <CodeSegment>GT-RPG</CodeSegment> is created as a constant with the
        string value <CodeSegment>rpg</CodeSegment>.
      </>
    ),
  },
  {
    lines: [11, 12, 13, 14],
    content: (
      <>
        This is a data definition for the custom <CodeSegment>Game</CodeSegment>{" "}
        struct.
      </>
    ),
  },
  {
    lines: [15],
    content: (
      <>
        This defines a struct named <CodeSegment>Game</CodeSegment>. The struct
        has two (2), fields: <CodeSegment>name</CodeSegment> and{" "}
        <CodeSegment>type</CodeSegment>.
      </>
    ),
  },
  {
    lines: [17],
    content: (
      <>
        This creates an example named <CodeSegment>GAME-CYBER</CodeSegment>. The
        value is an instance of a struct with:
        <ol className="mt-2 ml-6 leading-relaxed list-decimal">
          <li>
            a <CodeSegment>name</CodeSegment> of "Cyberpunk 2077"
          </li>
          <li>
            a <CodeSegment>type</CodeSegment> of{" "}
            <CodeSegment>GT-ACTION</CodeSegment>
          </li>
        </ol>
        <br />
        <CodeSegment>GT-ACTION</CodeSegment> refers to the{" "}
        <CodeSegment>GameType</CodeSegment> example defined on line 7.
      </>
    ),
  },
  {
    lines: [18],
    content: (
      <>
        This creates an example named <CodeSegment>GAME-ZELDA</CodeSegment>. The
        value is an instance of a struct with:
        <ol className="mt-2 ml-6 leading-relaxed list-decimal">
          <li>
            a <CodeSegment>name</CodeSegment> of "Legend of Zelda"
          </li>
          <li>
            a <CodeSegment>type</CodeSegment> of{" "}
            <CodeSegment>GT-ADVENTURE</CodeSegment>
          </li>
        </ol>
        <br />
        <CodeSegment>GT-ADVENTURE</CodeSegment> refers to the{" "}
        <CodeSegment>GameType</CodeSegment> example defined on line 8.
      </>
    ),
  },
  {
    lines: [19],
    content: (
      <>
        This creates an example named <CodeSegment>GAME-ELDEN</CodeSegment>. The
        value is an instance of a struct with:
        <ol className="mt-2 ml-6 leading-relaxed list-decimal">
          <li>
            a <CodeSegment>name</CodeSegment> of "Elden Ring"
          </li>
          <li>
            a <CodeSegment>type</CodeSegment> of{" "}
            <CodeSegment>GT-RPG</CodeSegment>
          </li>
        </ol>
        <br />
        <CodeSegment>GT-RPG</CodeSegment> refers to the{" "}
        <CodeSegment>GameType</CodeSegment> example defined on line 9.
      </>
    ),
  },
  {
    lines: [21],
    content: (
      <>
        This is the signature for the <CodeSegment>adventure-game?</CodeSegment>{" "}
        function.
      </>
    ),
  },
  {
    lines: [22],
    content: (
      <>
        This is the purpose statement for the{" "}
        <CodeSegment>adventure-game?</CodeSegment> function.
      </>
    ),
  },
  {
    lines: [23],
    content: (
      <>
        This line defines a predicate function named{" "}
        <CodeSegment>adventure-game?</CodeSegment> which consumes one (1)
        argument named <CodeSegment>game</CodeSegment>.
      </>
    ),
  },
  {
    lines: [24],
    content: (
      <>
        This line determines the <CodeSegment>game</CodeSegment>'s type and if
        that type exactly matches the <CodeSegment>GT-ADVENTURE</CodeSegment>{" "}
        example.
      </>
    ),
  },
  {
    lines: [26],
    content: (
      <>
        This line determines if Cyberpunk 2077 is an adventure game by calling
        the <CodeSegment>(adventure-game? GAME-CYBER)</CodeSegment> function.
        The result is printed to the console. We expect the function to return{" "}
        <CodeSegment>#false</CodeSegment>.
      </>
    ),
  },
  {
    lines: [27],
    content: (
      <>
        This line determines if Legend of Zelda is an adventure game by calling
        the <CodeSegment>(adventure-game? GAME-ZELDA)</CodeSegment> function.
        The result is printed to the console. We expect the function to return{" "}
        <CodeSegment>#true</CodeSegment>.
      </>
    ),
  },
  {
    lines: [28],
    content: (
      <>
        This line determines if Elden Ring is an adventure game by calling the{" "}
        <CodeSegment>(adventure-game? GAME-ELDEN)</CodeSegment> function. The
        result is printed to the console. We expect the function to return{" "}
        <CodeSegment>#false</CodeSegment>.
      </>
    ),
  },
];

export const OUTPUT = `#false
#true
#false`;

export const OUTPUT_EXPLANATIONS: Explanation[] = [
  {
    lines: [1],
    content: (
      <>
        This is the output from line 26 (
        <CodeSegment>(adventure-game? GAME-CYBER)</CodeSegment>). It tells us
        that Cyberpunk 2077 (<CodeSegment>GAME-CYBER</CodeSegment>){" "}
        <b>is not</b> an adventure game.
        <br />
        <br />
        This is correct since the definition of{" "}
        <CodeSegment>GAME-CYBER</CodeSegment> on line 17 defines it as an{" "}
        <b>action</b> game.
      </>
    ),
  },
  {
    lines: [2],
    content: (
      <>
        This is the output from line 27 (
        <CodeSegment>(adventure-game? GAME-ZELDA)</CodeSegment>). It tells us
        that Legend of Zelda (<CodeSegment>GAME-ZELDA</CodeSegment>) <b>is</b>{" "}
        an adventure game.
        <br />
        <br />
        This is correct since the definition of{" "}
        <CodeSegment>GAME-ZELDA</CodeSegment> on line 18 does define it as an{" "}
        <b>adventure</b> game.
      </>
    ),
  },
  {
    lines: [3],
    content: (
      <>
        This is the output from line 28 (
        <CodeSegment>(adventure-game? GAME-ELDEN)</CodeSegment>). It tells us
        that Elden Ring (<CodeSegment>GAME-ELDEN</CodeSegment>) <b>is not</b> an
        adventure game.
        <br />
        <br />
        This is correct since the definition of{" "}
        <CodeSegment>GAME-ELDEN</CodeSegment> on line 19 defines it as an{" "}
        <b>rpg</b>.
      </>
    ),
  },
];
