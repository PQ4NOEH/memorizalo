import TestClueContainer from "../../testClueContainer/TestClueContainer";
import TestComponentArgs from "../TestComponentArgs";
import TestRenderingError from "../testRenderingError/TestRenderingError"
import { Clue } from "../../../types";

export default function ChooseOne({ test }: TestComponentArgs) {
    function handleSelectedOption(clue: Clue) {
        return null;
    }
    if (test.Type === "ChooseOne") {
        return (
            <div className="border-blue-500 border-2 p-2">
                <h2 className="text-5xl font-normal leading-normal mt-0 mb-2 text-blue-800 block">Choose one</h2>
                <h3 className="text-4xl font-normal leading-normal mt-0 mb-2 text-blue-600 block">{test.Question}</h3>
                <TestClueContainer Clues={test.Clues} OnSelectOption={handleSelectedOption} />
            </div>
        )
    } else {
        return <TestRenderingError test={test} componentType="ChooseOne" />
    }

}