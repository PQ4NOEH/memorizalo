import TestRenderingError from "./TestRenderingError";
import { Test } from "../../../types";

export default {
    component: TestRenderingError,
    title: 'Test rendering error'
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

const Template = () => <TestRenderingError test={defaultTest} componentType="Any other" />;
export const Default = Template.bind({});