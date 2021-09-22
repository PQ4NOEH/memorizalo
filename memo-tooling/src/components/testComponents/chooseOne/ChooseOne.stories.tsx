import ChooseOne from "./ChooseOne";
import { Test } from "../../../types";

export default {
    component: ChooseOne,
    title: 'Choose one'
};
const defaultTest: Test = {
    Type: "ChooseOne",
    Question: "Empate",
    Clues: [
        { Text: "Done", CorrectOption: false },
        { Text: "More", CorrectOption: false },
        { Text: "Tie", CorrectOption: true },
        { Text: "Match", CorrectOption: false }
    ]
}
const InvalidTest: Test = { ...defaultTest, Type: "FillTheGap" };


export const Default = () => <ChooseOne test={defaultTest} />;
export const TestRenderingError = () => <ChooseOne test={InvalidTest} />;

