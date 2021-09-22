interface BaseClue {
  CorrectOption: boolean;
}
export interface TextClue extends BaseClue {
  Text: string;
}
export interface MultimediaClue extends BaseClue {
  Url: URL;
}

export type Clue = TextClue | MultimediaClue;
