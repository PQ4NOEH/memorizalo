import { useState } from "react";
import ReadingClue from "../readingClue/ReadingClue";
import { Clue, TextClue } from "../../types";

interface TestClueContainerArgs {
    Clues: Array<Clue>;
    OnSelectOption: (option: Clue) => void;
}
interface ClueItem {
    Selected: boolean;
    Id: number
}
type LocalClue = Clue & ClueItem;


export default function TestClueContainer({ Clues, OnSelectOption }: TestClueContainerArgs) {
    const [state, setState] = useState(Clues.map((c, i): LocalClue => ({ ...c, Selected: false, Id: i })));
    const onSelected = (clue: LocalClue) => {
        return () => {
            const newState = state.map(c => ({ ...c, Selected: c.Id === clue.Id }));
            setState(newState);
            OnSelectOption(clue);
        }
    }

    return (
        <div>
            {
                state.map(c => {
                    const state = !c.Selected ? "default" : (c.CorrectOption ? "success" : "fail");
                    return (
                        <div className="m-4">
                            <ReadingClue
                                Clue={c as TextClue}
                                onSelected={onSelected(c)}
                                State={state} />
                        </div>
                    )

                })
            }
        </div>
    )
}