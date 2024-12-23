import PickerBody from "./Components/picker-body";
import PickerHeader from "./Components/picker-header";
import { PickerProvider } from "./hooks/usePicker";
import "./index.css";

export type tpickerProps = {
    className?: string;
}

/**
 * @category picker
 * The picker component is the main component of the date-np package.
 * It is a date picker that is easy to use and customize.
 * @param {tpickerProps} props - The props that are passed to the picker component.
 * @returns {React.ReactNode} - The picker component.
 */

const Picker = (props: tpickerProps) => {
    return (
        <PickerProvider>
            <div className={"flex flex-col gap-0.5 w-72 h-max bg-white drop-shadow-sm p-2.5 rounded-md"}>
                <PickerHeader />
                <PickerBody />
            </div>
        </PickerProvider>
    )
}

export default Picker;
