import TestClueContainer from "./TestClueContainer";

export default {
    component: TestClueContainer,
    title: "Test clue container"
};

const clues = [
    { Text: "Done", CorrectOption: false },
    { Text: "More", CorrectOption: false },
    { Text: "Tie", CorrectOption: true },
    { Text: "Match", CorrectOption: false }
]

export const Default = () => <TestClueContainer Clues={clues} OnSelectOption={(c) => null} />