import "./ReadingClue.css";
import { TextClue } from "../../types";
import { CheckIcon, EmojiSadIcon } from '@heroicons/react/solid'

type ClueState = "default" | "success" | "fail";
interface ReadingClueArgs {
    Clue: TextClue,
    onSelected: () => void,
    State?: ClueState,
}
interface ReadingClueIconArgs {
    state: ClueState,
}

function ReadingClueIcon({ state }: ReadingClueIconArgs) {
    if (state === "success") {
        return (
            <div className="bg-green-900 float-right rounded-full h-6 w-6 items-center justify-center flex ">
                <CheckIcon className="h-5 w-5 text-white float-right" />
                <audio src="https://soundbible.com/mp3/Ta Da-SoundBible.com-1884170640.mp3" autoPlay style={{ display: "none" }} />
            </div>
        )
    } else if (state === "fail") {
        return (
            <div className="bg-red-900 float-right rounded-full h-6 w-6 items-center justify-center flex ">
                <EmojiSadIcon className="h-5 w-5 text-white float-right" />
                <audio src="https://soundbible.com/mp3/Banana%20Peel%20Slip%20Zip-SoundBible.com-803276918.mp3" autoPlay style={{ display: "none" }} />
            </div>
        )
    }
    return null;
}

export default function ReadingClue({ Clue, onSelected, State = "default" }: ReadingClueArgs) {
    const containerStyles = {
        default: "ring-4 bg-gray-700 p-1.5 rounded-lg cursor-pointer hover:ring-blue-500",
        success: "ring-4 bg-green-700 p-1.5 rounded-lg text-xl ring-green-300",
        fail: "ring-4 bg-red-700 p-1.5 rounded-lg text-xl ring-red-300",
    }

    return (
        <div className={containerStyles[State]} onClick={onSelected}>
            <label className="text-white">{Clue.Text}</label>
            <ReadingClueIcon state={State} />
        </div>
    )
}