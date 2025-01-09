import { useRef, useState } from "react";
import { cn } from "../utils/clsx";
import DirectionAwareContainer from "./Components/helpers/direction-aware-container";
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

    const pickerInputRef = useRef<HTMLDivElement | null>(null);

    {/* let PickerContent = () => (
        <div className={cn(
            "fixed flex flex-col gap-0.5 w-72 h-max bg-white drop-shadow-sm p-2.5 rounded-md",
            className)}>
            <PickerHeader />
            <PickerBody />
        </div>) */}


    return (
        <PickerProvider>
            {shouldShowInput ? <PickerInput /> : null}
        </PickerProvider>
    )
}

{/* const DirectionAwarePickerContent = () => {
    const [showPicker, setShowPicker] = useState(false);
    if (!showPicker)
        return null;
    // TODO: Make this customizable and move it into a seperate component.
    return (
        <DirectionAwareContainer
            activateWith="ref"
            activatorRef={pickerInputRef}
            onOutsideClick={() => setShowPicker(false)}
        />
    )
} */}

export default Picker;
