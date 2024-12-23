import PickerBody from "./Components/picker-body";
import PickerHeader from "./Components/picker-header";
import { PickerProvider } from "./hooks/usePicker";
import "./index.css";

export type tpickerProps = {
    className?: string;
}

const Picker = (props: tpickerProps) => {
    return (
        <PickerProvider>
            <div className={"flex flex-col gap-5 w-72 h-max bg-white drop-shadow-sm p-2.5 rounded-md"}>
                <PickerHeader />
                <PickerBody />
            </div>
        </PickerProvider>
    )
}

export default Picker;
