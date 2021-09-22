import { Clue } from "./Clue";

export default interface Test {
  Type: "ChooseOne" | "FillTheGap" | "ChooseMany";
  Question: string;
  Clues: Array<Clue>;
}
