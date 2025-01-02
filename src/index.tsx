import { cn } from "../utils/clsx";
import PickerBody from "./Components/picker-body";
import PickerHeader from "./Components/picker-header";
import PickerInput from "./Components/picker-input";
import { PickerProvider } from "./hooks/usePicker";
import "./index.css";

export type tpickerProps = {
    className?: string;
    shouldShowInput?: boolean
}

const Picker = (props: tpickerProps) => {
    const {
        shouldShowInput = true,
        className
    } = props

    return (
        <PickerProvider>
            {shouldShowInput ? <PickerInput /> : null}
            <PickerInput />
            <div className={cn(
                "fixed flex flex-col gap-0.5 w-72 h-max bg-white drop-shadow-sm p-2.5 rounded-md",
                className)}>
                <PickerHeader />
                <PickerBody />
            </div>
        </PickerProvider>
    )
}

export default Picker;
