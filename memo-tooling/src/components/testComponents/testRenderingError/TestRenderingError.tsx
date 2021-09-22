import TestComponentArgs from "../TestComponentArgs";
import "./TestRenderingError.css";

interface TestRenderingErrorArgs extends TestComponentArgs {
    componentType: string
}

export default function TestRenderingError({ test, componentType }: TestRenderingErrorArgs) {
    return (
        <div className="border-red-500 border-2 p-2">
            <h2 className="text-5xl font-normal leading-normal mt-0 mb-2 text-pink-800">
                {`The component "${componentType}" can not render the test type ${test.Type}`}
            </h2>
            <div>
                <h3 className="text-4xl font-normal leading-normal mt-0 mb-2 text-pink-600">Details</h3>
                {JSON.stringify(test)}
            </div>
        </div>
    )
}