/* eslint-disable react/no-unescaped-entities */
import { Explanation } from "@/app/_components/Highlight";
import { CodeSegment } from "@/app/_components/HighlightExplanation";

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

export const CODE_EXPLANATIONS: Explanation[] = [];

export const OUTPUT = `false
true
false`;

export const OUTPUT_EXPLANATIONS: Explanation[] = [
  {
    line: 1,
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
    line: 2,
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
    line: 3,
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
