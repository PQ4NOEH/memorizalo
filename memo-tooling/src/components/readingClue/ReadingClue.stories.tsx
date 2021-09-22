import ReadingClue from "./ReadingClue";

export default {
    component: ReadingClue,
    title: 'Reading clue'
};

const noop = () => {
    console.log("clicked clue");
}
const textClue = { Text: "It is a clue" };
export const Default = () => <ReadingClue Clue={textClue} onSelected={noop} />;
export const Success = () => <ReadingClue Clue={textClue} onSelected={noop} State="success" />;
export const Fail = () => <ReadingClue Clue={textClue} onSelected={noop} State="fail" />;
