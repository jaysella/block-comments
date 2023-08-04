/* eslint-disable react/no-unescaped-entities */
import InfoBlock from "@/app/_components/InfoBlock";
import { Explanation } from "@/app/_components/Snippet";
import { CodeSegment } from "@/app/_components/ui/code-segment";

export const CODE = `// Represents a type of video game
#[derive(PartialEq)]
enum GameType {
  ACTION,
  ADVENTURE,
  RPG,
}

// Represents a video game
struct Game {
  name: String,
  game_type: GameType,
}

// Determine if the given video game is an adventure game
fn is_adventure_game(game: &Game) -> bool {
  game.game_type == GameType::ADVENTURE
}

// Program entry point
fn main() {
  // Examples of video games
  let game_cyber = Game {
    name: String::from("Cyberpunk 2077"),
    game_type: GameType::ACTION,
  };

  let game_zelda = Game {
    name: String::from("Legend of Zelda"),
    game_type: GameType::ADVENTURE,
  };

  let game_elden = Game {
    name: String::from("Elden Ring"),
    game_type: GameType::RPG,
  };

  println!("{}", is_adventure_game(&game_cyber)); // false
  println!("{}", is_adventure_game(&game_zelda)); // true
  println!("{}", is_adventure_game(&game_elden)); // false
}`;

export const CODE_EXPLANATIONS: Explanation[] = [
  {
    lines: [1, 9, 15, 20, 22],
    content: (
      <>
        As with JavaScript and TypeScript, two (2) forward slashes (
        <CodeSegment>{"//"}</CodeSegment>) denote a comment in Rust.
      </>
    ),
  },
  {
    lines: [2],
    content: (
      <>
        This is a convenience attribute used to automatically generate the code
        needed to compare instances of the enumeration defined on the next line
        using the <CodeSegment>==</CodeSegment> operator. Without it, code would
        need to manually be written to check if two instances of the type are
        equal.
        <br />
        <br />
        This functionality is used later on in this program.
      </>
    ),
  },
  {
    lines: [3],
    content: (
      <>
        This begins defining the <CodeSegment>GameType</CodeSegment>{" "}
        enumeration.
      </>
    ),
  },
  {
    lines: [4],
    content: (
      <>
        <CodeSegment>ACTION</CodeSegment> is created as a possible value of the{" "}
        <CodeSegment>GameType</CodeSegment> enumeration.
      </>
    ),
  },
  {
    lines: [5],
    content: (
      <>
        <CodeSegment>ADVENTURE</CodeSegment> is created as a possible value of
        the <CodeSegment>GameType</CodeSegment> enumeration.
      </>
    ),
  },
  {
    lines: [6],
    content: (
      <>
        <CodeSegment>RPG</CodeSegment> is created as a possible value of the{" "}
        <CodeSegment>GameType</CodeSegment> enumeration.
      </>
    ),
  },
  {
    lines: [7],
    content: (
      <>
        This closing curly brace (<CodeSegment>{"}"}</CodeSegment>) denotes the
        end of the <CodeSegment>GameType</CodeSegment> object declaration.
      </>
    ),
  },
  {
    lines: [10, 11, 12, 13],
    content: (
      <>
        A <CodeSegment>struct</CodeSegment> defines a new, custom data
        structure. It is similar to a struct in Racket. This data type is named{" "}
        <CodeSegment>Game</CodeSegment>. It has two fields:
        <ol className="mt-2 ml-6 leading-relaxed list-decimal">
          <li>
            <CodeSegment>name</CodeSegment>, which must be a string
          </li>
          <li>
            <CodeSegment>game_type</CodeSegment>, which must be a{" "}
            <CodeSegment>GameType</CodeSegment>.
          </li>
        </ol>
        <br />
        <InfoBlock variant="destructive" size="small">
          Note that <CodeSegment>game_type</CodeSegment> is used here instead of
          simply <CodeSegment>type</CodeSegment> which was used in all of the
          other languages so far. This is because{" "}
          <CodeSegment>type</CodeSegment> is a reserved keyword in Rust.
        </InfoBlock>
      </>
    ),
  },
  {
    lines: [16],
    content: (
      <>
        <CodeSegment>fn</CodeSegment> defines a function. The name of this
        function is <CodeSegment>is_adventure_game</CodeSegment> and it consumes
        one (1) argument named <CodeSegment>game</CodeSegment>.{" "}
        <CodeSegment>game</CodeSegment> must be a reference to a{" "}
        <CodeSegment>Game</CodeSegment> object.
        <br />
        <br />
        The ampersand (<CodeSegment>&</CodeSegment>) in{" "}
        <CodeSegment>&Game</CodeSegment> denotes that a reference must be passed
        rather than the actual object. This way, the function does not take
        ownership of the object. It has read-only access.
        <br />
        <br />
        This function can only return a <CodeSegment>bool</CodeSegment>ean.
        <br />
        <br />
        The function body is wrapped in a single curly brace (
        <CodeSegment>{"{"}</CodeSegment>/<CodeSegment>{"}"}</CodeSegment>)
      </>
    ),
  },
  {
    lines: [17],
    content: (
      <>
        This reads the given <CodeSegment>game</CodeSegment>'s{" "}
        <CodeSegment>game_type</CodeSegment> and determines if that type is the
        same as the <CodeSegment>ADVENTURE</CodeSegment> value in the{" "}
        <CodeSegment>GameType</CodeSegment> enumeration.
        <br />
        <br />
        The resulting boolean is returned to the caller.
      </>
    ),
  },
  {
    lines: [18],
    content: (
      <>
        This closing curly brace (<CodeSegment>{"}"}</CodeSegment>) denotes the
        end of the <CodeSegment>is_adventure_game()</CodeSegment> function
        definition.
      </>
    ),
  },
  {
    lines: [21],
    content: (
      <>
        <CodeSegment>fn</CodeSegment> defines a function. The name of this
        function is <CodeSegment>main</CodeSegment>.
        <br />
        <br />
        In Rust, the <CodeSegment>main()</CodeSegment> function is the entry
        point to the program. This is automatically called when program
        execution begins.
        <br />
        <br />
        This function does not take any arguments as there are no parameters
        defined within the parentheses.
      </>
    ),
  },
  {
    lines: [23, 24, 25, 26],
    content: (
      <>
        This defines a variable named <CodeSegment>game_cyber</CodeSegment>. The
        value is an instance of the <CodeSegment>Game</CodeSegment> struct.
        There are two (2) fields initialized:
        <ol className="mt-3 ml-6 space-y-2 leading-relaxed list-decimal">
          <li>
            <CodeSegment>name</CodeSegment> which has a heap-allocated{" "}
            <CodeSegment>String</CodeSegment> created from the text "Cyberpunk
            2077"
          </li>
          <li>
            <CodeSegment>game_type</CodeSegment> with a value which references
            the <CodeSegment>ACTION</CodeSegment> value from the{" "}
            <CodeSegment>GameType</CodeSegment> enumeration.
          </li>
        </ol>
      </>
    ),
  },
  {
    lines: [28, 29, 30, 31],
    content: (
      <>
        This defines a variable named <CodeSegment>game_zelda</CodeSegment>. The
        value is an instance of the <CodeSegment>Game</CodeSegment> struct.
        There are two (2) fields initialized:
        <ol className="mt-3 ml-6 space-y-2 leading-relaxed list-decimal">
          <li>
            <CodeSegment>name</CodeSegment> which has a heap-allocated{" "}
            <CodeSegment>String</CodeSegment> created from the text "Legend of
            Zelda"
          </li>
          <li>
            <CodeSegment>game_type</CodeSegment> with a value which references
            the <CodeSegment>ADVENTURE</CodeSegment> value from the{" "}
            <CodeSegment>GameType</CodeSegment> enumeration.
          </li>
        </ol>
      </>
    ),
  },
  {
    lines: [32, 33, 34, 35],
    content: (
      <>
        This defines a variable named <CodeSegment>game_elden</CodeSegment>. The
        value is an instance of the <CodeSegment>Game</CodeSegment> struct.
        There are two (2) fields initialized:
        <ol className="mt-3 ml-6 space-y-2 leading-relaxed list-decimal">
          <li>
            <CodeSegment>name</CodeSegment> which has a heap-allocated{" "}
            <CodeSegment>String</CodeSegment> created from the text "Elden Ring"
          </li>
          <li>
            <CodeSegment>game_type</CodeSegment> with a value which references
            the <CodeSegment>RPG</CodeSegment> value from the{" "}
            <CodeSegment>GameType</CodeSegment> enumeration.
          </li>
        </ol>
      </>
    ),
  },
  {
    lines: [38],
    content: (
      <>
        <CodeSegment>{`println!("{}", ...)`}</CodeSegment> is a Rust{" "}
        <strong>macro</strong> used to print text to the console. Macros are a
        special kind of function. The <CodeSegment>{`{}`}</CodeSegment> is a
        placeholder which is replaced by the value provided after the comma (
        <CodeSegment>,</CodeSegment>).
        <br />
        <br />
        Thus, this line prints the result of the function call to{" "}
        <CodeSegment>is_adventure_game(&game_cyber)</CodeSegment> to determine
        if Cyberpunk 2077 is an adventure game. The ampersand (
        <CodeSegment>&</CodeSegment>) before{" "}
        <CodeSegment>game_cyber</CodeSegment> is used to pass a reference to the{" "}
        <CodeSegment>game_cyber</CodeSegment> object rather than the object
        itself.
        <br />
        <br />
        We expect the function to return <CodeSegment>false</CodeSegment>.
      </>
    ),
  },
  {
    lines: [39],
    content: (
      <>
        <CodeSegment>{`println!("{}", ...)`}</CodeSegment> is a Rust{" "}
        <strong>macro</strong> used to print text to the console. Macros are a
        special kind of function. The <CodeSegment>{`{}`}</CodeSegment> is a
        placeholder which is replaced by the value provided after the comma (
        <CodeSegment>,</CodeSegment>).
        <br />
        <br />
        Thus, this line prints the result of the function call to{" "}
        <CodeSegment>is_adventure_game(&game_zelda)</CodeSegment> to determine
        if Legend of Zelda is an adventure game. The ampersand (
        <CodeSegment>&</CodeSegment>) before{" "}
        <CodeSegment>game_zelda</CodeSegment> is used to pass a reference to the{" "}
        <CodeSegment>game_zelda</CodeSegment> object rather than the object
        itself.
        <br />
        <br />
        We expect the function to return <CodeSegment>true</CodeSegment>.
      </>
    ),
  },
  {
    lines: [40],
    content: (
      <>
        <CodeSegment>{`println!("{}", ...)`}</CodeSegment> is a Rust{" "}
        <strong>macro</strong> used to print text to the console. Macros are a
        special kind of function. The <CodeSegment>{`{}`}</CodeSegment> is a
        placeholder which is replaced by the value provided after the comma (
        <CodeSegment>,</CodeSegment>).
        <br />
        <br />
        Thus, this line prints the result of the function call to{" "}
        <CodeSegment>is_adventure_game(&game_elden)</CodeSegment> to determine
        if Elden Ring is an adventure game. The ampersand (
        <CodeSegment>&</CodeSegment>) before{" "}
        <CodeSegment>game_elden</CodeSegment> is used to pass a reference to the{" "}
        <CodeSegment>game_elden</CodeSegment> object rather than the object
        itself.
        <br />
        <br />
        We expect the function to return <CodeSegment>false</CodeSegment>.
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
        This is the output from line 42 (
        <CodeSegment>println!(...)</CodeSegment>). It tells us that Cyberpunk
        2077 (<CodeSegment>game_cyber</CodeSegment>) <b>is not</b> an adventure
        game.
        <br />
        <br />
        This is correct since the definition of{" "}
        <CodeSegment>game_cyber</CodeSegment> on lines 27-30 defines it as an{" "}
        <b>action</b> game.
      </>
    ),
  },
  {
    lines: [2],
    content: (
      <>
        This is the output from line 43 (
        <CodeSegment>println!(...)</CodeSegment>). It tells us that Legend of
        Zelda (<CodeSegment>game_zelda</CodeSegment>) <b>is</b> an adventure
        game.
        <br />
        <br />
        This is correct since the definition of{" "}
        <CodeSegment>game_zelda</CodeSegment> on lines 32-35 does define it as
        an <b>adventure</b> game.
      </>
    ),
  },
  {
    lines: [3],
    content: (
      <>
        This is the output from line 44 (
        <CodeSegment>println!(...)</CodeSegment>). It tells us that Elden Ring (
        <CodeSegment>game_elden</CodeSegment>) <b>is not</b> an adventure game.
        <br />
        <br />
        This is correct since the definition of{" "}
        <CodeSegment>game_elden</CodeSegment> on lines 37-40 defines it as an{" "}
        <b>rpg</b>.
      </>
    ),
  },
];
